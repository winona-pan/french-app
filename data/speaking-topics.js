/* 口說主題練習資料：window.SPEAKING_TOPICS（扁平、不分等級）
   {id, level, theme(對應單字主題), title, intro, items:[{q,qzh,a,azh,note?}]}
   A1 第一批：8 主題 */
window.SPEAKING_TOPICS = window.SPEAKING_TOPICS || [];
(function(){
  const TP=window.SPEAKING_TOPICS;
  TP.push(
    { id:"st_a1_presentation", level:"A1", theme:"自我介紹", title:"自我介紹",
      intro:"考官會問關於你自己的基本問題。用簡單句清楚回答即可。",
      items:[
        {q:"Comment vous appelez-vous ?", qzh:"您叫什麼名字？", a:"Je m'appelle Winona.", azh:"我叫 Winona。"},
        {q:"Quel âge avez-vous ?", qzh:"您幾歲？", a:"J'ai vingt ans.", azh:"我二十歲。"},
        {q:"D'où venez-vous ?", qzh:"您來自哪裡？", a:"Je viens de Taïwan.", azh:"我來自台灣。"},
        {q:"Qu'est-ce que vous faites dans la vie ?", qzh:"您是做什麼的？", a:"Je suis étudiante en finance.", azh:"我是財金系的學生。"},
        {q:"Vous parlez quelles langues ?", qzh:"您會說哪些語言？", a:"Je parle chinois, anglais et un peu français.", azh:"我會說中文、英文和一點法文。"},
        {q:"Quels sont vos loisirs ?", qzh:"您的興趣是什麼？", a:"J'aime la musique et les voyages.", azh:"我喜歡音樂和旅行。"},
      ]
    },
    { id:"st_a1_famille", level:"A1", theme:"家庭", title:"我的家庭",
      intro:"介紹你的家人：成員、職業、住在一起嗎。",
      items:[
        {q:"Vous avez des frères et sœurs ?", qzh:"您有兄弟姊妹嗎？", a:"Oui, j'ai un frère et une sœur.", azh:"有，我有一個哥哥和一個妹妹。"},
        {q:"Vous habitez avec votre famille ?", qzh:"您和家人住嗎？", a:"Oui, j'habite avec mes parents.", azh:"是的，我和父母住。"},
        {q:"Que fait votre père ?", qzh:"您父親做什麼工作？", a:"Mon père est ingénieur.", azh:"我父親是工程師。"},
        {q:"Que fait votre mère ?", qzh:"您母親做什麼工作？", a:"Ma mère est professeure.", azh:"我母親是老師。"},
        {q:"Vous avez un animal de compagnie ?", qzh:"您有養寵物嗎？", a:"Oui, j'ai un chat qui s'appelle Mochi.", azh:"有，我養了一隻叫麻糬的貓。"},
        {q:"Votre famille est grande ou petite ?", qzh:"您的家庭大還是小？", a:"Ma famille est plutôt petite.", azh:"我的家庭算小。"},
      ]
    },
    { id:"st_a1_loisirs", level:"A1", theme:"休閒興趣", title:"我的興趣",
      intro:"談談你空閒時喜歡做的事。",
      items:[
        {q:"Qu'est-ce que vous aimez faire le week-end ?", qzh:"您週末喜歡做什麼？", a:"Le week-end, j'aime sortir avec mes amis.", azh:"週末我喜歡和朋友出去。"},
        {q:"Vous faites du sport ?", qzh:"您有運動嗎？", a:"Oui, je fais de la natation.", azh:"有，我游泳。"},
        {q:"Vous aimez le cinéma ?", qzh:"您喜歡電影嗎？", a:"Oui, j'adore les films, surtout les comédies.", azh:"是的，我超愛看電影，尤其是喜劇。"},
        {q:"Quelle musique aimez-vous ?", qzh:"您喜歡什麼音樂？", a:"J'aime la pop et la musique française.", azh:"我喜歡流行樂和法語歌。"},
        {q:"Vous aimez lire ?", qzh:"您喜歡閱讀嗎？", a:"Oui, je lis souvent des romans.", azh:"是的，我常看小說。"},
        {q:"Qu'est-ce que vous faites le soir ?", qzh:"您晚上做什麼？", a:"Le soir, je regarde des séries.", azh:"晚上我看影集。"},
      ]
    },
    { id:"st_a1_nourriture", level:"A1", theme:"飲食", title:"食物與飲料",
      intro:"談談你的飲食喜好。",
      items:[
        {q:"Qu'est-ce que vous aimez manger ?", qzh:"您喜歡吃什麼？", a:"J'aime beaucoup les nouilles et le riz.", azh:"我很喜歡麵和飯。"},
        {q:"Quel est votre plat préféré ?", qzh:"您最愛的料理是什麼？", a:"Mon plat préféré, c'est le hot pot.", azh:"我最愛的是火鍋。"},
        {q:"Qu'est-ce que vous prenez au petit-déjeuner ?", qzh:"您早餐吃什麼？", a:"Le matin, je prends du pain et un café.", azh:"早上我吃麵包配咖啡。"},
        {q:"Vous aimez cuisiner ?", qzh:"您喜歡做菜嗎？", a:"Oui, j'aime cuisiner le week-end.", azh:"是的，我喜歡週末做菜。"},
        {q:"Qu'est-ce que vous buvez souvent ?", qzh:"您常喝什麼？", a:"Je bois souvent du thé.", azh:"我常喝茶。"},
        {q:"Vous aimez les desserts ?", qzh:"您喜歡甜點嗎？", a:"Oui, j'adore les gâteaux.", azh:"是的，我超愛蛋糕。"},
      ]
    },
    { id:"st_a1_journee", level:"A1", theme:"日常生活", title:"我的一天",
      intro:"描述你平常一天的作息（用簡單現在式）。",
      items:[
        {q:"À quelle heure vous levez-vous ?", qzh:"您幾點起床？", a:"Je me lève à sept heures.", azh:"我七點起床。"},
        {q:"Comment allez-vous à l'université ?", qzh:"您怎麼去學校？", a:"J'y vais en bus.", azh:"我搭公車去。"},
        {q:"Qu'est-ce que vous faites le matin ?", qzh:"您早上做什麼？", a:"Le matin, j'ai des cours.", azh:"早上我有課。"},
        {q:"Où déjeunez-vous ?", qzh:"您在哪吃午餐？", a:"Je déjeune à la cafétéria avec mes amis.", azh:"我和朋友在學餐吃午餐。"},
        {q:"À quelle heure rentrez-vous ?", qzh:"您幾點回家？", a:"Je rentre vers six heures.", azh:"我大約六點回家。"},
        {q:"Que faites-vous avant de dormir ?", qzh:"您睡前做什麼？", a:"Avant de dormir, je lis un peu.", azh:"睡前我看一下書。"},
      ]
    },
    { id:"st_a1_ville", level:"A1", theme:"城市與居住", title:"我住的地方",
      intro:"談談你住的城市與住處。",
      items:[
        {q:"Où habitez-vous ?", qzh:"您住哪裡？", a:"J'habite à Hsinchu, à Taïwan.", azh:"我住在台灣新竹。"},
        {q:"Vous habitez dans une maison ou un appartement ?", qzh:"您住房子還是公寓？", a:"J'habite dans un appartement.", azh:"我住公寓。"},
        {q:"C'est une grande ville ?", qzh:"那是大城市嗎？", a:"Non, ce n'est pas très grand, mais c'est agréable.", azh:"不，不是很大，但很舒適。"},
        {q:"Qu'est-ce qu'il y a dans votre ville ?", qzh:"您的城市有什麼？", a:"Il y a des universités et des marchés de nuit.", azh:"有大學和夜市。"},
        {q:"Vous aimez votre quartier ?", qzh:"您喜歡您的社區嗎？", a:"Oui, il est calme et pratique.", azh:"喜歡，它安靜又方便。"},
      ]
    },
    { id:"st_a1_meteo", level:"A1", theme:"天氣季節", title:"天氣與季節",
      intro:"談談天氣與你喜歡的季節。",
      items:[
        {q:"Quel temps fait-il aujourd'hui ?", qzh:"今天天氣如何？", a:"Aujourd'hui, il fait beau et chaud.", azh:"今天天氣很好又熱。"},
        {q:"Quelle est votre saison préférée ?", qzh:"您最喜歡哪個季節？", a:"Ma saison préférée, c'est le printemps.", azh:"我最喜歡春天。"},
        {q:"Il fait froid en hiver chez vous ?", qzh:"您那裡冬天冷嗎？", a:"Oui, mais pas trop froid.", azh:"會，但不會太冷。"},
        {q:"Vous aimez la pluie ?", qzh:"您喜歡下雨嗎？", a:"Pas vraiment, je préfère le soleil.", azh:"不太喜歡，我比較喜歡晴天。"},
        {q:"Qu'est-ce que vous faites quand il pleut ?", qzh:"下雨時您做什麼？", a:"Quand il pleut, je reste à la maison.", azh:"下雨時我待在家。"},
      ]
    },
    { id:"st_a1_courses", level:"A1", theme:"購物數字", title:"購物與付款",
      intro:"在商店購物、問價錢、付款的簡單對話。",
      items:[
        {q:"Vous aimez faire les courses ?", qzh:"您喜歡購物嗎？", a:"Oui, surtout le week-end.", azh:"喜歡，尤其週末。"},
        {q:"Combien coûte ce café ?", qzh:"這杯咖啡多少錢？", a:"Il coûte trois euros.", azh:"三歐元。"},
        {q:"Vous payez comment ?", qzh:"您怎麼付款？", a:"Je paie par carte, s'il vous plaît.", azh:"我刷卡，謝謝。"},
        {q:"Qu'est-ce que vous achetez souvent ?", qzh:"您常買什麼？", a:"J'achète souvent des livres.", azh:"我常買書。"},
        {q:"Où faites-vous vos courses ?", qzh:"您在哪購物？", a:"Je fais mes courses au supermarché près de chez moi.", azh:"我在家附近的超市購物。"},
      ]
    }
  );
})();

/* A1 第二批：7 主題（達 15） */
(function(){
  const TP=window.SPEAKING_TOPICS;
  TP.push(
    { id:"st_a1_vetements", level:"A1", theme:"衣著顏色", title:"衣著與顏色",
      intro:"談談你的穿著與喜歡的顏色。",
      items:[
        {q:"Qu'est-ce que vous portez aujourd'hui ?", qzh:"您今天穿什麼？", a:"Aujourd'hui, je porte un jean et un pull bleu.", azh:"今天我穿牛仔褲和藍色毛衣。"},
        {q:"Quelle est votre couleur préférée ?", qzh:"您最喜歡的顏色？", a:"Ma couleur préférée, c'est le bleu.", azh:"我最喜歡藍色。"},
        {q:"Vous aimez la mode ?", qzh:"您喜歡時尚嗎？", a:"Un peu, mais je préfère les vêtements simples.", azh:"一點，但我比較喜歡簡單的衣服。"},
        {q:"Qu'est-ce que vous portez en hiver ?", qzh:"您冬天穿什麼？", a:"En hiver, je porte un manteau et une écharpe.", azh:"冬天我穿大衣和圍巾。"},
        {q:"Où achetez-vous vos vêtements ?", qzh:"您在哪買衣服？", a:"J'achète mes vêtements en ligne ou au centre commercial.", azh:"我在網路或購物中心買衣服。"},
      ]
    },
    { id:"st_a1_sante", level:"A1", theme:"身體健康", title:"身體與健康",
      intro:"簡單表達身體狀況與保健習慣。",
      items:[
        {q:"Comment allez-vous aujourd'hui ?", qzh:"您今天好嗎？", a:"Je vais bien, merci.", azh:"我很好，謝謝。"},
        {q:"Vous faites du sport pour rester en forme ?", qzh:"您運動保持健康嗎？", a:"Oui, je marche et je nage.", azh:"有，我走路和游泳。"},
        {q:"Qu'est-ce que vous faites quand vous êtes malade ?", qzh:"生病時您怎麼辦？", a:"Quand je suis malade, je me repose et je bois beaucoup d'eau.", azh:"生病時我休息並多喝水。"},
        {q:"Vous dormez bien ?", qzh:"您睡得好嗎？", a:"En général, je dors sept ou huit heures.", azh:"一般我睡七到八小時。"},
        {q:"Vous mangez sainement ?", qzh:"您吃得健康嗎？", a:"J'essaie de manger beaucoup de légumes.", azh:"我盡量多吃蔬菜。"},
      ]
    },
    { id:"st_a1_ecole", level:"A1", theme:"學校課業", title:"學校與課業",
      intro:"談談你的學業。",
      items:[
        {q:"Qu'est-ce que vous étudiez ?", qzh:"您讀什麼？", a:"J'étudie la finance à l'université.", azh:"我在大學念財金。"},
        {q:"Quelle est votre matière préférée ?", qzh:"您最喜歡的科目？", a:"Ma matière préférée, c'est l'économie.", azh:"我最喜歡經濟學。"},
        {q:"Vous avez beaucoup de cours ?", qzh:"您課多嗎？", a:"Oui, j'ai cours presque tous les jours.", azh:"多，我幾乎每天有課。"},
        {q:"Où étudiez-vous ?", qzh:"您在哪念書？", a:"J'étudie souvent à la bibliothèque.", azh:"我常在圖書館念書。"},
        {q:"Les cours sont difficiles ?", qzh:"課難嗎？", a:"Certains sont difficiles, mais intéressants.", azh:"有些很難，但很有趣。"},
      ]
    },
    { id:"st_a1_heure", level:"A1", theme:"時間數字", title:"時間與約定",
      intro:"看時間、約時間的簡單對話。",
      items:[
        {q:"Quelle heure est-il ?", qzh:"現在幾點？", a:"Il est dix heures et demie.", azh:"現在十點半。"},
        {q:"À quelle heure commencez-vous les cours ?", qzh:"您幾點開始上課？", a:"Mes cours commencent à neuf heures.", azh:"我的課九點開始。"},
        {q:"Vous êtes libre ce week-end ?", qzh:"您這週末有空嗎？", a:"Oui, je suis libre samedi après-midi.", azh:"有，我週六下午有空。"},
        {q:"On se retrouve où et à quelle heure ?", qzh:"我們在哪、幾點碰面？", a:"On peut se retrouver devant le café à trois heures.", azh:"我們可以三點在咖啡館前碰面。"},
        {q:"Vous êtes souvent en retard ?", qzh:"您常遲到嗎？", a:"Non, j'essaie d'être toujours à l'heure.", azh:"不，我盡量準時。"},
      ]
    },
    { id:"st_a1_animaux", level:"A1", theme:"動物", title:"動物與寵物",
      intro:"談談你喜歡的動物與寵物。",
      items:[
        {q:"Vous aimez les animaux ?", qzh:"您喜歡動物嗎？", a:"Oui, j'adore les animaux, surtout les chats.", azh:"是的，我超愛動物，尤其是貓。"},
        {q:"Vous avez un animal de compagnie ?", qzh:"您有養寵物嗎？", a:"Oui, j'ai un chat qui s'appelle Mochi.", azh:"有，我養了一隻叫麻糬的貓。"},
        {q:"Quel est votre animal préféré ?", qzh:"您最喜歡的動物？", a:"Mon animal préféré, c'est le panda.", azh:"我最喜歡熊貓。"},
        {q:"Vous voudriez avoir un chien ?", qzh:"您想養狗嗎？", a:"Oui, mais mon appartement est trop petit.", azh:"想，但我的公寓太小。"},
        {q:"Il y a beaucoup d'animaux chez vous ?", qzh:"您家有很多動物嗎？", a:"Non, j'ai seulement un chat.", azh:"沒有，我只有一隻貓。"},
      ]
    },
    { id:"st_a1_transport", level:"A1", theme:"交通", title:"交通方式",
      intro:"談談你怎麼移動、通勤。",
      items:[
        {q:"Comment allez-vous à l'université ?", qzh:"您怎麼去學校？", a:"J'y vais en bus ou à vélo.", azh:"我搭公車或騎腳踏車去。"},
        {q:"Vous avez une voiture ?", qzh:"您有車嗎？", a:"Non, je n'ai pas de voiture.", azh:"沒有，我沒有車。"},
        {q:"Le bus est pratique chez vous ?", qzh:"您那裡公車方便嗎？", a:"Oui, il y a beaucoup de bus.", azh:"方便，公車很多。"},
        {q:"Vous aimez marcher ?", qzh:"您喜歡走路嗎？", a:"Oui, j'aime marcher quand il fait beau.", azh:"喜歡，天氣好時我喜歡走路。"},
        {q:"Combien de temps mettez-vous pour aller en cours ?", qzh:"您去上課要多久？", a:"Je mets environ vingt minutes.", azh:"大約二十分鐘。"},
      ]
    },
    { id:"st_a1_restaurant", level:"A1", theme:"餐廳點餐", title:"在餐廳",
      intro:"上餐廳、點餐的簡單對話。",
      items:[
        {q:"Vous mangez souvent au restaurant ?", qzh:"您常上餐廳嗎？", a:"Oui, une ou deux fois par semaine.", azh:"是的，一週一兩次。"},
        {q:"Qu'est-ce que vous commandez en général ?", qzh:"您一般點什麼？", a:"En général, je commande des pâtes ou une salade.", azh:"一般我點義大利麵或沙拉。"},
        {q:"Vous préférez le restaurant ou cuisiner ?", qzh:"您偏好上餐廳還是自己煮？", a:"Je préfère cuisiner, mais j'aime sortir le week-end.", azh:"我偏好自己煮，但週末喜歡出去吃。"},
        {q:"Qu'est-ce que vous buvez au restaurant ?", qzh:"您在餐廳喝什麼？", a:"Je bois de l'eau ou un jus.", azh:"我喝水或果汁。"},
        {q:"Vous prenez un dessert ?", qzh:"您會點甜點嗎？", a:"Oui, presque toujours un dessert.", azh:"會，幾乎都會點甜點。"},
      ]
    }
  );
})();
