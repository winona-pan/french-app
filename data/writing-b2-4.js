/* B2 寫作擴充批次 4（最後）：5 篇完整論說文＋對應練習，B2 達 35 */
(function(){
  if(!window.WRITING) return;
  const T=window.WRITING.templates, E=window.WRITING.exercises;
  const b2grille=(extra)=>["切題與語域："+extra+"、語域偏正式","論證：正反兼具、論點清楚並舉例","連貫：結構分明、連接詞豐富","詞彙：主題相關詞彙精準多樣","文法：複雜句、時態、過去分詞一致正確","拼字正確，字數約 250"];

  T.push(
    { id:"wt_b2_nature", title:"論說文：發展是否該為自然讓步", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「地理」。",
      body:[
        {fr:"Le développement économique transforme sans cesse nos paysages.", zh:"經濟發展不斷改變我們的地貌。"},
        {fr:"On peut se demander s'il faut le freiner pour protéger la nature.", zh:"我們不禁要問，是否該為了保護自然而踩煞車。"},
        {fr:"D'une part, le développement est nécessaire au progrès d'un pays.", zh:"一方面，發展是國家進步的必要條件。"},
        {fr:"En effet, il crée des emplois, des infrastructures et de la richesse.", zh:"確實，它創造就業、基礎建設與財富。"},
        {fr:"D'autre part, une croissance incontrôlée détruit les espaces naturels.", zh:"另一方面，失控的成長會破壞自然空間。"},
        {fr:"Par exemple, la déforestation menace de nombreuses espèces.", zh:"例如，森林砍伐威脅許多物種。"},
        {fr:"De plus, une fois détruite, la nature est très difficile à restaurer.", zh:"此外，自然一旦被破壞，便很難復原。"},
        {fr:"Cependant, développement et protection ne sont pas forcément opposés.", zh:"然而，發展與保護未必對立。"},
        {fr:"En conclusion, il est possible de concilier progrès et respect de l'environnement.", zh:"總結來說，進步與環境保護是可以兼顧的。"},
        {fr:"Selon moi, un développement durable est la seule voie vraiment raisonnable.", zh:"在我看來，永續發展是唯一真正合理的道路。"},
      ]
    },
    { id:"wt_b2_mental", title:"論說文：該不該談論心理困擾", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「心理諮商」。",
      body:[
        {fr:"Aujourd'hui, on parle de plus en plus de santé mentale.", zh:"如今，人們越來越常談論心理健康。"},
        {fr:"On peut se demander s'il faut oser parler de ses difficultés psychologiques.", zh:"我們不禁要問，是否該勇於談論自己的心理困擾。"},
        {fr:"D'une part, certaines personnes préfèrent garder leurs problèmes pour elles.", zh:"一方面，有些人寧願把問題藏在心裡。"},
        {fr:"En effet, par peur du jugement, elles n'osent pas se confier.", zh:"確實，因為害怕被評判，他們不敢傾訴。"},
        {fr:"D'autre part, en parler permet souvent de se sentir mieux.", zh:"另一方面，說出來往往讓人感覺好一些。"},
        {fr:"Par exemple, consulter un psychologue aide à prendre du recul.", zh:"例如，諮詢心理師有助於拉開距離看事情。"},
        {fr:"De plus, partager ses émotions renforce les liens avec les autres.", zh:"此外，分享情緒能加深與他人的連結。"},
        {fr:"Cependant, il faut aussi choisir des personnes de confiance.", zh:"然而，也要選擇值得信任的對象。"},
        {fr:"En conclusion, parler de ses difficultés n'est pas une faiblesse, mais un courage.", zh:"總結來說，談論自己的困難不是軟弱，而是勇氣。"},
        {fr:"Selon moi, la société devrait encore mieux accueillir cette parole.", zh:"在我看來，社會應更友善地接納這樣的傾訴。"},
      ]
    },
    { id:"wt_b2_sondages", title:"論說文：民調與數據可信嗎", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「數字統計」。",
      body:[
        {fr:"Les sondages et les statistiques sont partout dans les médias.", zh:"民調與統計數據在媒體上無所不在。"},
        {fr:"On peut se demander si l'on peut vraiment leur faire confiance.", zh:"我們不禁要問，是否真能信任它們。"},
        {fr:"D'une part, les chiffres donnent une impression d'objectivité.", zh:"一方面，數字給人一種客觀的印象。"},
        {fr:"En effet, ils permettent de résumer rapidement une situation complexe.", zh:"確實，它們能快速概括複雜的情況。"},
        {fr:"D'autre part, les statistiques peuvent parfois être trompeuses.", zh:"另一方面，統計數據有時可能具有誤導性。"},
        {fr:"Par exemple, un sondage dépend beaucoup de la façon dont les questions sont posées.", zh:"例如，民調結果很大程度取決於提問的方式。"},
        {fr:"De plus, on peut présenter les mêmes chiffres de manières très différentes.", zh:"此外，同樣的數字可以用截然不同的方式呈現。"},
        {fr:"Cependant, bien utilisés, les chiffres restent des outils précieux.", zh:"然而，妥善運用時，數字仍是寶貴的工具。"},
        {fr:"En conclusion, il faut interpréter les statistiques avec prudence et esprit critique.", zh:"總結來說，必須謹慎且帶批判地解讀統計數據。"},
        {fr:"Selon moi, un chiffre ne vaut que par la rigueur de sa source.", zh:"在我看來，數字的價值取決於來源的嚴謹。"},
      ]
    },
    { id:"wt_b2_raison", title:"論說文：該聽理智還是情感", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「哲學流派」。",
      body:[
        {fr:"Dans nos décisions, la raison et les émotions s'opposent souvent.", zh:"在我們的決定中，理智與情感常常相互對立。"},
        {fr:"On peut se demander laquelle il vaut mieux écouter.", zh:"我們不禁要問，該聽從哪一個比較好。"},
        {fr:"D'une part, la raison nous permet de réfléchir avec recul.", zh:"一方面，理智讓我們能冷靜地思考。"},
        {fr:"En effet, elle aide à éviter les choix impulsifs que l'on regrette ensuite.", zh:"確實，它有助於避免日後後悔的衝動選擇。"},
        {fr:"D'autre part, les émotions font pleinement partie de notre humanité.", zh:"另一方面，情感是我們人性中完整的一部分。"},
        {fr:"Par exemple, c'est souvent la passion qui nous pousse à nous engager.", zh:"例如，往往正是熱情驅使我們投入。"},
        {fr:"Cependant, suivre uniquement ses émotions peut être dangereux.", zh:"然而，只聽從情感可能很危險。"},
        {fr:"En réalité, la raison et les émotions devraient se compléter.", zh:"事實上，理智與情感應當相輔相成。"},
        {fr:"En conclusion, les meilleures décisions naissent souvent de leur équilibre.", zh:"總結來說，最好的決定往往源於兩者的平衡。"},
        {fr:"Selon moi, il faut écouter son cœur sans jamais cesser de réfléchir.", zh:"在我看來，要傾聽內心，但永不停止思考。"},
      ]
    },
    { id:"wt_b2_ecrans", title:"論說文：是否該限制兒童使用螢幕", cat:"考試", level:"B2", delf:true, delfType:"DELF B2・論說文", wordcount:"約 250 字", intro:"DELF B2 論說文。主題對應單字主題「科技倫理／教育」。",
      body:[
        {fr:"Les enfants passent aujourd'hui beaucoup de temps devant les écrans.", zh:"如今孩子在螢幕前花很多時間。"},
        {fr:"On peut se demander s'il faut limiter ce temps d'écran.", zh:"我們不禁要問，是否該限制這些螢幕時間。"},
        {fr:"D'une part, les écrans ne sont pas entièrement négatifs.", zh:"一方面，螢幕並非全然負面。"},
        {fr:"En effet, ils offrent des contenus éducatifs et permettent d'apprendre autrement.", zh:"確實，它們提供教育內容，讓人以不同方式學習。"},
        {fr:"D'autre part, un usage excessif comporte de réels risques.", zh:"另一方面，過度使用帶有真切的風險。"},
        {fr:"Par exemple, trop d'écrans nuit au sommeil et à la concentration des enfants.", zh:"例如，過多的螢幕有害孩子的睡眠與專注力。"},
        {fr:"De plus, cela réduit le temps consacré au jeu et aux activités physiques.", zh:"此外，這會減少遊戲與身體活動的時間。"},
        {fr:"Cependant, interdire totalement les écrans serait irréaliste.", zh:"然而，完全禁止螢幕並不切實際。"},
        {fr:"En conclusion, l'essentiel est d'encadrer leur usage plutôt que de l'interdire.", zh:"總結來說，重點是規範使用，而非全面禁止。"},
        {fr:"Selon moi, l'accompagnement des parents reste la meilleure des solutions.", zh:"在我看來，父母的陪伴與引導仍是最好的解方。"},
      ]
    }
  );

  const mk=(id,title,theme,q)=>({ id:id, title:title, level:"B2", delf:true, delfType:"DELF B2・論說文", target:"~250 字",
    prompt:"題目：« "+q+" »請寫一篇約 250 字的論說文。",
    steps:[{label:"① 引言",detail:"引入主題並提出問題。"},{label:"② 論述一（正面）",detail:"一個論點＋理由＋例子。"},{label:"③ 論述二（反面）",detail:"轉折提出另一面。"},{label:"④ 結論＋表態",detail:"整合並表明立場。"}],
    grille:b2grille("符合論說文情境（"+theme+"）") });

  E.push(
    mk("we_b2_nature","論說文：發展是否該為自然讓步","地理","Faut-il freiner le développement pour protéger la nature ?（是否該為保護自然而限制發展？）"),
    mk("we_b2_mental","論說文：該不該談論心理困擾","心理","Faut-il oser parler de ses difficultés psychologiques ?（是否該勇於談論心理困擾？）"),
    mk("we_b2_sondages","論說文：民調與數據可信嗎","統計","Peut-on faire confiance aux sondages et aux statistiques ?（民調與統計數據可信嗎？）"),
    mk("we_b2_raison","論說文：該聽理智還是情感","哲學","Vaut-il mieux écouter sa raison ou ses émotions ?（該聽理智還是情感？）"),
    mk("we_b2_ecrans","論說文：是否該限制兒童使用螢幕","科技","Faut-il limiter le temps d'écran des enfants ?（是否該限制兒童的螢幕時間？）")
  );
})();
