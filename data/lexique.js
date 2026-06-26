/* 生活辭典目錄（依使用者目錄）。每個小類別 {id, name}，有資料者(window.VOCAB[id])會自動加入 THEMES 供整合搜尋共用。 */
window.LEXIQUE = [
  { sec:"品味飲食", icon:"🍴", subs:[
    { sub:"🛒 超市與傳統市場", cats:[
      {id:"lex_fruits", name:"水果"},
      {id:"lex_legumes", name:"蔬菜"},
      {id:"lex_viande_poisson", name:"肉類與海鮮"},
      {id:"lex_snacks", name:"零食點心"},
      {id:"lex_boissons_laitier", name:"飲料與乳製品"},
    ]},
    { sub:"🍱 便利商店", cats:[
      {id:"lex_plats_prepares", name:"微波食品與便當"},
      {id:"lex_produits_chauds", name:"熱食區"},
      {id:"lex_services_colis", name:"生活服務與寄取件"},
    ]},
    { sub:"🍽️ 餐廳與飲食文化", cats:[
      {id:"lex_entrees", name:"前菜與湯品"},
      {id:"lex_plats", name:"主食與排餐"},
      {id:"lex_desserts", name:"甜點與冰品"},
      {id:"lex_condiments", name:"調味與醬料"},
    ]},
    { sub:"🍹 飲品店、酒吧與茶館", cats:[
      {id:"lex_boba", name:"手搖飲與配料"},
      {id:"lex_cafe", name:"咖啡廳品項"},
      {id:"lex_bar", name:"居酒屋、酒吧與下酒菜"},
    ]},
  ]},
  { sec:"生活與居家", icon:"🏠", subs:[
    { sub:"🏠 居家空間與家電", cats:[
      {id:"lex_salon_chambre", name:"客廳與臥室家具"},
      {id:"lex_salle_bain", name:"浴室與洗手間"},
      {id:"lex_cuisine_electro", name:"廚房設備與生活家電"},
    ]},
    { sub:"👕 時尚、美妝與保養", cats:[
      {id:"lex_vetements", name:"四季衣物與穿搭"},
      {id:"lex_maquillage", name:"美妝與護膚保養"},
      {id:"lex_chaussures_acc", name:"鞋包與時尚配件"},
    ]},
    { sub:"🐶 寵物與療癒經濟", cats:[
      {id:"lex_chiens_chats", name:"寵物貓狗品項"},
      {id:"lex_anim_nourriture", name:"寵物食品與玩具"},
      {id:"lex_anim_friendly", name:"寵物友善空間"},
    ]},
    { sub:"🏥 醫療、健康與藥局", cats:[
      {id:"lex_pharmacie", name:"藥局常見藥品"},
      {id:"lex_hopital", name:"醫院診所與掛號"},
      {id:"lex_symptomes", name:"身體症狀表達"},
    ]},
  ]},
  { sec:"城市、探索與信仰", icon:"🚇", subs:[
    { sub:"🚇 城市交通與大眾運輸", cats:[
      {id:"lex_metro", name:"地鐵與捷運"},
      {id:"lex_train", name:"火車與高鐵"},
      {id:"lex_bus_taxi", name:"巴士、計程車與共享載具"},
    ]},
    { sub:"⛩️ 觀光景點與異國風情", cats:[
      {id:"lex_asie_marche", name:"亞洲風情與夜市"},
      {id:"lex_europe_musee", name:"歐洲古典景點與博物館"},
      {id:"lex_nature_onsen", name:"大自然景觀與溫泉"},
    ]},
    { sub:"🏮 節慶、玄學與宗教信仰", cats:[
      {id:"lex_temples_asie", name:"東方傳統節日與宮廟"},
      {id:"lex_noel_europe", name:"歐洲節慶與聖誕市集"},
      {id:"lex_astrologie", name:"命理占卜與玄學"},
    ]},
    { sub:"🌱 綠色環保與大自然", cats:[
      {id:"lex_tri_dechets", name:"減塑與垃圾分類"},
      {id:"lex_camping", name:"戶外露營與生態觀察"},
      {id:"lex_conservation", name:"海洋與野生動物保育"},
    ]},
  ]},
  { sec:"藝術與運動", icon:"🎨", subs:[
    { sub:"🎨 藝術流派與創作媒材", cats:[
      {id:"lex_materiaux_art", name:"繪畫與攝影工具"},
      {id:"lex_mouvements", name:"視覺藝術流派"},
      {id:"lex_galeries", name:"美術館與展覽空間"},
    ]},
    { sub:"📐 視覺設計與色彩學", cats:[
      {id:"lex_tons", name:"色彩組成與調性"},
      {id:"lex_nuancier", name:"專業設計與色標系統"},
    ]},
    { sub:"🌸 萬物色彩與特殊色系", cats:[
      {id:"lex_couleurs_classiques", name:"經典與高級時裝色"},
      {id:"lex_couleurs_asie", name:"日韓美學與自然限定色"},
      {id:"lex_couleurs_locales", name:"台灣在地與復古色系"},
    ]},
    { sub:"🏸 球類、健身與運動賽事", cats:[
      {id:"lex_sports_asie", name:"亞洲熱門球類"},
      {id:"lex_sports_europe", name:"歐洲熱門球類"},
      {id:"lex_fitness", name:"健身、瑜珈與極限運動"},
      {id:"lex_jo", name:"國際運動賽事與術語"},
    ]},
    { sub:"🎸 音樂、戲劇與表演藝術", cats:[
      {id:"lex_musique_instr", name:"音樂風格與樂器"},
      {id:"lex_theatre", name:"舞台劇、歌劇與舞蹈"},
      {id:"lex_scene", name:"舞台與後台名詞"},
    ]},
  ]},
  { sec:"現代社交與職涯", icon:"💬", subs:[
    { sub:"🏢 職場辦公、遠端與斜槓", cats:[
      {id:"lex_bureau", name:"辦公室日常與開會"},
      {id:"lex_freelance", name:"遠端工作與自由職業"},
      {id:"lex_projet_code", name:"斜槓多元技能"},
    ]},
    { sub:"🏫 校園生活與學術研究", cats:[
      {id:"lex_rapport", name:"學業、報告與大綱"},
      {id:"lex_specialisations", name:"主修科系與學術領域"},
      {id:"lex_dortoirs", name:"校園空間與宿舍生活"},
    ]},
    { sub:"💬 情感表達與心理狀態", cats:[
      {id:"lex_emotions_pos", name:"正面療癒與幸福感"},
      {id:"lex_stress", name:"負面壓力與心理焦慮"},
    ]},
    { sub:"👥 現代人際關係與約會", cats:[
      {id:"lex_amis_reseaux", name:"社交圈與網路朋友"},
      {id:"lex_date", name:"約會文化與曖昧情感"},
    ]},
    { sub:"📱 數位生活與社群軟體", cats:[
      {id:"lex_reseaux_sociaux", name:"社群互動與網路用語"},
      {id:"lex_paiement", name:"行動支付與數位工具"},
    ]},
    { sub:"🎮 潮流、次文化與宅經濟", cats:[
      {id:"lex_gaming", name:"電玩遊戲與動漫"},
      {id:"lex_blindbox", name:"潮流玩具與盲盒"},
    ]},
  ]},
];

/* 把有資料的小類別註冊進 THEMES（與分級單字共用同一套資料與搜尋） */
(function(){
  try{
    if(typeof THEMES==="undefined" || !Array.isArray(THEMES)) return;
    const have=new Set(THEMES.map(t=>t.id));
    window.LEXIQUE.forEach(sec=>sec.subs.forEach(sub=>sub.cats.forEach(c=>{
      const data=(window.VOCAB && window.VOCAB[c.id]) || null;
      if(data && data.length && !have.has(c.id)){
        THEMES.push({id:c.id, level:"lex", name:c.name, data:data});
        have.add(c.id);
      }
    })));
  }catch(e){}
})();
