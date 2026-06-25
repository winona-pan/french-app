/* 主程式：工具、狀態、畫面渲染、練習題引擎 */
/* ============ 資料：打招呼與自我介紹（A1）============
   之後擴充其他主題時，只要用同樣的欄位格式新增陣列，
   並加進 THEMES 清單即可。
   match 欄位＝拼字測驗 / 填空題比對用的核心拼寫（不含括號或省略號）
*/


















/* 主題清單：先只有一個主題有完整內容，其餘先放骨架(empty)方便之後擴充 */

function norm(s){
  return (s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]/g,"");
}
function shuffle(arr){
  const a=arr.slice();
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
function pickDistractors(pool, correctId, field, n){
  const others = pool.filter(e=>e.id!==correctId);
  return shuffle(others).slice(0,n).map(e=>e[field]);
}
/* 名詞顯示時前面帶定冠詞（l' 不留空格，其餘留空格）*/
function withArt(e){
  if(!e || !e.art) return e ? e.word : "";
  return e.art.endsWith("'") ? e.art + e.word : e.art + " " + e.word;
}
function pickDistractorEntries(pool, correctId, n){
  const others = pool.filter(e=>e.id!==correctId);
  return shuffle(others).slice(0,n);
}
/* 在原句中找出對應「正規化目標字串」的原始字元範圍，回傳 [start,end) 或 null。
   逐字元正規化再比對，避免重音符號造成位移問題（à/ô/î 等）。 */
function locateSpan(original, targetNorm){
  let normalized="", map=[];
  for(let i=0;i<original.length;i++){
    const c = norm(original[i]);
    if(c.length===1){ normalized+=c; map.push(i); }
  }
  const idx = normalized.indexOf(targetNorm);
  if(idx<0) return null;
  const start = map[idx];
  const end = map[idx+targetNorm.length-1]+1;
  return [start, end];
}
function el(html){
  const t=document.createElement("template"); t.innerHTML=html.trim(); return t.content.firstElementChild;
}

/* ============ 法文發音（Web Speech API，瀏覽器內建語音）============
   零檔案、零金鑰、可離線。音質取決於使用者裝置的內建法文語音
   （iPhone／Mac 內建的 Thomas／Amélie 等最自然）。 */
const speech = {
  voices: [],
  frVoice: null,
  ready: false,
  unsupported: (typeof window==="undefined" || !("speechSynthesis" in window)),
};
function pickFrVoice(list){
  const fr = list.filter(v=>/^fr(-|_|$)/i.test(v.lang||""));
  if(fr.length===0) return null;
  const frFR = fr.filter(v=>/fr[-_]fr/i.test(v.lang));
  const pool = frFR.length ? frFR : fr;
  // 偏好較自然的法文嗓音名稱
  const pref = ["thomas","amélie","amelie","audrey","aurélie","aurelie","marie","virginie","sylvie","daniel"];
  for(const name of pref){
    const hit = pool.find(v=>(v.name||"").toLowerCase().includes(name));
    if(hit) return hit;
  }
  return pool[0];
}
function loadVoices(){
  if(speech.unsupported) return;
  speech.voices = window.speechSynthesis.getVoices() || [];
  speech.frVoice = pickFrVoice(speech.voices);
  speech.ready = speech.voices.length>0;
  if(typeof refreshVoiceNote==="function") refreshVoiceNote();
}
if(!speech.unsupported){
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}
function frVoiceMissing(){ return !speech.unsupported && speech.ready && !speech.frVoice; }
/* 朗讀法文。slow=true 放慢語速（用於單字）。btn 傳入時播放期間加上 speaking 樣式。 */
function speak(text, slow, btn){
  if(speech.unsupported || !text) return false;
  try{
    window.speechSynthesis.cancel();
    document.querySelectorAll(".speak-btn.speaking").forEach(b=>b.classList.remove("speaking"));
    const u = new SpeechSynthesisUtterance(text);
    if(speech.frVoice) u.voice = speech.frVoice;
    u.lang = speech.frVoice ? speech.frVoice.lang : "fr-FR";
    u.rate = slow ? 0.8 : 0.92;
    u.pitch = 1;
    if(btn){
      btn.classList.add("speaking");
      u.onend = u.onerror = ()=>btn.classList.remove("speaking");
    }
    window.speechSynthesis.speak(u);
    return true;
  }catch(e){ return false; }
}
/* 產生一顆發音鈕的 HTML（不支援語音的瀏覽器回傳空字串）*/
function speakBtnHtml(extraClass){
  if(speech.unsupported) return "";
  return `<button class="speak-btn ${extraClass||''}" aria-label="朗讀發音" title="朗讀發音"><svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg></button>`;
}

const LS_KNOWN="fr_known_v1", LS_STAR="fr_star_v1";
function loadSet(key){ try{return new Set(JSON.parse(localStorage.getItem(key)||"[]"));}catch(e){return new Set();} }
function saveSet(key, set){ localStorage.setItem(key, JSON.stringify([...set])); }
let known = loadSet(LS_KNOWN);
let starred = loadSet(LS_STAR);
function toggleKnown(id){ known.has(id)?known.delete(id):known.add(id); saveSet(LS_KNOWN,known); }
function toggleStar(id){ starred.has(id)?starred.delete(id):starred.add(id); saveSet(LS_STAR,starred); }
const LS_GRAM_SEEN="fr_gram_seen_v1", LS_TPL_SEEN="fr_tpl_seen_v1";
let gramSeen = loadSet(LS_GRAM_SEEN);
let tplSeen = loadSet(LS_TPL_SEEN);
function markGramSeen(id){ if(id && !gramSeen.has(id)){ gramSeen.add(id); saveSet(LS_GRAM_SEEN,gramSeen);} }
function markTplSeen(id){ if(id && !tplSeen.has(id)){ tplSeen.add(id); saveSet(LS_TPL_SEEN,tplSeen);} }

let state = {
  tab:"vocab",          // "vocab" | "grammar" | "writing"
  navMode:"theme",      // "theme" | "level"
  selectedLevel:"A1",
  currentThemeId:null,
  currentGrammarId:null,
  writingView:"patterns",   // "patterns" | "templates" | "exercises"
  currentTemplateId:null,
  currentExerciseId:null,
  speakingView:"topics",   // "topics" | "exam" | "daily" | "slang"
  currentSpeakId:null,
  currentTopicId:null,
  currentCultureId:null,
  vocabView:"cards",    // "cards" | "list"
  flashIndex:0,
  skipLearned:true,     // 字卡是否跳過已學會的字（仍可切換成複習全部）
  searchQuery:"",       // 首頁搜尋字串
  gQuery:"",            // 總覽整合搜尋字串
};

const app = document.getElementById("app");

/* ============ 頂層分頁：單字 / 文法 / 寫作 ============ */
function tabBarHtml(active){
  const tabs=[["vocab","單字"],["grammar","文法"],["writing","寫作"],["speaking","口說"],["culture","文化"],["overview","總覽"]];
  return `<nav class="main-tabs">`+tabs.map(([k,l])=>`<button data-tab="${k}" class="${active===k?'active':''}">${l}</button>`).join("")+`</nav>`;
}
function wireTabBar(){
  document.querySelectorAll(".main-tabs button").forEach(b=>{
    b.onclick=()=>{ state.tab=b.dataset.tab; routeHome(); };
  });
}
function routeHome(){
  window.scrollTo(0,0);
  if(state.tab==="grammar") renderGrammarHome();
  else if(state.tab==="writing") renderWritingHome();
  else if(state.tab==="speaking") renderSpeakingHome();
  else if(state.tab==="overview") renderOverview();
  else if(state.tab==="culture") renderCultureHome();
  else renderHome();
}
/* 表格儲存格自動判斷中／法字型（含中文字 → 中文，否則 → 法文襯線）*/
function cellClass(c){ return /[\u4e00-\u9fff]/.test(String(c)) ? "zh" : "fr-display"; }

/* ============ 文法分頁 ============ */
function renderGrammarHome(){
  state.currentGrammarId=null;
  app.innerHTML = `
    <header class="top">
      <div class="eyebrow">Carnet de Français</div>
      <h1>文法整理</h1>
      <div class="sub">依等級系統整理・A1 起逐步擴充到 B2</div>
    </header>
    ${tabBarHtml('grammar')}
    <div id="grammarArea"></div>
    <div class="footnote">文法內容持續擴充中・A2–B2 逐步加入</div>
  `;
  wireTabBar();
  const area=document.getElementById("grammarArea");
  const GR = window.GRAMMAR||[];
  if(GR.length===0){ area.appendChild(el(`<div class="search-empty zh">文法內容即將加入</div>`)); return; }
  LEVELS.forEach(lv=>{
    const group=GR.filter(g=>g.level===lv);
    if(group.length===0) return;
    area.appendChild(el(`<div class="level-group-label"><span class="lv-tag">${lv}</span><span class="lv-count">${group.length} 個文法重點</span></div>`));
    const list=el(`<div class="grammar-list"></div>`);
    group.forEach(g=>{
      const card=el(`<div class="grammar-card"><div class="g-card-title zh">${g.title}</div><div class="g-card-sum zh">${g.summary}</div></div>`);
      card.onclick=()=>{ state.currentGrammarId=g.id; renderGrammarPoint(); };
      list.appendChild(card);
    });
    area.appendChild(list);
  });
}

function renderGrammarPoint(){
  window.scrollTo(0,0);
  const g=(window.GRAMMAR||[]).find(x=>x.id===state.currentGrammarId);
  if(!g){ renderGrammarHome(); return; }
  markGramSeen(g.id);
  let body="";
  g.blocks.forEach(b=>{
    if(b.t==="h") body+=`<div class="g-h zh">${b.x}</div>`;
    else if(b.t==="prose") body+=`<div class="g-prose zh">${b.x}</div>`;
    else if(b.t==="note") body+=`<div class="g-note zh"><span class="g-note-ico">💡</span><span>${b.x}</span></div>`;
    else if(b.t==="table"){
      body+=`<div class="g-table-wrap"><table class="g-table">`;
      if(b.head) body+=`<thead><tr>`+b.head.map(h=>`<th class="zh">${h}</th>`).join("")+`</tr></thead>`;
      body+=`<tbody>`+b.rows.map(r=>`<tr>`+r.map(c=>`<td class="${cellClass(c)}">${c}</td>`).join("")+`</tr>`).join("")+`</tbody></table></div>`;
    }
    else if(b.t==="ex"){
      body+=`<div class="g-ex">`+b.items.map(([fr,zh])=>
        `<div class="g-ex-row"><div class="g-ex-fr-row"><span class="g-ex-fr fr-display">${fr}</span>${speakBtnHtml('gx-speak')}</div><div class="g-ex-zh zh">${zh}</div></div>`
      ).join("")+`</div>`;
    }
  });
  app.innerHTML = `
    <button class="back-btn" id="gBack">← 回文法列表</button>
    <div class="g-detail-head">
      <span class="g-lv">${g.level}</span>
      <h2 class="zh">${g.title}</h2>
      <div class="g-detail-sum zh">${g.summary}</div>
    </div>
    <div class="g-blocks">${body}</div>
  `;
  document.getElementById("gBack").onclick=renderGrammarHome;
  app.querySelectorAll(".speak-btn.gx-speak").forEach(btn=>{
    btn.onclick=()=>{ const fr=btn.closest(".g-ex-fr-row").querySelector(".g-ex-fr"); if(fr) speak(fr.textContent,false,btn); };
  });
}

/* ============ 寫作分頁（範本＋句型庫、引導式練習；內容下一批加入）============ */
/* ============ 寫作分頁：句型庫 / 範本 / 練習 ============ */
function regClass(reg){ return reg==="口語" ? "reg-oral" : (reg==="書面" ? "reg-written" : "reg-neutral"); }

function renderWritingHome(){
  state.currentTemplateId=null; state.currentExerciseId=null;
  const wv = state.writingView||"patterns";
  const sub=[["patterns","句型庫"],["templates","範本"],["exercises","練習"]];
  app.innerHTML = `
    <header class="top">
      <div class="eyebrow">Carnet de Français</div>
      <h1>寫作練習</h1>
      <div class="sub">句型庫・寫作範本・引導式練習（對齊 DELF）</div>
    </header>
    ${tabBarHtml('writing')}
    <nav class="sub-nav">${sub.map(([k,l])=>`<button data-wv="${k}" class="${wv===k?'active':''}">${l}</button>`).join("")}</nav>
    <div id="writingArea"></div>
    <div class="footnote">寫作內容持續擴充中</div>
  `;
  wireTabBar();
  document.querySelectorAll(".sub-nav [data-wv]").forEach(b=>b.onclick=()=>{ state.writingView=b.dataset.wv; renderWritingHome(); });
  if(wv==="patterns") renderWPatterns();
  else if(wv==="templates") renderWTemplates();
  else renderWExercises();
}

function wireSpeakIn(scope, selector){
  scope.querySelectorAll(".speak-btn."+selector).forEach(btn=>{
    btn.onclick=(ev)=>{ ev.stopPropagation(); const f=btn.closest("[data-fr]"); if(f) speak(f.getAttribute("data-fr"), false, btn); };
  });
}

function renderWPatterns(){
  const area=document.getElementById("writingArea");
  const W=(window.WRITING&&window.WRITING.patterns)||[];
  area.innerHTML = `<div class="w-intro zh">依功能分類的實用句型，每條標示語域：<span class="reg-badge reg-oral">口語</span><span class="reg-badge reg-neutral">通用</span><span class="reg-badge reg-written">書面</span>。點 🔊 可聽發音。</div>`;
  W.forEach(grp=>{
    area.appendChild(el(`<div class="w-fn-label zh">${grp.fn}</div>`));
    const list=el(`<div class="w-pattern-list"></div>`);
    grp.items.forEach(it=>{
      const row=el(`<div class="w-pattern-row" data-fr="${it.fr.replace(/"/g,'&quot;')}">
        <div class="w-pat-main">
          <div class="w-pat-fr-row"><span class="w-pat-fr fr-display">${it.fr}</span>${speakBtnHtml('wp-speak')}</div>
          <div class="w-pat-zh zh">${it.zh}</div>
        </div>
        <span class="reg-badge ${regClass(it.reg)}">${it.reg}</span>
      </div>`);
      list.appendChild(row);
    });
    area.appendChild(list);
  });
  wireSpeakIn(area, "wp-speak");
}

function tplCard(t){
  const card=el(`<div class="w-card">
    <div class="w-card-head"><span class="w-card-title zh">${t.title}</span>${t.delf?'<span class="delf-tag">DELF</span>':''}${t.level?`<span class="w-card-lv">${t.level}</span>`:''}</div>
    <div class="w-card-sum zh">${t.delfType?`<span class="w-type zh">${t.delfType}</span> `:''}${t.intro.length>42? t.intro.slice(0,42)+'…':t.intro}</div>
  </div>`);
  card.onclick=()=>{ state.currentTemplateId=t.id; renderWTemplateDetail(); };
  return card;
}
function renderWTemplates(){
  const area=document.getElementById("writingArea");
  const W=(window.WRITING&&window.WRITING.templates)||[];
  area.innerHTML="";
  const daily=W.filter(t=>t.cat==="日常");
  const exam=W.filter(t=>t.cat!=="日常");
  if(daily.length){
    area.appendChild(el(`<div class="w-group-label zh">📓 日常寫作</div>`));
    daily.forEach(t=>area.appendChild(tplCard(t)));
  }
  if(exam.length){
    area.appendChild(el(`<div class="w-group-label zh">📝 考試寫作（DELF）</div>`));
    ["A2","B1","B2"].forEach(lv=>{
      const g=exam.filter(t=>t.level===lv);
      if(!g.length) return;
      area.appendChild(el(`<div class="w-sub-label zh">${lv}</div>`));
      g.forEach(t=>area.appendChild(tplCard(t)));
    });
  }
}

function renderWTemplateDetail(){
  window.scrollTo(0,0);
  const t=(window.WRITING.templates||[]).find(x=>x.id===state.currentTemplateId);
  if(!t){ renderWritingHome(); return; }
  markTplSeen(t.id);
  const body=(t.body||[]).map(ln=>`
    <div class="w-model-line" data-fr="${(ln.fr||'').replace(/"/g,'&quot;')}">
      <div class="w-ml-fr-row"><span class="w-ml-fr fr-display">${ln.fr}</span>${speakBtnHtml('wm-speak')}</div>
      <div class="w-ml-zh zh">${ln.zh}</div>
    </div>`).join("");
  app.innerHTML = `
    <button class="back-btn" id="wBack">← 回寫作</button>
    <div class="g-detail-head">
      <div class="w-detail-tags">${t.delf?'<span class="delf-tag">DELF</span>':''}${t.level?`<span class="g-lv">${t.level}</span>`:'<span class="g-lv">日常</span>'}${t.delfType?`<span class="w-type zh">${t.delfType}</span>`:''}${t.wordcount?`<span class="w-type zh">${t.wordcount}</span>`:''}</div>
      <h2 class="zh">${t.title}</h2>
      <div class="g-detail-sum zh">${t.intro}</div>
    </div>
    ${t.note?`<div class="w-model-note zh"><span class="g-note-ico">💡</span><span>${t.note}</span></div>`:''}
    <div class="w-h zh">完整範文（點 🔊 聽發音）</div>
    <div class="w-model">${body}</div>
  `;
  document.getElementById("wBack").onclick=renderWritingHome;
  wireSpeakIn(app, "wm-speak");
}

function renderWExercises(){
  const area=document.getElementById("writingArea");
  const W=(window.WRITING&&window.WRITING.exercises)||[];
  area.innerHTML="";
  function exCard(ex){
    const card=el(`<div class="w-card">
      <div class="w-card-head"><span class="w-card-title zh">${ex.title}</span>${ex.delf?'<span class="delf-tag">DELF</span>':''}<span class="w-card-lv">${ex.level}</span></div>
      <div class="w-card-sum zh">${ex.delfType?`<span class="w-type zh">${ex.delfType}</span> `:''}${ex.prompt.length>46? ex.prompt.slice(0,46)+'…':ex.prompt}</div>
    </div>`);
    card.onclick=()=>{ state.currentExerciseId=ex.id; renderWExerciseDetail(); };
    return card;
  }
  ["A2","B1","B2"].forEach(lv=>{
    const g=W.filter(e=>e.level===lv);
    if(!g.length) return;
    area.appendChild(el(`<div class="w-sub-label zh">${lv}</div>`));
    g.forEach(ex=>area.appendChild(exCard(ex)));
  });
}

function renderWExerciseDetail(){
  window.scrollTo(0,0);
  const ex=(window.WRITING.exercises||[]).find(x=>x.id===state.currentExerciseId);
  if(!ex){ renderWritingHome(); return; }
  const steps=ex.steps.map(s=>`<div class="w-step"><div class="w-step-label zh">${s.label}</div><div class="w-step-detail zh">${s.detail}</div></div>`).join("");
  const grille=(ex.grille||[]).map(c=>`<label class="w-check"><input type="checkbox"><span class="zh">${c}</span></label>`).join("");
  const draftKey="fr_draft_"+ex.id;
  app.innerHTML = `
    <button class="back-btn" id="wBack">← 回寫作</button>
    <div class="g-detail-head">
      <div class="w-detail-tags">${ex.delf?'<span class="delf-tag">DELF</span>':''}<span class="g-lv">${ex.level}</span>${ex.delfType?`<span class="w-type zh">${ex.delfType}</span>`:''}</div>
      <h2 class="zh">${ex.title}</h2>
    </div>
    <div class="w-prompt zh"><span class="w-prompt-label">題目</span>${ex.prompt}</div>
    <div class="w-h zh">寫作步驟</div>
    <div class="w-steps">${steps}</div>
    <div class="w-h zh">我的草稿</div>
    <div class="w-draft-wrap">
      <textarea id="draft" class="w-draft fr-display" placeholder="在這裡用法文寫作……（會自動儲存在這台裝置）"></textarea>
      <div class="w-draft-bar">
        <span class="w-wc">字數 <b id="wcNum">0</b>${ex.target?` / 目標 ${ex.target}`:''}</span>
        <button class="w-copy-btn" id="copyAI">📋 複製給 AI 批改</button>
      </div>
    </div>
    <div class="w-h zh">自我批改（DELF 評分面向）</div>
    <div class="w-checklist">${grille}</div>
  `;
  document.getElementById("wBack").onclick=renderWritingHome;
  app.querySelectorAll(".w-check input").forEach(c=>{ c.onchange=()=>c.closest(".w-check").classList.toggle("done", c.checked); });
  const ta=document.getElementById("draft");
  try{ ta.value = localStorage.getItem(draftKey)||""; }catch(e){}
  const wc=document.getElementById("wcNum");
  function upd(){ const v=ta.value.trim(); wc.textContent = v? v.split(/\s+/).length : 0; }
  upd();
  ta.oninput=()=>{ upd(); try{ localStorage.setItem(draftKey, ta.value); }catch(e){} };
  document.getElementById("copyAI").onclick=()=>{
    const draft=ta.value.trim();
    const prompt=`請你擔任 DELF ${ex.level} 法文寫作老師，依 DELF production écrite 評分標準批改我的作文。\n\n【題目】\n${ex.prompt}\n\n【我的作文】\n${draft||"（請在此貼上你的作文）"}\n\n請依下列項目批改：\n1. 逐句指出文法、拼字、用詞錯誤，並給出正確寫法。\n2. 評估是否切題、結構是否清楚、連接詞與語域是否恰當。\n3. 給總評與三個具體改進建議。\n4. 用 25 分制給分。\n請用繁體中文說明，例句保留法文。`;
    const btn=document.getElementById("copyAI");
    const ok=()=>{ btn.textContent="✓ 已複製，貼給 AI 即可"; setTimeout(()=>btn.textContent="📋 複製給 AI 批改",2500); };
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(prompt).then(ok, ()=>wFallbackCopy(prompt,btn,ok));
    } else wFallbackCopy(prompt,btn,ok);
  };
}
function wFallbackCopy(text, btn, ok){
  const t=document.createElement("textarea"); t.value=text; t.style.position="fixed"; t.style.opacity="0";
  document.body.appendChild(t); t.focus(); t.select();
  try{ document.execCommand("copy"); ok(); }catch(e){ btn.textContent="複製失敗，請長按選取"; }
  document.body.removeChild(t);
}

/* ============ 口說分頁：考試口說 / 生活用語 / 道地口語 ============ */
function spPhraseRow(it, speakCls, badge){
  const fr=(it.fr||"").replace(/"/g,'&quot;');
  return `<div class="sp-row" data-fr="${fr}">
    <div class="sp-main">
      <div class="sp-fr-row"><span class="sp-fr fr-display">${it.fr}</span>${speakBtnHtml(speakCls)}<button class="sh-toggle" title="跟讀錄音練習">🎤</button></div>
      <div class="sp-zh zh">${it.zh}</div>
      ${it.note?`<div class="sp-note zh">▸ ${it.note}</div>`:''}
    </div>
    ${badge||''}
  </div>`;
}

/* 跟讀錄音對照：慢速範例＋錄音＋播放＋對照；不支援錄音時僅保留慢速 */
function buildShadowPanel(frText){
  const panel=el(`<div class="shadow-panel"></div>`);
  const slowBtn=el(`<button class="sh-btn">🐢 慢速範例</button>`);
  slowBtn.onclick=()=>speak(frText, true, slowBtn);
  panel.appendChild(slowBtn);

  const supported = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  if(!supported){
    panel.appendChild(el(`<span class="sh-note zh">此開啟方式不支援錄音（請用 https 網址開啟，例如 GitHub Pages，即可啟用跟讀錄音）。</span>`));
    return panel;
  }

  let rec=null, chunks=[], url=null, stream=null;
  const recBtn=el(`<button class="sh-btn sh-rec">● 錄音</button>`);
  const myBtn=el(`<button class="sh-btn" disabled>▶ 我的錄音</button>`);
  const cmpBtn=el(`<button class="sh-btn" disabled>🔁 對照</button>`);
  const status=el(`<span class="sh-status zh"></span>`);

  recBtn.onclick=async()=>{
    if(rec && rec.state==="recording"){ rec.stop(); return; }
    try{ stream=await navigator.mediaDevices.getUserMedia({audio:true}); }
    catch(e){ status.textContent="無法使用麥克風（權限被拒）"; return; }
    chunks=[];
    try{ rec=new MediaRecorder(stream); }catch(e){ status.textContent="此瀏覽器不支援錄音"; return; }
    rec.ondataavailable=(ev)=>{ if(ev.data && ev.data.size) chunks.push(ev.data); };
    rec.onstop=()=>{
      if(url) URL.revokeObjectURL(url);
      const blob=new Blob(chunks, {type: (chunks[0]&&chunks[0].type)||"audio/webm"});
      url=URL.createObjectURL(blob);
      myBtn.disabled=false; cmpBtn.disabled=false;
      recBtn.textContent="● 重錄"; recBtn.classList.remove("recording");
      status.textContent="錄好了！可播放或與範例對照";
      if(stream){ stream.getTracks().forEach(t=>t.stop()); stream=null; }
    };
    rec.start();
    recBtn.textContent="■ 停止"; recBtn.classList.add("recording");
    status.textContent="錄音中…再按一次停止";
  };

  myBtn.onclick=()=>{ if(url){ const a=new Audio(url); a.play(); } };

  cmpBtn.onclick=()=>{
    if(!url) return;
    status.textContent="▶ 播放範例…";
    try{
      const u=new SpeechSynthesisUtterance(frText);
      u.lang="fr-FR";
      const vs=(window.speechSynthesis.getVoices()||[]);
      const fv=vs.find(v=>/fr[-_]?FR/i.test(v.lang))||vs.find(v=>/^fr/i.test(v.lang));
      if(fv) u.voice=fv;
      u.onend=()=>{ status.textContent="▶ 換你…"; const a=new Audio(url); a.onended=()=>status.textContent="對照完成 ✓"; a.play(); };
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }catch(e){ const a=new Audio(url); a.play(); }
  };

  panel.appendChild(recBtn); panel.appendChild(myBtn); panel.appendChild(cmpBtn); panel.appendChild(status);
  return panel;
}

function wireShadow(scope){
  scope.querySelectorAll(".sh-toggle").forEach(btn=>{
    btn.onclick=()=>{
      const row=btn.closest("[data-fr]");
      if(!row) return;
      const existing=row.querySelector(".shadow-panel");
      if(existing){ existing.remove(); btn.classList.remove("active"); return; }
      const panel=buildShadowPanel(row.getAttribute("data-fr"));
      (row.querySelector(".sp-main")||row).appendChild(panel);
      btn.classList.add("active");
    };
  });
}

function renderSpeakingHome(){
  state.currentSpeakId=null;
  const sv=state.speakingView||"topics";
  const sub=[["topics","主題練習"],["exam","考試口說"],["daily","生活用語"],["slang","道地口語"]];
  app.innerHTML = `
    <header class="top">
      <div class="eyebrow">Carnet de Français</div>
      <h1>口說練習</h1>
      <div class="sub">主題式問答・DELF 題型・生活用語・道地口語</div>
    </header>
    ${tabBarHtml('speaking')}
    <nav class="sub-nav">${sub.map(([k,l])=>`<button data-sv="${k}" class="${sv===k?'active':''}">${l}</button>`).join("")}</nav>
    <div class="w-intro zh" style="margin-bottom:12px;">每句旁 🔊 聽發音、<b>🎤 開啟跟讀錄音</b>：慢速範例 → 錄下自己的聲音 → 與範例對照播放。</div>
    <div id="speakArea"></div>
    <div class="footnote">跟讀錄音需用 https 網址開啟（如 GitHub Pages）並允許麥克風</div>
  `;
  wireTabBar();
  document.querySelectorAll(".sub-nav [data-sv]").forEach(b=>b.onclick=()=>{ state.speakingView=b.dataset.sv; renderSpeakingHome(); });
  if(sv==="topics") renderSTopics();
  else if(sv==="exam") renderSExam();
  else if(sv==="daily") renderSDaily();
  else renderSSlang();
}

/* 主題練習：扁平卡片（不分等級），每主題多題問答＋範例回答 */
function renderSTopics(){
  const area=document.getElementById("speakArea");
  const TP=window.SPEAKING_TOPICS||[];
  if(!TP.length){ area.innerHTML=`<div class="search-empty zh">主題練習即將加入</div>`; return; }
  area.innerHTML=`<div class="w-intro zh">依主題練口說，對應單字主題。先看問題試著自己回答，再聽範例、用 🎤 跟讀對照。共 ${TP.length} 個主題。</div>`;
  const grid=el(`<div class="st-grid"></div>`);
  TP.forEach(tp=>{
    const card=el(`<div class="st-card">
      <div class="st-card-head"><span class="st-card-title zh">${tp.title}</span><span class="st-lv st-lv-${tp.level}">${tp.level}</span></div>
      <div class="st-card-meta zh">${tp.theme} ・ ${tp.items.length} 題</div>
    </div>`);
    card.onclick=()=>{ state.currentTopicId=tp.id; renderSTopicDetail(); };
    grid.appendChild(card);
  });
  area.appendChild(grid);
}

function renderSTopicDetail(){
  window.scrollTo(0,0);
  const tp=(window.SPEAKING_TOPICS||[]).find(x=>x.id===state.currentTopicId);
  if(!tp){ state.speakingView="topics"; renderSpeakingHome(); return; }
  const items=tp.items.map((it,i)=>{
    const aFr=(it.a||'').replace(/"/g,'&quot;');
    return `<div class="st-item">
      <div class="st-q" data-fr="${(it.q||'').replace(/"/g,'&quot;')}">
        <span class="st-qn">Q${i+1}</span>
        <div class="st-q-main">
          <div class="st-q-fr-row"><span class="st-q-fr fr-display">${it.q}</span>${speakBtnHtml('st-q-speak')}</div>
          <div class="st-q-zh zh">${it.qzh}</div>
        </div>
      </div>
      <div class="st-a" data-fr="${aFr}">
        <div class="st-a-label zh">範例回答</div>
        <div class="st-a-fr-row"><span class="st-a-fr fr-display">${it.a}</span>${speakBtnHtml('st-a-speak')}<button class="sh-toggle" title="跟讀錄音練習">🎤</button></div>
        <div class="st-a-zh zh">${it.azh}</div>
        ${it.note?`<div class="sp-note zh">▸ ${it.note}</div>`:''}
      </div>
    </div>`;
  }).join("");
  app.innerHTML=`
    <button class="back-btn" id="sBack">← 回主題</button>
    <div class="g-detail-head">
      <div class="w-detail-tags"><span class="g-lv">${tp.level}</span><span class="w-type zh">主題：${tp.theme}</span></div>
      <h2 class="zh">${tp.title}</h2>
      <div class="g-detail-sum zh">${tp.intro}</div>
    </div>
    <div class="st-items">${items}</div>
  `;
  document.getElementById("sBack").onclick=()=>{ state.speakingView="topics"; renderSpeakingHome(); };
  wireSpeakIn(app,"st-q-speak"); wireSpeakIn(app,"st-a-speak"); wireShadow(app);
}

function renderSExam(){
  const area=document.getElementById("speakArea");
  const W=(window.SPEAKING&&window.SPEAKING.exam)||[];
  area.innerHTML="";
  W.forEach(e=>{
    const card=el(`<div class="w-card">
      <div class="w-card-head"><span class="w-card-title zh">${e.title||e.delfType}</span><span class="delf-tag">DELF</span><span class="w-card-lv">${e.level}</span></div>
      <div class="w-card-sum zh"><span class="w-type zh">${e.delfType}</span> ${e.intro.length>40? e.intro.slice(0,40)+'…':e.intro}</div>
    </div>`);
    card.onclick=()=>{ state.currentSpeakId=e.id; renderSExamDetail(); };
    area.appendChild(card);
  });
}

function renderSExamDetail(){
  window.scrollTo(0,0);
  const e=(window.SPEAKING.exam||[]).find(x=>x.id===state.currentSpeakId);
  if(!e){ renderSpeakingHome(); return; }
  const tips=(e.tips||[]).map(t=>`<li class="zh">${t}</li>`).join("");
  const phr=(e.phrases||[]).map(it=>spPhraseRow(it,"sx-speak","")).join("");
  app.innerHTML = `
    <button class="back-btn" id="sBack">← 回口說</button>
    <div class="g-detail-head">
      <div class="w-detail-tags"><span class="delf-tag">DELF</span><span class="g-lv">${e.level}</span><span class="w-type zh">${e.delfType}</span></div>
      <h2 class="zh">口說題型說明</h2>
      <div class="g-detail-sum zh">${e.intro}</div>
    </div>
    <div class="w-h zh">應考技巧</div>
    <ul class="sp-tips">${tips}</ul>
    <div class="w-h zh">實用句型</div>
    <div class="sp-list">${phr}</div>
  `;
  document.getElementById("sBack").onclick=renderSpeakingHome;
  wireSpeakIn(app, "sx-speak"); wireShadow(app);
}

function renderSDaily(){
  const area=document.getElementById("speakArea");
  const W=(window.SPEAKING&&window.SPEAKING.daily)||[];
  area.innerHTML = `<div class="w-intro zh">在當地真正會用到的口語短句，依情境分類。點 🔊 跟著唸，練到脫口而出。</div>`;
  W.forEach(grp=>{
    area.appendChild(el(`<div class="w-fn-label zh">${grp.situation}</div>`));
    const list=el(`<div class="sp-list"></div>`);
    grp.items.forEach(it=> list.appendChild(el(spPhraseRow(it,"sd-speak",""))));
    area.appendChild(list);
  });
  wireSpeakIn(area, "sd-speak"); wireShadow(area);
}

function renderSSlang(){
  const area=document.getElementById("speakArea");
  const W=(window.SPEAKING&&window.SPEAKING.slang)||[];
  area.innerHTML = `<div class="w-intro zh">這些都是當代法國人「現在還在用」的口語與俚語，全屬非正式（<span class="reg-badge reg-oral">口語</span>）。熟人、輕鬆場合用很道地，但正式場合、考試寫作請避免；每條附使用提醒。</div>`;
  W.forEach(grp=>{
    area.appendChild(el(`<div class="w-fn-label zh">${grp.category}</div>`));
    const list=el(`<div class="sp-list"></div>`);
    grp.items.forEach(it=> list.appendChild(el(spPhraseRow(it,"sl-speak",'<span class="reg-badge reg-oral">口語</span>'))));
    area.appendChild(list);
  });
  wireSpeakIn(area, "sl-speak"); wireShadow(area);
}

/* ============ 總覽分頁：整合搜尋 ＋ 學習進度 ============ */
/* ============ 文化分頁 ============ */
function renderFetes(){
  window.scrollTo(0,0);
  const F=window.FETES||[];
  const rows=F.map(f=>`
    <div class="fete-row" data-fr="${(f.fr||'').replace(/"/g,'&quot;')}">
      <div class="fete-date zh">${f.date}</div>
      <div class="fete-main">
        <div class="fete-fr-row"><span class="fete-fr fr-display">${f.fr}</span>${speakBtnHtml('fete-speak')}<span class="fete-zh zh">${f.zh}</span></div>
        <div class="fete-note zh">${f.note}</div>
        ${f.greet?`<div class="fete-greet" data-fr="${(f.greet||'').replace(/"/g,'&quot;')}"><span class="fete-greet-tag zh">🗣️ 這天會說</span><span class="fete-greet-fr fr-display">${f.greet}</span>${speakBtnHtml('fete-greet-speak')}<span class="fete-greet-zh zh">${f.greetzh||''}</span></div>`:''}
        <div class="fete-tw zh"><span class="fete-tw-tag">🇹🇼 台灣對照</span>${f.tw}</div>
      </div>
    </div>`).join("");
  app.innerHTML = `
    <button class="back-btn" id="feteBack">← 回文化主題</button>
    <div class="g-detail-head">
      <div class="w-detail-tags"><span class="w-type zh">📅 文化</span></div>
      <h2 class="zh">節慶日曆</h2>
      <div class="g-detail-sum zh">法國一年的重要節日，依日期排序，並對照台灣。日期部分節日每年浮動（如復活節、母親節）。點 🔊 可聽法語節日名稱。</div>
    </div>
    <div class="fete-list">${rows}</div>
  `;
  document.getElementById("feteBack").onclick=()=>renderCultureHome();
  wireSpeakIn(app,"fete-speak");
  wireSpeakIn(app,"fete-greet-speak");
}

function renderCultureHome(){
  state.currentCultureId=null;
  const C=window.CULTURE||[];
  app.innerHTML = `
    <header class="top">
      <div class="eyebrow">Carnet de Français</div>
      <h1>法國文化筆記</h1>
      <div class="sub">在法國要注意的點・與台灣／亞洲不同之處</div>
    </header>
    ${tabBarHtml('culture')}
    <div class="w-intro zh">給亞洲學習者的文化提醒：禮儀、餐桌、社交、生活節奏、校園職場與禁忌。每個主題裡，<b>🌏 與亞洲不同</b> 那一行特別點出落差。法語例句可點 🔊 聽發音。</div>
    <div class="cu-list"></div>
  `;
  wireTabBar();
  const list=app.querySelector(".cu-list");
  if((window.FETES||[]).length){
    const fcard=el(`<div class="cu-cat-card cu-fete-entry">
      <div class="cu-cat-head"><span class="cu-cat-ico">📅</span><span class="cu-cat-title zh">節慶日曆</span></div>
      <div class="cu-cat-meta zh">法國重要節日 vs 台灣 ・ ${window.FETES.length} 個節日</div>
    </div>`);
    fcard.onclick=()=>renderFetes();
    list.appendChild(fcard);
  }
  if(!C.length){ if(!(window.FETES||[]).length) list.innerHTML=`<div class="search-empty zh">文化內容即將加入</div>`; return; }
  C.forEach(cat=>{
    const card=el(`<div class="cu-cat-card">
      <div class="cu-cat-head"><span class="cu-cat-ico">${cat.icon||"🇫🇷"}</span><span class="cu-cat-title zh">${cat.title}</span></div>
      <div class="cu-cat-meta zh">${cat.intro||""} ・ ${cat.items.length} 則</div>
    </div>`);
    card.onclick=()=>{ state.currentCultureId=cat.id; renderCultureCat(); };
    list.appendChild(card);
  });
}

function renderCultureCat(){
  window.scrollTo(0,0);
  const cat=(window.CULTURE||[]).find(c=>c.id===state.currentCultureId);
  if(!cat){ renderCultureHome(); return; }
  const items=cat.items.map(it=>{
    const frBlock = it.fr ? `<div class="cu-fr-row" data-fr="${(it.fr||'').replace(/"/g,'&quot;')}"><span class="cu-fr fr-display">${it.fr}</span>${speakBtnHtml('cu-speak')}${it.frzh?`<span class="cu-frzh zh">${it.frzh}</span>`:''}</div>` : "";
    return `<div class="cu-item">
      ${frBlock}
      <div class="cu-head zh">${it.zh}</div>
      <div class="cu-note zh">${it.note}</div>
      ${it.asia?`<div class="cu-asia zh"><span class="cu-asia-tag">🌏 與亞洲不同</span>${it.asia}</div>`:''}
    </div>`;
  }).join("");
  app.innerHTML = `
    <button class="back-btn" id="cuBack">← 回文化主題</button>
    <div class="g-detail-head">
      <div class="w-detail-tags"><span class="w-type zh">${cat.icon||"🇫🇷"} 文化</span></div>
      <h2 class="zh">${cat.title}</h2>
      ${cat.intro?`<div class="g-detail-sum zh">${cat.intro}</div>`:''}
    </div>
    <div class="cu-items">${items}</div>
  `;
  document.getElementById("cuBack").onclick=()=>{ renderCultureHome(); };
  wireSpeakIn(app,"cu-speak");
}

/* ============ 跨裝置同步：GitHub Gist + 手動匯出入 ============ */
const GH_API="https://api.github.com", SYNC_FILE="carnet-progress.json";
const LS_TOKEN="fr_gh_token", LS_GIST="fr_gh_gist";

function collectProgress(){
  const drafts={};
  try{ for(let i=0;i<localStorage.length;i++){ const k=localStorage.key(i); if(k && k.indexOf("fr_draft_")===0){ const v=localStorage.getItem(k); if(v && v.trim()) drafts[k]=v; } } }catch(e){}
  return { app:"carnet-de-francais", v:1, ts:Date.now(),
    known:[...loadSet(LS_KNOWN)], starred:[...loadSet(LS_STAR)],
    gramSeen:[...loadSet(LS_GRAM_SEEN)], tplSeen:[...loadSet(LS_TPL_SEEN)], drafts };
}
function applyProgress(obj){
  if(!obj || obj.v!==1) throw new Error("格式不符");
  const mergeSet=(key,arr)=>{ const s=loadSet(key); (arr||[]).forEach(x=>s.add(x)); saveSet(key,s); };
  mergeSet(LS_KNOWN,obj.known); mergeSet(LS_STAR,obj.starred);
  mergeSet(LS_GRAM_SEEN,obj.gramSeen); mergeSet(LS_TPL_SEEN,obj.tplSeen);
  if(obj.drafts){ Object.keys(obj.drafts).forEach(k=>{ if(k.indexOf("fr_draft_")===0){ const cur=localStorage.getItem(k); const inc=obj.drafts[k]; if(!cur || !cur.trim() || (inc && inc.length>cur.length)) localStorage.setItem(k,inc); } }); }
  known=loadSet(LS_KNOWN); starred=loadSet(LS_STAR); gramSeen=loadSet(LS_GRAM_SEEN); tplSeen=loadSet(LS_TPL_SEEN);
}
async function ghFetch(path, opts){
  const token=localStorage.getItem(LS_TOKEN);
  if(!token) throw new Error("尚未連結 GitHub");
  const r=await fetch(GH_API+path, Object.assign({}, opts||{}, {headers:{
    "Authorization":"Bearer "+token, "Accept":"application/vnd.github+json", "X-GitHub-Api-Version":"2022-11-28"
  }}));
  if(!r.ok){ let m=String(r.status); if(r.status===401) m="權杖無效或已過期(401)"; else if(r.status===403) m="權限不足或被限制(403)"; else { try{const j=await r.json(); if(j.message) m+=" "+j.message;}catch(e){} } throw new Error(m); }
  return r.json();
}
async function ghFindOrCreate(){
  let id=localStorage.getItem(LS_GIST);
  if(id) return id;
  const list=await ghFetch("/gists?per_page=100",{method:"GET"});
  const found=Array.isArray(list)&&list.find(g=>g.files && g.files[SYNC_FILE]);
  if(found){ localStorage.setItem(LS_GIST,found.id); return found.id; }
  const body={ description:"Carnet de Français — 學習進度（請勿刪除）", public:false, files:{ [SYNC_FILE]:{ content: JSON.stringify(collectProgress(),null,2) } } };
  const g=await ghFetch("/gists",{method:"POST", body:JSON.stringify(body)});
  localStorage.setItem(LS_GIST,g.id); return g.id;
}
async function ghUpload(){
  const id=await ghFindOrCreate();
  await ghFetch("/gists/"+id,{method:"PATCH", body:JSON.stringify({ files:{ [SYNC_FILE]:{ content: JSON.stringify(collectProgress(),null,2) } } })});
}
async function ghDownload(){
  const id=await ghFindOrCreate();
  const g=await ghFetch("/gists/"+id,{method:"GET"});
  const f=g.files && g.files[SYNC_FILE];
  if(!f) throw new Error("雲端找不到進度檔");
  let content=f.content;
  if(f.truncated && f.raw_url){ content=await (await fetch(f.raw_url)).text(); }
  applyProgress(JSON.parse(content));
}

function renderSync(){
  const wrap=document.getElementById("ovSync");
  if(!wrap) return;
  const linked=!!localStorage.getItem(LS_TOKEN);
  wrap.innerHTML = `
    <div class="ov-h zh">跨裝置同步</div>
    <div class="sync-box">
      ${linked ? `
        <div class="sync-status zh">✅ 已連結 GitHub。在另一台裝置貼上同一組權杖，就能載入進度。</div>
        <div class="sync-btns">
          <button id="syncUp" class="sync-btn zh">⬆️ 上傳到雲端</button>
          <button id="syncDown" class="sync-btn zh">⬇️ 從雲端載入</button>
        </div>
        <button id="syncUnlink" class="sync-unlink zh">中斷連結（清除此裝置權杖）</button>
      ` : `
        <div class="sync-status zh">用一組 GitHub 個人存取權杖，把進度存到你帳號下的<b>私密 Gist</b>，即可跨裝置同步。</div>
        <input id="syncToken" type="password" class="sync-input" placeholder="貼上 GitHub Token（需 gist 權限）" autocomplete="off">
        <button id="syncLink" class="sync-btn zh">連結 GitHub</button>
        <div class="sync-help zh">取得方式：GitHub → Settings → Developer settings → Personal access tokens，產生一組勾選 <b>gist</b> 權限的權杖。權杖只存在<b>這台裝置的瀏覽器</b>，請勿寫進程式或公開。</div>
      `}
      <div id="syncMsg" class="sync-msg zh"></div>
      <div class="sync-sep"></div>
      <div class="sync-status zh">或不用帳號，手動搬移進度：</div>
      <div class="sync-btns">
        <button id="expBtn" class="sync-btn2 zh">📋 複製我的進度</button>
        <button id="impBtn" class="sync-btn2 zh">📥 貼上還原</button>
      </div>
      <textarea id="impArea" class="sync-ta" placeholder="把另一台裝置複製的進度碼貼在這裡，再按『貼上還原』" style="display:none;"></textarea>
    </div>`;
  const msg=(t,ok)=>{ const m=document.getElementById("syncMsg"); if(m){ m.textContent=t; m.className="sync-msg zh"+(ok===true?" ok":ok===false?" err":""); } };
  const linkBtn=document.getElementById("syncLink");
  if(linkBtn) linkBtn.onclick=async()=>{
    const t=(document.getElementById("syncToken").value||"").trim();
    if(!t){ msg("請先貼上權杖",false); return; }
    localStorage.setItem(LS_TOKEN,t); localStorage.removeItem(LS_GIST); msg("連結中…");
    try{ await ghUpload(); renderSync(); setTimeout(()=>msg("✅ 已連結並上傳目前進度",true),0); }
    catch(e){ localStorage.removeItem(LS_TOKEN); msg("連結失敗："+e.message,false); }
  };
  const up=document.getElementById("syncUp");
  if(up) up.onclick=async()=>{ msg("上傳中…"); try{ await ghUpload(); msg("✅ 已上傳到雲端",true);}catch(e){ msg("上傳失敗："+e.message,false);} };
  const down=document.getElementById("syncDown");
  if(down) down.onclick=async()=>{ msg("下載中…"); try{ await ghDownload(); renderProgress(); msg("✅ 已從雲端載入並與本機合併",true);}catch(e){ msg("下載失敗："+e.message,false);} };
  const unlink=document.getElementById("syncUnlink");
  if(unlink) unlink.onclick=()=>{ localStorage.removeItem(LS_TOKEN); localStorage.removeItem(LS_GIST); renderSync(); };
  const exp=document.getElementById("expBtn");
  if(exp) exp.onclick=async()=>{ const code=JSON.stringify(collectProgress()); try{ await navigator.clipboard.writeText(code); msg("✅ 進度碼已複製，貼到另一台裝置即可",true);}catch(e){ const ta=document.getElementById("impArea"); ta.style.display="block"; ta.value=code; ta.select(); msg("已顯示進度碼，請手動複製",true);} };
  const imp=document.getElementById("impBtn");
  if(imp) imp.onclick=()=>{ const ta=document.getElementById("impArea"); if(ta.style.display==="none"){ ta.style.display="block"; msg("把進度碼貼到下方，再按一次『貼上還原』"); return;} try{ applyProgress(JSON.parse(ta.value.trim())); renderProgress(); msg("✅ 已還原並與本機合併",true);}catch(e){ msg("還原失敗：格式不正確",false);} };
}

function renderOverview(){
  state.currentSpeakId=null;
  app.innerHTML = `
    <header class="top">
      <div class="eyebrow">Carnet de Français</div>
      <h1>學習總覽</h1>
      <div class="sub">整合搜尋・跨模組學習進度</div>
    </header>
    ${tabBarHtml('overview')}
    <div class="search-wrap">
      <input id="gSearch" type="search" autocomplete="off" placeholder="搜尋全部：單字・文法・對話・範文・口說（中／法）" value="${(state.gQuery||'').replace(/"/g,'&quot;')}">
      <span class="search-icon">🔍</span>
    </div>
    <div id="gResults"></div>
    <div id="ovProgress"></div>
    <div id="ovSync"></div>
  `;
  wireTabBar();
  const inp=document.getElementById("gSearch");
  inp.oninput=(ev)=>{ state.gQuery=ev.target.value; renderGlobalResults(); };
  renderGlobalResults();
  renderProgress();
  renderSync();
}

function globalSearch(q){
  const nq=norm(q), rawq=(q||"").trim();
  const out={vocab:[],grammar:[],dialogue:[],writing:[],speaking:[]};
  if(!nq && !rawq) return out;
  const mFr=(s)=> !!(nq && norm(s||'').includes(nq));
  const mZh=(s)=> !!(rawq && s && s.indexOf(rawq)>=0);
  // 單字
  outer: for(const t of THEMES){ for(const e of t.data){
    if(mFr(e.word)||mFr(e.example_fr)||mZh(e.zh)||mZh(e.example_zh)){ out.vocab.push({e,theme:t}); if(out.vocab.length>=40) break outer; }
  }}
  // 文法
  (window.GRAMMAR||[]).forEach(g=>{
    let hit = mFr(g.title)||mZh(g.title)||mZh(g.summary)||mFr(g.summary);
    if(!hit && Array.isArray(g.blocks)){
      for(const b of g.blocks){ if(b.t==="ex" && Array.isArray(b.items)){ for(const it of b.items){ if(mFr(it[0])||mZh(it[1])){hit=true;break;} } } if(hit)break; }
    }
    if(hit) out.grammar.push(g);
  });
  // 對話（每主題最多列一筆）
  Object.keys(window.DIALOGUES||{}).forEach(tid=>{
    const sets=window.DIALOGUES[tid]||[];
    for(const s of sets){ let hit=false; for(const ln of s.lines){ if(mFr(ln.fr)||mZh(ln.zh)){hit=true;break;} } if(hit){ out.dialogue.push({themeId:tid,title:s.title}); break; } }
  });
  // 範文
  ((window.WRITING&&window.WRITING.templates)||[]).forEach(t=>{
    let hit=mFr(t.title)||mZh(t.title)||mZh(t.intro);
    if(!hit && Array.isArray(t.body)){ for(const ln of t.body){ if(mFr(ln.fr)||mZh(ln.zh)){hit=true;break;} } }
    if(hit) out.writing.push(t);
  });
  // 口說
  const S=window.SPEAKING;
  if(S){
    S.exam.forEach(e=>e.phrases.forEach(p=>{ if(mFr(p.fr)||mZh(p.zh)) out.speaking.push({kind:"exam",view:"exam",fr:p.fr,zh:p.zh,label:e.level}); }));
    S.daily.forEach(g=>g.items.forEach(p=>{ if(mFr(p.fr)||mZh(p.zh)) out.speaking.push({kind:"daily",view:"daily",fr:p.fr,zh:p.zh,label:g.situation}); }));
    S.slang.forEach(g=>g.items.forEach(p=>{ if(mFr(p.fr)||mZh(p.zh)) out.speaking.push({kind:"slang",view:"slang",fr:p.fr,zh:p.zh,label:g.category}); }));
  }
  return out;
}

function gCatSection(box,label,cls,items,build){
  if(!items.length) return;
  const shown=items.slice(0,15);
  const sec=el(`<div class="gr-cat"><div class="gr-cat-label ${cls} zh">${label}<span class="gr-cat-n">${items.length}</span></div></div>`);
  shown.forEach(it=> sec.appendChild(build(it)));
  if(items.length>shown.length) sec.appendChild(el(`<div class="gr-more zh">…還有 ${items.length-shown.length} 筆</div>`));
  box.appendChild(sec);
}

function renderGlobalResults(){
  const box=document.getElementById("gResults");
  const prog=document.getElementById("ovProgress");
  if(!box) return;
  const q=state.gQuery||"";
  if(!q.trim()){ box.innerHTML=""; if(prog) prog.style.display=""; const sy=document.getElementById("ovSync"); if(sy) sy.style.display=""; return; }
  if(prog) prog.style.display="none";
  { const sy=document.getElementById("ovSync"); if(sy) sy.style.display="none"; }
  const r=globalSearch(q);
  const total=r.vocab.length+r.grammar.length+r.dialogue.length+r.writing.length+r.speaking.length;
  box.innerHTML="";
  if(total===0){ box.appendChild(el(`<div class="search-empty zh">找不到符合「${q.replace(/</g,'&lt;')}」的內容</div>`)); return; }
  box.appendChild(el(`<div class="search-count zh">共 ${total} 筆結果</div>`));

  gCatSection(box,"單字","ov-c-vocab", r.vocab, (it)=>{
    const row=el(`<div class="gr-row"><div class="gr-line"><span class="gr-fr fr-display">${withArt(it.e)}</span>${speakBtnHtml('gr-speak')}<span class="gr-zh zh">${it.e.zh}</span>${known.has(it.e.id)?'<span class="gr-known">✓</span>':''}</div><div class="gr-meta zh">${it.theme.level}・${it.theme.name}</div></div>`);
    const sb=row.querySelector(".speak-btn.gr-speak"); if(sb) sb.onclick=(ev)=>{ev.stopPropagation(); speak(withArt(it.e),true,sb);};
    row.onclick=()=>{ state.tab="vocab"; state.currentThemeId=it.theme.id; state.flashIndex=0; state.skipLearned=false; renderTheme(); };
    return row;
  });
  gCatSection(box,"文法","ov-c-gram", r.grammar, (g)=>{
    const row=el(`<div class="gr-row"><div class="gr-line"><span class="gr-fr zh">${g.title}</span><span class="gr-badge">${g.level}</span></div><div class="gr-meta zh">${g.summary||''}</div></div>`);
    row.onclick=()=>{ state.tab="grammar"; state.currentGrammarId=g.id; renderGrammarPoint(); };
    return row;
  });
  gCatSection(box,"對話","ov-c-dia", r.dialogue, (d)=>{
    const theme=THEMES.find(t=>t.id===d.themeId);
    const row=el(`<div class="gr-row"><div class="gr-line"><span class="gr-fr zh">💬 ${d.title}</span></div><div class="gr-meta zh">${theme?theme.level+'・'+theme.name:''}</div></div>`);
    row.onclick=()=>{ state.tab="vocab"; state.currentThemeId=d.themeId; state.flashIndex=0; state.skipLearned=false; renderTheme(); };
    return row;
  });
  gCatSection(box,"範文","ov-c-writ", r.writing, (t)=>{
    const row=el(`<div class="gr-row"><div class="gr-line"><span class="gr-fr zh">${t.title}</span><span class="gr-badge">${t.level||'日常'}</span></div><div class="gr-meta zh">${t.delfType||t.cat||''}</div></div>`);
    row.onclick=()=>{ state.tab="writing"; state.writingView="templates"; state.currentTemplateId=t.id; renderWTemplateDetail(); };
    return row;
  });
  gCatSection(box,"口說","ov-c-speak", r.speaking, (p)=>{
    const kindName={exam:"考試口說",daily:"生活用語",slang:"道地口語"}[p.kind]||"";
    const row=el(`<div class="gr-row"><div class="gr-line"><span class="gr-fr fr-display">${p.fr}</span>${speakBtnHtml('gr-speak')}<span class="gr-zh zh">${p.zh}</span></div><div class="gr-meta zh">${kindName}・${p.label}</div></div>`);
    const sb=row.querySelector(".speak-btn.gr-speak"); if(sb) sb.onclick=(ev)=>{ev.stopPropagation(); speak(p.fr,true,sb);};
    row.onclick=()=>{ state.tab="speaking"; state.speakingView=p.view; renderSpeakingHome(); };
    return row;
  });
}

function ovBar(label, done, total, sub){
  const pct = total? Math.round(done/total*100):0;
  return `<div class="ov-prog">
    <div class="ov-prog-top"><span class="ov-prog-label zh">${label}</span><span class="ov-prog-num">${done} / ${total}</span></div>
    <div class="ov-bar"><div class="ov-bar-fill" style="width:${pct}%"></div></div>
    ${sub?`<div class="ov-prog-sub zh">${sub}</div>`:''}
  </div>`;
}

function renderProgress(){
  const wrap=document.getElementById("ovProgress");
  if(!wrap) return;
  const allVocab=[]; THEMES.forEach(t=>t.data.forEach(e=>allVocab.push(e.id)));
  const totalW=allVocab.length;
  const learnedW=allVocab.filter(id=>known.has(id)).length;
  const starW=allVocab.filter(id=>starred.has(id)).length;
  const levels=["A1","A2","B1","B2"];
  const lvRows=levels.map(lv=>{
    const ids=[]; THEMES.filter(t=>t.level===lv).forEach(t=>t.data.forEach(e=>ids.push(e.id)));
    return {lv, d:ids.filter(id=>known.has(id)).length, total:ids.length};
  }).filter(x=>x.total>0);
  const gTot=(window.GRAMMAR||[]).length, gSeen=(window.GRAMMAR||[]).filter(g=>gramSeen.has(g.id)).length;
  const W=window.WRITING||{templates:[],exercises:[]};
  const tTot=W.templates.length, tSeen=W.templates.filter(t=>tplSeen.has(t.id)).length;
  const exTot=W.exercises.length;
  let drafts=0;
  try{ for(let i=0;i<localStorage.length;i++){ const k=localStorage.key(i); if(k && k.indexOf("fr_draft_")===0){ const v=localStorage.getItem(k); if(v && v.trim()) drafts++; } } }catch(e){}
  if(drafts>exTot) drafts=exTot;

  wrap.innerHTML = `
    <div class="ov-h zh">學習進度</div>
    ${ovBar("單字・已學會", learnedW, totalW, "收藏 "+starW+" 字")}
    <div class="ov-lv-grid">${lvRows.map(x=>`<div class="ov-lv"><div class="ov-lv-top"><span>${x.lv}</span><span>${x.d}/${x.total}</span></div><div class="ov-bar sm"><div class="ov-bar-fill" style="width:${x.total?Math.round(x.d/x.total*100):0}%"></div></div></div>`).join("")}</div>
    ${ovBar("文法・已讀過", gSeen, gTot)}
    ${ovBar("寫作範本・已讀過", tSeen, tTot)}
    ${ovBar("寫作練習・已動筆", drafts, exTot)}
    <div class="ov-note zh">進度會依你在各分頁的學習自動記錄（儲存在本機瀏覽器）：單字在字卡標「已學會」、文法與範文開啟即記為已讀、練習打過草稿即計入。</div>
    <button id="ovReset" class="ov-reset zh">清除所有進度紀錄</button>
  `;
  const rb=document.getElementById("ovReset");
  rb.onclick=()=>{
    if(rb.dataset.confirm!=="1"){ rb.textContent="⚠️ 再按一次確認清除"; rb.dataset.confirm="1"; return; }
    known.clear(); starred.clear(); gramSeen.clear(); tplSeen.clear();
    saveSet(LS_KNOWN,known); saveSet(LS_STAR,starred); saveSet(LS_GRAM_SEEN,gramSeen); saveSet(LS_TPL_SEEN,tplSeen);
    try{ const rm=[]; for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i); if(k&&k.indexOf("fr_draft_")===0)rm.push(k);} rm.forEach(k=>localStorage.removeItem(k)); }catch(e){}
    renderProgress();
  };
}

function renderHome(){
  const html = `
    <header class="top">
      <div class="eyebrow">Carnet de Français</div>
      <h1>我的法文學習筆記</h1>
      <div class="sub">主題式背單字・A1 到 B2 共 100 個主題</div>
    </header>
    ${tabBarHtml('vocab')}
    <nav class="mode-toggle">
      <button id="modeThemeBtn" class="${state.navMode==='theme'?'active':''}">依主題瀏覽</button>
      <button id="modeLevelBtn" class="${state.navMode==='level'?'active':''}">依等級瀏覽</button>
    </nav>
    <div class="search-wrap">
      <input id="searchInput" type="search" autocomplete="off" placeholder="搜尋單字（中文或法文）" value="${(state.searchQuery||'').replace(/"/g,'&quot;')}">
      <span class="search-icon">🔍</span>
    </div>
    <div id="searchResults"></div>
    <div id="browseArea">
    ${state.navMode==='level' ? `
      <div class="level-tabs" id="levelTabs"></div>
    ` : ``}
    <div id="themeArea"></div>
    <div class="footnote">內容持續擴充中・A2–B2 逐步加入</div>
    </div>
  `;
  app.innerHTML = html;

  wireTabBar();
  document.getElementById("modeThemeBtn").onclick=()=>{state.navMode="theme"; renderHome();};
  document.getElementById("modeLevelBtn").onclick=()=>{state.navMode="level"; renderHome();};

  const searchInput = document.getElementById("searchInput");
  searchInput.oninput = (ev)=>{ state.searchQuery = ev.target.value; renderSearchResults(); };

  if(state.navMode==='level'){
    const tabsEl = document.getElementById("levelTabs");
    LEVELS.forEach(lv=>{
      const hasContent = THEMES.some(t=>t.level===lv && t.data.length>0);
      const btn = el(`<button class="${state.selectedLevel===lv?'active':''} ${hasContent?'':'disabled'}">${lv}</button>`);
      if(hasContent){ btn.onclick=()=>{state.selectedLevel=lv; renderHome();}; }
      tabsEl.appendChild(btn);
    });
  }

  const area = document.getElementById("themeArea");

  function makeCard(t){
    const has = t.data.length>0;
    const learned = has ? t.data.filter(e=>known.has(e.id)).length : 0;
    const card = el(`
      <div class="theme-card ${has?'':'disabled'}">
        <div class="name zh">${t.name}</div>
        <div class="count">${t.level} ・ ${has? (learned+'/'+t.data.length+' 已學會') : '尚未加入'}</div>
      </div>
    `);
    if(has){ card.onclick=()=>{state.currentThemeId=t.id; state.flashIndex=0; state.skipLearned=true; renderTheme();}; }
    return card;
  }

  if(state.navMode==='level'){
    // 等級模式：平鋪該等級的主題
    const grid = el(`<div class="theme-grid"></div>`);
    THEMES.filter(t=>t.level===state.selectedLevel).forEach(t=> grid.appendChild(makeCard(t)));
    area.appendChild(grid);
  } else {
    // 主題模式：依等級分組，每組一個小標題
    LEVELS.forEach(lv=>{
      const group = THEMES.filter(t=>t.level===lv);
      if(group.length===0) return;
      const total = group.reduce((s,t)=>s+t.data.length,0);
      area.appendChild(el(`<div class="level-group-label"><span class="lv-tag">${lv}</span><span class="lv-count">${group.length} 個主題・${total} 字</span></div>`));
      const grid = el(`<div class="theme-grid"></div>`);
      group.forEach(t=> grid.appendChild(makeCard(t)));
      area.appendChild(grid);
    });
  }

  renderSearchResults(); // 還原先前的搜尋狀態（若有）
}

/* 跨所有主題搜尋單字（中文比對原字、法文去重音比對） */
function searchEntries(q){
  const nq = norm(q);
  const rawq = (q||"").trim();
  if(!nq && !rawq) return [];
  const res=[];
  for(const t of THEMES){
    for(const e of t.data){
      const hit = (nq && (norm(e.word).includes(nq) || norm(e.match||'').includes(nq) || norm(e.example_fr||'').includes(nq)))
               || (rawq && e.zh && e.zh.includes(rawq))
               || (rawq && e.example_zh && e.example_zh.includes(rawq));
      if(hit){ res.push({e, theme:t}); if(res.length>=80) return res; }
    }
  }
  return res;
}

function renderSearchResults(){
  const box = document.getElementById("searchResults");
  const browse = document.getElementById("browseArea");
  if(!box) return;
  const q = state.searchQuery||"";
  if(!q.trim()){ box.innerHTML=""; if(browse) browse.style.display=""; return; }
  if(browse) browse.style.display="none";
  const results = searchEntries(q);
  box.innerHTML = "";
  if(results.length===0){
    box.appendChild(el(`<div class="search-empty zh">找不到符合「${q.replace(/</g,'&lt;')}」的單字</div>`));
    return;
  }
  box.appendChild(el(`<div class="search-count zh">${results.length} 個結果${results.length>=80?'（僅顯示前 80 筆）':''}</div>`));
  results.forEach(({e,theme})=>{
    const row = el(`
      <div class="search-row">
        <div class="sr-line">
          <span class="sr-fr fr-display">${withArt(e)}</span>
          ${speakBtnHtml('sr-speak')}
          <span class="sr-pos">${e.pos}</span>
          ${known.has(e.id)?'<span class="sr-known">✓</span>':''}
        </div>
        <div class="sr-zh zh">${e.zh}</div>
        ${e.example_fr?`<div class="sr-ex fr-display">${e.example_fr}</div>`:''}
        <div class="sr-theme zh">${theme.level}・${theme.name}</div>
      </div>
    `);
    row.onclick=()=>{ state.currentThemeId=theme.id; state.flashIndex=0; state.skipLearned=false; renderTheme(); };
    const sb = row.querySelector(".speak-btn.sr-speak");
    if(sb) sb.onclick=(ev)=>{ ev.stopPropagation(); speak(withArt(e), true, sb); };
    box.appendChild(row);
  });
}

function getCurrentTheme(){ return THEMES.find(t=>t.id===state.currentThemeId); }

function renderTheme(){
  const theme = getCurrentTheme();
  const pool = theme.data;
  const learnedCount = pool.filter(e=>known.has(e.id)).length;

  app.innerHTML = `
    <button class="back-btn" id="backBtn">← 回首頁</button>
    <div class="theme-title">
      <h2 class="zh">${theme.name}</h2>
    </div>
    <div class="progress-line">${theme.level} ・ 已學會 ${learnedCount} / ${pool.length} ・ 收藏 ${pool.filter(e=>starred.has(e.id)).length}</div>
    <div class="view-toggle">
      <button id="viewCardsBtn" class="${state.vocabView==='cards'?'active':''}">卡片模式</button>
      <button id="viewListBtn" class="${state.vocabView==='list'?'active':''}">列表模式</button>
    </div>
    <div id="voiceNote"></div>
    <div id="vocabArea"></div>
    <div id="dialogueArea"></div>
    <div class="section-label">練習區</div>
    <div class="practice-grid">
      <button class="practice-tile" id="quizMC"><span class="ico">🔤</span><span class="lbl zh">中法選擇題</span></button>
      <button class="practice-tile" id="quizFill"><span class="ico">✏️</span><span class="lbl zh">句子填空</span></button>
      <button class="practice-tile" id="quizSpell"><span class="ico">⌨️</span><span class="lbl zh">拼字測驗</span></button>
    </div>
    <div id="quizArea"></div>
  `;
  document.getElementById("backBtn").onclick=renderHome;
  document.getElementById("viewCardsBtn").onclick=()=>{state.vocabView="cards"; renderTheme();};
  document.getElementById("viewListBtn").onclick=()=>{state.vocabView="list"; renderTheme();};
  document.getElementById("quizMC").onclick=()=>startQuiz("mc", pool);
  document.getElementById("quizFill").onclick=()=>startQuiz("fill", pool);
  document.getElementById("quizSpell").onclick=()=>startQuiz("spell", pool);

  renderDialogues(theme.id);
  if(state.vocabView==="cards") renderFlashcards(pool); else renderVocabList(pool);
  refreshVoiceNote();
}

/* 無法文語音時顯示友善提示（語音非同步載入，故載入完成後會自動刷新）*/
function voiceNoteText(){
  if(speech.unsupported) return "此瀏覽器不支援語音朗讀，建議改用 Chrome、Safari 或 Edge。";
  if(frVoiceMissing()) return "此裝置似乎未安裝法文語音，發音可能不太標準。iPhone／Mac 內建的法文語音效果最佳。";
  return "";
}
function refreshVoiceNote(){
  const n = document.getElementById("voiceNote");
  if(!n) return;
  const t = voiceNoteText();
  n.innerHTML = t ? `<div class="voice-note zh">🔊 ${t}</div>` : "";
}

/* ---- 依主題會話 ---- */
function renderDialogues(themeId){
  const area = document.getElementById("dialogueArea");
  if(!area) return;
  const sets = (window.DIALOGUES && window.DIALOGUES[themeId]) || [];
  if(sets.length===0){ area.innerHTML=""; return; }
  let html = `<div class="section-label">實用會話</div>`;
  sets.forEach((d, di)=>{
    html += `<div class="dialogue-card">
      <div class="dialogue-title zh">${d.title}</div>`;
    const order = [];
    d.lines.forEach(ln=>{
      if(!order.includes(ln.sp)) order.push(ln.sp);
      const side = order.indexOf(ln.sp)===0 ? "left" : "right";
      html += `<div class="dia-line ${side}">
        <div class="dia-speaker zh">${ln.sp}</div>
        <div class="dia-bubble">
          <div class="dia-fr-row">
            <div class="dia-fr fr-display">${ln.fr}</div>
            ${speakBtnHtml('dia-speak')}
          </div>
          <div class="dia-zh zh">${ln.zh}</div>
        </div>
      </div>`;
    });
    html += `</div>`;
  });
  area.innerHTML = html;
  // 會話發音：直接讀取該句的 textContent，避免引號／HTML 轉義問題
  area.querySelectorAll(".speak-btn.dia-speak").forEach(btn=>{
    btn.onclick=()=>{
      const frEl = btn.closest(".dia-bubble").querySelector(".dia-fr");
      if(frEl) speak(frEl.textContent, false, btn);
    };
  });
}

/* ---- 卡片模式 ---- */
function renderFlashcards(pool){
  const area = document.getElementById("vocabArea");
  const learnedCount = pool.filter(e=>known.has(e.id)).length;
  // 牌組：跳過模式下只留未學會的字；複習全部則用整個 pool
  const deck = state.skipLearned ? pool.filter(e=>!known.has(e.id)) : pool;

  // 切換按鈕（跳過已學會 / 複習全部）
  const modeToggle = `
    <div class="flash-mode-toggle">
      <button id="skipModeBtn" class="${state.skipLearned?'active':''}">跳過已學會</button>
      <button id="allModeBtn" class="${state.skipLearned?'':'active'}">複習全部</button>
    </div>`;

  // 跳過模式下整個主題都學會了 → 顯示恭喜＋切換複習全部
  if(deck.length===0){
    const done = el(`
      <div class="flashcard-wrap">
        ${modeToggle}
        <div class="flashcard deck-empty">
          <div class="empty-emoji">🎉</div>
          <div class="empty-title zh">這個主題的字都學會了！</div>
          <div class="empty-sub zh">共 ${pool.length} 個字全部標記完成</div>
          <button class="empty-review-btn zh" id="reviewAllBtn">複習全部 ${pool.length} 個字</button>
        </div>
      </div>
    `);
    area.innerHTML=""; area.appendChild(done);
    document.getElementById("skipModeBtn").onclick=()=>{state.skipLearned=true; renderTheme();};
    document.getElementById("allModeBtn").onclick=()=>{state.skipLearned=false; state.flashIndex=0; renderTheme();};
    document.getElementById("reviewAllBtn").onclick=()=>{state.skipLearned=false; state.flashIndex=0; renderTheme();};
    return;
  }

  const i = Math.max(0, Math.min(state.flashIndex, deck.length-1));
  state.flashIndex = i;
  const e = deck[i];
  const wrap = el(`<div class="flashcard-wrap"></div>`);
  wrap.appendChild(el(modeToggle));
  let extraHtml = "";
  if(e.fem || e.conj){
    extraHtml += `<div class="extra zh" style="display:none">`;
    if(e.fem){
      extraHtml += `<div class="fem-line">陰性形：<span class="fr-display">${e.fem}</span></div>`;
    }
    if(e.conj){
      extraHtml += `<div class="conj-title">現在式變化</div><div class="conj-grid">`;
      extraHtml += e.conj.map(c=> `<div class="conj-cell ${c==='—'?'empty':''} fr-display">${c}</div>`).join("");
      extraHtml += `</div>`;
    }
    extraHtml += `</div>`;
  }
  const card = el(`
    <div class="flashcard">
      <div class="pos">${e.pos}</div>
      <div class="word-row">
        <div class="word fr-display">${withArt(e)}</div>
        ${speakBtnHtml('on-card')}
      </div>
      <div class="zh-meaning zh" style="display:none">${e.zh}</div>
      <div class="example zh" style="display:none">${speakBtnHtml('ex-speak')}<span class="ex-fr fr-display">${e.example_fr}</span><br>${e.example_zh}</div>
      ${extraHtml}
      <div class="hint zh">點卡片看中文翻譯</div>
    </div>
  `);
  let flipped=false;
  card.onclick=()=>{
    flipped=!flipped;
    card.querySelector(".zh-meaning").style.display = flipped?'block':'none';
    card.querySelector(".example").style.display = flipped?'block':'none';
    const ex = card.querySelector(".extra");
    if(ex) ex.style.display = flipped?'block':'none';
    card.querySelector(".hint").style.display = flipped?'none':'block';
  };
  // 發音鈕（阻止冒泡，避免觸發翻牌）
  const wBtn = card.querySelector(".speak-btn.on-card");
  if(wBtn) wBtn.onclick=(ev)=>{ ev.stopPropagation(); speak(withArt(e), true, wBtn); };
  const exBtn = card.querySelector(".speak-btn.ex-speak");
  if(exBtn) exBtn.onclick=(ev)=>{ ev.stopPropagation(); speak(e.example_fr, false, exBtn); };
  wrap.appendChild(card);
  const nav = el(`
    <div class="flash-nav-wrap">
      <div class="flash-meta">${i+1} / ${deck.length}${state.skipLearned?`<span class="counter-sub"> ・已學會 ${learnedCount}</span>`:''}</div>
      <div class="flash-nav">
        <button id="prevBtn" class="nav-step">← 上一個</button>
        <button class="star-btn ${starred.has(e.id)?'on':''}" id="starBtn">★</button>
        <button id="knownBtn" class="nav-known ${known.has(e.id)?'is-known':''}">${known.has(e.id)?'✓ 已學會':'標記學會'}</button>
        <button id="nextBtn" class="nav-step">下一個 →</button>
      </div>
    </div>
  `);
  wrap.appendChild(nav);
  area.innerHTML=""; area.appendChild(wrap);
  document.getElementById("skipModeBtn").onclick=()=>{state.skipLearned=true; state.flashIndex=0; renderTheme();};
  document.getElementById("allModeBtn").onclick=()=>{state.skipLearned=false; state.flashIndex=0; renderTheme();};
  document.getElementById("prevBtn").onclick=()=>{state.flashIndex=(i-1+deck.length)%deck.length; renderTheme();};
  document.getElementById("nextBtn").onclick=()=>{state.flashIndex=(i+1)%deck.length; renderTheme();};
  document.getElementById("starBtn").onclick=()=>{toggleStar(e.id); renderTheme();};
  document.getElementById("knownBtn").onclick=()=>{
    const wasLearned = known.has(e.id);
    toggleKnown(e.id);
    // 跳過模式下剛標記為學會：該字會從牌組消失，停在同一個 index 即顯示下一張
    if(state.skipLearned && !wasLearned){
      // index 不變，但因牌組少一張，clamp 會自動指向下一張或往前
    }
    renderTheme();
  };
}

/* ---- 列表模式 ---- */
function renderVocabList(pool){
  const area = document.getElementById("vocabArea");
  const listEl = el(`<div class="vocab-list"></div>`);
  pool.forEach(e=>{
    const femHtml = e.fem ? ` <span class="fem-badge">陰: ${e.fem}</span>` : "";
    const conjHtml = e.conj ? `<span class="conj-badge">變化</span>` : "";
    const row = el(`
      <div class="vocab-row">
        <div class="known-box ${known.has(e.id)?'checked':''}">${known.has(e.id)?'✓':''}</div>
        <div class="word-zh">
          <div class="w fr-display">${withArt(e)}${conjHtml}</div>
          <div class="z zh">${e.zh}${femHtml}</div>
        </div>
        ${speakBtnHtml('row-speak')}
        <div class="star ${starred.has(e.id)?'on':''}">★</div>
      </div>
    `);
    row.querySelector(".known-box").onclick=()=>{toggleKnown(e.id); renderTheme();};
    row.querySelector(".star").onclick=()=>{toggleStar(e.id); renderTheme();};
    const sb = row.querySelector(".speak-btn.row-speak");
    if(sb) sb.onclick=(ev)=>{ ev.stopPropagation(); speak(withArt(e), true, sb); };
    listEl.appendChild(row);
  });
  area.innerHTML=""; area.appendChild(listEl);
}

let quiz = null; // {type, pool, direction, items, index, score}

function startQuiz(type, pool){
  let items;
  if(type==="fill"){
    items = pool.filter(e=> norm(e.example_fr).includes(norm(e.match)));
  } else {
    items = pool;
  }
  items = shuffle(items).slice(0, Math.min(10, items.length));
  quiz = {type, pool, direction: type==="mc" ? "fr2zh" : null, items, index:0, score:0};
  renderQuiz();
}

function renderQuiz(){
  const area = document.getElementById("quizArea");
  if(!quiz || quiz.items.length===0){
    area.innerHTML = `<div class="quiz-panel zh">這個主題目前的單字量還不夠出這種題型，等內容擴充後再試試！</div>`;
    return;
  }
  if(quiz.index >= quiz.items.length){
    renderQuizResult(); return;
  }
  const e = quiz.items[quiz.index];

  if(quiz.type==="mc") renderMC(e);
  else if(quiz.type==="fill") renderFill(e);
  else renderSpell(e);
}

function quizHeader(extra){
  return `
    <div class="quiz-progress zh">第 ${quiz.index+1} / ${quiz.items.length} 題 ・ 得分 ${quiz.score}</div>
    ${extra||""}
  `;
}

function renderMC(e){
  const area = document.getElementById("quizArea");
  const dirToggle = `
    <div class="quiz-direction-toggle">
      <button id="dirFr2Zh" class="${quiz.direction==='fr2zh'?'active':''}">看法文選中文</button>
      <button id="dirZh2Fr" class="${quiz.direction==='zh2fr'?'active':''}">看中文選法文</button>
    </div>`;
  const isFr2Zh = quiz.direction==="fr2zh";
  let correct, options;
  if(isFr2Zh){
    correct = e.zh;
    options = shuffle([correct, ...pickDistractors(quiz.pool, e.id, "zh", 3)]);
  } else {
    correct = withArt(e);
    const distractors = pickDistractorEntries(quiz.pool, e.id, 3).map(withArt);
    options = shuffle([correct, ...distractors]);
  }

  area.innerHTML = `
    <div class="quiz-panel">
      ${quizHeader(dirToggle)}
      <div class="quiz-prompt ${isFr2Zh?'fr-display':'zh'}">${isFr2Zh? withArt(e) : e.zh}</div>
      <div class="quiz-sub zh">${isFr2Zh? '請選出正確的中文意思' : '請選出正確的法文'}</div>
      <div class="quiz-options" id="optsArea"></div>
      <div id="fb"></div>
    </div>
  `;
  document.getElementById("dirFr2Zh").onclick=()=>{quiz.direction="fr2zh"; renderQuiz();};
  document.getElementById("dirZh2Fr").onclick=()=>{quiz.direction="zh2fr"; renderQuiz();};

  const optsArea = document.getElementById("optsArea");
  options.forEach(opt=>{
    const btn = el(`<button class="${isFr2Zh?'zh':'fr-display'}">${opt}</button>`);
    btn.onclick=()=>answerMC(opt, correct, optsArea);
    optsArea.appendChild(btn);
  });
}
function answerMC(chosen, correct, optsArea){
  const isCorrect = chosen===correct;
  if(isCorrect) quiz.score++;
  [...optsArea.children].forEach(b=>{
    b.disabled=true;
    if(b.textContent===correct) b.classList.add("correct");
    else if(b.textContent===chosen) b.classList.add("wrong");
  });
  showFeedbackAndNext(isCorrect, isCorrect?"答對了！":("正確答案：" + correct));
}

function renderFill(e){
  const area = document.getElementById("quizArea");
  const span = locateSpan(e.example_fr, norm(e.match));
  let displaySentence = e.example_fr;
  if(span){
    displaySentence = e.example_fr.slice(0,span[0]) + "_____" + e.example_fr.slice(span[1]);
  }
  const options = shuffle([e.word, ...pickDistractors(quiz.pool, e.id, "word", 3)]);

  area.innerHTML = `
    <div class="quiz-panel">
      ${quizHeader()}
      <div class="quiz-prompt fr-display" style="font-size:18px">${displaySentence}</div>
      <div class="quiz-sub zh">中文提示：${e.example_zh}</div>
      <div class="quiz-options" id="optsArea"></div>
      <div id="fb"></div>
    </div>
  `;
  const optsArea = document.getElementById("optsArea");
  options.forEach(opt=>{
    const btn = el(`<button class="fr-display">${opt}</button>`);
    btn.onclick=()=>answerMC(opt, e.word, optsArea);
    optsArea.appendChild(btn);
  });
}

function renderSpell(e){
  const area = document.getElementById("quizArea");
  area.innerHTML = `
    <div class="quiz-panel">
      ${quizHeader()}
      <div class="quiz-prompt zh">${e.zh}</div>
      <div class="quiz-sub zh">請輸入對應的法文（拼字測驗）</div>
      <div class="quiz-input-row">
        <input type="text" id="spellInput" autocomplete="off" placeholder="輸入法文...">
        <button id="spellSubmit">送出</button>
      </div>
      <div id="fb"></div>
    </div>
  `;
  const input = document.getElementById("spellInput");
  input.focus();
  function submit(){
    const val = input.value.trim();
    const exact = val.toLowerCase()===e.word.toLowerCase();
    const close = norm(val)===norm(e.match);
    document.getElementById("spellSubmit").disabled=true;
    input.disabled=true;
    if(exact){
      quiz.score++; input.classList.add("correct");
      showFeedbackAndNext(true, "完全正確！");
    } else if(close){
      quiz.score++; input.classList.add("correct");
      showFeedbackAndNext(true, "正確！小提醒重音符號的正確寫法：「" + withArt(e) + "」");
    } else {
      input.classList.add("wrong");
      showFeedbackAndNext(false, "正確答案：「" + withArt(e) + "」");
    }
  }
  document.getElementById("spellSubmit").onclick=submit;
  input.onkeydown=(ev)=>{ if(ev.key==="Enter") submit(); };
}

function showFeedbackAndNext(isCorrect, message){
  const fb = document.getElementById("fb");
  fb.innerHTML = `<div class="quiz-feedback ${isCorrect?'correct':'wrong'} zh">${message}</div>
    <button class="quiz-next zh" id="nextQBtn">${quiz.index+1<quiz.items.length? '下一題':'查看結果'}</button>`;
  document.getElementById("nextQBtn").onclick=()=>{ quiz.index++; renderQuiz(); };
}

function renderQuizResult(){
  const area = document.getElementById("quizArea");
  area.innerHTML = `
    <div class="quiz-panel quiz-result">
      <div class="zh" style="color:var(--ink-soft); font-size:13px;">本次測驗結果</div>
      <div class="score">${quiz.score} / ${quiz.items.length}</div>
      <div class="quiz-result-actions">
        <button class="retry zh" id="retryBtn">再測一次</button>
        <button class="leave zh" id="leaveBtn">返回單字區</button>
      </div>
    </div>
  `;
  document.getElementById("retryBtn").onclick=()=>{ startQuiz(quiz.type, quiz.pool); };
  document.getElementById("leaveBtn").onclick=()=>{ quiz=null; document.getElementById("quizArea").innerHTML=""; };
}

renderHome();
