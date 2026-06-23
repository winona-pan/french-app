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

const LS_KNOWN="fr_known_v1", LS_STAR="fr_star_v1";
function loadSet(key){ try{return new Set(JSON.parse(localStorage.getItem(key)||"[]"));}catch(e){return new Set();} }
function saveSet(key, set){ localStorage.setItem(key, JSON.stringify([...set])); }
let known = loadSet(LS_KNOWN);
let starred = loadSet(LS_STAR);
function toggleKnown(id){ known.has(id)?known.delete(id):known.add(id); saveSet(LS_KNOWN,known); }
function toggleStar(id){ starred.has(id)?starred.delete(id):starred.add(id); saveSet(LS_STAR,starred); }

let state = {
  navMode:"theme",      // "theme" | "level"
  selectedLevel:"A1",
  currentThemeId:null,
  vocabView:"cards",    // "cards" | "list"
  flashIndex:0,
  skipLearned:true,     // 字卡是否跳過已學會的字（仍可切換成複習全部）
};

const app = document.getElementById("app");

function renderHome(){
  const html = `
    <header class="top">
      <div class="eyebrow">Carnet de Français</div>
      <h1>我的法文學習筆記</h1>
      <div class="sub">主題式背單字・A1 為主，逐步擴充到 B2</div>
    </header>
    <nav class="mode-toggle">
      <button id="modeThemeBtn" class="${state.navMode==='theme'?'active':''}">依主題瀏覽</button>
      <button id="modeLevelBtn" class="${state.navMode==='level'?'active':''}">依等級瀏覽</button>
    </nav>
    ${state.navMode==='level' ? `
      <div class="level-tabs" id="levelTabs"></div>
    ` : ``}
    <div id="themeArea"></div>
    <div class="footnote">內容持續擴充中・A2–B2 逐步加入</div>
  `;
  app.innerHTML = html;

  document.getElementById("modeThemeBtn").onclick=()=>{state.navMode="theme"; renderHome();};
  document.getElementById("modeLevelBtn").onclick=()=>{state.navMode="level"; renderHome();};

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
    d.lines.forEach(ln=>{
      const side = (ln.sp==="A" || ln.sp==="服務生") ? "left" : "right";
      html += `<div class="dia-line ${side}">
        <div class="dia-speaker zh">${ln.sp}</div>
        <div class="dia-bubble">
          <div class="dia-fr fr-display">${ln.fr}</div>
          <div class="dia-zh zh">${ln.zh}</div>
        </div>
      </div>`;
    });
    html += `</div>`;
  });
  area.innerHTML = html;
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
      <div class="word fr-display">${e.word}</div>
      <div class="zh-meaning zh" style="display:none">${e.zh}</div>
      <div class="example zh" style="display:none">${e.example_fr}<br>${e.example_zh}</div>
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
  wrap.appendChild(card);
  const nav = el(`
    <div class="flash-nav">
      <button id="prevBtn">← 上一個</button>
      <span class="flash-counter">${i+1} / ${deck.length}${state.skipLearned?`<span class="counter-sub"> ・已學會 ${learnedCount}</span>`:''}</span>
      <button class="star-btn ${starred.has(e.id)?'on':''}" id="starBtn">★</button>
      <button id="knownBtn">${known.has(e.id)?'✓ 已學會':'標記學會'}</button>
      <button id="nextBtn">下一個 →</button>
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
          <div class="w fr-display">${e.word}${conjHtml}</div>
          <div class="z zh">${e.zh}${femHtml}</div>
        </div>
        <div class="star ${starred.has(e.id)?'on':''}">★</div>
      </div>
    `);
    row.querySelector(".known-box").onclick=()=>{toggleKnown(e.id); renderTheme();};
    row.querySelector(".star").onclick=()=>{toggleStar(e.id); renderTheme();};
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
  const correct = isFr2Zh ? e.zh : e.word;
  const distractorField = isFr2Zh ? "zh" : "word";
  const options = shuffle([correct, ...pickDistractors(quiz.pool, e.id, distractorField, 3)]);

  area.innerHTML = `
    <div class="quiz-panel">
      ${quizHeader(dirToggle)}
      <div class="quiz-prompt ${isFr2Zh?'fr-display':'zh'}">${isFr2Zh? e.word : e.zh}</div>
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
      showFeedbackAndNext(true, "正確！小提醒重音符號的正確寫法：「" + e.word + "」");
    } else {
      input.classList.add("wrong");
      showFeedbackAndNext(false, "正確答案：「" + e.word + "」");
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
