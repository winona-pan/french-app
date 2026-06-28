/* ============================================================
   morpho.js — 法文詞形規則引擎（單字 + 辭典共用）
   產生：名詞不規則複數、形容詞陰性/不規則複數、動詞現在式變化
   已有手寫欄位（conj/fem/pl/fpl）優先沿用，缺的才自動計算
   ============================================================ */
(function(){
  const VOW = /^[aeiouhàâäéèêëîïôöùûüÿ]/i;
  function elideJe(form){ return (VOW.test(form) ? "j'" : "je ") + form; }

  /* ---------- 名詞複數（只回傳「不規則」複數；規則 +s 回傳 null）---------- */
  const N_IRREG = {
    "œil":"yeux","oeil":"yeux","ciel":"cieux","aïeul":"aïeux","aieul":"aieux",
    "travail":"travaux","vitrail":"vitraux","corail":"coraux","émail":"émaux","email":"emaux",
    "bail":"baux","soupirail":"soupiraux",
    "monsieur":"messieurs","madame":"mesdames","mademoiselle":"mesdemoiselles"
  };
  const OU_X = ["bijou","caillou","chou","genou","hibou","joujou","pou"];   // -ou → +x
  const AL_S = ["bal","carnaval","festival","récital","recital","chacal","régal","regal",
                "cal","val","aval","banal","fatal","final","natal","naval","bancal","cérémonial"];
  const AU_S = ["landau","sarrau"];
  const EU_S = ["pneu","bleu","émeu","emeu","lieu"]; // (lieu poisson) — approx

  function nounPlural(word){
    if(!word) return null;
    const w = word.trim();
    if(/[\s'-]/.test(w)) return null;           // 片語/複合詞太複雜 → 不標注
    const low = w.toLowerCase();
    if(N_IRREG[low]) return N_IRREG[low];
    if(/[sxz]$/.test(low)) return w;            // -s/-x/-z 單複數同形（不變）→ 標注
    if(/ou$/.test(low)) return OU_X.includes(low) ? w+"x" : null;
    if(/eau$/.test(low)) return w+"x";
    if(/au$/.test(low)) return AU_S.includes(low) ? null : w+"x";
    if(/eu$/.test(low)) return EU_S.includes(low) ? null : w+"x";
    if(/al$/.test(low)) return AL_S.includes(low) ? null : w.replace(/al$/i,"aux");
    return null;                                 // 規則 +s
  }

  /* ---------- 形容詞陰性 ---------- */
  const FEM_IRREG = {
    "beau":"belle","nouveau":"nouvelle","vieux":"vieille","fou":"folle","mou":"molle",
    "blanc":"blanche","franc":"franche","sec":"sèche","frais":"fraîche","long":"longue",
    "favori":"favorite","malin":"maligne","bénin":"bénigne","benin":"benigne",
    "public":"publique","caduc":"caduque","grec":"grecque","turc":"turque",
    "gentil":"gentille","nul":"nulle","gros":"grosse","bas":"basse","las":"lasse",
    "épais":"épaisse","epais":"epaisse","gras":"grasse","métis":"métisse",
    "roux":"rousse","doux":"douce","faux":"fausse","jaloux":"jalouse",
    "tiers":"tierce","aigu":"aiguë","ambigu":"ambiguë","frais ":"fraîche",
    "andalou":"andalouse","hébreu":"hébraïque","esquimau":"esquimaude",
    "vieil":"vieille","bel":"belle","nouvel":"nouvelle"
  };
  const ET_ETE = ["complet","incomplet","concret","inquiet","secret","discret","indiscret","replet","désuet"];

  function feminine(word){
    if(!word) return null;
    const w = word.trim();
    if(/\s/.test(w)) return null;
    const low = w.toLowerCase();
    if(FEM_IRREG[low]) return FEM_IRREG[low];
    if(/[e]$/.test(w) && !/é$/.test(w)) return null;     // -e 結尾通常陰陽同形（rouge, mince）
    if(/eur$/.test(low)){
      if(/teur$/.test(low) && !/(menteur|enchanteur)$/.test(low)) return w.replace(/teur$/i,"trice");
      return w.replace(/eur$/i,"euse");
    }
    if(/eux$/.test(low)) return w.replace(/eux$/i,"euse");
    if(/er$/.test(low)) return w.replace(/er$/i,"ère");
    if(/f$/.test(low)) return w.replace(/f$/i,"ve");
    if(/(el|eil|ul)$/.test(low)) return w+"le";
    if(/(ien|en|on)$/.test(low)) return w+"ne";
    if(/et$/.test(low)) return ET_ETE.includes(low) ? w.replace(/et$/i,"ète") : w+"te";
    if(/(ot|s)$/.test(low)) return w+"e";                // sot→sotte 例外少，先用 +e
    return w+"e";                                        // grand→grande, petit→petite, joli→jolie...
  }

  /* ---------- 形容詞陽性複數（只回傳不規則；規則 +s → null）---------- */
  const ADJ_AL_S = ["banal","fatal","final","natal","naval","glacial","bancal","tonal","bancal","jovial","fractal"];
  function adjMascPlural(word){
    if(!word) return null;
    const w = word.trim(); if(/\s/.test(w)) return null;
    const low = w.toLowerCase();
    if(/[sx]$/.test(low)) return w;                       // -s/-x 不變 → 標注
    if(/(eau)$/.test(low)) return w+"x";                  // beau→beaux, nouveau→nouveaux
    if(/al$/.test(low)) return ADJ_AL_S.includes(low) ? null : w.replace(/al$/i,"aux");
    return null;                                          // 規則 +s
  }
  /* 陰性複數：陰性 + s（極少不規則），只在陰性以 s/x 結尾時標注（罕見）*/
  function adjFemPlural(fem){
    if(!fem) return null;
    if(/[sx]$/.test(fem)) return fem;
    return null;
  }

  /* ---------- 動詞現在式變化（回傳含人稱的 6 個字串陣列）---------- */
  const V_IRREG = {
    "être":["je suis","tu es","il est","nous sommes","vous êtes","ils sont"],
    "avoir":["j'ai","tu as","il a","nous avons","vous avez","ils ont"],
    "aller":["je vais","tu vas","il va","nous allons","vous allez","ils vont"],
    "faire":["je fais","tu fais","il fait","nous faisons","vous faites","ils font"],
    "dire":["je dis","tu dis","il dit","nous disons","vous dites","ils disent"],
    "prendre":["je prends","tu prends","il prend","nous prenons","vous prenez","ils prennent"],
    "venir":["je viens","tu viens","il vient","nous venons","vous venez","ils viennent"],
    "tenir":["je tiens","tu tiens","il tient","nous tenons","vous tenez","ils tiennent"],
    "pouvoir":["je peux","tu peux","il peut","nous pouvons","vous pouvez","ils peuvent"],
    "vouloir":["je veux","tu veux","il veut","nous voulons","vous voulez","ils veulent"],
    "devoir":["je dois","tu dois","il doit","nous devons","vous devez","ils doivent"],
    "voir":["je vois","tu vois","il voit","nous voyons","vous voyez","ils voient"],
    "savoir":["je sais","tu sais","il sait","nous savons","vous savez","ils savent"],
    "recevoir":["je reçois","tu reçois","il reçoit","nous recevons","vous recevez","ils reçoivent"],
    "boire":["je bois","tu bois","il boit","nous buvons","vous buvez","ils boivent"],
    "croire":["je crois","tu crois","il croit","nous croyons","vous croyez","ils croient"],
    "lire":["je lis","tu lis","il lit","nous lisons","vous lisez","ils lisent"],
    "écrire":["j'écris","tu écris","il écrit","nous écrivons","vous écrivez","ils écrivent"],
    "vivre":["je vis","tu vis","il vit","nous vivons","vous vivez","ils vivent"],
    "suivre":["je suis","tu suis","il suit","nous suivons","vous suivez","ils suivent"],
    "connaître":["je connais","tu connais","il connaît","nous connaissons","vous connaissez","ils connaissent"],
    "mettre":["je mets","tu mets","il met","nous mettons","vous mettez","ils mettent"],
    "partir":["je pars","tu pars","il part","nous partons","vous partez","ils partent"],
    "sortir":["je sors","tu sors","il sort","nous sortons","vous sortez","ils sortent"],
    "dormir":["je dors","tu dors","il dort","nous dormons","vous dormez","ils dorment"],
    "servir":["je sers","tu sers","il sert","nous servons","vous servez","ils servent"],
    "sentir":["je sens","tu sens","il sent","nous sentons","vous sentez","ils sentent"],
    "courir":["je cours","tu cours","il court","nous courons","vous courez","ils courent"],
    "mourir":["je meurs","tu meurs","il meurt","nous mourons","vous mourez","ils meurent"],
    "ouvrir":["j'ouvre","tu ouvres","il ouvre","nous ouvrons","vous ouvrez","ils ouvrent"],
    "offrir":["j'offre","tu offres","il offre","nous offrons","vous offrez","ils offrent"],
    "souffrir":["je souffre","tu souffres","il souffre","nous souffrons","vous souffrez","ils souffrent"],
    "couvrir":["je couvre","tu couvres","il couvre","nous couvrons","vous couvrez","ils couvrent"],
    "conduire":["je conduis","tu conduis","il conduit","nous conduisons","vous conduisez","ils conduisent"],
    "produire":["je produis","tu produis","il produit","nous produisons","vous produisez","ils produisent"],
    "traduire":["je traduis","tu traduis","il traduit","nous traduisons","vous traduisez","ils traduisent"],
    "construire":["je construis","tu construis","il construit","nous construisons","vous construisez","ils construisent"],
    "plaire":["je plais","tu plais","il plaît","nous plaisons","vous plaisez","ils plaisent"],
    "rire":["je ris","tu ris","il rit","nous rions","vous riez","ils rient"],
    "craindre":["je crains","tu crains","il craint","nous craignons","vous craignez","ils craignent"],
    "peindre":["je peins","tu peins","il peint","nous peignons","vous peignez","ils peignent"],
    "joindre":["je joins","tu joins","il joint","nous joignons","vous joignez","ils joignent"],
    "résoudre":["je résous","tu résous","il résout","nous résolvons","vous résolvez","ils résolvent"],
    "battre":["je bats","tu bats","il bat","nous battons","vous battez","ils battent"],
    "asseoir":["j'assois","tu assois","il assoit","nous assoyons","vous assoyez","ils assoient"],
    "plaindre":["je plains","tu plains","il plaint","nous plaignons","vous plaignez","ils plaignent"],
    "taire":["je tais","tu tais","il tait","nous taisons","vous taisez","ils taisent"],
    "vaincre":["je vaincs","tu vaincs","il vainc","nous vainquons","vous vainquez","ils vainquent"]
  };
  // 衍生前綴：以這些常見動詞為詞根的派生（re-, dé-, com- 等）會自動套用同尾變化
  const V_BASE = ["prendre","venir","tenir","mettre","voir","dire","faire","partir","ouvrir","courir","écrire","vivre","suivre","connaître","dormir","servir","sentir","conduire","produire","croire","battre"];

  function lookupIrr(inf){
    if(V_IRREG[inf]) return V_IRREG[inf];
    for(const base of V_BASE){
      if(inf.length>base.length && inf.endsWith(base)){
        const pre = inf.slice(0, inf.length-base.length);
        return V_IRREG[base].map((form,i)=>{
          // 把詞根置換成「前綴+詞根」：例如 reprendre = re + prendre
          // 形式 "je prends" → 取人稱與詞幹，前綴加在動詞詞幹前
          const m = form.match(/^(j'|je |tu |il |nous |vous |ils )(.*)$/);
          if(!m) return form;
          let pron=m[1], stem=m[2];
          let merged = pre + stem;
          // j' 連音重新判斷
          if(pron==="j'"||pron==="je "){ return elideJe(merged); }
          return pron + merged;
        });
      }
    }
    return null;
  }

  // -er 動詞詞幹：回傳 {full（nous/vous 用）, mute（je/tu/il/ils 用）}
  const ELER_ETER_GRAVE = ["achet","gel","pel","model","cisel","congel","decel","décel",
    "demantel","démantel","ecartel","écartel","furet","halet","rachet","crochet","corset"];
  function erStems(st){
    const full = st;
    const low = st.toLowerCase();
    if(/y$/.test(low)) return {full, mute: st.slice(0,-1)+"i"};         // -yer → i
    if(/e[lt]$/.test(low)){                                            // -eler / -eter
      const cons = st.slice(-1);
      if(ELER_ETER_GRAVE.includes(low)) return {full, mute: st.slice(0,-2)+"è"+cons};
      return {full, mute: st+cons};                                   // 雙寫子音
    }
    let mE = st.match(/^(.*)é([bcdfghjklmnpqrstvwxz]+)$/);             // é+子音 → è
    if(mE) return {full, mute: mE[1]+"è"+mE[2]};
    let me = st.match(/^(.*)e([bcdfgjklmnprstvz])$/);                  // e+單子音 → è
    if(me) return {full, mute: me[1]+"è"+me[2]};
    return {full, mute: st};
  }

  function conjugate(inf){
    if(!inf) return null;
    let w = inf.trim();
    // 反身動詞 se / s'
    let refl = null;
    const rm = w.match(/^se\s+(.+)$/) || w.match(/^s'(.+)$/);
    if(rm){ refl = true; w = rm[1]; }
    // 拆出主要動詞（首字）與補語（其餘）
    let head = w, tail = "";
    const sp = w.indexOf(' ');
    if(sp>0){ head = w.slice(0,sp); tail = w.slice(sp); }
    if(/[\s']/.test(head)) return null;
    let base = lookupIrr(head);
    if(!base){
      const w = head;
      if(w==="aller") base=V_IRREG["aller"];
      else if(/er$/.test(w)){
        const st=w.slice(0,-2);
        const {full, mute}=erStems(st);
        const nous = /g$/.test(full) ? full+"e" : (/c$/.test(full) ? full.slice(0,-1)+"ç" : full);
        base=[elideJe(mute+"e"),"tu "+mute+"es","il "+mute+"e","nous "+nous+"ons","vous "+full+"ez","ils "+mute+"ent"];
      } else if(/ir$/.test(w)){
        const st=w.slice(0,-2);
        base=[elideJe(st+"is"),"tu "+st+"is","il "+st+"it","nous "+st+"issons","vous "+st+"issez","ils "+st+"issent"];
      } else if(/re$/.test(w)){
        const st=w.slice(0,-2);
        base=[elideJe(st+"s"),"tu "+st+"s","il "+st,"nous "+st+"ons","vous "+st+"ez","ils "+st+"ent"];
      } else return null;
    }
    if(refl){
      const pr=["me ","te ","se ","nous ","vous ","se "];
      const prV=["m'","t'","s'","nous ","vous ","s'"];
      base = base.map((form,i)=>{
        const m=form.match(/^(j'|je |tu |il |nous |vous |ils )(.*)$/);
        if(!m) return form;
        const subj = ["je","tu","il","nous","vous","ils"][i];
        const verb = m[2];
        const rfl = VOW.test(verb) ? prV[i] : pr[i];
        const subjDisp = (i===0)? "je" : subj;
        return subjDisp+" "+rfl+verb;
      });
    }
    if(tail) base = base.map(f=>f+tail);
    return base;
  }

  /* ---------- 統一介面：回傳某 entry 的詞形物件 ---------- */
  function getMorpho(e){
    const pos = (e.pos||"");
    const m = {plural:null, fem:null, mpl:null, fpl:null, conj:null};
    if(/^v\./.test(pos)){
      if(Array.isArray(e.conj)) m.conj = e.conj;
      else if(e.conj && typeof e.conj==="object") m.conj = objToArr(e.conj);
      else m.conj = conjugate(e.word);
    } else if(/^adj/.test(pos)){
      m.fem = e.fem || feminine(e.word);
      m.mpl = e.pl  || adjMascPlural(e.word);
      m.fpl = e.fpl || (m.fem ? adjFemPlural(m.fem) : null);
    } else if(pos==="n.m." || pos==="n.f."){
      m.plural = nounPlural(e.word);
    }
    return m;
  }
  /* 辭典動詞 conj 是物件 {je,tu,...}（值不含人稱）→ 轉成含人稱陣列 */
  function objToArr(o){
    const ks=["je","tu","il","nous","vous","ils"];
    return ks.filter(k=>o[k]).map(k=>{
      const v=o[k];
      if(k==="je") return elideJe(v);
      return k+" "+v;
    });
  }

  window.Morpho = { getMorpho, conjugate, feminine, nounPlural, adjMascPlural };
})();
