/* B2 寫作擴充批次 1：6 篇完整論說文＋對應練習（對應 B2 單字主題）
   結構：引言＋提問 → 論述一（正）→ 論述二（反）→ 結論＋表態 */
(function(){
  if(!window.WRITING) return;
  const T=window.WRITING.templates, E=window.WRITING.exercises;
  const b2grille=(extra)=>["切題與語域："+extra+"、語域偏正式","論證：正反兼具、論點清楚並舉例","連貫：結構分明、連接詞豐富","詞彙：主題相關詞彙精準多樣","文法：複雜句、時態、過去分詞一致正確","拼字正確，字數約 250"];

  T.push(
    { id:"wt_b2_ia", title:"論說文：人工智慧是威脅嗎", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「科技倫理」。",
      body:[
        {fr:"L'intelligence artificielle connaît un développement spectaculaire ces dernières années.", zh:"近年人工智慧發展驚人。"},
        {fr:"Face à ces progrès, on peut se demander si elle représente un danger pour l'humanité.", zh:"面對這些進展，我們不禁要問它是否對人類構成威脅。"},
        {fr:"D'une part, il est indéniable que l'IA offre d'immenses avantages.", zh:"一方面，不可否認 AI 帶來巨大的好處。"},
        {fr:"En effet, elle facilite le travail, la médecine et la recherche scientifique.", zh:"確實，它讓工作、醫療與科研更便利。"},
        {fr:"Par exemple, certains programmes détectent des maladies plus tôt que les médecins.", zh:"例如，有些程式比醫生更早偵測出疾病。"},
        {fr:"D'autre part, cette technologie soulève de réelles inquiétudes.", zh:"另一方面，這項技術引發真切的憂慮。"},
        {fr:"Elle pourrait supprimer de nombreux emplois et menacer notre vie privée.", zh:"它可能讓許多工作消失，並威脅我們的隱私。"},
        {fr:"Cependant, le danger ne vient pas de l'outil lui-même, mais de l'usage qu'on en fait.", zh:"然而，危險不來自工具本身，而來自我們如何使用它。"},
        {fr:"En conclusion, l'IA n'est ni bonne ni mauvaise en soi.", zh:"總結來說，AI 本身無所謂好壞。"},
        {fr:"Selon moi, il est urgent de l'encadrer par des règles claires pour en faire un allié.", zh:"在我看來，當務之急是用明確的規範來駕馭它，使其成為助力。"},
      ]
    },
    { id:"wt_b2_science", title:"論說文：科學進步總是好的嗎", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「科學」。",
      body:[
        {fr:"Le progrès scientifique a profondément transformé nos sociétés.", zh:"科學進步深刻改變了我們的社會。"},
        {fr:"On peut se demander s'il est toujours bénéfique pour l'humanité.", zh:"我們不禁要問，它是否總是對人類有益。"},
        {fr:"D'une part, la science a permis des avancées extraordinaires.", zh:"一方面，科學帶來了非凡的進展。"},
        {fr:"En effet, grâce à elle, nous vivons plus longtemps et en meilleure santé.", zh:"確實，多虧科學，我們活得更久、更健康。"},
        {fr:"Par exemple, les vaccins ont sauvé des millions de vies à travers le monde.", zh:"例如，疫苗在全世界拯救了數百萬人的生命。"},
        {fr:"D'autre part, certaines découvertes peuvent se révéler dangereuses.", zh:"另一方面，某些發現可能很危險。"},
        {fr:"On peut penser aux armes ou aux atteintes graves à l'environnement.", zh:"我們可以想到武器或對環境的嚴重破壞。"},
        {fr:"Cependant, ce n'est pas la science qui est en cause, mais les choix des hommes.", zh:"然而，問題不在科學，而在人的選擇。"},
        {fr:"En conclusion, le progrès scientifique est une chance, à condition d'être utilisé avec responsabilité.", zh:"總結來說，科學進步是機會，前提是負責任地運用。"},
        {fr:"À mon avis, la science doit toujours s'accompagner d'une réflexion éthique.", zh:"在我看來，科學必須始終伴隨倫理的省思。"},
      ]
    },
    { id:"wt_b2_inegalites", title:"論說文：如何縮小社會不平等", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「社會議題」。",
      body:[
        {fr:"Les inégalités sociales restent l'un des grands problèmes de notre époque.", zh:"社會不平等仍是我們這個時代的重大問題之一。"},
        {fr:"On peut se demander comment les réduire de manière efficace.", zh:"我們不禁要問，該如何有效縮小它。"},
        {fr:"D'une part, l'éducation joue un rôle absolument essentiel.", zh:"一方面，教育扮演著至關重要的角色。"},
        {fr:"En effet, offrir à tous les mêmes chances permet de réduire l'écart.", zh:"確實，給所有人同樣的機會能縮小差距。"},
        {fr:"Par exemple, des écoles gratuites et de qualité aident les plus défavorisés.", zh:"例如，免費且優質的學校能幫助最弱勢的人。"},
        {fr:"D'autre part, certains estiment que l'État doit redistribuer davantage les richesses.", zh:"另一方面，有些人認為國家應更多地重分配財富。"},
        {fr:"Il est vrai que les impôts peuvent financer des aides sociales utiles.", zh:"確實，稅收能用來資助有用的社會福利。"},
        {fr:"Cependant, ces mesures ne suffisent pas sans une véritable volonté politique.", zh:"然而，若沒有真正的政治意願，這些措施仍不足。"},
        {fr:"En conclusion, réduire les inégalités demande des efforts à la fois individuels et collectifs.", zh:"總結來說，縮小不平等需要個人與集體的共同努力。"},
        {fr:"Selon moi, c'est en investissant dans l'éducation que l'on construira une société plus juste.", zh:"在我看來，唯有投資教育，才能打造更公平的社會。"},
      ]
    },
    { id:"wt_b2_art", title:"論說文：藝術有用嗎", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「藝術評論」。",
      body:[
        {fr:"On entend parfois dire que l'art ne sert à rien dans la société moderne.", zh:"有時會聽到有人說藝術在現代社會毫無用處。"},
        {fr:"On peut se demander si l'art a véritablement une utilité.", zh:"我們不禁要問，藝術是否真有其用。"},
        {fr:"D'une part, l'art semble moins « utile » que la science ou l'économie.", zh:"一方面，藝術似乎不如科學或經濟那麼「實用」。"},
        {fr:"En effet, il ne produit ni objets ni richesses matérielles directes.", zh:"確實，它不直接生產物品或財富。"},
        {fr:"D'autre part, l'art répond à un besoin profondément humain.", zh:"另一方面，藝術回應一種深層的人性需求。"},
        {fr:"Il nous permet d'exprimer nos émotions et de mieux comprendre le monde.", zh:"它讓我們表達情感、更深刻地理解世界。"},
        {fr:"Par exemple, un roman ou un film peut changer notre regard sur la vie.", zh:"例如，一本小說或一部電影能改變我們看待人生的眼光。"},
        {fr:"De plus, l'art rassemble les gens et transmet la mémoire d'une culture.", zh:"此外，藝術凝聚人群、傳承一個文化的記憶。"},
        {fr:"En conclusion, l'art n'est pas un simple loisir, mais un pilier de toute civilisation.", zh:"總結來說，藝術不只是消遣，而是一切文明的支柱。"},
        {fr:"Selon moi, une société sans art serait une société sans âme.", zh:"在我看來，沒有藝術的社會將是沒有靈魂的社會。"},
      ]
    },
    { id:"wt_b2_education", title:"論說文：是否該改革教育制度", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「教育（進階）」。",
      body:[
        {fr:"Le système éducatif est régulièrement au cœur des débats publics.", zh:"教育制度經常是公共辯論的焦點。"},
        {fr:"On peut se demander s'il faut le réformer en profondeur.", zh:"我們不禁要問，是否該對它進行深層改革。"},
        {fr:"D'une part, l'école traditionnelle présente certaines limites.", zh:"一方面，傳統學校有其侷限。"},
        {fr:"En effet, elle privilégie souvent la mémorisation plutôt que la créativité.", zh:"確實，它往往重背誦而輕創造力。"},
        {fr:"Par exemple, les élèves apprennent beaucoup pour les examens, puis oublient vite.", zh:"例如，學生為考試學了很多，之後卻很快忘記。"},
        {fr:"D'autre part, réformer un système entier est long et difficile.", zh:"另一方面，改革整個制度既漫長又困難。"},
        {fr:"Il faut former les enseignants et convaincre les familles.", zh:"必須培訓教師並說服家庭。"},
        {fr:"Cependant, l'immobilisme serait encore plus dommageable à long terme.", zh:"然而，長遠來看，停滯不前的危害更大。"},
        {fr:"En conclusion, le système éducatif doit évoluer pour s'adapter au monde actuel.", zh:"總結來說，教育制度必須與時俱進以適應當今世界。"},
        {fr:"À mon avis, il faudrait surtout encourager l'autonomie et l'esprit critique des élèves.", zh:"在我看來，尤其應該鼓勵學生的自主性與批判思考。"},
      ]
    },
    { id:"wt_b2_justice", title:"論說文：法律之前人人平等嗎", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「正義（進階）」。",
      body:[
        {fr:"On dit souvent que la justice est la même pour tous.", zh:"人們常說法律之前人人平等。"},
        {fr:"On peut se demander si cette égalité est réelle dans les faits.", zh:"我們不禁要問，這種平等在現實中是否真的存在。"},
        {fr:"D'une part, la loi est en principe identique pour chaque citoyen.", zh:"一方面，法律原則上對每個公民都一視同仁。"},
        {fr:"En effet, tout le monde doit répondre de ses actes devant un tribunal.", zh:"確實，每個人都得在法庭前為自己的行為負責。"},
        {fr:"D'autre part, dans la réalité, de nombreuses inégalités subsistent.", zh:"另一方面，在現實中，許多不平等依然存在。"},
        {fr:"Par exemple, une personne riche peut s'offrir de meilleurs avocats.", zh:"例如，有錢人能聘請更好的律師。"},
        {fr:"De plus, l'accès à la justice reste compliqué pour les plus démunis.", zh:"此外，對最弱勢者而言，訴諸司法仍然困難。"},
        {fr:"Cependant, de nombreux pays s'efforcent de garantir une aide juridique gratuite.", zh:"然而，許多國家努力提供免費的法律扶助。"},
        {fr:"En conclusion, l'égalité devant la loi est un idéal qui n'est pas toujours atteint.", zh:"總結來說，法律之前人人平等是一個尚未總能實現的理想。"},
        {fr:"Selon moi, il est essentiel de continuer à réduire ces inégalités pour une justice vraiment équitable.", zh:"在我看來，持續縮小這些不平等、讓司法真正公正，至關重要。"},
      ]
    }
  );

  E.push(
    { id:"we_b2_ia", title:"論說文：人工智慧是威脅嗎", level:"B2", delf:true, delfType:"DELF B2・論說文", target:"~250 字",
      prompt:"題目：« L'intelligence artificielle représente-t-elle un danger pour l'humanité ? »（人工智慧對人類是威脅嗎？）請寫一篇約 250 字的論說文。",
      steps:[{label:"① 引言",detail:"引入 AI 議題並提問。"},{label:"② 論述一（好處）",detail:"工作、醫療…附例。"},{label:"③ 論述二（疑慮）",detail:"失業、隱私，並轉折。"},{label:"④ 結論＋表態",detail:"提出規範的觀點。"}],
      grille:b2grille("符合論說文情境") },
    { id:"we_b2_science", title:"論說文：科學進步總是好的嗎", level:"B2", delf:true, delfType:"DELF B2・論說文", target:"~250 字",
      prompt:"題目：« Le progrès scientifique est-il toujours bénéfique ? »（科學進步總是有益的嗎？）請寫一篇約 250 字的論說文。",
      steps:[{label:"① 引言",detail:"引入科學進步並提問。"},{label:"② 論述一（益處）",detail:"健康、壽命，附例。"},{label:"③ 論述二（風險）",detail:"武器、環境，並轉折。"},{label:"④ 結論＋表態",detail:"強調責任與倫理。"}],
      grille:b2grille("符合論說文情境") },
    { id:"we_b2_inegalites", title:"論說文：如何縮小社會不平等", level:"B2", delf:true, delfType:"DELF B2・論說文", target:"~250 字",
      prompt:"題目：« Comment réduire les inégalités sociales ? »（如何縮小社會不平等？）請寫一篇約 250 字的論說文。",
      steps:[{label:"① 引言",detail:"點出不平等問題並提問。"},{label:"② 論述一（教育）",detail:"機會均等，附例。"},{label:"③ 論述二（重分配）",detail:"稅收／福利，並讓步。"},{label:"④ 結論＋表態",detail:"強調個人與集體努力。"}],
      grille:b2grille("符合論說文情境") },
    { id:"we_b2_art", title:"論說文：藝術有用嗎", level:"B2", delf:true, delfType:"DELF B2・論說文", target:"~250 字",
      prompt:"題目：« L'art a-t-il une véritable utilité dans la société ? »（藝術在社會中真有用處嗎？）請寫一篇約 250 字的論說文。",
      steps:[{label:"① 引言",detail:"點出「藝術無用」之說並提問。"},{label:"② 論述一（看似無用）",detail:"不直接生產財富。"},{label:"③ 論述二（人性需求）",detail:"情感、文化，附例。"},{label:"④ 結論＋表態",detail:"肯定藝術的價值。"}],
      grille:b2grille("符合論說文情境") },
    { id:"we_b2_education", title:"論說文：是否該改革教育制度", level:"B2", delf:true, delfType:"DELF B2・論說文", target:"~250 字",
      prompt:"題目：« Faut-il réformer le système éducatif ? »（是否該改革教育制度？）請寫一篇約 250 字的論說文。",
      steps:[{label:"① 引言",detail:"點出教育爭議並提問。"},{label:"② 論述一（傳統侷限）",detail:"重背誦輕創造，附例。"},{label:"③ 論述二（改革困難）",detail:"耗時、阻力，並轉折。"},{label:"④ 結論＋表態",detail:"主張漸進改革方向。"}],
      grille:b2grille("符合論說文情境") },
    { id:"we_b2_justice", title:"論說文：法律之前人人平等嗎", level:"B2", delf:true, delfType:"DELF B2・論說文", target:"~250 字",
      prompt:"題目：« La justice est-elle vraiment la même pour tous ? »（法律之前真的人人平等嗎？）請寫一篇約 250 字的論說文。",
      steps:[{label:"① 引言",detail:"點出「人人平等」之說並提問。"},{label:"② 論述一（原則平等）",detail:"法律一視同仁。"},{label:"③ 論述二（現實不平等）",detail:"資源差距，附例。"},{label:"④ 結論＋表態",detail:"指出理想與現實的落差。"}],
      grille:b2grille("符合論說文情境") }
  );
})();
