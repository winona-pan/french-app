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
    { sub:"🥣 前菜與湯品", cats:[
      {id:"lex_entree_cn", name:"中式・台式前菜湯品"},
      {id:"lex_entree_jp", name:"日式前菜湯品"},
      {id:"lex_entree_kr", name:"韓式前菜湯品"},
      {id:"lex_entree_eu", name:"歐式前菜湯品"},
      {id:"lex_entree_us", name:"美式前菜湯品"},
    ]},
    { sub:"🍛 主食與排餐", cats:[
      {id:"lex_plat_cn", name:"中式・台式主食"},
      {id:"lex_plat_jp", name:"日式主食"},
      {id:"lex_plat_kr", name:"韓式主食"},
      {id:"lex_plat_eu", name:"歐式主食排餐"},
      {id:"lex_plat_us", name:"美式主食"},
    ]},
    { sub:"🍰 甜點與冰品", cats:[
      {id:"lex_dessert_cn", name:"中式・台式甜點冰品"},
      {id:"lex_dessert_jp", name:"日式甜點冰品"},
      {id:"lex_dessert_kr", name:"韓式甜點冰品"},
      {id:"lex_dessert_eu", name:"歐式甜點"},
      {id:"lex_dessert_us", name:"美式甜點"},
    ]},
    { sub:"🧂 調味與醬料", cats:[
      {id:"lex_sauce_cn", name:"中式・台式調味醬料"},
      {id:"lex_sauce_jp", name:"日式調味醬料"},
      {id:"lex_sauce_kr", name:"韓式調味醬料"},
      {id:"lex_sauce_eu", name:"歐式調味醬料"},
      {id:"lex_sauce_us", name:"美式調味醬料"},
    ]},
    { sub:"🗣️ 訂位、點餐與餐桌溝通", cats:[
      {id:"lex_reserver", name:"電話與線上訂位"},
      {id:"lex_commander", name:"現場帶位與點餐"},
      {id:"lex_addition", name:"餐桌服務與結帳"},
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
      {id:"lex_logement_repar", name:"租屋與水電維修"},
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
    { sub:"🏢 行政辦事、郵局與文件申請", cats:[
      {id:"lex_poste", name:"郵局寄件與臨櫃"},
      {id:"lex_banque", name:"銀行開戶與換匯"},
      {id:"lex_admin_visa", name:"公家機關與簽證文件"},
    ]},
    { sub:"🏥 醫療、健康與藥局", cats:[
      {id:"lex_pharmacie", name:"藥局常見藥品"},
      {id:"lex_hopital", name:"醫院診所與掛號"},
      {id:"lex_symptomes", name:"身體症狀表達"},
    ]},
  ]},
  { sec:"城市、探索與信仰", icon:"🚇", subs:[
    { sub:"🌍 全球地理、國家與城市密碼", cats:[
      {id:"lex_pays_asie", name:"亞洲國家與名城"},
      {id:"lex_pays_europe", name:"歐洲國家與名城"},
      {id:"lex_pays_ameriques", name:"美洲國家與名城"},
      {id:"lex_pays_oceanie", name:"大洋洲國家與名城"},
      {id:"lex_pays_afrique", name:"非洲國家與名城"},
      {id:"lex_geo_reliefs", name:"五大洲與基礎地理地形"},
    ]},
    { sub:"✈️ 旅程規劃與票務預訂", cats:[
      {id:"lex_avion", name:"航空訂票與機場"},
      {id:"lex_hotel", name:"住宿預訂與入住"},
      {id:"lex_billets", name:"各種門票與通行證"},
    ]},
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
    { sub:"🎢 主題樂園與休閒園區", cats:[
      {id:"lex_parc_attractions", name:"遊樂園設施與周邊"},
      {id:"lex_zoo", name:"動物園與野生動物"},
      {id:"lex_aquarium", name:"海生館與海洋生物"},
    ]},
    { sub:"⚠️ 旅遊突發狀況與危機自救", cats:[
      {id:"lex_perte_vol", name:"物品遺失與失竊"},
      {id:"lex_retard", name:"行程延誤與更改"},
      {id:"lex_demander_chemin", name:"迷路與問路"},
    ]},
    { sub:"🎒 深度自助遊與裝備", cats:[
      {id:"lex_bagages", name:"行李與打包清單"},
      {id:"lex_location_voiture", name:"自駕租車與導航"},
    ]},
    { sub:"🗺️ 內行私房行程與探索", cats:[
      {id:"lex_brocantes", name:"復古與在地市集"},
      {id:"lex_flanerie", name:"城市漫遊與一日遊"},
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
      {id:"lex_meteo", name:"氣候體感與自然變異"},
    ]},
  ]},
  { sec:"藝術與運動", icon:"🎨", subs:[
    { sub:"🎨 藝術流派與創作媒材", cats:[
      {id:"lex_materiaux_art", name:"繪畫與攝影工具"},
      {id:"lex_mouvements", name:"視覺藝術流派"},
      {id:"lex_galeries", name:"美術館與展覽空間"},
    ]},
    { sub:"📚 閱讀空間與獨立書店", cats:[
      {id:"lex_librairie", name:"書店文具與選物"},
      {id:"lex_magazines", name:"雜誌、漫畫與輕小說"},
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
      {id:"lex_personnalite_mbti", name:"流行人格與心理測驗"},
    ]},
    { sub:"👥 現代人際關係與約會", cats:[
      {id:"lex_amis_reseaux", name:"社交圈與網路朋友"},
      {id:"lex_date", name:"約會文化與曖昧情感"},
    ]},
    { sub:"🥂 社交聚會與派對文化", cats:[
      {id:"lex_inviter", name:"揪團與打招呼"},
      {id:"lex_apero", name:"歐洲派對與餐前酒"},
      {id:"lex_afters", name:"亞洲續攤與夜生活"},
    ]},
    { sub:"📱 數位生活與社群軟體", cats:[
      {id:"lex_reseaux_sociaux", name:"社群互動與網路用語"},
      {id:"lex_paiement", name:"行動支付與數位工具"},
    ]},
    { sub:"🎬 影視娛樂與追劇文化", cats:[
      {id:"lex_genres_film", name:"影視作品類型"},
      {id:"lex_streaming", name:"串流平台與觀影行為"},
      {id:"lex_spoilers", name:"劇透與幕後花絮"},
    ]},
    { sub:"🎮 潮流、次文化與宅經濟", cats:[
      {id:"lex_gaming", name:"電玩遊戲與動漫"},
      {id:"lex_blindbox", name:"潮流玩具與盲盒"},
    ]},
  ]},
  { sec:"移居、生存與在地扎根", icon:"📄", subs:[
    { sub:"📄 長居簽證、移民與法規", cats:[
      {id:"lex_titre_sejour", name:"居留證與移民手續"},
      {id:"lex_droits_juridique", name:"法律權益與求助"},
    ]},
    { sub:"💼 房地產、簽約與長期定居", cats:[
      {id:"lex_bail", name:"房屋租賃與合約"},
      {id:"lex_achat_immo", name:"置產與買房"},
    ]},
    { sub:"💰 稅務、社會福利與保險", cats:[
      {id:"lex_impots", name:"國家稅務與申報"},
      {id:"lex_secu_sociale", name:"社會福利與醫療保險"},
      {id:"lex_assurances", name:"私人商業保險"},
    ]},
    { sub:"🚗 車輛、交通工具所有權", cats:[
      {id:"lex_permis", name:"考照與駕照更換"},
      {id:"lex_achat_voiture", name:"買車、養車與維修"},
    ]},
    { sub:"🛠️ 當地求職與勞工權益", cats:[
      {id:"lex_recrutement", name:"在地求職與面試"},
      {id:"lex_contrat_travail", name:"勞動權益與合約類型"},
    ]},
  ]},
  { sec:"動態、形容與語氣", icon:"🎭", subs:[
    { sub:"🏃 萬用高效動態（動詞含六人稱現在式）", cats:[
      {id:"lex_verbes_essentiels", name:"日常核心動詞"},
      {id:"lex_verbes_deplacer", name:"移動與交通動詞"},
      {id:"lex_verbes_acheter", name:"購物與消費動詞"},
      {id:"lex_verbes_numerique", name:"社群與科技動詞"},
    ]},
    { sub:"🎭 情感與感官動詞（含六人稱現在式）", cats:[
      {id:"lex_verbes_emotion", name:"情感與交流動詞"},
      {id:"lex_verbes_sens", name:"五感體驗與察覺"},
    ]},
    { sub:"⚠️ 萬用片語動詞（常用搭配）", cats:[
      {id:"lex_loc_verbales", name:"基礎動詞延伸片語（avoir/faire/prendre）"},
      {id:"lex_verbes_pronominaux", name:"反身動詞"},
    ]},
    { sub:"🗣️ 道地生活必備片語", cats:[
      {id:"lex_expr_orales", name:"口語情緒與傻眼表達"},
      {id:"lex_expr_interactions", name:"社交接話與回應"},
    ]},
    { sub:"🎨 萬能生活形容詞（含陰陽性單複數）", cats:[
      {id:"lex_adj_gout", name:"飲食與口感形容"},
      {id:"lex_adj_visuel", name:"視覺與設計風格"},
      {id:"lex_adj_paysage", name:"風景與自然美景"},
      {id:"lex_adj_cinema", name:"電影與劇集評價"},
      {id:"lex_adj_audition", name:"音樂與聽覺感受"},
      {id:"lex_adj_humeur", name:"心情與身心狀態"},
      {id:"lex_adj_evaluation", name:"實用評價與CP值"},
    ]},
    { sub:"⚖️ 語氣與程度副詞", cats:[
      {id:"lex_adv_intensite", name:"誇張與程度副詞"},
      {id:"lex_adv_frequence", name:"頻率與時間副詞"},
      {id:"lex_adv_oral", name:"道地口語語氣助詞"},
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
