/* A2 寫作擴充批次 1：10 篇完整範文＋對應練習（對應 A2 單字主題）
   以 push 加入 window.WRITING.templates / .exercises */
(function(){
  if(!window.WRITING){ return; }
  const T=window.WRITING.templates, E=window.WRITING.exercises;

  T.push(
    { id:"wt_a2_resto", title:"電郵：推薦一家餐廳", cat:"考試", level:"A2", delf:true, delfType:"DELF A2・推薦", wordcount:"約 80 字", intro:"寫信向朋友推薦一家餐廳。主題對應單字主題「飲食」。語域日常、用 tu。",
      body:[
        {fr:"Salut Thomas !", zh:"嗨 Thomas！"},
        {fr:"Je connais un super restaurant et je voulais te le recommander.", zh:"我知道一家很棒的餐廳，想推薦給你。"},
        {fr:"Il s'appelle « Le Petit Jardin » et il est juste à côté de la gare.", zh:"它叫「小花園」，就在車站旁邊。"},
        {fr:"La semaine dernière, j'y suis allée avec ma famille.", zh:"上週我跟家人去了那裡。"},
        {fr:"J'ai pris un steak-frites et c'était vraiment délicieux.", zh:"我點了牛排薯條，真的很好吃。"},
        {fr:"Les prix sont raisonnables et le service est très gentil.", zh:"價格合理，服務也很親切。"},
        {fr:"Je te conseille de réserver, parce qu'il y a souvent du monde.", zh:"我建議你先訂位，因為常常很多人。"},
        {fr:"On pourrait y aller ensemble bientôt ! Bises, Winona.", zh:"我們可以找時間一起去！親親，Winona。"},
      ]
    },
    { id:"wt_a2_shopping", title:"電郵：一次購物經驗", cat:"考試", level:"A2", delf:true, delfType:"DELF A2・描述經歷", wordcount:"約 75 字", intro:"寫信描述一次購物經驗。主題對應單字主題「購物」。主要用複合過去式敘事。",
      body:[
        {fr:"Coucou Léa !", zh:"嗨 Léa！"},
        {fr:"Hier, je suis allée faire du shopping en ville.", zh:"昨天我去市區逛街。"},
        {fr:"Je cherchais une robe pour une fête.", zh:"我在找一件參加派對的洋裝。"},
        {fr:"D'abord, je suis entrée dans plusieurs magasins.", zh:"一開始，我逛了好幾家店。"},
        {fr:"Finalement, j'ai trouvé une jolie robe bleue en solde.", zh:"最後，我找到一件特價的漂亮藍色洋裝。"},
        {fr:"Elle n'était pas chère et elle me va très bien.", zh:"它不貴，而且很適合我。"},
        {fr:"J'étais vraiment contente de mon achat.", zh:"我對這次購物很滿意。"},
        {fr:"Et toi, tu as trouvé quelque chose pour la fête ? À bientôt !", zh:"那你呢，你找到派對要穿的了嗎？再聯絡！"},
      ]
    },
    { id:"wt_a2_fete", title:"電郵：介紹一個節日", cat:"考試", level:"A2", delf:true, delfType:"DELF A2・介紹", wordcount:"約 80 字", intro:"向外國朋友介紹你國家的一個節日。主題對應單字主題「節慶」。",
      body:[
        {fr:"Salut Marie !", zh:"嗨 Marie！"},
        {fr:"Tu m'as demandé de te parler d'une fête de mon pays.", zh:"你之前要我介紹我國家的一個節日。"},
        {fr:"À Taïwan, on fête le Nouvel An chinois en hiver.", zh:"在台灣，我們冬天慶祝農曆新年。"},
        {fr:"C'est la fête la plus importante de l'année.", zh:"這是一年中最重要的節日。"},
        {fr:"Toute la famille se réunit pour un grand repas.", zh:"全家會團聚吃一頓大餐。"},
        {fr:"On reçoit aussi des enveloppes rouges avec de l'argent.", zh:"我們還會收到裝錢的紅包。"},
        {fr:"J'adore cette fête parce qu'elle est joyeuse et chaleureuse.", zh:"我超愛這個節日，因為它歡樂又溫馨。"},
        {fr:"Et chez toi, quelle est ta fête préférée ? Bises, Winona.", zh:"那在你那裡，你最喜歡的節日是什麼？親親，Winona。"},
      ]
    },
    { id:"wt_a2_loisirs", title:"短文：我的興趣", cat:"考試", level:"A2", delf:true, delfType:"DELF A2・描述", wordcount:"約 75 字", intro:"描述你空閒時間喜歡做的事。主題對應單字主題「休閒」。",
      body:[
        {fr:"Pendant mon temps libre, j'aime faire beaucoup de choses.", zh:"空閒時，我喜歡做很多事。"},
        {fr:"Tout d'abord, j'adore lire des romans, surtout le soir.", zh:"首先，我超愛看小說，尤其是晚上。"},
        {fr:"J'écoute aussi de la musique presque tous les jours.", zh:"我幾乎每天也都聽音樂。"},
        {fr:"Le week-end, je fais du sport avec mes amis.", zh:"週末我會跟朋友運動。"},
        {fr:"De temps en temps, je vais au cinéma ou au café.", zh:"偶爾我會去看電影或喝咖啡。"},
        {fr:"Ce que je préfère, c'est voyager et découvrir de nouveaux endroits.", zh:"我最喜歡的是旅行、探索新地方。"},
        {fr:"Mes loisirs m'aident à me détendre après les cours.", zh:"這些興趣幫我在課後放鬆。"},
      ]
    },
    { id:"wt_a2_sport", title:"短文：我喜歡的運動", cat:"考試", level:"A2", delf:true, delfType:"DELF A2・描述", wordcount:"約 80 字", intro:"描述你喜歡的一項運動。主題對應單字主題「運動」。",
      body:[
        {fr:"J'aimerais te parler de mon sport préféré : la natation.", zh:"我想跟你聊我最愛的運動：游泳。"},
        {fr:"Je nage depuis que je suis petite.", zh:"我從小就游泳。"},
        {fr:"En général, je vais à la piscine deux fois par semaine.", zh:"我通常一週去游泳池兩次。"},
        {fr:"J'aime ce sport parce qu'il est bon pour la santé et relaxant.", zh:"我喜歡這運動，因為它有益健康又能放鬆。"},
        {fr:"Après avoir nagé, je me sens toujours en pleine forme.", zh:"游完泳，我總是覺得精神飽滿。"},
        {fr:"Le mois dernier, j'ai même participé à une petite compétition.", zh:"上個月我甚至參加了一場小比賽。"},
        {fr:"Je n'ai pas gagné, mais je me suis bien amusée.", zh:"我沒贏，但玩得很開心。"},
        {fr:"Et toi, est-ce que tu fais du sport ?", zh:"那你呢，你有在運動嗎？"},
      ]
    },
    { id:"wt_a2_ville", title:"短文：我居住的城市", cat:"考試", level:"A2", delf:true, delfType:"DELF A2・描述", wordcount:"約 85 字", intro:"描述你居住的城市。主題對應單字主題「城市」。",
      body:[
        {fr:"Je vais te décrire la ville où j'habite.", zh:"我來跟你描述我住的城市。"},
        {fr:"J'habite à Hsinchu, une ville dans le nord de Taïwan.", zh:"我住在新竹，台灣北部的一座城市。"},
        {fr:"Ce n'est pas une très grande ville, mais elle est dynamique.", zh:"它不是很大，但很有活力。"},
        {fr:"Il y a beaucoup d'universités et d'entreprises de technologie.", zh:"這裡有很多大學和科技公司。"},
        {fr:"On y trouve aussi des marchés de nuit avec de très bons plats.", zh:"這裡也有夜市，有很多好吃的。"},
        {fr:"Ce que j'aime, c'est qu'on peut tout faire à pied ou à vélo.", zh:"我喜歡的是，這裡走路或騎腳踏車就能到處去。"},
        {fr:"Le seul inconvénient, c'est qu'il fait souvent du vent.", zh:"唯一的缺點是常常颳風。"},
        {fr:"En général, je me sens très bien ici.", zh:"整體來說，我在這裡過得很好。"},
      ]
    },
    { id:"wt_a2_nature", title:"電郵：一次戶外出遊", cat:"考試", level:"A2", delf:true, delfType:"DELF A2・描述經歷", wordcount:"約 80 字", intro:"描述一次到大自然的出遊。主題對應單字主題「自然」。",
      body:[
        {fr:"Le week-end dernier, je suis allée à la montagne avec des amis.", zh:"上週末，我跟朋友去爬山。"},
        {fr:"On a pris le bus très tôt le matin.", zh:"我們一早就搭公車去。"},
        {fr:"Il faisait beau et l'air était très pur.", zh:"天氣很好，空氣很清新。"},
        {fr:"On a marché pendant trois heures dans la forêt.", zh:"我們在森林裡走了三個小時。"},
        {fr:"En haut, la vue sur la vallée était magnifique.", zh:"山頂上俯瞰山谷的景色美極了。"},
        {fr:"On a pique-niqué et on a pris beaucoup de photos.", zh:"我們野餐，還拍了很多照片。"},
        {fr:"J'étais un peu fatiguée, mais très contente.", zh:"我有點累，但非常開心。"},
        {fr:"J'aimerais vraiment y retourner au printemps.", zh:"我真想春天再去一次。"},
      ]
    },
    { id:"wt_a2_ami", title:"短文：介紹我的好朋友", cat:"考試", level:"A2", delf:true, delfType:"DELF A2・介紹", wordcount:"約 80 字", intro:"介紹你的一位好朋友。主題對應單字主題「人際關係」。",
      body:[
        {fr:"Je voudrais te présenter ma meilleure amie, Léa.", zh:"我想跟你介紹我最好的朋友 Léa。"},
        {fr:"On se connaît depuis l'école primaire.", zh:"我們從小學就認識了。"},
        {fr:"Elle est gentille, drôle et toujours de bonne humeur.", zh:"她善良、風趣，總是心情很好。"},
        {fr:"Elle étudie le design dans une autre ville.", zh:"她在另一座城市念設計。"},
        {fr:"Même si on est loin, on s'appelle très souvent.", zh:"即使相隔遙遠，我們也常通電話。"},
        {fr:"Ce que j'aime chez elle, c'est qu'elle m'écoute toujours.", zh:"我喜歡她的是，她總是願意聽我說。"},
        {fr:"On a beaucoup de souvenirs ensemble.", zh:"我們有很多共同的回憶。"},
        {fr:"C'est vraiment une amie précieuse pour moi.", zh:"她對我而言是非常珍貴的朋友。"},
      ]
    },
    { id:"wt_a2_journee", title:"短文：我平常的一天", cat:"考試", level:"A2", delf:true, delfType:"DELF A2・描述日常", wordcount:"約 80 字", intro:"描述你平常的一天作息。主題對應單字主題「日常生活」。",
      body:[
        {fr:"Je vais te raconter une journée typique de ma semaine.", zh:"我來跟你說我一週中典型的一天。"},
        {fr:"En général, je me lève à sept heures du matin.", zh:"我通常早上七點起床。"},
        {fr:"Après le petit-déjeuner, je vais à l'université en bus.", zh:"吃完早餐，我搭公車去學校。"},
        {fr:"J'ai des cours toute la matinée, puis je déjeune avec mes amis.", zh:"我整個上午都有課，然後跟朋友吃午餐。"},
        {fr:"L'après-midi, je révise à la bibliothèque.", zh:"下午我在圖書館複習。"},
        {fr:"Le soir, je rentre, je dîne et je me repose un peu.", zh:"晚上我回家、吃晚餐、稍微休息。"},
        {fr:"Avant de dormir, j'aime lire ou regarder une série.", zh:"睡前我喜歡看書或追劇。"},
        {fr:"Ma journée est bien remplie, mais j'aime ce rythme.", zh:"我的一天很充實，但我喜歡這個步調。"},
      ]
    },
    { id:"wt_a2_voyage", title:"短文：我夢想的旅行", cat:"考試", level:"A2", delf:true, delfType:"DELF A2・描述計畫", wordcount:"約 85 字", intro:"描述你夢想或計畫的一趟旅行。主題對應單字主題「旅行」。",
      body:[
        {fr:"Je rêve de faire un grand voyage en France.", zh:"我夢想去法國來一趟長途旅行。"},
        {fr:"Depuis longtemps, j'ai envie de visiter Paris et le sud du pays.", zh:"我很久以來就想去巴黎和南部。"},
        {fr:"D'abord, je voudrais voir la tour Eiffel et les musées.", zh:"首先，我想看艾菲爾鐵塔和博物館。"},
        {fr:"Ensuite, j'aimerais aller à Nice pour profiter de la mer.", zh:"接著，我想去尼斯享受海邊。"},
        {fr:"Je voudrais aussi goûter beaucoup de spécialités françaises.", zh:"我也想品嚐很多法國的特色美食。"},
        {fr:"Si possible, je partirais au printemps, quand il fait doux.", zh:"可以的話，我會在春天、天氣溫和時出發。"},
        {fr:"Je sais que ce voyage coûterait cher, mais ce serait un rêve.", zh:"我知道這趟旅行會很貴，但那會是個夢想。"},
        {fr:"J'économise déjà un peu d'argent chaque mois.", zh:"我已經每個月存一點錢了。"},
      ]
    }
  );

  const a2grille=(extra)=>["切題："+extra,"內容：資訊清楚、有具體細節","連貫：用 et, puis, parce que 等基本連接","文法：présent 與 passé composé 運用正確","拼字大致正確、語域日常（用 tu）"];

  E.push(
    { id:"we_a2_resto", title:"推薦一家餐廳", level:"A2", delf:true, delfType:"DELF A2・推薦", target:"~70 字",
      prompt:"寫一封約 70 字的電郵，向朋友推薦一家你喜歡的餐廳：名稱、位置、你點了什麼、為什麼推薦。",
      steps:[{label:"① 招呼＋來意",detail:"親切開場，說要推薦餐廳。"},{label:"② 餐廳資訊",detail:"名稱、位置。"},{label:"③ 你的經驗",detail:"用 passé composé 說你點了什麼、感受。"},{label:"④ 建議＋結尾",detail:"給建議（訂位）並收尾。"}],
      grille:a2grille("完成「推薦餐廳」並含名稱、位置、推薦理由") },
    { id:"we_a2_shopping", title:"描述一次購物經驗", level:"A2", delf:true, delfType:"DELF A2・描述經歷", target:"~70 字",
      prompt:"寫一封約 70 字的電郵，描述你最近一次的購物經驗：你想找什麼、去了哪、買了什麼、感受如何。",
      steps:[{label:"① 招呼＋背景",detail:"說明何時去購物、要找什麼。"},{label:"② 過程",detail:"用 passé composé 敘述。"},{label:"③ 結果",detail:"買到什麼、滿不滿意。"},{label:"④ 結尾",detail:"反問對方並收尾。"}],
      grille:a2grille("完成「描述購物經驗」並含目的、過程、結果") },
    { id:"we_a2_fete", title:"介紹你國家的一個節日", level:"A2", delf:true, delfType:"DELF A2・介紹", target:"~80 字",
      prompt:"寫一段約 80 字的短文，向外國朋友介紹你國家的一個節日：名稱、時間、大家會做什麼、你為什麼喜歡。",
      steps:[{label:"① 點出節日",detail:"名稱與大致時間。"},{label:"② 活動",detail:"大家會做什麼。"},{label:"③ 你的感受",detail:"為什麼喜歡。"},{label:"④ 結尾",detail:"反問對方的節日。"}],
      grille:a2grille("完成「介紹節日」並含名稱、活動、個人感受") },
    { id:"we_a2_loisirs", title:"描述你的興趣", level:"A2", delf:true, delfType:"DELF A2・描述", target:"~70 字",
      prompt:"寫一段約 70 字的短文，描述你空閒時間喜歡做的事，至少 3 項，並說明你最喜歡哪一項。",
      steps:[{label:"① 總起",detail:"空閒時喜歡做很多事。"},{label:"② 列舉",detail:"用 d'abord, aussi 列出活動。"},{label:"③ 最愛",detail:"Ce que je préfère, c'est…"},{label:"④ 結尾",detail:"興趣對你的意義。"}],
      grille:a2grille("完成「描述興趣」並列出至少 3 項活動") },
    { id:"we_a2_sport", title:"描述你喜歡的運動", level:"A2", delf:true, delfType:"DELF A2・描述", target:"~75 字",
      prompt:"寫一段約 75 字的短文，介紹你喜歡的一項運動：是什麼、多久做一次、為什麼喜歡、一次相關的經歷。",
      steps:[{label:"① 點出運動",detail:"你最愛的運動是什麼。"},{label:"② 頻率＋理由",detail:"多久做一次、為什麼喜歡。"},{label:"③ 一次經歷",detail:"用 passé composé 講一次經驗。"},{label:"④ 結尾",detail:"反問對方。"}],
      grille:a2grille("完成「描述運動」並含頻率、理由、一次經歷") },
    { id:"we_a2_ville", title:"描述你居住的城市", level:"A2", delf:true, delfType:"DELF A2・描述", target:"~80 字",
      prompt:"寫一段約 80 字的短文，描述你居住的城市：在哪、大不大、有什麼、你喜歡與不喜歡的地方。",
      steps:[{label:"① 城市基本資料",detail:"名稱、位置、規模。"},{label:"② 特色",detail:"有什麼（大學、市場…）。"},{label:"③ 優缺點",detail:"你喜歡與不喜歡的。"},{label:"④ 總結",detail:"整體感受。"}],
      grille:a2grille("完成「描述城市」並含位置、特色、優缺點") },
    { id:"we_a2_nature", title:"描述一次戶外出遊", level:"A2", delf:true, delfType:"DELF A2・描述經歷", target:"~80 字",
      prompt:"寫一段約 80 字的短文，描述你最近一次到大自然的出遊（爬山、海邊、公園…）：去哪、做什麼、天氣、感受。",
      steps:[{label:"① 背景",detail:"何時、和誰、去哪。"},{label:"② 過程",detail:"用 passé composé 敘述做了什麼。"},{label:"③ 描述",detail:"用 imparfait 描述天氣與景色。"},{label:"④ 感受＋結尾",detail:"心情與想再去。"}],
      grille:a2grille("完成「描述出遊」並含地點、活動、天氣、感受") },
    { id:"we_a2_ami", title:"介紹你的好朋友", level:"A2", delf:true, delfType:"DELF A2・介紹", target:"~75 字",
      prompt:"寫一段約 75 字的短文，介紹你的一位好朋友：怎麼認識、個性、做什麼、你為什麼珍惜這段友誼。",
      steps:[{label:"① 介紹對方",detail:"是誰、怎麼認識。"},{label:"② 個性",detail:"用形容詞描述。"},{label:"③ 你們的關係",detail:"常做什麼、相處。"},{label:"④ 結尾",detail:"這段友誼的意義。"}],
      grille:a2grille("完成「介紹朋友」並含相識、個性、關係") },
    { id:"we_a2_journee", title:"描述你平常的一天", level:"A2", delf:true, delfType:"DELF A2・描述日常", target:"~80 字",
      prompt:"寫一段約 80 字的短文，描述你平常的一天作息：早上、白天、晚上分別做什麼，並說說你喜不喜歡這個步調。",
      steps:[{label:"① 早上",detail:"起床、早餐、出門。"},{label:"② 白天",detail:"上課／工作、午餐。"},{label:"③ 晚上",detail:"回家、晚餐、睡前。"},{label:"④ 感受",detail:"喜不喜歡這節奏。"}],
      grille:a2grille("完成「描述一天」並涵蓋早中晚作息") },
    { id:"we_a2_voyage", title:"描述你夢想的旅行", level:"A2", delf:true, delfType:"DELF A2・描述計畫", target:"~80 字",
      prompt:"寫一段約 80 字的短文，描述你夢想或計畫的一趟旅行：想去哪、想做什麼、何時去、為什麼。",
      steps:[{label:"① 夢想目的地",detail:"想去哪個國家／城市。"},{label:"② 計畫",detail:"用 je voudrais / j'aimerais 列出想做的事。"},{label:"③ 時間與條件",detail:"何時去、用條件式講假設。"},{label:"④ 結尾",detail:"為這趟旅行做的準備。"}],
      grille:a2grille("完成「描述夢想旅行」並含目的地、活動、時間") }
  );
})();

/* A2 補充 3 篇（達 15）：家、學校、工作 */
(function(){
  if(!window.WRITING) return;
  const T=window.WRITING.templates, E=window.WRITING.exercises;
  const a2grille=(extra)=>["切題："+extra,"內容：資訊清楚、有具體細節","連貫：用 et, puis, parce que 等基本連接","文法：présent 與 passé composé 運用正確","拼字大致正確、語域日常"];
  T.push(
    { id:"wt_a2_maison", title:"短文：描述我的家", cat:"考試", level:"A2", delf:true, delfType:"DELF A2・描述", wordcount:"約 75 字", intro:"描述你的家或房間。主題對應單字主題「居家」。",
      body:[
        {fr:"Je vais te décrire l'appartement où j'habite.", zh:"我來描述我住的公寓。"},
        {fr:"J'habite dans un petit appartement avec ma famille.", zh:"我和家人住在一間小公寓。"},
        {fr:"Il y a un salon, deux chambres, une cuisine et une salle de bains.", zh:"有一間客廳、兩間臥室、一間廚房和一間浴室。"},
        {fr:"Ma chambre est petite mais très confortable.", zh:"我的房間很小但很舒適。"},
        {fr:"Il y a un bureau près de la fenêtre où j'étudie.", zh:"窗邊有張書桌，我在那讀書。"},
        {fr:"Ce que je préfère, c'est le balcon avec quelques plantes.", zh:"我最喜歡的是有幾盆植物的陽台。"},
        {fr:"Le matin, j'aime y prendre mon café tranquillement.", zh:"早上我喜歡在那悠閒地喝咖啡。"},
        {fr:"Je me sens vraiment bien chez moi.", zh:"我在家裡覺得很自在。"},
      ]
    },
    { id:"wt_a2_ecole", title:"短文：我的大學生活", cat:"考試", level:"A2", delf:true, delfType:"DELF A2・描述", wordcount:"約 80 字", intro:"描述你的學校或大學生活。主題對應單字主題「學校」。",
      body:[
        {fr:"Je voudrais te parler de ma vie à l'université.", zh:"我想跟你聊我的大學生活。"},
        {fr:"J'étudie la finance à l'université Tsing Hua.", zh:"我在清華大學念財金。"},
        {fr:"Les cours sont intéressants mais parfois difficiles.", zh:"課程很有趣，但有時很難。"},
        {fr:"J'ai cours du lundi au vendredi, surtout le matin.", zh:"我週一到週五有課，主要在早上。"},
        {fr:"Entre les cours, je travaille souvent à la bibliothèque.", zh:"課與課之間，我常在圖書館念書。"},
        {fr:"J'aime beaucoup l'ambiance du campus, il est grand et vert.", zh:"我很喜歡校園的氛圍，又大又綠。"},
        {fr:"Le midi, je mange avec mes camarades à la cafétéria.", zh:"中午我跟同學在學餐吃飯。"},
        {fr:"En général, je suis contente de mes études.", zh:"整體來說，我對我的學業很滿意。"},
      ]
    },
    { id:"wt_a2_metier", title:"短文：我想做的工作", cat:"考試", level:"A2", delf:true, delfType:"DELF A2・描述計畫", wordcount:"約 75 字", intro:"描述你以後想做的工作。主題對應單字主題「職業」。",
      body:[
        {fr:"Plus tard, j'aimerais travailler dans la finance.", zh:"以後我想在金融業工作。"},
        {fr:"Je m'intéresse beaucoup aux marchés et à l'investissement.", zh:"我對市場和投資很感興趣。"},
        {fr:"J'aimerais devenir analyste dans une grande entreprise.", zh:"我想在大公司當分析師。"},
        {fr:"Pour cela, je dois d'abord finir mes études et faire un stage.", zh:"為此，我得先完成學業並實習。"},
        {fr:"C'est un métier qui demande de la rigueur et de la patience.", zh:"這是個需要嚴謹與耐心的工作。"},
        {fr:"Ce qui me motive, c'est de résoudre des problèmes concrets.", zh:"激勵我的是解決實際問題。"},
        {fr:"J'espère aussi pouvoir travailler à l'étranger un jour.", zh:"我也希望有一天能到國外工作。"},
        {fr:"C'est mon rêve professionnel.", zh:"這是我的職業夢想。"},
      ]
    }
  );
  E.push(
    { id:"we_a2_maison", title:"描述你的家", level:"A2", delf:true, delfType:"DELF A2・描述", target:"~75 字",
      prompt:"寫一段約 75 字的短文，描述你的家或房間：有哪些空間、你的房間長怎樣、你最喜歡的角落、整體感受。",
      steps:[{label:"① 總述",detail:"你住哪種房子、和誰住。"},{label:"② 格局",detail:"有哪些房間。"},{label:"③ 你的房間／最愛角落",detail:"描述細節。"},{label:"④ 感受",detail:"在家的感覺。"}],
      grille:a2grille("完成「描述家」並含格局、房間、最愛角落") },
    { id:"we_a2_ecole", title:"描述你的學校生活", level:"A2", delf:true, delfType:"DELF A2・描述", target:"~80 字",
      prompt:"寫一段約 80 字的短文，描述你的學校或大學生活：念什麼、課程如何、平常一天怎麼過、喜不喜歡。",
      steps:[{label:"① 學校與科系",detail:"在哪念什麼。"},{label:"② 課程",detail:"課多不多、難不難。"},{label:"③ 校園生活",detail:"課餘與用餐。"},{label:"④ 感受",detail:"整體滿不滿意。"}],
      grille:a2grille("完成「描述學校生活」並含科系、課程、日常") },
    { id:"we_a2_metier", title:"描述你想做的工作", level:"A2", delf:true, delfType:"DELF A2・描述計畫", target:"~75 字",
      prompt:"寫一段約 75 字的短文，描述你以後想做的工作：是什麼、為什麼想做、需要具備什麼、你的計畫。",
      steps:[{label:"① 想做的工作",detail:"未來想從事什麼。"},{label:"② 理由",detail:"為什麼感興趣。"},{label:"③ 條件與準備",detail:"需要什麼、你打算怎麼做。"},{label:"④ 結尾",detail:"你的職業願景。"}],
      grille:a2grille("完成「描述未來工作」並含職業、理由、準備") }
  );
})();
