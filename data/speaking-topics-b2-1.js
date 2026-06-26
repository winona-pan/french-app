/* 口說主題練習 B2 第一批：12 主題（論證、讓步、反駁；回答偏正式、帶理由） */
(function(){
  window.SPEAKING_TOPICS = window.SPEAKING_TOPICS || [];
  const TP=window.SPEAKING_TOPICS;
  TP.push(
    { id:"st_b2_ia", level:"B2", theme:"科技倫理", title:"人工智慧",
      intro:"B2 要能論證、讓步、反駁。回答時可用「誠然…但…」「一切取決於…」。",
      items:[
        {q:"L'intelligence artificielle représente-t-elle un danger ?", qzh:"人工智慧構成威脅嗎？", a:"Elle comporte des risques, mais tout dépend de l'usage qu'on en fait.", azh:"它有風險，但一切取決於使用方式。"},
        {q:"Quels sont ses principaux avantages ?", qzh:"它主要的優點是什麼？", a:"Elle facilite le travail, la médecine et la recherche scientifique.", azh:"它讓工作、醫療與科研更便利。"},
        {q:"Et les risques ?", qzh:"風險呢？", a:"Elle pourrait supprimer des emplois et menacer notre vie privée.", azh:"它可能讓工作消失、威脅隱私。"},
        {q:"Faut-il encadrer son développement ?", qzh:"該規範它的發展嗎？", a:"Oui, il est urgent de fixer des règles claires.", azh:"是的，當務之急是訂下明確規則。"},
        {q:"L'IA peut-elle remplacer l'humain ?", qzh:"AI 能取代人類嗎？", a:"Dans certaines tâches oui, mais elle manque de jugement et d'émotions.", azh:"在某些任務上可以，但它缺乏判斷與情感。"},
      ]
    },
    { id:"st_b2_science", level:"B2", theme:"科學", title:"科學進步",
      intro:"談科學進步是否總是有益，並權衡正反。",
      items:[
        {q:"Le progrès scientifique est-il toujours bénéfique ?", qzh:"科學進步總是有益的嗎？", a:"Pas toujours ; il dépend des choix que nous faisons.", azh:"不一定，取決於我們的選擇。"},
        {q:"Donnez un exemple d'avancée importante.", qzh:"舉一個重要進展的例子。", a:"Les vaccins, par exemple, ont sauvé des millions de vies.", azh:"例如疫苗拯救了數百萬人。"},
        {q:"La science peut-elle être dangereuse ?", qzh:"科學可能危險嗎？", a:"Oui, comme les armes ou certaines atteintes à l'environnement.", azh:"會，例如武器或對環境的破壞。"},
        {q:"Faut-il limiter la recherche ?", qzh:"該限制研究嗎？", a:"Plutôt l'encadrer par une réflexion éthique que la limiter.", azh:"與其限制，不如用倫理思考來規範。"},
        {q:"Êtes-vous optimiste face au progrès ?", qzh:"您對進步樂觀嗎？", a:"Oui, à condition d'utiliser la science de façon responsable.", azh:"樂觀，前提是負責任地運用科學。"},
      ]
    },
    { id:"st_b2_inegalites", level:"B2", theme:"社會議題", title:"社會不平等",
      intro:"談如何縮小社會不平等。",
      items:[
        {q:"Comment réduire les inégalités sociales ?", qzh:"如何縮小社會不平等？", a:"Avant tout par l'éducation, qui offre les mêmes chances à tous.", azh:"首先靠教育，它給所有人同樣的機會。"},
        {q:"L'État doit-il intervenir ?", qzh:"國家該介入嗎？", a:"Oui, par exemple en redistribuant les richesses.", azh:"該，例如透過財富重分配。"},
        {q:"Les inégalités sont-elles inévitables ?", qzh:"不平等無可避免嗎？", a:"Une part l'est, mais on peut les réduire fortement.", azh:"一部分是，但能大幅縮小。"},
        {q:"L'individu peut-il agir ?", qzh:"個人能行動嗎？", a:"Oui, par la solidarité et l'engagement associatif.", azh:"能，透過互助與參與公益。"},
        {q:"Une société totalement égale est-elle possible ?", qzh:"完全平等的社會可能嗎？", a:"Sans doute pas, mais plus de justice reste un objectif essentiel.", azh:"恐怕不可能，但更公平仍是重要目標。"},
      ]
    },
    { id:"st_b2_art", level:"B2", theme:"藝術評論", title:"藝術的價值",
      intro:"談藝術在社會中的用處與價值。",
      items:[
        {q:"L'art a-t-il une véritable utilité ?", qzh:"藝術真有用處嗎？", a:"Oui, même s'il ne produit pas de richesses matérielles.", azh:"有，即使它不創造物質財富。"},
        {q:"Que nous apporte l'art ?", qzh:"藝術帶給我們什麼？", a:"Il exprime nos émotions et nous aide à comprendre le monde.", azh:"它表達情感、幫我們理解世界。"},
        {q:"L'art est-il réservé à une élite ?", qzh:"藝術只屬於菁英嗎？", a:"Il ne devrait pas l'être ; il devrait être accessible à tous.", azh:"不該如此，它該人人都能接觸。"},
        {q:"Faut-il financer la culture avec l'argent public ?", qzh:"該用公帑資助文化嗎？", a:"Oui, car la culture profite à toute la société.", azh:"該，因為文化造福整個社會。"},
        {q:"Une société sans art est-elle imaginable ?", qzh:"能想像沒有藝術的社會嗎？", a:"Difficilement ; ce serait une société sans âme.", azh:"很難，那會是沒有靈魂的社會。"},
      ]
    },
    { id:"st_b2_education", level:"B2", theme:"教育進階", title:"教育改革",
      intro:"談是否該改革教育制度。",
      items:[
        {q:"Faut-il réformer le système éducatif ?", qzh:"該改革教育制度嗎？", a:"Oui, car il privilégie trop la mémorisation.", azh:"該，因為它太重背誦。"},
        {q:"Quel est le principal défaut de l'école actuelle ?", qzh:"現今學校最大的缺點是？", a:"Elle laisse peu de place à la créativité.", azh:"它留給創造力的空間太少。"},
        {q:"La réforme est-elle facile à mettre en place ?", qzh:"改革容易推動嗎？", a:"Non, il faut former les enseignants et convaincre les familles.", azh:"不，必須培訓教師、說服家庭。"},
        {q:"Que faudrait-il encourager davantage ?", qzh:"該更鼓勵什麼？", a:"L'autonomie et l'esprit critique des élèves.", azh:"學生的自主與批判思考。"},
        {q:"Les notes sont-elles vraiment utiles ?", qzh:"分數真的有用嗎？", a:"Elles ont des limites ; elles ne mesurent pas tout.", azh:"它們有侷限，無法衡量一切。"},
      ]
    },
    { id:"st_b2_justice", level:"B2", theme:"正義進階", title:"正義與法律",
      intro:"談法律之前是否人人平等。",
      items:[
        {q:"La justice est-elle la même pour tous ?", qzh:"法律之前人人平等嗎？", a:"En principe oui, mais dans la réalité des inégalités subsistent.", azh:"原則上是，但現實中仍有不平等。"},
        {q:"Pourquoi cette inégalité existe-t-elle ?", qzh:"為什麼存在這種不平等？", a:"Parce qu'une personne riche peut s'offrir de meilleurs avocats.", azh:"因為有錢人能聘更好的律師。"},
        {q:"Comment rendre la justice plus équitable ?", qzh:"如何讓司法更公正？", a:"En garantissant à tous une aide juridique gratuite.", azh:"保障人人享有免費法律扶助。"},
        {q:"La loi doit-elle évoluer avec la société ?", qzh:"法律該隨社會演進嗎？", a:"Oui, sinon elle ne correspond plus à la réalité.", azh:"該，否則它就脫離現實。"},
        {q:"Faut-il faire confiance à la justice ?", qzh:"該信任司法嗎？", a:"Globalement oui, même si elle reste perfectible.", azh:"大致該，即使它仍有改進空間。"},
      ]
    },
    { id:"st_b2_bonheur", level:"B2", theme:"哲學思辨", title:"金錢與幸福",
      intro:"談金錢與幸福的關係。",
      items:[
        {q:"L'argent fait-il le bonheur ?", qzh:"金錢能帶來幸福嗎？", a:"Il y contribue, mais il ne suffit pas à lui seul.", azh:"它有助益，但單靠它並不足夠。"},
        {q:"Qu'est-ce qui rend les gens heureux selon vous ?", qzh:"您認為什麼讓人快樂？", a:"Les relations, la santé et le sens qu'on donne à sa vie.", azh:"人際、健康與生命的意義。"},
        {q:"Peut-on être heureux sans argent ?", qzh:"沒錢能快樂嗎？", a:"C'est difficile, car l'argent évite beaucoup de soucis.", azh:"很難，因為金錢能省去許多煩惱。"},
        {q:"La société pousse-t-elle à vouloir toujours plus ?", qzh:"社會是否驅使人追求更多？", a:"Oui, la publicité nous incite sans cesse à consommer.", azh:"是的，廣告不斷慫恿我們消費。"},
        {q:"Quelle est votre définition du bonheur ?", qzh:"您對幸福的定義是？", a:"Pour moi, c'est l'équilibre entre mes besoins et ma vie intérieure.", azh:"對我而言是需求與內心生活的平衡。"},
      ]
    },
    { id:"st_b2_vote", level:"B2", theme:"政治", title:"民主與投票",
      intro:"談投票與民主。",
      items:[
        {q:"Le vote devrait-il être obligatoire ?", qzh:"投票該強制嗎？", a:"Cela renforcerait la participation, mais cela limite une liberté.", azh:"那能提升參與，但限制了一項自由。"},
        {q:"Pourquoi beaucoup de gens ne votent pas ?", qzh:"為什麼很多人不投票？", a:"Souvent par manque d'intérêt ou de confiance.", azh:"常因缺乏興趣或信任。"},
        {q:"Le vote change-t-il vraiment les choses ?", qzh:"投票真能改變什麼嗎？", a:"Oui, c'est un moyen essentiel d'exprimer sa voix.", azh:"能，那是表達聲音的重要方式。"},
        {q:"Comment encourager les jeunes à voter ?", qzh:"如何鼓勵年輕人投票？", a:"Par l'éducation civique et des informations claires.", azh:"透過公民教育與清楚的資訊。"},
        {q:"La démocratie est-elle le meilleur système ?", qzh:"民主是最好的制度嗎？", a:"Elle est imparfaite, mais reste la moins mauvaise.", azh:"它不完美，卻是最不壞的。"},
      ]
    },
    { id:"st_b2_entreprise", level:"B2", theme:"商業管理", title:"企業的責任",
      intro:"談企業的社會與環境責任。",
      items:[
        {q:"Les entreprises ont-elles une responsabilité sociale ?", qzh:"企業有社會責任嗎？", a:"Oui, elles ne peuvent ignorer leur impact sur la société.", azh:"有，它們不能無視對社會的影響。"},
        {q:"Le profit doit-il être leur seul objectif ?", qzh:"獲利該是唯一目標嗎？", a:"Non, profit et responsabilité peuvent aller ensemble.", azh:"不，獲利與責任能並行。"},
        {q:"Donnez un exemple de bonne pratique.", qzh:"舉個好做法的例子。", a:"Réduire la pollution tout en restant rentable.", azh:"在維持獲利的同時減少污染。"},
        {q:"Les consommateurs ont-ils un rôle ?", qzh:"消費者有角色嗎？", a:"Oui, en choisissant des marques responsables.", azh:"有，透過選擇負責任的品牌。"},
        {q:"L'État doit-il imposer des règles ?", qzh:"國家該強制規範嗎？", a:"Oui, pour éviter les abus de certaines entreprises.", azh:"該，以防某些企業濫用。"},
      ]
    },
    { id:"st_b2_sante_pub", level:"B2", theme:"健康醫療進階", title:"全民醫療",
      intro:"談醫療是否該全民免費。",
      items:[
        {q:"Les soins devraient-ils être gratuits pour tous ?", qzh:"醫療該對所有人免費嗎？", a:"Idéalement oui, car la santé est un droit fondamental.", azh:"理想上是，因為健康是基本權利。"},
        {q:"Quel est le risque d'un système gratuit ?", qzh:"免費制度的風險是？", a:"Son coût très élevé pour l'État.", azh:"對國家而言成本極高。"},
        {q:"La santé est-elle une marchandise ?", qzh:"健康是商品嗎？", a:"Non, elle ne devrait pas être traitée comme un simple produit.", azh:"不，它不該被當成單純的商品。"},
        {q:"Comment financer la santé ?", qzh:"如何資助醫療？", a:"Par un système solidaire, financé par tous.", azh:"透過全民共同負擔的互助制度。"},
        {q:"Le système de votre pays fonctionne-t-il bien ?", qzh:"您國家的制度運作良好嗎？", a:"Plutôt bien, l'assurance santé y est très accessible.", azh:"還不錯，健保很普及。"},
      ]
    },
    { id:"st_b2_religion", level:"B2", theme:"宗教信仰", title:"宗教與世俗",
      intro:"談宗教在現代社會的位置。",
      items:[
        {q:"La religion a-t-elle encore sa place aujourd'hui ?", qzh:"宗教今天還有位置嗎？", a:"Oui, car elle répond à des besoins que la science ne comble pas.", azh:"有，因為它回應科學無法滿足的需求。"},
        {q:"La science a-t-elle remplacé la religion ?", qzh:"科學取代了宗教嗎？", a:"En partie, mais les deux peuvent coexister.", azh:"一部分，但兩者能共存。"},
        {q:"Faut-il séparer religion et État ?", qzh:"該政教分離嗎？", a:"Oui, pour garantir la liberté de croire ou non.", azh:"該，以保障信或不信的自由。"},
        {q:"La religion peut-elle créer des conflits ?", qzh:"宗教會引發衝突嗎？", a:"Parfois, surtout en l'absence de tolérance.", azh:"有時會，尤其缺乏包容時。"},
        {q:"Qu'est-ce qui est le plus important selon vous ?", qzh:"您認為最重要的是？", a:"Le respect mutuel, plus que les différences de croyance.", azh:"相互尊重，勝過信仰差異。"},
      ]
    },
    { id:"st_b2_presse", level:"B2", theme:"時事媒體進階", title:"新聞自由",
      intro:"談新聞自由與民主的關係。",
      items:[
        {q:"La liberté de la presse est-elle essentielle ?", qzh:"新聞自由重要嗎？", a:"Oui, c'est un pilier de toute démocratie.", azh:"是的，那是民主的支柱。"},
        {q:"Quel rôle joue la presse ?", qzh:"媒體扮演什麼角色？", a:"Elle informe les citoyens et contrôle le pouvoir.", azh:"它向公民提供資訊、監督權力。"},
        {q:"Cette liberté peut-elle être détournée ?", qzh:"這份自由會被濫用嗎？", a:"Oui, par la diffusion de fausses informations.", azh:"會，透過散播假訊息。"},
        {q:"Faut-il limiter la presse pour autant ?", qzh:"因此該限制媒體嗎？", a:"Non, les abus de quelques-uns ne le justifient pas.", azh:"不，少數人的濫用不能成為理由。"},
        {q:"Une démocratie peut-elle exister sans presse libre ?", qzh:"沒有自由媒體民主能存在嗎？", a:"Non, l'information libre est indispensable.", azh:"不能，自由的資訊不可或缺。"},
      ]
    }
  );
})();
