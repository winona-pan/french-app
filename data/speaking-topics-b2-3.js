/* 口說主題練習 B2 第三批（最後）：11 主題，B2 達 35 */
(function(){
  window.SPEAKING_TOPICS = window.SPEAKING_TOPICS || [];
  const TP=window.SPEAKING_TOPICS;
  TP.push(
    { id:"st_b2_tourisme", level:"B2", theme:"旅行探索", title:"大眾觀光",
      intro:"談大眾觀光的利弊。",
      items:[
        {q:"Le tourisme de masse est-il une bonne chose ?", qzh:"大眾觀光是好事嗎？", a:"Il apporte des bénéfices, mais aussi des problèmes.", azh:"它帶來效益，但也帶來問題。"},
        {q:"Quels sont ses avantages ?", qzh:"它有什麼優點？", a:"Il crée des emplois et fait vivre des régions entières.", azh:"它創造就業、養活整個地區。"},
        {q:"Et ses inconvénients ?", qzh:"缺點呢？", a:"Il dégrade certains sites et leur fait perdre leur authenticité.", azh:"它破壞景點、讓它們失去真實樣貌。"},
        {q:"Un tourisme responsable est-il possible ?", qzh:"負責任的觀光可能嗎？", a:"Oui, en limitant l'affluence et en respectant les lieux.", azh:"可以，限制人潮、尊重當地。"},
        {q:"Comment voyagez-vous, vous ?", qzh:"那您怎麼旅行？", a:"J'essaie de voyager en respectant les habitants et la nature.", azh:"我盡量以尊重居民與自然的方式旅行。"},
      ]
    },
    { id:"st_b2_ville_plan", level:"B2", theme:"城市規劃", title:"宜居的城市",
      intro:"談如何讓城市更宜居。",
      items:[
        {q:"Comment rendre les villes plus agréables à vivre ?", qzh:"如何讓城市更宜居？", a:"En développant les espaces verts et les transports en commun.", azh:"發展綠地與大眾運輸。"},
        {q:"Pourquoi les espaces verts sont-ils importants ?", qzh:"綠地為何重要？", a:"Ils améliorent la qualité de l'air et le bien-être.", azh:"它們改善空氣與福祉。"},
        {q:"Faut-il limiter les voitures en ville ?", qzh:"該限制城市裡的汽車嗎？", a:"Oui, cela réduirait la pollution et le bruit.", azh:"該，能減少污染與噪音。"},
        {q:"Ces changements sont-ils faciles ?", qzh:"這些改變容易嗎？", a:"Non, ils demandent du temps et de l'argent.", azh:"不，需要時間與金錢。"},
        {q:"Quelle devrait être la priorité ?", qzh:"該優先考量什麼？", a:"Le bien-être des habitants avant tout.", azh:"居民的福祉優先。"},
      ]
    },
    { id:"st_b2_caractere", level:"B2", theme:"情緒人格", title:"性格天生還是後天",
      intro:"談性格是先天還是後天形成。",
      items:[
        {q:"Notre caractère est-il inné ou acquis ?", qzh:"性格是天生還是後天？", a:"Sans doute un mélange des deux.", azh:"恐怕兩者兼有。"},
        {q:"Qu'est-ce qui semble inné ?", qzh:"什麼似乎是天生的？", a:"Une partie de notre tempérament, dès la naissance.", azh:"一部分的性情，從出生起。"},
        {q:"Et le rôle de l'environnement ?", qzh:"環境的角色呢？", a:"L'éducation et les expériences nous façonnent.", azh:"教育與經歷形塑我們。"},
        {q:"Peut-on changer de caractère ?", qzh:"性格能改變嗎？", a:"Oui, on évolue tout au long de la vie.", azh:"能，我們終身不斷改變。"},
        {q:"Qu'est-ce qui vous a le plus façonné(e) ?", qzh:"什麼最形塑了您？", a:"Mes voyages et mes rencontres, surtout.", azh:"尤其是我的旅行與遇見的人。"},
      ]
    },
    { id:"st_b2_compromis", level:"B2", theme:"談判外交", title:"是否總該妥協",
      intro:"談妥協的價值與界限。",
      items:[
        {q:"Faut-il toujours chercher le compromis ?", qzh:"是否總該尋求妥協？", a:"Souvent oui, mais pas au prix de ses valeurs.", azh:"常常是，但不該以價值為代價。"},
        {q:"Quel est l'avantage du compromis ?", qzh:"妥協的優點？", a:"Il permet d'éviter bien des conflits.", azh:"它能避免許多衝突。"},
        {q:"Quand ne faut-il pas céder ?", qzh:"何時不該退讓？", a:"Sur les questions de principe.", azh:"在原則問題上。"},
        {q:"Le compromis est-il un signe de faiblesse ?", qzh:"妥協是軟弱的象徵嗎？", a:"Non, c'est souvent une preuve de maturité.", azh:"不，它常是成熟的表現。"},
        {q:"Comment bien négocier ?", qzh:"如何好好協商？", a:"En écoutant l'autre et en restant respectueux.", azh:"傾聽對方、保持尊重。"},
      ]
    },
    { id:"st_b2_espace", level:"B2", theme:"科學分支", title:"探索太空",
      intro:"談是否該繼續探索太空。",
      items:[
        {q:"Faut-il continuer à explorer l'espace ?", qzh:"該繼續探索太空嗎？", a:"Oui, car cela fait progresser la science.", azh:"該，因為它推動科學進步。"},
        {q:"N'est-ce pas trop coûteux ?", qzh:"那不是太貴了嗎？", a:"C'est vrai ; certains pensent que l'argent serait plus utile sur Terre.", azh:"確實，有人認為這些錢用在地球更有用。"},
        {q:"Quelles retombées concrètes ?", qzh:"有什麼具體成果？", a:"De nombreuses technologies du quotidien en sont issues.", azh:"許多日常科技都源自於此。"},
        {q:"Faut-il équilibrer les priorités ?", qzh:"該平衡優先順序嗎？", a:"Oui, sans négliger les problèmes terrestres.", azh:"該，別忽略地球上的問題。"},
        {q:"L'espace fait-il rêver ?", qzh:"太空令人嚮往嗎？", a:"Oui, il nourrit notre curiosité et notre espoir.", azh:"是，它滋養好奇與希望。"},
      ]
    },
    { id:"st_b2_nature", level:"B2", theme:"地理", title:"發展與自然",
      intro:"談發展是否該為自然讓步。",
      items:[
        {q:"Faut-il freiner le développement pour protéger la nature ?", qzh:"該為保護自然而限制發展嗎？", a:"Pas le freiner, mais plutôt le rendre durable.", azh:"不是踩煞車，而是讓它永續。"},
        {q:"Le développement est-il nécessaire ?", qzh:"發展必要嗎？", a:"Oui, il crée des emplois et de la richesse.", azh:"是，它創造就業與財富。"},
        {q:"Quels sont les risques d'une croissance incontrôlée ?", qzh:"失控成長的風險？", a:"La destruction des espaces naturels.", azh:"自然空間的破壞。"},
        {q:"Développement et écologie sont-ils opposés ?", qzh:"發展與生態對立嗎？", a:"Non, on peut tout à fait les concilier.", azh:"不，兩者完全可兼顧。"},
        {q:"Quelle est la meilleure voie ?", qzh:"最好的道路是？", a:"Le développement durable, sans hésiter.", azh:"毫無疑問是永續發展。"},
      ]
    },
    { id:"st_b2_ecrans", level:"B2", theme:"科技教育", title:"兒童與螢幕",
      intro:"談是否該限制兒童使用螢幕。",
      items:[
        {q:"Faut-il limiter le temps d'écran des enfants ?", qzh:"該限制兒童的螢幕時間嗎？", a:"Plutôt l'encadrer que l'interdire totalement.", azh:"該規範而非全面禁止。"},
        {q:"Les écrans sont-ils négatifs ?", qzh:"螢幕是負面的嗎？", a:"Pas entièrement ; ils offrent aussi du contenu éducatif.", azh:"並非全然，它們也提供教育內容。"},
        {q:"Quels sont les risques d'un usage excessif ?", qzh:"過度使用的風險？", a:"Des problèmes de sommeil et de concentration.", azh:"睡眠與專注問題。"},
        {q:"Quel est le rôle des parents ?", qzh:"父母的角色？", a:"Les accompagner et fixer des limites raisonnables.", azh:"陪伴並設下合理界線。"},
        {q:"Une interdiction totale serait-elle efficace ?", qzh:"全面禁止有效嗎？", a:"Non, ce serait irréaliste aujourd'hui.", azh:"不，今天那不切實際。"},
      ]
    },
    { id:"st_b2_stress", level:"B2", theme:"細膩情感心理", title:"現代生活的壓力",
      intro:"談現代生活是否太緊張。",
      items:[
        {q:"Notre mode de vie est-il trop stressant ?", qzh:"我們的生活方式太緊張嗎？", a:"Le problème n'est pas le stress, mais son excès.", azh:"問題不在壓力，而在它的過度。"},
        {q:"Pourquoi sommes-nous si pressés ?", qzh:"我們為何如此匆忙？", a:"Le travail, les études et les écrans nous sollicitent sans cesse.", azh:"工作、學業與螢幕不斷佔據我們。"},
        {q:"Le stress est-il toujours négatif ?", qzh:"壓力總是負面的嗎？", a:"Non, un peu de pression peut nous motiver.", azh:"不，適度壓力能激勵我們。"},
        {q:"Comment réduire le stress ?", qzh:"如何減輕壓力？", a:"En apprenant à se déconnecter et à se reposer.", azh:"學會放下並休息。"},
        {q:"La société valorise-t-elle trop la performance ?", qzh:"社會過度推崇績效嗎？", a:"Oui, parfois au détriment du bien-être.", azh:"是，有時以福祉為代價。"},
      ]
    },
    { id:"st_b2_consommation", level:"B2", theme:"經濟金融進階", title:"消費社會",
      intro:"談我們是否消費過度。",
      items:[
        {q:"Consommons-nous trop ?", qzh:"我們消費過度嗎？", a:"Oui, et souvent sans vraiment réfléchir.", azh:"是，而且常常不加思考。"},
        {q:"La consommation est-elle utile à l'économie ?", qzh:"消費對經濟有用嗎？", a:"Oui, elle soutient l'emploi.", azh:"是，它支撐就業。"},
        {q:"Quels sont les dangers de la surconsommation ?", qzh:"過度消費的危害？", a:"Elle épuise les ressources et produit des déchets.", azh:"它耗盡資源、製造垃圾。"},
        {q:"Comment consommer mieux ?", qzh:"如何更好地消費？", a:"En privilégiant la qualité à la quantité.", azh:"重質不重量。"},
        {q:"La publicité est-elle responsable ?", qzh:"廣告有責任嗎？", a:"En partie, car elle nous pousse à acheter.", azh:"一部分，因為它慫恿我們購物。"},
      ]
    },
    { id:"st_b2_mondialisation", level:"B2", theme:"社會議題", title:"全球化",
      intro:"談全球化的利弊。",
      items:[
        {q:"La mondialisation est-elle une bonne chose ?", qzh:"全球化是好事嗎？", a:"Elle a des avantages et des inconvénients.", azh:"它有利也有弊。"},
        {q:"Quels sont ses avantages ?", qzh:"它的優點？", a:"Elle facilite les échanges et l'accès à la culture.", azh:"它促進交流與文化的接觸。"},
        {q:"Et ses inconvénients ?", qzh:"缺點呢？", a:"Elle peut uniformiser les cultures et creuser les inégalités.", azh:"它可能使文化趨同、加深不平等。"},
        {q:"Menace-t-elle les cultures locales ?", qzh:"它威脅在地文化嗎？", a:"Parfois ; il faut donc les protéger.", azh:"有時是，因此要保護它們。"},
        {q:"Peut-on en tirer le meilleur ?", qzh:"能取其精華嗎？", a:"Oui, en gardant son identité tout en s'ouvrant aux autres.", azh:"能，保有自身認同同時對外開放。"},
      ]
    },
    { id:"st_b2_influence", level:"B2", theme:"時事媒體進階", title:"網紅的影響力",
      intro:"談網紅（influenceurs）的社會影響。",
      items:[
        {q:"Les influenceurs ont-ils trop d'influence ?", qzh:"網紅影響力太大嗎？", a:"Parfois, surtout sur les jeunes.", azh:"有時是，尤其對年輕人。"},
        {q:"Quel est leur rôle aujourd'hui ?", qzh:"他們今天的角色？", a:"Ils orientent les opinions et les achats.", azh:"他們引導意見與消費。"},
        {q:"Est-ce un métier sérieux ?", qzh:"這是正經的職業嗎？", a:"Cela peut l'être, mais cela demande de la responsabilité.", azh:"可以是，但需要責任感。"},
        {q:"Quels sont les risques ?", qzh:"有什麼風險？", a:"La diffusion de faux modèles ou de fausses informations.", azh:"散播虛假的榜樣或不實資訊。"},
        {q:"Comment garder son esprit critique ?", qzh:"如何保持批判思考？", a:"En ne croyant pas tout ce qu'on voit en ligne.", azh:"別盡信網路上看到的一切。"},
      ]
    }
  );
})();
