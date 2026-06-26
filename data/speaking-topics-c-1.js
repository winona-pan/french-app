/* 口說主題練習 C1/C2 批次 1：財務金融 + 校園用語（各 C1×3、C2×3）
   C1：流暢應對專業／學術情境；C2：精準、有層次地辯證抽象議題 */
(function(){
  window.SPEAKING_TOPICS = window.SPEAKING_TOPICS || [];
  const TP=window.SPEAKING_TOPICS;
  TP.push(
    /* ===== 財務金融 C1 ===== */
    { id:"st_c1_invest", level:"C1", theme:"財務金融", title:"投資與風險管理",
      intro:"C1：能就專業主題流暢論述。談投資策略與風險。",
      items:[
        {q:"Comment définiriez-vous une bonne stratégie d'investissement ?", qzh:"您會如何定義好的投資策略？", a:"Une bonne stratégie repose avant tout sur la diversification et une vision à long terme.", azh:"好的策略首重分散投資與長期視野。"},
        {q:"Quel rôle joue le risque dans l'investissement ?", qzh:"風險在投資中扮演什麼角色？", a:"Le risque est indissociable du rendement : plus on vise un rendement élevé, plus on s'expose.", azh:"風險與報酬密不可分：追求越高報酬，承擔的風險就越大。"},
        {q:"Comment limiter les pertes potentielles ?", qzh:"如何控制潛在損失？", a:"En diversifiant son portefeuille et en fixant des seuils de tolérance au risque.", azh:"透過分散投資組合並設定風險容忍門檻。"},
        {q:"Faut-il suivre les tendances du marché ?", qzh:"該追隨市場趨勢嗎？", a:"Avec prudence ; suivre aveuglément la foule conduit souvent à acheter trop cher.", azh:"要謹慎；盲從群眾往往導致追高。"},
        {q:"Quels conseils donneriez-vous à un débutant ?", qzh:"您會給新手什麼建議？", a:"Commencer modestement, se former et ne jamais investir l'argent dont on a besoin.", azh:"從小額開始、持續學習，絕不投入急用的錢。"},
      ]
    },
    { id:"st_c1_marches", level:"C1", theme:"財務金融", title:"金融市場運作",
      intro:"C1：談金融市場的運作與影響因素。",
      items:[
        {q:"Comment fonctionnent les marchés financiers ?", qzh:"金融市場如何運作？", a:"Ils mettent en relation ceux qui cherchent des capitaux et ceux qui souhaitent les placer.", azh:"它們媒合需要資金者與想要投資者。"},
        {q:"Qu'est-ce qui fait varier le cours d'une action ?", qzh:"是什麼讓股價波動？", a:"Essentiellement l'offre et la demande, ainsi que les anticipations des investisseurs.", azh:"主要是供需，以及投資人的預期。"},
        {q:"La volatilité est-elle nécessairement négative ?", qzh:"波動一定是負面的嗎？", a:"Pas forcément ; elle crée aussi des opportunités pour les investisseurs avisés.", azh:"未必；它也為精明的投資人創造機會。"},
        {q:"Quel est le rôle des banques centrales ?", qzh:"央行扮演什麼角色？", a:"Elles régulent la masse monétaire et influencent les taux d'intérêt.", azh:"它們調節貨幣供給、影響利率。"},
        {q:"Peut-on prévoir l'évolution des marchés ?", qzh:"能預測市場走勢嗎？", a:"On peut l'analyser, mais le prédire avec certitude reste illusoire.", azh:"可以分析，但要確切預測仍是幻想。"},
      ]
    },
    { id:"st_c1_banque", level:"C1", theme:"財務金融", title:"銀行與信貸",
      intro:"C1：談銀行的角色與信貸機制。",
      items:[
        {q:"Quel est le rôle d'une banque dans l'économie ?", qzh:"銀行在經濟中的角色？", a:"Elle collecte l'épargne et accorde des crédits, ce qui finance l'activité économique.", azh:"它吸收存款、提供貸款，藉此資助經濟活動。"},
        {q:"Pourquoi le crédit est-il important ?", qzh:"信貸為何重要？", a:"Il permet aux ménages et aux entreprises d'investir sans disposer immédiatement des fonds.", azh:"它讓家庭與企業在尚無足夠資金時就能投資。"},
        {q:"Quels sont les dangers de l'endettement ?", qzh:"負債的危險？", a:"Un endettement excessif peut mener au surendettement et à l'insolvabilité.", azh:"過度負債可能導致債務纏身與無力償還。"},
        {q:"Comment les taux d'intérêt affectent-ils l'emprunt ?", qzh:"利率如何影響借貸？", a:"Des taux élevés renchérissent le crédit et freinent la consommation.", azh:"高利率使信貸成本上升、抑制消費。"},
        {q:"Les banques en ligne vont-elles remplacer les agences ?", qzh:"網路銀行會取代實體分行嗎？", a:"En grande partie, même si certains services exigent encore un contact humain.", azh:"大部分會，儘管某些服務仍需人際接觸。"},
      ]
    },
    /* ===== 財務金融 C2 ===== */
    { id:"st_c2_crise", level:"C2", theme:"財務金融", title:"金融危機的成因",
      intro:"C2：能就抽象、複雜議題精準辯證。談金融危機。",
      items:[
        {q:"Quelles sont les causes profondes des crises financières ?", qzh:"金融危機的深層成因？", a:"Elles résultent souvent d'un excès de spéculation et d'une régulation insuffisante.", azh:"它們往往源於過度投機與監管不足。"},
        {q:"Les crises sont-elles inévitables ?", qzh:"危機無可避免嗎？", a:"Difficiles à éviter totalement, car elles sont inhérentes au fonctionnement cyclique de l'économie.", azh:"難以完全避免，因為它們是經濟週期運作的固有現象。"},
        {q:"Comment limiter leur impact ?", qzh:"如何降低其衝擊？", a:"Par une régulation prudente et des mécanismes de surveillance plus rigoureux.", azh:"透過審慎監管與更嚴格的監測機制。"},
        {q:"Les régulateurs ont-ils tiré les leçons du passé ?", qzh:"監管者從過去學到教訓了嗎？", a:"En partie, mais la finance ne cesse d'inventer de nouveaux risques.", azh:"部分有，但金融業不斷創造新的風險。"},
        {q:"La spéculation est-elle condamnable en soi ?", qzh:"投機本身該譴責嗎？", a:"Pas nécessairement ; elle apporte de la liquidité, mais devient nuisible quand elle se déconnecte du réel.", azh:"未必；它提供流動性，但當它脫離實體經濟時就有害。"},
      ]
    },
    { id:"st_c2_crypto", level:"C2", theme:"財務金融", title:"加密貨幣與監管",
      intro:"C2：談加密貨幣的前景與監管難題。",
      items:[
        {q:"Les cryptomonnaies représentent-elles l'avenir de la finance ?", qzh:"加密貨幣是金融的未來嗎？", a:"Elles ouvrent des perspectives, mais leur volatilité freine leur adoption généralisée.", azh:"它們開啟了前景，但其波動性阻礙普及。"},
        {q:"Faut-il les réguler davantage ?", qzh:"該加強監管嗎？", a:"Une régulation s'impose pour protéger les investisseurs sans pour autant étouffer l'innovation.", azh:"監管有其必要，以保護投資人，同時不扼殺創新。"},
        {q:"Quels sont les risques principaux ?", qzh:"主要風險？", a:"La spéculation excessive, la fraude et l'absence de garantie.", azh:"過度投機、詐騙與缺乏保障。"},
        {q:"La blockchain a-t-elle d'autres applications ?", qzh:"區塊鏈有其他應用嗎？", a:"Oui, bien au-delà de la finance, notamment dans la traçabilité des données.", azh:"有，遠超金融，尤其在資料溯源方面。"},
        {q:"Les États devraient-ils créer leurs propres monnaies numériques ?", qzh:"各國該發行自己的數位貨幣嗎？", a:"Plusieurs l'envisagent, car cela leur permettrait de conserver le contrôle monétaire.", azh:"不少國家正考慮，因為這能讓它們保有貨幣主導權。"},
      ]
    },
    { id:"st_c2_durable", level:"C2", theme:"財務金融", title:"永續金融與 ESG",
      intro:"C2：談永續金融與 ESG 投資。",
      items:[
        {q:"Qu'entend-on par finance durable ?", qzh:"何謂永續金融？", a:"Une finance qui intègre des critères environnementaux, sociaux et de gouvernance.", azh:"一種納入環境、社會與治理準則的金融。"},
        {q:"Est-ce une simple tendance ou une transformation de fond ?", qzh:"這只是潮流還是根本轉變？", a:"C'est une transformation de fond, portée par une prise de conscience croissante.", azh:"是根本轉變，源於日益增長的覺醒。"},
        {q:"La rentabilité et l'éthique sont-elles compatibles ?", qzh:"獲利與倫理相容嗎？", a:"De plus en plus ; les investissements responsables affichent souvent de bonnes performances.", azh:"越來越相容；責任投資往往也有好的績效。"},
        {q:"Le « greenwashing » est-il un risque réel ?", qzh:"「漂綠」是真實的風險嗎？", a:"Tout à fait ; certaines entreprises affichent des engagements qu'elles ne respectent pas.", azh:"確實如此；有些企業標榜的承諾並未兌現。"},
        {q:"Comment garantir la crédibilité de ces démarches ?", qzh:"如何確保這些作為的可信度？", a:"Par des normes claires et un contrôle indépendant.", azh:"透過明確的標準與獨立的稽核。"},
      ]
    },
    /* ===== 校園用語 C1 ===== */
    { id:"st_c1_campus_cours", level:"C1", theme:"校園用語", title:"課堂與學習方法",
      intro:"C1：流暢應對學術情境。談課堂與學習。",
      items:[
        {q:"Comment abordez-vous une matière difficile ?", qzh:"您如何面對困難的科目？", a:"Je décompose la matière en notions clés et je m'exerce régulièrement.", azh:"我把內容拆解成關鍵概念並定期練習。"},
        {q:"Préférez-vous les cours magistraux ou les travaux dirigés ?", qzh:"您偏好大堂課還是分組討論課？", a:"Les travaux dirigés, car ils favorisent l'échange et l'application concrète.", azh:"分組課，因為它促進交流與實際應用。"},
        {q:"Comment gérez-vous votre charge de travail ?", qzh:"您如何安排課業量？", a:"Je planifie mes révisions à l'avance pour éviter de tout faire à la dernière minute.", azh:"我提前規劃複習，避免臨時抱佛腳。"},
        {q:"Que faites-vous quand vous ne comprenez pas ?", qzh:"不懂時您怎麼辦？", a:"Je n'hésite pas à demander des précisions au professeur ou à mes camarades.", azh:"我會主動向教授或同學請教。"},
        {q:"La participation en classe est-elle importante ?", qzh:"課堂參與重要嗎？", a:"Oui, elle permet de clarifier ses idées et de progresser plus vite.", azh:"是的，它能釐清想法、加速進步。"},
      ]
    },
    { id:"st_c1_campus_recherche", level:"C1", theme:"校園用語", title:"報告與研究",
      intro:"C1：談如何準備口頭報告與評估資料。",
      items:[
        {q:"Comment préparez-vous un exposé ?", qzh:"您如何準備口頭報告？", a:"Je rassemble mes sources, je structure mon plan et je m'entraîne à l'oral.", azh:"我蒐集資料、擬定大綱並練習口說。"},
        {q:"Comment captez-vous l'attention de votre auditoire ?", qzh:"您如何抓住聽眾注意？", a:"En commençant par une question ou un exemple concret.", azh:"用一個問題或具體例子開場。"},
        {q:"Comment évaluez-vous la fiabilité d'une source ?", qzh:"您如何評估資料的可信度？", a:"Je vérifie l'auteur, la date et le sérieux de la publication.", azh:"我查證作者、日期與刊物的可信度。"},
        {q:"Que faites-vous face à une question difficile ?", qzh:"遇到難回答的提問怎麼辦？", a:"Je reformule la question et je réponds avec honnêteté, quitte à nuancer.", azh:"我重述問題並誠實回答，必要時加以保留。"},
        {q:"Le travail en groupe est-il efficace ?", qzh:"小組合作有效率嗎？", a:"Oui, à condition que les rôles soient clairement répartis.", azh:"有，前提是分工明確。"},
      ]
    },
    { id:"st_c1_campus_vie", level:"C1", theme:"校園用語", title:"校園生活與社團",
      intro:"C1：談社團、課業與生活的平衡。",
      items:[
        {q:"Êtes-vous engagé(e) dans des activités associatives ?", qzh:"您有參與社團活動嗎？", a:"Oui, je fais partie d'un club de finance où nous organisons des conférences.", azh:"有，我參加一個財金社團，我們會辦講座。"},
        {q:"Qu'est-ce que la vie associative vous apporte ?", qzh:"社團生活帶給您什麼？", a:"Elle développe mon sens de l'organisation et mon esprit d'équipe.", azh:"它培養我的組織能力與團隊精神。"},
        {q:"Comment conciliez-vous études et loisirs ?", qzh:"您如何兼顧課業與休閒？", a:"En établissant des priorités claires et en respectant mon emploi du temps.", azh:"透過明確的優先順序並遵守行程。"},
        {q:"La vie de campus favorise-t-elle l'autonomie ?", qzh:"校園生活有助於自主嗎？", a:"Absolument ; on apprend à gérer son temps et ses responsabilités.", azh:"絕對；我們學會管理時間與責任。"},
        {q:"Recommanderiez-vous votre université ?", qzh:"您會推薦您的大學嗎？", a:"Oui, pour son ambiance dynamique et la qualité de son enseignement.", azh:"會，因為它充滿活力的氛圍與優質的教學。"},
      ]
    },
    /* ===== 校園用語 C2 ===== */
    { id:"st_c2_campus_debat", level:"C2", theme:"校園用語", title:"學術辯論",
      intro:"C2：能精準、有層次地辯論。談學術論辯。",
      items:[
        {q:"Comment défendez-vous une thèse face à la contradiction ?", qzh:"面對反駁，您如何捍衛論點？", a:"Je reconnais la part de vérité de l'objection avant d'y opposer des arguments solides.", azh:"我先承認反方有理之處，再提出有力的論據反駁。"},
        {q:"Comment distinguez-vous un bon argument d'un sophisme ?", qzh:"您如何分辨好論證與詭辯？", a:"Un bon argument s'appuie sur des faits vérifiables, le sophisme sur une simple apparence de logique.", azh:"好論證立足於可驗證的事實，詭辯則只是貌似有邏輯。"},
        {q:"Le désaccord est-il fécond dans le débat académique ?", qzh:"學術辯論中分歧有益嗎？", a:"Oui, la confrontation des idées fait souvent émerger des perspectives nouvelles.", azh:"是的，觀念的交鋒常激盪出新的視角。"},
        {q:"Comment rester objectif sur un sujet qui vous tient à cœur ?", qzh:"對切身議題如何保持客觀？", a:"En m'efforçant de considérer les arguments adverses avec honnêteté intellectuelle.", azh:"我努力以理智的誠實看待對立的論點。"},
        {q:"Faut-il toujours chercher à convaincre ?", qzh:"是否總該說服對方？", a:"Pas nécessairement ; parfois, comprendre l'autre importe plus que le convaincre.", azh:"未必；有時理解對方比說服他更重要。"},
      ]
    },
    { id:"st_c2_campus_memoire", level:"C2", theme:"校園用語", title:"論文與口試",
      intro:"C2：談論文撰寫與口試應對。",
      items:[
        {q:"Comment abordez-vous la rédaction d'un mémoire ?", qzh:"您如何著手撰寫論文？", a:"Je commence par circonscrire une problématique précise avant de bâtir mon argumentation.", azh:"我先界定明確的問題意識，再建構論述。"},
        {q:"Comment gérez-vous le stress d'une soutenance ?", qzh:"您如何應對口試的壓力？", a:"En me préparant minutieusement et en anticipant les questions du jury.", azh:"透過縝密準備並預想口試委員的提問。"},
        {q:"Comment réagissez-vous à une critique du jury ?", qzh:"面對委員的批評您如何回應？", a:"Je l'accueille avec ouverture et j'y réponds de manière argumentée.", azh:"我以開放的態度接受，並有理有據地回應。"},
        {q:"Qu'est-ce qui distingue un excellent mémoire ?", qzh:"優秀論文的特點是？", a:"La rigueur de la méthode et l'originalité de la réflexion.", azh:"嚴謹的方法與獨到的思考。"},
        {q:"La recherche vous attire-t-elle ?", qzh:"您對研究感興趣嗎？", a:"Oui, j'apprécie la démarche intellectuelle qu'elle suppose, même si elle est exigeante.", azh:"是的，我欣賞它所要求的思辨過程，儘管很費心力。"},
      ]
    },
    { id:"st_c2_campus_echange", level:"C2", theme:"校園用語", title:"國際交換",
      intro:"C2：談國際交換的動機與挑戰。",
      items:[
        {q:"Pourquoi envisagez-vous un échange universitaire ?", qzh:"您為何考慮國際交換？", a:"Pour m'immerger dans une autre culture académique et perfectionner mon français.", azh:"為了沉浸於另一種學術文化並精進法文。"},
        {q:"Quels défis un tel séjour représente-t-il ?", qzh:"這樣的交換有什麼挑戰？", a:"L'adaptation à un nouveau système d'enseignement et la barrière linguistique.", azh:"適應全新的教學制度與語言隔閡。"},
        {q:"Comment surmonteriez-vous ces difficultés ?", qzh:"您會如何克服這些困難？", a:"En faisant preuve de curiosité, de patience et d'une réelle ouverture d'esprit.", azh:"透過好奇心、耐心與真正的開放心態。"},
        {q:"Qu'attendez-vous de cette expérience ?", qzh:"您期待這段經歷帶來什麼？", a:"Un enrichissement personnel autant qu'un atout pour ma carrière.", azh:"個人的成長，也是職涯的助力。"},
        {q:"Recommanderiez-vous la mobilité internationale ?", qzh:"您會推薦出國交流嗎？", a:"Sans hésiter ; c'est une expérience qui transforme durablement notre regard sur le monde.", azh:"毫不猶豫；那是一段能長久改變我們看待世界眼光的經歷。"},
      ]
    }
  );
})();
