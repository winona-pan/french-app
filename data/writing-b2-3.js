/* B2 寫作擴充批次 3：10 篇完整論說文＋對應練習（對應 B2 單字主題） */
(function(){
  if(!window.WRITING) return;
  const T=window.WRITING.templates, E=window.WRITING.exercises;
  const b2grille=(extra)=>["切題與語域："+extra+"、語域偏正式","論證：正反兼具、論點清楚並舉例","連貫：結構分明、連接詞豐富","詞彙：主題相關詞彙精準多樣","文法：複雜句、時態、過去分詞一致正確","拼字正確，字數約 250"];

  T.push(
    { id:"wt_b2_cinema", title:"論說文：串流是否威脅電影", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「影視評論」。",
      body:[
        {fr:"Avec l'essor des plateformes de streaming, nos habitudes ont beaucoup changé.", zh:"隨著串流平台興起，我們的習慣大幅改變。"},
        {fr:"On peut se demander si elles menacent réellement le cinéma traditionnel.", zh:"我們不禁要問，它們是否真的威脅傳統電影。"},
        {fr:"D'une part, le streaming offre un confort indéniable.", zh:"一方面，串流提供無可否認的便利。"},
        {fr:"En effet, on peut regarder ce que l'on veut, quand on veut, chez soi.", zh:"確實，我們可以在家隨時看想看的。"},
        {fr:"Par exemple, de nombreuses séries de qualité ne sortent qu'en ligne.", zh:"例如，許多優質影集只在線上推出。"},
        {fr:"D'autre part, la salle de cinéma offre une expérience unique.", zh:"另一方面，電影院提供獨特的體驗。"},
        {fr:"Le grand écran et l'ambiance collective ne se remplacent pas facilement.", zh:"大銀幕與群體氛圍難以取代。"},
        {fr:"Cependant, ces deux modes de diffusion peuvent très bien coexister.", zh:"然而，這兩種放映方式完全可以共存。"},
        {fr:"En conclusion, le streaming transforme le cinéma plus qu'il ne le détruit.", zh:"總結來說，串流改變電影，而非摧毀它。"},
        {fr:"Selon moi, l'essentiel est de préserver la diversité des œuvres et des expériences.", zh:"在我看來，重要的是保存作品與體驗的多樣性。"},
      ]
    },
    { id:"wt_b2_musique", title:"論說文：音樂在教育中的重要性", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「音樂表演」。",
      body:[
        {fr:"La musique occupe une place importante dans la vie de chacun.", zh:"音樂在每個人的生活中佔有重要地位。"},
        {fr:"On peut se demander si elle devrait avoir une vraie place dans l'éducation.", zh:"我們不禁要問，它是否該在教育中佔有真正的一席之地。"},
        {fr:"D'une part, certains considèrent la musique comme une matière secondaire.", zh:"一方面，有些人把音樂視為次要科目。"},
        {fr:"En effet, on lui préfère souvent les mathématiques ou les sciences.", zh:"確實，人們常更重視數學或科學。"},
        {fr:"D'autre part, la musique apporte de nombreux bienfaits.", zh:"另一方面，音樂帶來許多益處。"},
        {fr:"En effet, elle développe la sensibilité, la mémoire et la concentration.", zh:"確實，它能培養感受力、記憶力與專注力。"},
        {fr:"Par exemple, apprendre un instrument demande rigueur et patience.", zh:"例如，學一種樂器需要嚴謹與耐心。"},
        {fr:"De plus, la musique favorise l'expression de soi et le travail en groupe.", zh:"此外，音樂有助於自我表達與團隊合作。"},
        {fr:"En conclusion, la musique n'est pas un simple divertissement.", zh:"總結來說，音樂不只是單純的娛樂。"},
        {fr:"Selon moi, elle mérite toute sa place dans la formation des jeunes.", zh:"在我看來，它在年輕人的培養中完全值得佔有一席之地。"},
      ]
    },
    { id:"wt_b2_competition", title:"論說文：競爭是好是壞", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「體育競技」。",
      body:[
        {fr:"La compétition est présente partout : à l'école, au travail, dans le sport.", zh:"競爭無所不在：學校、職場、運動。"},
        {fr:"On peut se demander si elle est bénéfique ou au contraire nuisible.", zh:"我們不禁要問，它究竟有益還是反而有害。"},
        {fr:"D'une part, la compétition peut être un véritable moteur.", zh:"一方面，競爭可以是真正的動力。"},
        {fr:"En effet, elle pousse les individus à se dépasser et à progresser.", zh:"確實，它促使人超越自我、不斷進步。"},
        {fr:"Par exemple, de nombreux sportifs atteignent l'excellence grâce à elle.", zh:"例如，許多運動員正是靠它達到卓越。"},
        {fr:"D'autre part, une compétition excessive peut devenir destructrice.", zh:"另一方面，過度的競爭可能變得具破壞性。"},
        {fr:"Elle engendre du stress, de la jalousie et parfois de l'égoïsme.", zh:"它引發壓力、嫉妒，有時還有自私。"},
        {fr:"Cependant, tout dépend de l'esprit dans lequel on la pratique.", zh:"然而，一切取決於我們以什麼心態去面對。"},
        {fr:"En conclusion, la compétition est positive si elle reste saine et respectueuse.", zh:"總結來說，只要競爭保持健康與尊重，就是正面的。"},
        {fr:"Selon moi, il vaut mieux se mesurer à soi-même qu'aux autres.", zh:"在我看來，與自己較量勝過與他人較量。"},
      ]
    },
    { id:"wt_b2_mode", title:"論說文：快時尚是個問題嗎", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 255 字", intro:"DELF B2 論說文。主題對應單字主題「時尚」。",
      body:[
        {fr:"La mode rapide, ou « fast fashion », s'est imposée ces dernières années.", zh:"「快時尚」近年蔚為風潮。"},
        {fr:"On peut se demander si ce phénomène est vraiment souhaitable.", zh:"我們不禁要問，這種現象是否真的可取。"},
        {fr:"D'une part, la mode rapide rend les vêtements accessibles à tous.", zh:"一方面，快時尚讓人人都買得起衣服。"},
        {fr:"En effet, elle propose des produits tendance à très bas prix.", zh:"確實，它以非常低的價格提供流行的商品。"},
        {fr:"D'autre part, elle a un coût environnemental et humain considérable.", zh:"另一方面，它有著巨大的環境與人力代價。"},
        {fr:"Par exemple, elle produit des montagnes de déchets textiles chaque année.", zh:"例如，它每年製造成堆的紡織廢棄物。"},
        {fr:"De plus, les conditions de travail dans certaines usines sont déplorables.", zh:"此外，某些工廠的工作條件十分惡劣。"},
        {fr:"Cependant, des alternatives plus durables commencent à se développer.", zh:"然而，更永續的替代方案開始興起。"},
        {fr:"En conclusion, la mode rapide est pratique, mais ses dégâts sont lourds.", zh:"總結來說，快時尚很方便，但代價沉重。"},
        {fr:"Selon moi, mieux vaut acheter moins, mais des vêtements de meilleure qualité.", zh:"在我看來，買少一點、但買品質更好的衣服更好。"},
      ]
    },
    { id:"wt_b2_fastfood", title:"論說文：速食是否傷害飲食文化", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「飲食評論」。",
      body:[
        {fr:"La restauration rapide fait désormais partie de notre quotidien.", zh:"速食如今已是我們日常的一部分。"},
        {fr:"On peut se demander si elle menace notre culture culinaire.", zh:"我們不禁要問，它是否威脅我們的飲食文化。"},
        {fr:"D'une part, le fast-food présente des avantages pratiques.", zh:"一方面，速食有其實用的優點。"},
        {fr:"En effet, il est rapide, bon marché et disponible presque partout.", zh:"確實，它快速、便宜、幾乎到處都有。"},
        {fr:"D'autre part, il favorise une alimentation peu équilibrée.", zh:"另一方面，它助長了不均衡的飲食。"},
        {fr:"Par exemple, une consommation excessive nuit gravement à la santé.", zh:"例如，過量食用嚴重危害健康。"},
        {fr:"De plus, il tend à uniformiser les goûts à travers le monde.", zh:"此外，它使全世界的口味趨於一致。"},
        {fr:"Cependant, la gastronomie traditionnelle reste très vivante.", zh:"然而，傳統美食依然生機盎然。"},
        {fr:"En conclusion, le fast-food a sa place, à condition de ne pas remplacer une vraie cuisine.", zh:"總結來說，速食有其地位，前提是不取代真正的料理。"},
        {fr:"Selon moi, il est important de préserver le plaisir de cuisiner et de partager un repas.", zh:"在我看來，保存烹飪與共餐的樂趣很重要。"},
      ]
    },
    { id:"wt_b2_tourisme", title:"論說文：大眾觀光是好事嗎", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「旅行探索」。",
      body:[
        {fr:"Le tourisme s'est énormément développé au cours des dernières décennies.", zh:"過去數十年觀光業蓬勃發展。"},
        {fr:"On peut se demander si le tourisme de masse est une bonne chose.", zh:"我們不禁要問，大眾觀光是否是件好事。"},
        {fr:"D'une part, le tourisme apporte de réels bénéfices économiques.", zh:"一方面，觀光帶來實際的經濟效益。"},
        {fr:"En effet, il crée des emplois et fait vivre des régions entières.", zh:"確實，它創造就業，養活整個地區。"},
        {fr:"D'autre part, le tourisme de masse a des effets négatifs.", zh:"另一方面，大眾觀光有負面影響。"},
        {fr:"Par exemple, certains sites célèbres sont dégradés par l'affluence.", zh:"例如，有些著名景點因人潮而受損。"},
        {fr:"De plus, il peut faire perdre leur authenticité aux lieux visités.", zh:"此外，它可能讓景點失去原本的真實樣貌。"},
        {fr:"Cependant, un tourisme plus responsable est tout à fait possible.", zh:"然而，更負責任的觀光完全是可能的。"},
        {fr:"En conclusion, le tourisme est une richesse, à condition d'être mieux encadré.", zh:"總結來說，觀光是一筆財富，前提是有更好的規範。"},
        {fr:"Selon moi, voyager doit aussi rimer avec respect des lieux et des habitants.", zh:"在我看來，旅行也應與尊重當地與居民並行。"},
      ]
    },
    { id:"wt_b2_caractere", title:"論說文：性格是天生還是後天", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「情緒人格」。",
      body:[
        {fr:"On se demande souvent ce qui détermine vraiment notre caractère.", zh:"人們常想，究竟是什麼決定了我們的性格。"},
        {fr:"On peut se demander si notre personnalité est innée ou acquise.", zh:"我們不禁要問，我們的人格是天生的還是後天的。"},
        {fr:"D'une part, une partie de notre tempérament semble innée.", zh:"一方面，我們一部分的性情似乎是天生的。"},
        {fr:"En effet, dès la naissance, les enfants montrent déjà des différences.", zh:"確實，孩子一出生就已展現出差異。"},
        {fr:"D'autre part, l'environnement joue un rôle déterminant.", zh:"另一方面，環境扮演著決定性的角色。"},
        {fr:"Par exemple, l'éducation et les expériences façonnent notre personnalité.", zh:"例如，教育與經歷形塑了我們的人格。"},
        {fr:"Cependant, il est sans doute impossible de séparer totalement les deux.", zh:"然而，要把兩者完全分開恐怕是不可能的。"},
        {fr:"En réalité, l'inné et l'acquis interagissent en permanence.", zh:"事實上，先天與後天不斷地相互作用。"},
        {fr:"En conclusion, notre caractère résulte de cette combinaison complexe.", zh:"總結來說，我們的性格正是這種複雜結合的結果。"},
        {fr:"Selon moi, nous restons capables d'évoluer tout au long de notre vie.", zh:"在我看來，我們終其一生都能不斷改變。"},
      ]
    },
    { id:"wt_b2_ville_plan", title:"論說文：如何讓城市更宜居", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「城市規劃」。",
      body:[
        {fr:"De plus en plus de personnes vivent dans les grandes villes.", zh:"越來越多人住在大城市。"},
        {fr:"On peut se demander comment rendre ces villes plus agréables à vivre.", zh:"我們不禁要問，該如何讓這些城市更宜居。"},
        {fr:"D'une part, il est essentiel de développer les espaces verts.", zh:"一方面，發展綠地至關重要。"},
        {fr:"En effet, les parcs améliorent la qualité de l'air et le bien-être.", zh:"確實，公園改善空氣品質與人們的福祉。"},
        {fr:"Ensuite, il faut encourager les transports en commun et le vélo.", zh:"接著，必須鼓勵大眾運輸與腳踏車。"},
        {fr:"Par exemple, certaines villes ont piétonnisé leur centre avec succès.", zh:"例如，有些城市成功地把市中心改為行人徒步區。"},
        {fr:"D'autre part, ces aménagements demandent du temps et de l'argent.", zh:"另一方面，這些建設需要時間與金錢。"},
        {fr:"Cependant, le bien-être des habitants devrait rester la priorité.", zh:"然而，居民的福祉應當是優先考量。"},
        {fr:"En conclusion, une ville agréable est une ville pensée pour ses habitants.", zh:"總結來說，宜居的城市是為居民著想的城市。"},
        {fr:"Selon moi, il faut concilier nature, mobilité et vie sociale.", zh:"在我看來，必須兼顧自然、交通與社會生活。"},
      ]
    },
    { id:"wt_b2_compromis", title:"論說文：是否總該尋求妥協", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「談判外交」。",
      body:[
        {fr:"Dans la vie comme en politique, on doit souvent négocier.", zh:"無論在生活還是政治中，我們常常得協商。"},
        {fr:"On peut se demander s'il faut toujours chercher le compromis.", zh:"我們不禁要問，是否總該尋求妥協。"},
        {fr:"D'une part, le compromis permet d'éviter bien des conflits.", zh:"一方面，妥協能避免許多衝突。"},
        {fr:"En effet, il aide chacun à obtenir une partie de ce qu'il souhaite.", zh:"確實，它讓各方都能得到部分所求。"},
        {fr:"Par exemple, dans une équipe, savoir céder est souvent nécessaire.", zh:"例如，在團隊中，懂得退讓往往是必要的。"},
        {fr:"D'autre part, céder en permanence peut poser problème.", zh:"另一方面，一味退讓也可能有問題。"},
        {fr:"En effet, sur certaines questions de principe, il ne faut pas renoncer.", zh:"確實，在某些原則問題上，不該放棄。"},
        {fr:"Cependant, tout l'art consiste à savoir quand négocier et quand tenir bon.", zh:"然而，關鍵的藝術在於知道何時協商、何時堅持。"},
        {fr:"En conclusion, le compromis est précieux, mais il a ses limites.", zh:"總結來說，妥協很珍貴，但有其界限。"},
        {fr:"Selon moi, un bon compromis respecte les besoins de chacun sans trahir ses valeurs.", zh:"在我看來，好的妥協能顧及各方需求，又不背棄自己的價值。"},
      ]
    },
    { id:"wt_b2_espace", title:"論說文：是否該繼續探索太空", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「科學分支」。",
      body:[
        {fr:"Depuis toujours, l'être humain rêve d'explorer l'espace.", zh:"自古以來，人類就夢想著探索太空。"},
        {fr:"On peut se demander s'il faut continuer à y investir autant d'argent.", zh:"我們不禁要問，是否該繼續投入如此多資金。"},
        {fr:"D'une part, la conquête spatiale coûte des sommes colossales.", zh:"一方面，太空探索耗費巨額資金。"},
        {fr:"En effet, certains estiment que cet argent serait plus utile sur Terre.", zh:"確實，有些人認為這些錢用在地球上更有用。"},
        {fr:"D'autre part, l'exploration spatiale apporte de nombreuses retombées.", zh:"另一方面，太空探索帶來許多附帶成果。"},
        {fr:"Par exemple, de nombreuses technologies du quotidien en sont issues.", zh:"例如，許多日常科技都源自於此。"},
        {fr:"De plus, elle nourrit notre curiosité et fait progresser la science.", zh:"此外，它滿足我們的好奇心、推動科學進步。"},
        {fr:"Cependant, il faudrait sans doute mieux équilibrer les priorités.", zh:"然而，恐怕該更好地平衡各種優先順序。"},
        {fr:"En conclusion, explorer l'espace reste une aventure porteuse d'espoir.", zh:"總結來說，探索太空仍是一場充滿希望的冒險。"},
        {fr:"Selon moi, la science doit regarder vers les étoiles sans oublier notre planète.", zh:"在我看來，科學應仰望星空，但別忘了我們的地球。"},
      ]
    }
  );

  const mk=(id,title,theme,q)=>({ id:id, title:title, level:"B2", delf:true, delfType:"DELF B2・論說文", target:"~250 字",
    prompt:"題目：« "+q+" »請寫一篇約 250 字的論說文。",
    steps:[{label:"① 引言",detail:"引入主題並提出問題。"},{label:"② 論述一（正面）",detail:"一個論點＋理由＋例子。"},{label:"③ 論述二（反面）",detail:"轉折提出另一面。"},{label:"④ 結論＋表態",detail:"整合並表明立場。"}],
    grille:b2grille("符合論說文情境（"+theme+"）") });

  E.push(
    mk("we_b2_cinema","論說文：串流是否威脅電影","影視","Les plateformes de streaming menacent-elles le cinéma ?（串流平台是否威脅電影？）"),
    mk("we_b2_musique","論說文：音樂在教育中的重要性","音樂","La musique a-t-elle sa place dans l'éducation ?（音樂在教育中該有一席之地嗎？）"),
    mk("we_b2_competition","論說文：競爭是好是壞","競技","La compétition est-elle bénéfique ou nuisible ?（競爭有益還是有害？）"),
    mk("we_b2_mode","論說文：快時尚是個問題嗎","時尚","La mode rapide est-elle un problème ?（快時尚是個問題嗎？）"),
    mk("we_b2_fastfood","論說文：速食是否傷害飲食文化","飲食","La restauration rapide menace-t-elle notre culture culinaire ?（速食是否威脅飲食文化？）"),
    mk("we_b2_tourisme","論說文：大眾觀光是好事嗎","旅行","Le tourisme de masse est-il une bonne chose ?（大眾觀光是好事嗎？）"),
    mk("we_b2_caractere","論說文：性格是天生還是後天","人格","Notre caractère est-il inné ou acquis ?（性格是天生還是後天？）"),
    mk("we_b2_ville_plan","論說文：如何讓城市更宜居","城市規劃","Comment rendre les villes plus agréables à vivre ?（如何讓城市更宜居？）"),
    mk("we_b2_compromis","論說文：是否總該尋求妥協","談判","Faut-il toujours chercher le compromis ?（是否總該尋求妥協？）"),
    mk("we_b2_espace","論說文：是否該繼續探索太空","科學","Faut-il continuer à explorer l'espace ?（是否該繼續探索太空？）")
  );
})();
