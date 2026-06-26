/* B2 寫作擴充批次 2：10 篇完整論說文＋對應練習（對應 B2 單字主題） */
(function(){
  if(!window.WRITING) return;
  const T=window.WRITING.templates, E=window.WRITING.exercises;
  const b2grille=(extra)=>["切題與語域："+extra+"、語域偏正式","論證：正反兼具、論點清楚並舉例","連貫：結構分明、連接詞豐富","詞彙：主題相關詞彙精準多樣","文法：複雜句、時態、過去分詞一致正確","拼字正確，字數約 250"];

  T.push(
    { id:"wt_b2_bonheur", title:"論說文：金錢能帶來幸福嗎", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「哲學思辨」。",
      body:[
        {fr:"On entend souvent dire que « l'argent ne fait pas le bonheur ».", zh:"人們常說「金錢買不到幸福」。"},
        {fr:"On peut se demander si cette affirmation est vraiment justifiée.", zh:"我們不禁要問，這個說法是否真的站得住腳。"},
        {fr:"D'une part, il est certain que l'argent contribue à notre bien-être.", zh:"一方面，金錢確實有助於我們的福祉。"},
        {fr:"En effet, il permet de satisfaire nos besoins essentiels et de vivre sans angoisse.", zh:"確實，它能滿足基本需求、讓人無憂地生活。"},
        {fr:"Par exemple, une personne lourdement endettée a rarement l'esprit tranquille.", zh:"例如，負債累累的人很少能心安。"},
        {fr:"D'autre part, l'argent ne suffit pas à rendre une vie heureuse.", zh:"另一方面，金錢不足以讓人生幸福。"},
        {fr:"Les relations, la santé et le sens que l'on donne à sa vie comptent davantage.", zh:"人際關係、健康，以及我們賦予生命的意義更為重要。"},
        {fr:"Cependant, opposer totalement l'argent et le bonheur serait excessif.", zh:"然而，把金錢與幸福完全對立則太過。"},
        {fr:"En conclusion, l'argent est un moyen, et non une fin en soi.", zh:"總結來說，金錢是手段，而非目的本身。"},
        {fr:"Selon moi, le bonheur naît surtout de l'équilibre entre nos besoins matériels et notre vie intérieure.", zh:"在我看來，幸福主要源於物質需求與內心生活之間的平衡。"},
      ]
    },
    { id:"wt_b2_vote", title:"論說文：投票是否該強制", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「政治」。",
      body:[
        {fr:"Dans certains pays, le vote est obligatoire, alors qu'il est facultatif dans d'autres.", zh:"在某些國家投票是強制的，在另一些國家則是自願的。"},
        {fr:"On peut se demander s'il faudrait rendre le vote obligatoire partout.", zh:"我們不禁要問，是否該讓投票到處都強制。"},
        {fr:"D'une part, le vote obligatoire renforcerait la participation démocratique.", zh:"一方面，強制投票能提升民主參與。"},
        {fr:"En effet, une forte abstention affaiblit la légitimité des élus.", zh:"確實，高棄權率會削弱當選者的正當性。"},
        {fr:"Par exemple, dans certains scrutins, moins de la moitié des citoyens votent.", zh:"例如，在某些選舉中，投票的公民不到一半。"},
        {fr:"D'autre part, obliger les gens à voter peut poser problème.", zh:"另一方面，強迫人民投票也可能有問題。"},
        {fr:"Voter est aussi une liberté, et certains n'ont pas d'opinion tranchée.", zh:"投票也是一種自由，有些人並沒有明確立場。"},
        {fr:"Cependant, on pourrait au moins encourager le vote par l'éducation civique.", zh:"然而，至少可以透過公民教育來鼓勵投票。"},
        {fr:"En conclusion, le vote obligatoire présente des avantages, mais il touche à une liberté fondamentale.", zh:"總結來說，強制投票有其優點，但牽涉到一項基本自由。"},
        {fr:"À mon avis, il vaut mieux motiver les citoyens que les contraindre.", zh:"在我看來，激勵公民勝過強迫他們。"},
      ]
    },
    { id:"wt_b2_entreprise", title:"論說文：企業的社會責任", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 255 字", intro:"DELF B2 論說文。主題對應單字主題「商業管理」。",
      body:[
        {fr:"Les grandes entreprises ont un poids considérable dans nos sociétés.", zh:"大型企業在我們的社會中份量舉足輕重。"},
        {fr:"On peut se demander si elles ont une responsabilité envers la société et l'environnement.", zh:"我們不禁要問，它們是否對社會與環境負有責任。"},
        {fr:"D'une part, le rôle premier d'une entreprise est de réaliser des profits.", zh:"一方面，企業的首要角色是獲利。"},
        {fr:"En effet, sans rentabilité, elle ne peut ni durer ni créer des emplois.", zh:"確實，沒有獲利，它既無法存續也無法創造就業。"},
        {fr:"D'autre part, les entreprises ne peuvent ignorer leur impact sur la planète.", zh:"另一方面，企業不能無視自己對地球的影響。"},
        {fr:"Par exemple, certaines polluent massivement tout en réalisant d'énormes bénéfices.", zh:"例如，有些企業在賺取巨額利潤的同時大量污染。"},
        {fr:"Cependant, de plus en plus d'entreprises adoptent des pratiques responsables.", zh:"然而，越來越多企業採取負責任的做法。"},
        {fr:"C'est ce qu'on appelle la responsabilité sociale des entreprises.", zh:"這就是所謂的企業社會責任。"},
        {fr:"En conclusion, profit et responsabilité ne sont pas forcément incompatibles.", zh:"總結來說，獲利與責任未必互不相容。"},
        {fr:"Selon moi, une entreprise vraiment performante concilie réussite économique et respect de l'environnement.", zh:"在我看來，真正卓越的企業能兼顧經濟成功與環境保護。"},
      ]
    },
    { id:"wt_b2_sante_pub", title:"論說文：醫療是否該全民免費", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 255 字", intro:"DELF B2 論說文。主題對應單字主題「健康醫療（進階）」。",
      body:[
        {fr:"L'accès aux soins de santé est une question essentielle dans toute société.", zh:"醫療的可近性在任何社會都是關鍵問題。"},
        {fr:"On peut se demander si les soins devraient être gratuits pour tous.", zh:"我們不禁要問，醫療是否該對所有人免費。"},
        {fr:"D'une part, la gratuité garantit l'égalité face à la maladie.", zh:"一方面，免費保障了人們面對疾病時的平等。"},
        {fr:"En effet, personne ne devrait renoncer à se soigner par manque d'argent.", zh:"確實，沒有人該因為沒錢而放棄治療。"},
        {fr:"Par exemple, dans certains pays, des malades attendent trop longtemps faute de moyens.", zh:"例如，在某些國家，病人因缺乏經濟能力而等待過久。"},
        {fr:"D'autre part, la gratuité totale représente un coût énorme pour l'État.", zh:"另一方面，全面免費對國家而言成本巨大。"},
        {fr:"Il faut bien financer les hôpitaux, les médecins et les médicaments.", zh:"醫院、醫生與藥品都需要經費。"},
        {fr:"Cependant, la santé ne devrait pas être considérée comme une simple marchandise.", zh:"然而，健康不該被視為單純的商品。"},
        {fr:"En conclusion, l'accès aux soins est un droit fondamental qu'il faut protéger.", zh:"總結來說，醫療的可近性是必須守護的基本權利。"},
        {fr:"À mon avis, un système solidaire, financé par tous, reste la solution la plus juste.", zh:"在我看來，由全民共同負擔的互助制度仍是最公平的方案。"},
      ]
    },
    { id:"wt_b2_langues", title:"論說文：是否該學多種外語", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「語言溝通」。",
      body:[
        {fr:"Dans un monde de plus en plus connecté, les langues étrangères sont précieuses.", zh:"在一個日益相連的世界，外語十分珍貴。"},
        {fr:"On peut se demander s'il est vraiment utile d'en apprendre plusieurs.", zh:"我們不禁要問，學好幾種外語是否真的有用。"},
        {fr:"D'une part, maîtriser plusieurs langues ouvre de nombreuses portes.", zh:"一方面，掌握多種語言能開啟許多大門。"},
        {fr:"En effet, cela facilite les voyages, les études et la vie professionnelle.", zh:"確實，這讓旅行、求學與職涯都更順利。"},
        {fr:"Par exemple, parler français et anglais m'a déjà beaucoup aidée dans mes études.", zh:"例如，會法文和英文已經對我的學業很有幫助。"},
        {fr:"D'autre part, apprendre une langue demande beaucoup de temps et d'efforts.", zh:"另一方面，學一門語言需要大量時間與努力。"},
        {fr:"Certains préfèrent donc se concentrer sur une seule langue et la maîtriser parfaitement.", zh:"因此有些人偏好專精一門語言、把它學到精通。"},
        {fr:"Cependant, même des bases dans plusieurs langues constituent un véritable atout.", zh:"然而，即使只是多語的基礎，也是真正的優勢。"},
        {fr:"En conclusion, apprendre plusieurs langues enrichit à la fois l'esprit et les opportunités.", zh:"總結來說，學多種語言能同時豐富心智與機會。"},
        {fr:"Selon moi, chaque langue apprise est une nouvelle façon de voir le monde.", zh:"在我看來，每學會一種語言，就是看世界的一種新方式。"},
      ]
    },
    { id:"wt_b2_religion", title:"論說文：宗教在現代社會的位置", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 255 字", intro:"DELF B2 論說文。主題對應單字主題「宗教信仰」。",
      body:[
        {fr:"La place de la religion dans la société fait souvent débat.", zh:"宗教在社會中的地位常引發辯論。"},
        {fr:"On peut se demander si elle a encore sa place dans le monde moderne.", zh:"我們不禁要問，它在現代世界是否仍有一席之地。"},
        {fr:"D'une part, beaucoup de personnes ne se reconnaissent plus dans la religion.", zh:"一方面，許多人不再認同宗教。"},
        {fr:"En effet, la science explique aujourd'hui ce que la religion expliquait autrefois.", zh:"確實，科學如今解釋了過去由宗教解釋的事。"},
        {fr:"D'autre part, la religion répond à des besoins que la science ne comble pas.", zh:"另一方面，宗教回應了科學無法滿足的需求。"},
        {fr:"Par exemple, elle offre du réconfort et un sens dans les moments difficiles.", zh:"例如，它在艱難時刻提供慰藉與意義。"},
        {fr:"Cependant, il est essentiel que chacun reste libre de croire ou non.", zh:"然而，每個人保有信或不信的自由至關重要。"},
        {fr:"C'est tout l'intérêt de la laïcité, qui garantit cette liberté.", zh:"這正是政教分離的價值，它保障了這份自由。"},
        {fr:"En conclusion, la religion garde une place, à condition de respecter les croyances de chacun.", zh:"總結來說，宗教仍有一席之地，前提是尊重每個人的信仰。"},
        {fr:"Selon moi, le respect mutuel est plus important que les différences de croyance.", zh:"在我看來，相互尊重比信仰的差異更重要。"},
      ]
    },
    { id:"wt_b2_stress", title:"論說文：現代生活是否太緊張", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「細膩情感心理」。",
      body:[
        {fr:"Notre mode de vie moderne est souvent décrit comme stressant.", zh:"我們的現代生活方式常被形容為充滿壓力。"},
        {fr:"On peut se demander si nous vivons réellement sous trop de pression.", zh:"我們不禁要問，我們是否真的活在過大的壓力下。"},
        {fr:"D'une part, le rythme actuel est souvent effréné.", zh:"一方面，當今的步調往往十分緊湊。"},
        {fr:"En effet, le travail, les études et les écrans nous sollicitent en permanence.", zh:"確實，工作、學業與螢幕不斷佔據我們。"},
        {fr:"Par exemple, beaucoup de gens consultent leur téléphone dès le réveil.", zh:"例如，很多人一醒來就看手機。"},
        {fr:"D'autre part, le stress n'est pas toujours négatif.", zh:"另一方面，壓力並不總是負面的。"},
        {fr:"Une certaine pression peut nous motiver et nous rendre plus efficaces.", zh:"適度的壓力能激勵我們、讓我們更有效率。"},
        {fr:"Cependant, un stress permanent finit par nuire à la santé mentale.", zh:"然而，持續的壓力終究會損害心理健康。"},
        {fr:"En conclusion, le problème n'est pas le stress lui-même, mais son excès.", zh:"總結來說，問題不在壓力本身，而在它的過度。"},
        {fr:"À mon avis, il est essentiel d'apprendre à se déconnecter et à se reposer.", zh:"在我看來，學會放下並休息至關重要。"},
      ]
    },
    { id:"wt_b2_histoire", title:"論說文：為何要學歷史", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「歷史」。",
      body:[
        {fr:"On se demande parfois à quoi sert vraiment l'étude de l'histoire.", zh:"人們有時會問，研究歷史到底有何用。"},
        {fr:"On peut se demander si elle est encore utile dans le monde d'aujourd'hui.", zh:"我們不禁要問，它在當今世界是否仍有用。"},
        {fr:"D'une part, certains la jugent inutile, car elle ne concerne que le passé.", zh:"一方面，有些人認為它無用，因為它只關乎過去。"},
        {fr:"En effet, à quoi bon étudier des événements qui semblent si lointains ?", zh:"確實，研究看似如此遙遠的事件有什麼用？"},
        {fr:"D'autre part, l'histoire éclaire profondément le présent.", zh:"另一方面，歷史深刻地照亮當下。"},
        {fr:"En effet, comprendre le passé aide à éviter de répéter les mêmes erreurs.", zh:"確實，理解過去有助於避免重蹈覆轍。"},
        {fr:"Par exemple, l'étude des conflits passés nous rend plus attentifs à la paix.", zh:"例如，研究過去的衝突讓我們更珍視和平。"},
        {fr:"De plus, l'histoire nourrit notre identité et notre esprit critique.", zh:"此外，歷史滋養我們的認同與批判思考。"},
        {fr:"En conclusion, étudier l'histoire est loin d'être inutile.", zh:"總結來說，研究歷史絕非無用。"},
        {fr:"Selon moi, un peuple qui oublie son passé se prive d'une partie de lui-même.", zh:"在我看來，遺忘過去的民族失去了自身的一部分。"},
      ]
    },
    { id:"wt_b2_consommation", title:"論說文：我們是否消費過度", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 255 字", intro:"DELF B2 論說文。主題對應單字主題「經濟金融（進階）」。",
      body:[
        {fr:"Nous vivons dans une société où l'on nous incite sans cesse à consommer.", zh:"我們生活在一個不斷被慫恿消費的社會。"},
        {fr:"On peut se demander si nous ne consommons pas trop.", zh:"我們不禁要問，我們是否消費過度。"},
        {fr:"D'une part, la consommation soutient l'économie et crée des emplois.", zh:"一方面，消費支撐經濟、創造就業。"},
        {fr:"En effet, quand les gens achètent, les entreprises prospèrent.", zh:"確實，當人們購物，企業就繁榮。"},
        {fr:"D'autre part, la surconsommation a des conséquences graves.", zh:"另一方面，過度消費帶來嚴重後果。"},
        {fr:"Elle épuise les ressources naturelles et produit énormément de déchets.", zh:"它耗盡自然資源、製造大量垃圾。"},
        {fr:"Par exemple, beaucoup achètent des vêtements qu'ils ne portent presque jamais.", zh:"例如，很多人買了幾乎不穿的衣服。"},
        {fr:"Cependant, consommer de façon plus raisonnée est tout à fait possible.", zh:"然而，更理性地消費完全是可能的。"},
        {fr:"En conclusion, le problème n'est pas de consommer, mais de consommer sans réfléchir.", zh:"總結來說，問題不在消費，而在毫不思考地消費。"},
        {fr:"Selon moi, privilégier la qualité à la quantité serait déjà un grand progrès.", zh:"在我看來，重質不重量就已是一大進步。"},
      ]
    },
    { id:"wt_b2_presse", title:"論說文：新聞自由與民主", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「時事媒體（進階）」。",
      body:[
        {fr:"La liberté de la presse est considérée comme un pilier de la démocratie.", zh:"新聞自由被視為民主的支柱。"},
        {fr:"On peut se demander si elle est aussi essentielle qu'on le dit.", zh:"我們不禁要問，它是否真如人們所說那般重要。"},
        {fr:"D'une part, une presse libre permet d'informer correctement les citoyens.", zh:"一方面，自由的媒體能讓公民正確地獲得資訊。"},
        {fr:"En effet, elle joue un rôle de contre-pouvoir face aux gouvernements.", zh:"確實，它對政府扮演著制衡的角色。"},
        {fr:"Par exemple, de nombreux scandales ont été révélés grâce à des journalistes courageux.", zh:"例如，許多醜聞是靠勇敢的記者揭發的。"},
        {fr:"D'autre part, cette liberté peut parfois être détournée.", zh:"另一方面，這份自由有時可能被濫用。"},
        {fr:"Certains médias diffusent des informations fausses ou trop sensationnelles.", zh:"有些媒體散播不實或過於聳動的資訊。"},
        {fr:"Cependant, les abus de quelques-uns ne justifient pas de limiter la liberté de tous.", zh:"然而，少數人的濫用不能成為限制所有人自由的理由。"},
        {fr:"En conclusion, la liberté de la presse reste indispensable à une société démocratique.", zh:"總結來說，新聞自由對民主社會仍不可或缺。"},
        {fr:"Selon moi, une démocratie ne peut exister sans une information libre et fiable.", zh:"在我看來，沒有自由且可靠的資訊，民主就無法存在。"},
      ]
    }
  );

  const mk=(id,title,theme,q)=>({ id:id, title:title, level:"B2", delf:true, delfType:"DELF B2・論說文", target:"~250 字",
    prompt:"題目：« "+q+" »請寫一篇約 250 字的論說文。",
    steps:[{label:"① 引言",detail:"引入主題並提出問題。"},{label:"② 論述一（正面）",detail:"一個論點＋理由＋例子。"},{label:"③ 論述二（反面）",detail:"轉折提出另一面。"},{label:"④ 結論＋表態",detail:"整合並表明立場。"}],
    grille:b2grille("符合論說文情境（"+theme+"）") });

  E.push(
    mk("we_b2_bonheur","論說文：金錢能帶來幸福嗎","哲學","L'argent fait-il le bonheur ?（金錢能帶來幸福嗎？）"),
    mk("we_b2_vote","論說文：投票是否該強制","政治","Le vote devrait-il être obligatoire ?（投票是否該強制？）"),
    mk("we_b2_entreprise","論說文：企業的社會責任","商業","Les entreprises ont-elles une responsabilité envers la société ?（企業對社會是否負有責任？）"),
    mk("we_b2_sante_pub","論說文：醫療是否該全民免費","醫療","L'accès aux soins devrait-il être gratuit pour tous ?（醫療是否該全民免費？）"),
    mk("we_b2_langues","論說文：是否該學多種外語","語言","Faut-il apprendre plusieurs langues étrangères ?（是否該學多種外語？）"),
    mk("we_b2_religion","論說文：宗教在現代社會的位置","宗教","La religion a-t-elle encore sa place dans la société moderne ?（宗教在現代社會還有位置嗎？）"),
    mk("we_b2_stress","論說文：現代生活是否太緊張","心理","Notre mode de vie moderne est-il trop stressant ?（現代生活方式是否太緊張？）"),
    mk("we_b2_histoire","論說文：為何要學歷史","歷史","Pourquoi est-il important d'étudier l'histoire ?（為何學歷史很重要？）"),
    mk("we_b2_consommation","論說文：我們是否消費過度","金融","Consommons-nous trop ?（我們是否消費過度？）"),
    mk("we_b2_presse","論說文：新聞自由與民主","媒體","La liberté de la presse est-elle essentielle à la démocratie ?（新聞自由對民主是否不可或缺？）")
  );
})();
