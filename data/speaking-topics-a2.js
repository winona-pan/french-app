/* 口說主題練習 A2 第一批：5 主題（回答較長，含複合過去式與簡單意見） */
(function(){
  window.SPEAKING_TOPICS = window.SPEAKING_TOPICS || [];
  const TP=window.SPEAKING_TOPICS;
  TP.push(
    { id:"st_a2_voyage", level:"A2", theme:"旅行", title:"談一次旅行",
      intro:"用複合過去式講一次旅行經歷：去哪、做了什麼、感受。",
      items:[
        {q:"Vous avez déjà voyagé à l'étranger ?", qzh:"您出過國嗎？", a:"Oui, je suis allée au Japon l'année dernière.", azh:"有，我去年去了日本。"},
        {q:"Qu'est-ce que vous avez fait là-bas ?", qzh:"您在那做了什麼？", a:"J'ai visité des temples et j'ai goûté beaucoup de plats locaux.", azh:"我參觀了寺廟，還品嚐了很多當地料理。"},
        {q:"Avec qui êtes-vous parti(e) ?", qzh:"您和誰一起去？", a:"Je suis partie avec deux amies de l'université.", azh:"我和兩個大學朋友一起去。"},
        {q:"Qu'est-ce qui vous a plu le plus ?", qzh:"您最喜歡什麼？", a:"Ce qui m'a le plus plu, c'est l'ambiance des rues le soir.", azh:"我最喜歡的是夜晚街道的氛圍。"},
        {q:"Vous aimeriez y retourner ?", qzh:"您想再去嗎？", a:"Oui, j'aimerais beaucoup y retourner un jour.", azh:"想，我很想有天再去。"},
      ]
    },
    { id:"st_a2_etudes", level:"A2", theme:"學業職業", title:"學業與未來工作",
      intro:"談談你的科系、未來計畫與遇到的挑戰。",
      items:[
        {q:"Pourquoi avez-vous choisi la finance ?", qzh:"您為什麼選財金？", a:"Je l'ai choisie parce que je m'intéresse beaucoup aux marchés.", azh:"我選它因為我對市場很有興趣。"},
        {q:"Qu'est-ce que vous voulez faire plus tard ?", qzh:"您以後想做什麼？", a:"Plus tard, j'aimerais travailler comme analyste financière.", azh:"以後我想當財務分析師。"},
        {q:"Vous avez déjà fait un stage ?", qzh:"您實習過嗎？", a:"Pas encore, mais j'en cherche un pour cet été.", azh:"還沒，但我在找今年暑假的實習。"},
        {q:"Qu'est-ce qui est difficile dans vos études ?", qzh:"您的學業哪裡難？", a:"Le plus difficile, c'est de bien gérer mon temps.", azh:"最難的是好好管理時間。"},
        {q:"Vous travaillez à côté des cours ?", qzh:"您課餘有打工嗎？", a:"Parfois, je donne des cours particuliers le week-end.", azh:"有時候，我週末當家教。"},
      ]
    },
    { id:"st_a2_sante", level:"A2", theme:"健康運動", title:"健康與運動習慣",
      intro:"談談你怎麼保持健康、有沒有改變習慣。",
      items:[
        {q:"Qu'est-ce que vous faites pour rester en forme ?", qzh:"您怎麼保持健康？", a:"Je fais du sport et j'essaie de bien manger.", azh:"我運動並盡量吃得好。"},
        {q:"Vous avez changé vos habitudes récemment ?", qzh:"您最近改變習慣了嗎？", a:"Oui, j'ai commencé à dormir plus tôt et à boire moins de café.", azh:"有，我開始早點睡、少喝咖啡。"},
        {q:"Le sport est important pour vous ?", qzh:"運動對您重要嗎？", a:"Oui, ça m'aide à me détendre après les cours.", azh:"是的，它幫我課後放鬆。"},
        {q:"Qu'est-ce que vous évitez de manger ?", qzh:"您避免吃什麼？", a:"J'évite de manger trop de sucre et de plats trop gras.", azh:"我避免吃太多糖和太油的食物。"},
        {q:"Vous vous sentez stressé(e) parfois ?", qzh:"您有時會有壓力嗎？", a:"Oui, surtout pendant la période des examens.", azh:"會，尤其考試期間。"},
      ]
    },
    { id:"st_a2_souvenir", level:"A2", theme:"難忘經歷", title:"一個難忘的回憶",
      intro:"用過去式講一個美好或難忘的回憶。",
      items:[
        {q:"Parlez-moi d'un bon souvenir.", qzh:"跟我說一個美好的回憶。", a:"Un de mes meilleurs souvenirs, c'est mon premier voyage toute seule.", azh:"我最棒的回憶之一是第一次獨自旅行。"},
        {q:"Quand est-ce que c'était ?", qzh:"那是什麼時候？", a:"C'était il y a deux ans, pendant les vacances d'été.", azh:"那是兩年前的暑假。"},
        {q:"Pourquoi ce moment était spécial ?", qzh:"為什麼那一刻很特別？", a:"Parce que je me suis sentie vraiment libre et indépendante.", azh:"因為我覺得自己真的很自由、很獨立。"},
        {q:"Qu'est-ce que vous avez appris ?", qzh:"您學到了什麼？", a:"J'ai appris à me débrouiller toute seule.", azh:"我學會自己一個人應付一切。"},
        {q:"Vous aimeriez revivre ce moment ?", qzh:"您想重溫那一刻嗎？", a:"Oui, c'était vraiment une expérience inoubliable.", azh:"想，那真的是難忘的經驗。"},
      ]
    },
    { id:"st_a2_technologie", level:"A2", theme:"科技網路", title:"科技與手機",
      intro:"談談你怎麼用手機與科技，並簡單表達看法。",
      items:[
        {q:"Vous utilisez beaucoup votre téléphone ?", qzh:"您常用手機嗎？", a:"Oui, peut-être un peu trop, honnêtement.", azh:"是的，老實說可能有點太多。"},
        {q:"Qu'est-ce que vous faites avec votre téléphone ?", qzh:"您用手機做什麼？", a:"Je l'utilise pour étudier, discuter et écouter de la musique.", azh:"我用它念書、聊天和聽音樂。"},
        {q:"Les réseaux sociaux sont utiles selon vous ?", qzh:"您覺得社群媒體有用嗎？", a:"Oui, mais il faut faire attention au temps qu'on y passe.", azh:"有用，但要注意花在上面的時間。"},
        {q:"Vous pourriez vivre sans téléphone ?", qzh:"您能沒手機過活嗎？", a:"Ce serait difficile, mais pendant quelques jours, oui.", azh:"會很難，但幾天的話可以。"},
        {q:"La technologie a changé votre vie ?", qzh:"科技改變了您的生活嗎？", a:"Oui, elle a rendu beaucoup de choses plus faciles.", azh:"是的，它讓很多事更方便。"},
      ]
    }
  );
})();

/* A2 第二批：10 主題（達 15） */
(function(){
  const TP=window.SPEAKING_TOPICS;
  TP.push(
    { id:"st_a2_cuisine", level:"A2", theme:"美食料理", title:"做菜與飲食",
      intro:"談談你的飲食與做菜習慣。",
      items:[
        {q:"Vous aimez cuisiner ?", qzh:"您喜歡做菜嗎？", a:"Oui, j'adore cuisiner, surtout les plats taïwanais.", azh:"是的，我超愛做菜，尤其是台灣菜。"},
        {q:"Quel plat savez-vous bien préparer ?", qzh:"您擅長做什麼菜？", a:"Je sais bien préparer les nouilles sautées.", azh:"我很會做炒麵。"},
        {q:"Vous préférez la cuisine de quel pays ?", qzh:"您偏好哪國料理？", a:"J'aime beaucoup la cuisine japonaise et italienne.", azh:"我很喜歡日式和義式料理。"},
        {q:"Vous mangez souvent dehors ?", qzh:"您常外食嗎？", a:"Oui, mais j'essaie de cuisiner plus pour faire des économies.", azh:"是的，但我盡量多自己煮來省錢。"},
        {q:"Qu'est-ce que vous avez mangé hier soir ?", qzh:"您昨晚吃了什麼？", a:"Hier soir, j'ai mangé une soupe de nouilles avec des légumes.", azh:"昨晚我吃了蔬菜湯麵。"},
      ]
    },
    { id:"st_a2_shopping", level:"A2", theme:"購物消費", title:"購物與消費",
      intro:"談談你的購物習慣與看法。",
      items:[
        {q:"Vous aimez faire du shopping ?", qzh:"您喜歡逛街購物嗎？", a:"Oui, mais seulement de temps en temps.", azh:"喜歡，但只是偶爾。"},
        {q:"Qu'est-ce que vous avez acheté récemment ?", qzh:"您最近買了什麼？", a:"J'ai acheté une nouvelle paire de chaussures la semaine dernière.", azh:"我上週買了一雙新鞋。"},
        {q:"Vous préférez acheter en ligne ou en magasin ?", qzh:"您偏好網購還是實體店？", a:"Je préfère acheter en ligne, c'est plus pratique.", azh:"我偏好網購，比較方便。"},
        {q:"Vous faites attention aux prix ?", qzh:"您會在意價格嗎？", a:"Oui, je compare souvent avant d'acheter.", azh:"會，我買之前常比價。"},
        {q:"Qu'est-ce que vous aimeriez acheter bientôt ?", qzh:"您最近想買什麼？", a:"J'aimerais bien acheter un nouvel ordinateur.", azh:"我蠻想買一台新電腦。"},
      ]
    },
    { id:"st_a2_logement", level:"A2", theme:"居住環境", title:"住處與理想的家",
      intro:"描述你的住處與理想的居住環境。",
      items:[
        {q:"Décrivez votre logement.", qzh:"描述您的住處。", a:"J'habite dans un petit appartement avec deux chambres.", azh:"我住在一間有兩房的小公寓。"},
        {q:"Qu'est-ce que vous aimez dans votre quartier ?", qzh:"您喜歡您社區的什麼？", a:"J'aime mon quartier parce qu'il est calme et près de l'université.", azh:"我喜歡我的社區，因為它安靜又靠近學校。"},
        {q:"Vous aimeriez déménager un jour ?", qzh:"您想過搬家嗎？", a:"Oui, plus tard j'aimerais vivre dans une plus grande ville.", azh:"想，以後我想住更大的城市。"},
        {q:"Comment serait votre maison idéale ?", qzh:"您理想的家是什麼樣？", a:"Ma maison idéale aurait un grand balcon et beaucoup de lumière.", azh:"我理想的家會有大陽台和充足的採光。"},
        {q:"Vous préférez vivre seul(e) ou avec d'autres ?", qzh:"您偏好獨居還是和別人住？", a:"Pour l'instant, je préfère vivre avec ma famille.", azh:"目前我比較喜歡和家人住。"},
      ]
    },
    { id:"st_a2_nature", level:"A2", theme:"自然環境", title:"大自然與環境",
      intro:"談談你與大自然、環保的關係。",
      items:[
        {q:"Vous aimez la nature ?", qzh:"您喜歡大自然嗎？", a:"Oui, j'aime beaucoup me promener dans la nature.", azh:"是的，我很喜歡在大自然裡散步。"},
        {q:"Qu'est-ce que vous faites pour l'environnement ?", qzh:"您為環境做什麼？", a:"Je trie mes déchets et je prends souvent le vélo.", azh:"我做垃圾分類，也常騎腳踏車。"},
        {q:"Vous êtes déjà allé(e) à la montagne ?", qzh:"您去過山上嗎？", a:"Oui, je suis allée à la montagne le mois dernier.", azh:"有，我上個月去爬山。"},
        {q:"Vous préférez la mer ou la montagne ?", qzh:"您偏好海邊還是山上？", a:"Je préfère la mer, parce que j'adore nager.", azh:"我偏好海邊，因為我超愛游泳。"},
        {q:"L'environnement vous préoccupe ?", qzh:"您擔心環境問題嗎？", a:"Oui, je pense qu'on doit tous faire un effort.", azh:"會，我覺得我們都該努力。"},
      ]
    },
    { id:"st_a2_fetes", level:"A2", theme:"節慶傳統", title:"節慶與傳統",
      intro:"介紹你喜歡的節日與慶祝方式。",
      items:[
        {q:"Quelle est votre fête préférée ?", qzh:"您最喜歡的節日？", a:"Ma fête préférée, c'est le Nouvel An chinois.", azh:"我最喜歡農曆新年。"},
        {q:"Comment vous la fêtez ?", qzh:"您怎麼慶祝？", a:"On se réunit en famille pour un grand repas.", azh:"我們全家團聚吃大餐。"},
        {q:"Qu'est-ce que vous avez fait pour la dernière fête ?", qzh:"上次過節您做了什麼？", a:"La dernière fois, j'ai aidé à préparer le dîner.", azh:"上次我幫忙準備晚餐。"},
        {q:"Il y a des plats spéciaux ?", qzh:"有特別的菜餚嗎？", a:"Oui, on mange des raviolis et du poisson.", azh:"有，我們吃餃子和魚。"},
        {q:"Vous aimez les fêtes traditionnelles ?", qzh:"您喜歡傳統節日嗎？", a:"Oui, parce qu'elles réunissent toute la famille.", azh:"喜歡，因為它們讓全家團聚。"},
      ]
    },
    { id:"st_a2_sport", level:"A2", theme:"運動賽事", title:"運動與比賽",
      intro:"談談你做的運動與相關經驗。",
      items:[
        {q:"Vous faites quel sport ?", qzh:"您做什麼運動？", a:"Je fais de la natation et je cours un peu.", azh:"我游泳，也跑一點步。"},
        {q:"Depuis quand faites-vous ce sport ?", qzh:"您做這運動多久了？", a:"Je nage depuis l'enfance.", azh:"我從小就游泳。"},
        {q:"Vous avez déjà participé à une compétition ?", qzh:"您參加過比賽嗎？", a:"Oui, j'ai participé à une petite course l'année dernière.", azh:"有，我去年參加了一場小型賽跑。"},
        {q:"Vous regardez le sport à la télé ?", qzh:"您看電視轉播運動嗎？", a:"Parfois, surtout pendant les Jeux olympiques.", azh:"有時候，尤其奧運期間。"},
        {q:"Le sport est important pour vous ?", qzh:"運動對您重要嗎？", a:"Oui, ça me garde en forme et de bonne humeur.", azh:"是的，它讓我保持健康和好心情。"},
      ]
    },
    { id:"st_a2_amitie", level:"A2", theme:"友誼人際", title:"朋友與友誼",
      intro:"談談你的朋友與友誼觀。",
      items:[
        {q:"Vous avez beaucoup d'amis ?", qzh:"您朋友多嗎？", a:"J'ai quelques amis proches, c'est l'essentiel.", azh:"我有幾個好朋友，這才是重點。"},
        {q:"Comment avez-vous rencontré votre meilleur(e) ami(e) ?", qzh:"您怎麼認識最好的朋友？", a:"On s'est rencontrées à l'école primaire.", azh:"我們在小學認識的。"},
        {q:"Qu'est-ce que vous faites avec vos amis ?", qzh:"您和朋友做什麼？", a:"On sort manger, on discute et on voyage parfois.", azh:"我們一起吃飯、聊天，有時旅行。"},
        {q:"C'est quoi un bon ami pour vous ?", qzh:"對您而言什麼是好朋友？", a:"Pour moi, un bon ami est quelqu'un qui écoute et qui est honnête.", azh:"對我來說，好朋友是會傾聽又誠實的人。"},
        {q:"Vous vous disputez parfois ?", qzh:"你們有時會吵架嗎？", a:"Rarement, et on se réconcilie vite.", azh:"很少，而且我們很快就和好。"},
      ]
    },
    { id:"st_a2_argent", level:"A2", theme:"金錢理財", title:"金錢與理財",
      intro:"談談你的用錢與理財習慣。",
      items:[
        {q:"Vous gérez bien votre argent ?", qzh:"您理財理得好嗎？", a:"J'essaie, je note mes dépenses chaque mois.", azh:"我盡量，我每月記帳。"},
        {q:"Vous économisez pour quelque chose ?", qzh:"您為什麼存錢？", a:"Oui, j'économise pour voyager l'été prochain.", azh:"有，我為明年夏天的旅行存錢。"},
        {q:"Vous dépensez beaucoup pour quoi ?", qzh:"您主要花錢在什麼？", a:"Je dépense surtout pour les livres et la nourriture.", azh:"我主要花在書和食物上。"},
        {q:"Vous préférez payer en liquide ou par carte ?", qzh:"您偏好付現還是刷卡？", a:"Je préfère payer par carte, c'est plus simple.", azh:"我偏好刷卡，比較簡單。"},
        {q:"C'est facile d'économiser quand on est étudiant ?", qzh:"學生時期容易存錢嗎？", a:"Pas vraiment, mais avec un peu d'organisation, c'est possible.", azh:"不太容易，但稍加規劃就有可能。"},
      ]
    },
    { id:"st_a2_caractere", level:"A2", theme:"個性情緒", title:"個性與情緒",
      intro:"描述你的個性、喜好與情緒。",
      items:[
        {q:"Comment décririez-vous votre caractère ?", qzh:"您怎麼形容自己的個性？", a:"Je suis plutôt calme, curieuse et travailleuse.", azh:"我算是冷靜、好奇又勤奮。"},
        {q:"Qu'est-ce qui vous rend heureux(se) ?", qzh:"什麼讓您快樂？", a:"Passer du temps avec mes proches me rend heureuse.", azh:"和親近的人相處讓我快樂。"},
        {q:"Qu'est-ce qui vous énerve ?", qzh:"什麼讓您生氣？", a:"Ça m'énerve quand les gens ne sont pas ponctuels.", azh:"別人不準時讓我生氣。"},
        {q:"Vous êtes plutôt timide ou sociable ?", qzh:"您比較害羞還是外向？", a:"Ça dépend, mais je suis assez sociable avec mes amis.", azh:"看情況，但和朋友在一起時我蠻外向的。"},
        {q:"Vous voudriez changer quelque chose chez vous ?", qzh:"您想改變自己什麼？", a:"J'aimerais être un peu plus patiente.", azh:"我想再多點耐心。"},
      ]
    },
    { id:"st_a2_culture", level:"A2", theme:"電影音樂", title:"電影與音樂",
      intro:"談談你的影音喜好。",
      items:[
        {q:"Quel genre de films aimez-vous ?", qzh:"您喜歡哪種電影？", a:"J'aime les comédies et les films d'animation.", azh:"我喜歡喜劇和動畫片。"},
        {q:"Quel est le dernier film que vous avez vu ?", qzh:"您最近看的電影是？", a:"Le dernier film que j'ai vu était une comédie française.", azh:"我最近看的是一部法國喜劇。"},
        {q:"Vous écoutez de la musique souvent ?", qzh:"您常聽音樂嗎？", a:"Oui, j'écoute de la musique presque tous les jours.", azh:"是的，我幾乎每天聽音樂。"},
        {q:"Vous jouez d'un instrument ?", qzh:"您會樂器嗎？", a:"Je jouais du piano quand j'étais petite.", azh:"我小時候彈鋼琴。"},
        {q:"Vous préférez écouter de la musique ou regarder des films ?", qzh:"您偏好聽音樂還是看電影？", a:"Ça dépend de mon humeur, mais souvent la musique.", azh:"看心情，不過常常是音樂。"},
      ]
    }
  );
})();
