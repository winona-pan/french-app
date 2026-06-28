/* 口說主題練習 B2 第二批：12 主題 */
(function(){
  window.SPEAKING_TOPICS = window.SPEAKING_TOPICS || [];
  const TP=window.SPEAKING_TOPICS;
  TP.push(
    { id:"st_b2_teletravail", level:"B2", theme:"職場", title:"遠距工作",
      intro:"談遠距工作是否為進步，並權衡正反。",
      items:[
        {q:"Le télétravail est-il un progrès ?", qzh:"遠距工作是進步嗎？", a:"C'est un progrès, à condition d'être bien encadré.", azh:"是進步，前提是有良好規範。"},
        {q:"Quels sont ses avantages ?", qzh:"它有什麼優點？", a:"Il offre de la flexibilité et fait gagner du temps de transport.", azh:"它提供彈性、省下通勤時間。"},
        {q:"Et ses limites ?", qzh:"限制呢？", a:"Il peut créer un sentiment d'isolement.", azh:"它可能造成孤立感。"},
        {q:"La frontière vie privée / travail est-elle un problème ?", qzh:"公私界線是問題嗎？", a:"Oui, elle devient parfois floue.", azh:"是，有時界線變模糊。"},
        {q:"Quel modèle préférez-vous ?", qzh:"您偏好哪種模式？", a:"Un modèle hybride me semble le plus équilibré.", azh:"混合模式在我看來最平衡。"},
      ]
    },
    { id:"st_b2_environnement", level:"B2", theme:"永續環境", title:"環境與個人責任",
      intro:"談個人行動是否足以保護環境。",
      items:[
        {q:"Les gestes individuels suffisent-ils à protéger l'environnement ?", qzh:"個人行動足以保護環境嗎？", a:"Pas à eux seuls, mais chaque geste compte.", azh:"單靠它不夠，但每個舉動都有意義。"},
        {q:"Qui a la plus grande responsabilité ?", qzh:"誰責任最大？", a:"Les grandes industries et les États, sans doute.", azh:"無疑是大型企業與國家。"},
        {q:"Que faites-vous personnellement ?", qzh:"您個人做什麼？", a:"Je trie, je limite le plastique et je prends le vélo.", azh:"我分類、少用塑膠、騎腳踏車。"},
        {q:"Individu et politique s'opposent-ils ?", qzh:"個人與政策對立嗎？", a:"Non, ils se complètent.", azh:"不，它們互補。"},
        {q:"Êtes-vous optimiste pour l'avenir ?", qzh:"您對未來樂觀嗎？", a:"Oui, si chacun additionne ses efforts.", azh:"樂觀，只要人人匯聚努力。"},
      ]
    },
    { id:"st_b2_raison", level:"B2", theme:"哲學流派", title:"理智還是情感",
      intro:"談做決定時該聽理智還是情感。",
      items:[
        {q:"Vaut-il mieux écouter sa raison ou ses émotions ?", qzh:"該聽理智還是情感？", a:"Les meilleures décisions naissent souvent de leur équilibre.", azh:"最好的決定常源於兩者平衡。"},
        {q:"Quel est l'avantage de la raison ?", qzh:"理智的優點？", a:"Elle permet de réfléchir avec recul.", azh:"它讓人冷靜思考。"},
        {q:"Et les émotions ?", qzh:"情感呢？", a:"Elles font partie de notre humanité et nous poussent à agir.", azh:"它們是人性的一部分、驅使我們行動。"},
        {q:"Suivre uniquement ses émotions est-il dangereux ?", qzh:"只聽從情感危險嗎？", a:"Parfois, si on ne réfléchit pas du tout.", azh:"有時是，若完全不思考。"},
        {q:"Quelle est votre approche ?", qzh:"您的方式是？", a:"J'écoute mon cœur sans cesser de réfléchir.", azh:"我傾聽內心但不停止思考。"},
      ]
    },
    { id:"st_b2_histoire", level:"B2", theme:"歷史", title:"為何要學歷史",
      intro:"談學歷史的意義。",
      items:[
        {q:"À quoi sert d'étudier l'histoire ?", qzh:"學歷史有什麼用？", a:"Elle éclaire le présent et aide à éviter de répéter les erreurs.", azh:"它照亮當下、幫助避免重蹈覆轍。"},
        {q:"Certains la jugent inutile, qu'en pensez-vous ?", qzh:"有人覺得它無用，您怎麼看？", a:"Je ne suis pas d'accord ; le passé nous construit.", azh:"我不同意，過去塑造了我們。"},
        {q:"L'histoire nourrit-elle l'esprit critique ?", qzh:"歷史培養批判思考嗎？", a:"Oui, en nous apprenant à analyser les faits.", azh:"是，它教我們分析事實。"},
        {q:"Faut-il l'enseigner davantage ?", qzh:"該多教歷史嗎？", a:"Oui, surtout pour comprendre le monde actuel.", azh:"該，尤其為了理解當今世界。"},
        {q:"Que se passe-t-il si un peuple oublie son passé ?", qzh:"民族遺忘過去會怎樣？", a:"Il se prive d'une partie de lui-même.", azh:"它失去自身的一部分。"},
      ]
    },
    { id:"st_b2_mental", level:"B2", theme:"心理諮商", title:"談論心理困擾",
      intro:"談是否該勇於談論心理困擾（鼓勵正向求助）。",
      items:[
        {q:"Faut-il oser parler de ses difficultés psychologiques ?", qzh:"該勇於談論心理困擾嗎？", a:"Oui, en parler n'est pas une faiblesse, mais un courage.", azh:"該，說出來不是軟弱而是勇氣。"},
        {q:"Pourquoi certaines personnes n'osent pas ?", qzh:"為何有人不敢？", a:"Souvent par peur du jugement des autres.", azh:"常因害怕被評判。"},
        {q:"Consulter un professionnel aide-t-il ?", qzh:"求助專業有幫助嗎？", a:"Oui, cela permet de prendre du recul.", azh:"有，能拉開距離看事情。"},
        {q:"La société accueille-t-elle bien ce sujet ?", qzh:"社會接納這話題嗎？", a:"De mieux en mieux, mais des progrès restent à faire.", azh:"越來越好，但仍有進步空間。"},
        {q:"Que conseilleriez-vous à un ami en difficulté ?", qzh:"您會建議有困難的朋友什麼？", a:"D'en parler à une personne de confiance.", azh:"跟信任的人傾訴。"},
      ]
    },
    { id:"st_b2_sondages", level:"B2", theme:"數字統計", title:"民調與數據",
      intro:"談民調與統計數據的可信度。",
      items:[
        {q:"Peut-on faire confiance aux sondages ?", qzh:"民調可信嗎？", a:"Pas aveuglément ; il faut les interpréter avec prudence.", azh:"不能盲信，要謹慎解讀。"},
        {q:"Pourquoi les chiffres rassurent-ils ?", qzh:"為何數字讓人安心？", a:"Parce qu'ils donnent une impression d'objectivité.", azh:"因為它們給人客觀的印象。"},
        {q:"Les statistiques peuvent-elles tromper ?", qzh:"統計會誤導嗎？", a:"Oui, selon la façon dont les questions sont posées.", azh:"會，取決於提問方式。"},
        {q:"Comment bien lire un chiffre ?", qzh:"如何正確解讀數字？", a:"En vérifiant sa source et son contexte.", azh:"查證來源與脈絡。"},
        {q:"Les médias les utilisent-ils bien ?", qzh:"媒體善用它們嗎？", a:"Pas toujours ; ils les simplifient parfois trop.", azh:"不一定，有時過度簡化。"},
      ]
    },
    { id:"st_b2_langues", level:"B2", theme:"語言溝通", title:"學多種外語",
      intro:"談學多種語言的價值。",
      items:[
        {q:"Faut-il apprendre plusieurs langues ?", qzh:"該學多種語言嗎？", a:"Oui, chaque langue ouvre de nouvelles portes.", azh:"該，每種語言開啟新的大門。"},
        {q:"Quel est le principal avantage ?", qzh:"主要優點？", a:"Cela facilite les voyages, les études et le travail.", azh:"它讓旅行、求學與工作更順利。"},
        {q:"Est-ce difficile ?", qzh:"難嗎？", a:"Cela demande du temps, mais c'est très enrichissant.", azh:"需要時間，但收穫很大。"},
        {q:"Mieux vaut-il en maîtriser une seule parfaitement ?", qzh:"精通一門是否更好？", a:"C'est un choix valable, mais des bases multiples sont un atout.", azh:"那是合理選擇，但多語基礎是優勢。"},
        {q:"Que vous apporte le français ?", qzh:"法文帶給您什麼？", a:"Une nouvelle façon de voir le monde et de penser.", azh:"看世界與思考的新方式。"},
      ]
    },
    { id:"st_b2_cinema", level:"B2", theme:"影視評論", title:"串流與電影",
      intro:"談串流平台是否威脅電影。",
      items:[
        {q:"Les plateformes de streaming menacent-elles le cinéma ?", qzh:"串流威脅電影嗎？", a:"Elles le transforment plus qu'elles ne le détruisent.", azh:"它們改變電影，而非摧毀它。"},
        {q:"Quel est l'avantage du streaming ?", qzh:"串流的優點？", a:"On regarde ce qu'on veut, quand on veut, chez soi.", azh:"在家隨時看想看的。"},
        {q:"Et la salle de cinéma ?", qzh:"電影院呢？", a:"Elle offre une expérience collective irremplaçable.", azh:"它提供無可取代的群體體驗。"},
        {q:"Les deux peuvent-ils coexister ?", qzh:"兩者能共存嗎？", a:"Oui, tout à fait, ils répondent à des besoins différents.", azh:"完全可以，它們滿足不同需求。"},
        {q:"Qu'est-ce qui compte le plus ?", qzh:"最重要的是？", a:"Préserver la diversité des œuvres.", azh:"保存作品的多樣性。"},
      ]
    },
    { id:"st_b2_musique", level:"B2", theme:"音樂表演", title:"音樂在教育",
      intro:"談音樂在教育中的角色。",
      items:[
        {q:"La musique a-t-elle sa place dans l'éducation ?", qzh:"音樂在教育中該有一席之地嗎？", a:"Oui, elle mérite toute sa place.", azh:"該，它完全值得。"},
        {q:"Pourquoi est-elle parfois négligée ?", qzh:"為何有時被忽略？", a:"On lui préfère souvent les matières dites « utiles ».", azh:"人們常更重視所謂「實用」科目。"},
        {q:"Quels bienfaits apporte-t-elle ?", qzh:"它有什麼益處？", a:"Elle développe la mémoire, la concentration et la sensibilité.", azh:"它培養記憶、專注與感受力。"},
        {q:"Apprendre un instrument est-il utile ?", qzh:"學樂器有用嗎？", a:"Oui, cela demande rigueur et patience.", azh:"有，它需要嚴謹與耐心。"},
        {q:"La musique est-elle un simple divertissement ?", qzh:"音樂只是娛樂嗎？", a:"Non, elle a une vraie valeur éducative.", azh:"不，它有真正的教育價值。"},
      ]
    },
    { id:"st_b2_competition", level:"B2", theme:"體育競技", title:"競爭是好是壞",
      intro:"談競爭的利弊。",
      items:[
        {q:"La compétition est-elle bénéfique ou nuisible ?", qzh:"競爭有益還是有害？", a:"Positive si elle reste saine et respectueuse.", azh:"只要健康且尊重就是正面的。"},
        {q:"Quel est son avantage ?", qzh:"它的優點？", a:"Elle pousse à se dépasser et à progresser.", azh:"它促使人超越自我、進步。"},
        {q:"Quand devient-elle nuisible ?", qzh:"何時變得有害？", a:"Quand elle engendre du stress et de la jalousie.", azh:"當它引發壓力與嫉妒。"},
        {q:"Faut-il l'encourager chez les enfants ?", qzh:"該鼓勵孩子競爭嗎？", a:"Avec modération, en valorisant aussi la coopération.", azh:"適度地，並同時重視合作。"},
        {q:"Que préférez-vous ?", qzh:"您偏好什麼？", a:"Je préfère me mesurer à moi-même qu'aux autres.", azh:"我偏好與自己較量而非他人。"},
      ]
    },
    { id:"st_b2_mode", level:"B2", theme:"時尚", title:"快時尚",
      intro:"談快時尚的問題。",
      items:[
        {q:"La mode rapide est-elle un problème ?", qzh:"快時尚是個問題嗎？", a:"Oui, surtout à cause de son impact environnemental.", azh:"是，尤其因為它的環境衝擊。"},
        {q:"Quel est son avantage ?", qzh:"它的優點？", a:"Elle rend les vêtements accessibles à tous.", azh:"它讓人人都買得起衣服。"},
        {q:"Et ses inconvénients ?", qzh:"缺點？", a:"Elle produit beaucoup de déchets et exploite des travailleurs.", azh:"它製造大量廢棄物、剝削勞工。"},
        {q:"Que peut faire le consommateur ?", qzh:"消費者能做什麼？", a:"Acheter moins, mais des vêtements de meilleure qualité.", azh:"買少一點、買品質更好的。"},
        {q:"Des alternatives existent-elles ?", qzh:"有替代方案嗎？", a:"Oui, la mode durable se développe peu à peu.", azh:"有，永續時尚逐漸興起。"},
      ]
    },
    { id:"st_b2_fastfood", level:"B2", theme:"飲食評論", title:"速食與飲食文化",
      intro:"談速食是否威脅飲食文化。",
      items:[
        {q:"La restauration rapide menace-t-elle notre culture culinaire ?", qzh:"速食威脅飲食文化嗎？", a:"Elle a sa place, à condition de ne pas remplacer la vraie cuisine.", azh:"它有地位，前提是不取代真正的料理。"},
        {q:"Pourquoi est-elle si populaire ?", qzh:"它為何受歡迎？", a:"Parce qu'elle est rapide, bon marché et disponible partout.", azh:"因為它快速、便宜、到處都有。"},
        {q:"Quels sont ses inconvénients ?", qzh:"缺點？", a:"Elle favorise une alimentation peu équilibrée.", azh:"它助長不均衡的飲食。"},
        {q:"Uniformise-t-elle les goûts ?", qzh:"它使口味趨於一致嗎？", a:"Oui, à travers le monde entier.", azh:"是，遍及全世界。"},
        {q:"Comment préserver la gastronomie ?", qzh:"如何保存美食文化？", a:"En valorisant le plaisir de cuisiner et de partager un repas.", azh:"重視烹飪與共餐的樂趣。"},
      ]
    }
  );
})();
