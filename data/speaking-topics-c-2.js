/* 口說主題練習 C1/C2 批次 2：職場 + 科技（各 C1×3、C2×3） */
(function(){
  window.SPEAKING_TOPICS = window.SPEAKING_TOPICS || [];
  const TP=window.SPEAKING_TOPICS;
  TP.push(
    /* ===== 職場 C1 ===== */
    { id:"st_c1_pro_reunion", level:"C1", theme:"職場用語", title:"會議與簡報",
      intro:"C1：流暢應對職場情境。談主持會議與簡報。",
      items:[
        {q:"Comment préparez-vous une réunion importante ?", qzh:"您如何準備重要會議？", a:"Je définis un ordre du jour clair et je prépare les documents à l'avance.", azh:"我擬定清楚的議程並事先準備好文件。"},
        {q:"Comment animez-vous une réunion efficacement ?", qzh:"您如何有效主持會議？", a:"Je veille à respecter le temps imparti et à donner la parole à chacun.", azh:"我注意掌控時間並讓每個人都能發言。"},
        {q:"Comment réagissez-vous si la discussion s'égare ?", qzh:"討論離題時您怎麼處理？", a:"Je recentre poliment le débat sur l'ordre du jour.", azh:"我會禮貌地把討論拉回議程。"},
        {q:"Qu'est-ce qui fait une bonne présentation ?", qzh:"好的簡報要件是？", a:"Un message clair, des supports visuels soignés et une bonne gestion du stress.", azh:"清楚的訊息、精緻的視覺輔助與良好的壓力管理。"},
        {q:"Comment concluez-vous une réunion ?", qzh:"您如何收尾一場會議？", a:"Je récapitule les décisions et j'attribue les tâches à chacun.", azh:"我會總結決議並分派任務。"},
      ]
    },
    { id:"st_c1_pro_candidature", level:"C1", theme:"職場用語", title:"求職與面試",
      intro:"C1：談面試準備與自我呈現。",
      items:[
        {q:"Comment vous préparez-vous à un entretien ?", qzh:"您如何準備面試？", a:"Je me renseigne sur l'entreprise et j'anticipe les questions courantes.", azh:"我研究公司並預想常見問題。"},
        {q:"Comment présentez-vous vos points forts ?", qzh:"您如何呈現自己的優點？", a:"J'illustre chaque qualité par un exemple concret tiré de mon expérience.", azh:"我用實際經驗的例子佐證每項優點。"},
        {q:"Comment parlez-vous de vos points faibles ?", qzh:"您如何談自己的弱點？", a:"J'en mentionne un avec honnêteté, tout en montrant comment je progresse.", azh:"我誠實提一個，並說明我如何改進。"},
        {q:"Quelles questions posez-vous au recruteur ?", qzh:"您會向招募者問什麼？", a:"Je m'intéresse aux missions du poste et à la culture de l'équipe.", azh:"我會關心職務內容與團隊文化。"},
        {q:"Comment faites-vous bonne impression ?", qzh:"您如何留下好印象？", a:"En restant authentique, ponctuel et à l'écoute.", azh:"保持真誠、準時並懂得傾聽。"},
      ]
    },
    { id:"st_c1_pro_equipe", level:"C1", theme:"職場用語", title:"團隊合作",
      intro:"C1：談團隊協作與衝突處理。",
      items:[
        {q:"Qu'est-ce qui fait une équipe efficace ?", qzh:"高效團隊的要件是？", a:"Une communication claire et une répartition équitable des tâches.", azh:"清楚的溝通與公平的分工。"},
        {q:"Comment gérez-vous un désaccord avec un collègue ?", qzh:"您如何處理與同事的分歧？", a:"J'écoute son point de vue avant de chercher un compromis.", azh:"我先聆聽他的觀點，再尋求妥協。"},
        {q:"Comment contribuez-vous à la cohésion du groupe ?", qzh:"您如何促進團隊凝聚？", a:"En valorisant les idées de chacun et en restant solidaire.", azh:"透過肯定每個人的想法並彼此支持。"},
        {q:"Que faites-vous si un membre ne participe pas ?", qzh:"若有成員不投入您怎麼辦？", a:"Je l'encourage à s'impliquer en lui confiant une responsabilité.", azh:"我會交付他一項責任，鼓勵他投入。"},
        {q:"Préférez-vous travailler seul ou en équipe ?", qzh:"您偏好獨力還是團隊作業？", a:"Cela dépend de la tâche, mais l'équipe enrichit souvent le résultat.", azh:"看任務而定，但團隊往往讓成果更豐富。"},
      ]
    },
    /* ===== 職場 C2 ===== */
    { id:"st_c2_pro_management", level:"C2", theme:"職場用語", title:"管理與領導",
      intro:"C2：精準論述管理與領導議題。",
      items:[
        {q:"Qu'est-ce qui distingue un manager d'un leader ?", qzh:"主管與領導者有何不同？", a:"Le manager organise, tandis que le leader inspire et donne du sens.", azh:"主管負責組織，領導者則啟發並賦予意義。"},
        {q:"Un bon leadership s'apprend-il ou est-il inné ?", qzh:"好的領導力是學來的還是天生的？", a:"En grande partie, il se cultive par l'expérience et la remise en question.", azh:"大部分靠經驗與自我反省培養而成。"},
        {q:"Comment motiver une équipe sur le long terme ?", qzh:"如何長期激勵團隊？", a:"En reconnaissant les efforts et en donnant de l'autonomie.", azh:"透過肯定付出並賦予自主權。"},
        {q:"Faut-il privilégier l'autorité ou la bienveillance ?", qzh:"該偏重權威還是善意？", a:"Idéalement les deux : la fermeté sur les objectifs, la souplesse sur les moyens.", azh:"理想上兩者兼具：對目標堅定，對方法彈性。"},
        {q:"Comment gérez-vous un échec collectif ?", qzh:"您如何面對團隊的失敗？", a:"J'en assume la responsabilité et j'en fais une occasion d'apprentissage.", azh:"我承擔責任，並把它化為學習的契機。"},
      ]
    },
    { id:"st_c2_pro_negociation", level:"C2", theme:"職場用語", title:"談判藝術",
      intro:"C2：談判判的策略與心理。",
      items:[
        {q:"Quelle est la clé d'une bonne négociation ?", qzh:"好談判的關鍵是？", a:"Comprendre les intérêts réels de l'autre partie, au-delà de ses positions.", azh:"理解對方表態背後真正的利益。"},
        {q:"Faut-il toujours viser un compromis ?", qzh:"是否總該以妥協為目標？", a:"Plutôt une solution où chacun trouve son compte, un accord gagnant-gagnant.", azh:"應追求雙贏、各取所需的方案。"},
        {q:"Comment réagir face à un interlocuteur agressif ?", qzh:"面對咄咄逼人的對手怎麼辦？", a:"En gardant son calme et en ramenant la discussion sur les faits.", azh:"保持冷靜並把討論拉回事實。"},
        {q:"Quel rôle joue la préparation ?", qzh:"準備扮演什麼角色？", a:"Elle est déterminante : connaître ses limites et ses marges de manœuvre.", azh:"它至關重要：清楚自己的底線與迴旋空間。"},
        {q:"Peut-on négocier sans rapport de force ?", qzh:"沒有實力差距能談判嗎？", a:"Oui, en s'appuyant sur la confiance et la recherche d'un intérêt commun.", azh:"可以，靠的是信任與尋求共同利益。"},
      ]
    },
    { id:"st_c2_pro_carriere", level:"C2", theme:"職場用語", title:"職涯發展",
      intro:"C2：談職涯規劃與成功的定義。",
      items:[
        {q:"Comment envisagez-vous votre évolution de carrière ?", qzh:"您如何看待自己的職涯發展？", a:"Je privilégie l'acquisition de compétences avant la recherche de titres.", azh:"我重視能力的累積，更甚於頭銜。"},
        {q:"Faut-il rester fidèle à une entreprise ou changer souvent ?", qzh:"該忠於一家公司還是常換工作？", a:"Tout dépend des opportunités d'apprentissage qu'on y trouve.", azh:"一切取決於能在那裡學到什麼。"},
        {q:"Comment rester compétitif sur le marché du travail ?", qzh:"如何在職場保持競爭力？", a:"En se formant continuellement et en cultivant son réseau.", azh:"持續進修並經營人脈。"},
        {q:"La reconversion professionnelle vous tente-t-elle ?", qzh:"轉換跑道吸引您嗎？", a:"Pourquoi pas, si elle donne plus de sens à mon travail.", azh:"未嘗不可，只要能讓工作更有意義。"},
        {q:"Comment définissez-vous la réussite professionnelle ?", qzh:"您如何定義職場成功？", a:"Par l'épanouissement personnel autant que par la reconnaissance.", azh:"個人的成就感與外界的肯定同樣重要。"},
      ]
    },
    /* ===== 科技 C1 ===== */
    { id:"st_c1_tech_num", level:"C1", theme:"科技", title:"數位轉型",
      intro:"C1：流暢談科技議題。談企業數位轉型。",
      items:[
        {q:"Qu'est-ce que la transformation numérique ?", qzh:"什麼是數位轉型？", a:"C'est l'intégration des technologies digitales dans tous les aspects d'une organisation.", azh:"它是把數位科技融入組織的各個面向。"},
        {q:"Pourquoi est-elle devenue incontournable ?", qzh:"它為何變得不可或缺？", a:"Parce qu'elle améliore l'efficacité et répond aux attentes des clients.", azh:"因為它提升效率並回應顧客的期待。"},
        {q:"Quels obstacles rencontre-t-elle ?", qzh:"它遇到什麼阻礙？", a:"La résistance au changement et le coût des nouveaux outils.", azh:"對改變的抗拒與新工具的成本。"},
        {q:"Comment accompagner les employés ?", qzh:"如何協助員工適應？", a:"Par la formation et une communication transparente.", azh:"透過培訓與透明的溝通。"},
        {q:"Toutes les entreprises doivent-elles se digitaliser ?", qzh:"所有企業都該數位化嗎？", a:"Dans une certaine mesure, oui, pour rester compétitives.", azh:"某種程度上是，為了保持競爭力。"},
      ]
    },
    { id:"st_c1_tech_donnees", level:"C1", theme:"科技", title:"資料與隱私",
      intro:"C1：談個人資料與隱私保護。",
      items:[
        {q:"Pourquoi les données personnelles sont-elles précieuses ?", qzh:"個人資料為何珍貴？", a:"Parce qu'elles permettent de cibler et de personnaliser les services.", azh:"因為它們能用來精準鎖定並個人化服務。"},
        {q:"Quels sont les risques pour la vie privée ?", qzh:"對隱私有什麼風險？", a:"La surveillance, le piratage et l'utilisation abusive des données.", azh:"監控、駭客攻擊與資料濫用。"},
        {q:"Comment protéger ses données en ligne ?", qzh:"如何保護線上資料？", a:"En utilisant des mots de passe solides et en limitant ce qu'on partage.", azh:"使用強密碼並限制分享的內容。"},
        {q:"La régulation est-elle suffisante ?", qzh:"監管足夠嗎？", a:"Elle progresse, mais peine à suivre le rythme des technologies.", azh:"它在進步，但難以跟上科技的速度。"},
        {q:"Faut-il s'inquiéter du suivi publicitaire ?", qzh:"該擔心廣告追蹤嗎？", a:"Oui, il faut au moins en avoir conscience et garder le contrôle.", azh:"該，至少要有意識並保有掌控權。"},
      ]
    },
    { id:"st_c1_tech_cyber", level:"C1", theme:"科技", title:"資訊安全",
      intro:"C1：談資訊安全與防護。",
      items:[
        {q:"Qu'est-ce que la cybersécurité ?", qzh:"什麼是資訊安全？", a:"C'est l'ensemble des moyens de protéger les systèmes et les données.", azh:"它是保護系統與資料的各種手段的總和。"},
        {q:"Pourquoi est-elle si importante aujourd'hui ?", qzh:"它今天為何如此重要？", a:"Parce que les cyberattaques se multiplient et coûtent très cher.", azh:"因為網路攻擊日益增加且代價高昂。"},
        {q:"Quels sont les types de menaces courantes ?", qzh:"常見的威脅有哪些？", a:"Le phishing, les rançongiciels et le vol de données.", azh:"釣魚、勒索軟體與資料竊取。"},
        {q:"Comment une entreprise peut-elle se protéger ?", qzh:"企業如何自保？", a:"En formant ses employés et en sécurisant ses réseaux.", azh:"透過員工培訓與網路防護。"},
        {q:"L'erreur humaine est-elle un facteur clé ?", qzh:"人為疏失是關鍵因素嗎？", a:"Tout à fait ; elle est à l'origine de la plupart des incidents.", azh:"確實如此，大多數事故都源於人為疏失。"},
      ]
    },
    /* ===== 科技 C2 ===== */
    { id:"st_c2_tech_societe", level:"C2", theme:"科技", title:"科技與社會",
      intro:"C2：精準辯證科技對社會的影響。",
      items:[
        {q:"La technologie rapproche-t-elle ou isole-t-elle les gens ?", qzh:"科技讓人更靠近還是更疏離？", a:"Les deux à la fois : elle connecte à distance mais peut appauvrir les liens réels.", azh:"兩者皆有：它讓遠距相連，卻可能淡化真實的連結。"},
        {q:"Le progrès technique est-il toujours synonyme de progrès humain ?", qzh:"技術進步等同於人類進步嗎？", a:"Pas nécessairement ; tout dépend de l'usage que nous en faisons.", azh:"未必；一切取決於我們如何使用。"},
        {q:"Faut-il craindre l'accélération technologique ?", qzh:"該畏懼科技加速嗎？", a:"Plutôt l'accompagner d'une réflexion éthique que la craindre.", azh:"與其畏懼，不如以倫理思考來引導它。"},
        {q:"La fracture numérique est-elle un problème majeur ?", qzh:"數位落差是重大問題嗎？", a:"Oui, elle accentue les inégalités d'accès au savoir et à l'emploi.", azh:"是，它加劇了知識與就業機會的不平等。"},
        {q:"Qui devrait orienter le développement technologique ?", qzh:"誰該主導科技發展？", a:"Un dialogue entre chercheurs, citoyens et pouvoirs publics.", azh:"研究者、公民與公部門之間的對話。"},
      ]
    },
    { id:"st_c2_tech_innovation", level:"C2", theme:"科技", title:"創新與倫理",
      intro:"C2：談創新是否該設倫理界限。",
      items:[
        {q:"L'innovation doit-elle avoir des limites ?", qzh:"創新該有界限嗎？", a:"Oui, elle devrait s'accompagner de garde-fous éthiques.", azh:"該，它應伴隨倫理的防線。"},
        {q:"Peut-on tout faire sous prétexte de progrès ?", qzh:"能以進步為名為所欲為嗎？", a:"Non, certaines avancées posent de réelles questions morales.", azh:"不，某些進展引發真切的道德問題。"},
        {q:"Qui est responsable des dérives technologiques ?", qzh:"科技失控誰該負責？", a:"À la fois les concepteurs, les entreprises et les régulateurs.", azh:"設計者、企業與監管者共同承擔。"},
        {q:"Faut-il ralentir certaines recherches ?", qzh:"該放慢某些研究嗎？", a:"Pas les ralentir, mais les encadrer rigoureusement.", azh:"不是放慢，而是嚴格規範。"},
        {q:"L'éthique freine-t-elle l'innovation ?", qzh:"倫理會阻礙創新嗎？", a:"Au contraire, elle en garantit la légitimité et la pérennité.", azh:"恰恰相反，它確保創新的正當性與長久性。"},
      ]
    },
    { id:"st_c2_tech_dependance", level:"C2", theme:"科技", title:"數位依賴",
      intro:"C2：談我們對科技的依賴。",
      items:[
        {q:"Sommes-nous trop dépendants de la technologie ?", qzh:"我們太依賴科技了嗎？", a:"Probablement, au point d'avoir du mal à nous en passer.", azh:"很可能是，到了難以離開的地步。"},
        {q:"Quelles en sont les conséquences ?", qzh:"後果是什麼？", a:"Une attention fragmentée et parfois un appauvrissement des relations.", azh:"注意力被切割，有時人際關係也變淡。"},
        {q:"Peut-on retrouver un usage raisonné ?", qzh:"能回到理性的使用嗎？", a:"Oui, en fixant des limites conscientes à notre temps d'écran.", azh:"可以，為螢幕時間設下自覺的界線。"},
        {q:"Les entreprises exploitent-elles cette dépendance ?", qzh:"企業是否在利用這種依賴？", a:"Certaines conçoivent volontairement des applications addictives.", azh:"有些刻意設計令人上癮的應用程式。"},
        {q:"Faut-il éduquer dès l'enfance à un usage sain ?", qzh:"該從小培養健康使用嗎？", a:"Absolument ; la sensibilisation précoce est essentielle.", azh:"絕對；及早建立意識至關重要。"},
      ]
    }
  );
})();
