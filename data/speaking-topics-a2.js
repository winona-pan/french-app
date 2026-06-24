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
