/* B1 寫作擴充批次 1：7 篇完整範文＋對應練習（對應 B1 單字主題）
   B1 論壇式表達意見，結構：表態 → 理由＋例子 → 讓步 → 結論 */
(function(){
  if(!window.WRITING) return;
  const T=window.WRITING.templates, E=window.WRITING.exercises;
  const b1grille=(extra)=>["切題："+extra,"內容：理由充分、附具體例子","連貫：用連接詞與分段組織論述","詞彙：用詞恰當且多樣","文法：時態、性數一致大致正確","拼字與標點正確，字數達標"];

  T.push(
    { id:"wt_b1_societe", title:"論說文：世代之間", cat:"考試", level:"B1", delf:true, delfType:"DELF B1・表達意見", wordcount:"約 170 字", intro:"論壇式表達意見。主題對應單字主題「社會」。",
      body:[
        {fr:"De nos jours, on dit souvent que les générations ne se comprennent plus.", zh:"如今，人們常說不同世代越來越無法理解彼此。"},
        {fr:"On peut se demander si c'est vraiment le cas.", zh:"我們不禁要問，真的是這樣嗎。"},
        {fr:"D'un côté, il est vrai que les jeunes et les anciens ont des habitudes différentes.", zh:"一方面，年輕人與長輩確實有不同的習慣。"},
        {fr:"Par exemple, les jeunes utilisent la technologie beaucoup plus que leurs grands-parents.", zh:"例如，年輕人使用科技的程度遠高於祖父母輩。"},
        {fr:"Cependant, je pense que le dialogue reste tout à fait possible.", zh:"然而，我認為對話依然完全是可能的。"},
        {fr:"En effet, les deux générations peuvent apprendre l'une de l'autre.", zh:"確實，兩個世代能互相學習。"},
        {fr:"Dans ma famille, je discute souvent avec mes grands-parents et ça m'enrichit.", zh:"在我家，我常跟祖父母聊天，這讓我獲益良多。"},
        {fr:"En conclusion, les différences existent, mais le respect mutuel permet de se comprendre.", zh:"總結來說，差異存在，但相互尊重能讓彼此理解。"},
      ]
    },
    { id:"wt_b1_travail", title:"論說文：工作與生活的平衡", cat:"考試", level:"B1", delf:true, delfType:"DELF B1・表達意見", wordcount:"約 170 字", intro:"論壇式表達意見。主題對應單字主題「職場」。",
      body:[
        {fr:"De nos jours, beaucoup de gens travaillent énormément.", zh:"如今，很多人工作得非常拚。"},
        {fr:"On peut se demander s'il faut privilégier sa carrière ou sa vie privée.", zh:"我們不禁要問，該以事業為重還是私生活為重。"},
        {fr:"D'abord, le travail est important pour gagner sa vie et se réaliser.", zh:"首先，工作對於謀生與自我實現很重要。"},
        {fr:"Cependant, passer tout son temps au travail peut nuire à la santé.", zh:"然而，把所有時間花在工作上可能損害健康。"},
        {fr:"Par exemple, le stress et la fatigue rendent souvent les gens malheureux.", zh:"例如，壓力與疲勞常使人不快樂。"},
        {fr:"Personnellement, je pense qu'il faut absolument trouver un équilibre.", zh:"我個人認為一定要取得平衡。"},
        {fr:"Le temps passé avec sa famille et ses amis est tout aussi précieux.", zh:"與家人朋友共度的時間同樣珍貴。"},
        {fr:"En conclusion, le travail compte, mais la vie privée ne doit pas être sacrifiée.", zh:"總結來說，工作重要，但不該犧牲私生活。"},
      ]
    },
    { id:"wt_b1_sante", title:"論說文：如何保持健康", cat:"考試", level:"B1", delf:true, delfType:"DELF B1・表達意見", wordcount:"約 170 字", intro:"論壇式表達意見。主題對應單字主題「健康」。",
      body:[
        {fr:"La santé est sans doute l'une des choses les plus importantes dans la vie.", zh:"健康無疑是人生中最重要的事情之一。"},
        {fr:"On peut se demander comment rester en bonne santé au quotidien.", zh:"我們不禁要問，日常該如何保持健康。"},
        {fr:"Tout d'abord, il est essentiel d'avoir une alimentation équilibrée.", zh:"首先，均衡飲食至關重要。"},
        {fr:"Ensuite, faire du sport régulièrement fait du bien au corps et à l'esprit.", zh:"接著，規律運動對身心都有益。"},
        {fr:"Par exemple, je fais de la natation deux fois par semaine.", zh:"例如，我一週游泳兩次。"},
        {fr:"Il est aussi très important de bien dormir et de gérer son stress.", zh:"充足睡眠與管理壓力也非常重要。"},
        {fr:"Cependant, beaucoup de gens négligent ces habitudes par manque de temps.", zh:"然而，許多人因為沒時間而忽略這些習慣。"},
        {fr:"En conclusion, rester en bonne santé demande des efforts simples mais réguliers.", zh:"總結來說，保持健康需要簡單卻持續的努力。"},
      ]
    },
    { id:"wt_b1_education", title:"論說文：線上課程是否有效", cat:"考試", level:"B1", delf:true, delfType:"DELF B1・表達意見", wordcount:"約 175 字", intro:"論壇式表達意見。主題對應單字主題「教育」。",
      body:[
        {fr:"Depuis quelques années, les cours en ligne sont devenus très courants.", zh:"近幾年，線上課程變得很普遍。"},
        {fr:"On peut se demander s'ils sont aussi efficaces que les cours traditionnels.", zh:"我們不禁要問，它們是否和傳統課程一樣有效。"},
        {fr:"D'un côté, les cours en ligne offrent une grande liberté.", zh:"一方面，線上課程提供很大的自由。"},
        {fr:"En effet, on peut étudier où l'on veut et à son propre rythme.", zh:"確實，可以在任何地方、按自己的步調學習。"},
        {fr:"D'un autre côté, il est parfois difficile de rester concentré chez soi.", zh:"另一方面，在家有時很難保持專注。"},
        {fr:"Par exemple, on est vite distrait par son téléphone ou par le bruit.", zh:"例如，人很容易被手機或噪音分心。"},
        {fr:"À mon avis, les cours en ligne sont utiles, mais le contact humain reste important.", zh:"我認為線上課程有用，但人際接觸仍然重要。"},
        {fr:"En conclusion, la meilleure solution serait sans doute de combiner les deux.", zh:"總結來說，最好的辦法或許是兩者結合。"},
      ]
    },
    { id:"wt_b1_media", title:"論說文：網路資訊可信嗎", cat:"考試", level:"B1", delf:true, delfType:"DELF B1・表達意見", wordcount:"約 170 字", intro:"論壇式表達意見。主題對應單字主題「媒體」。",
      body:[
        {fr:"Aujourd'hui, on trouve énormément d'informations sur internet.", zh:"如今，網路上能找到大量資訊。"},
        {fr:"On peut se demander si l'on peut vraiment leur faire confiance.", zh:"我們不禁要問，是否真能信任這些資訊。"},
        {fr:"D'abord, internet permet de s'informer rapidement et gratuitement.", zh:"首先，網路讓人能快速且免費地獲取資訊。"},
        {fr:"Cependant, beaucoup de fausses nouvelles y circulent chaque jour.", zh:"然而，每天都有許多假新聞在上面流傳。"},
        {fr:"Par exemple, certains articles sont publiés sans aucune vérification.", zh:"例如，有些文章完全未經查證就刊出。"},
        {fr:"C'est pourquoi il faut toujours vérifier ses sources avant de partager.", zh:"因此，分享前永遠都要查證來源。"},
        {fr:"Personnellement, je consulte plusieurs sites avant de croire une information.", zh:"我個人在相信一則消息前，會參考好幾個網站。"},
        {fr:"En conclusion, internet est très utile, à condition de rester critique.", zh:"總結來說，網路很有用，前提是保持批判思考。"},
      ]
    },
    { id:"wt_b1_environnement", title:"論說文：日常如何環保", cat:"考試", level:"B1", delf:true, delfType:"DELF B1・表達意見", wordcount:"約 170 字", intro:"論壇式表達意見。主題對應單字主題「環境」。",
      body:[
        {fr:"La protection de l'environnement est un sujet de plus en plus important.", zh:"環境保護是越來越重要的議題。"},
        {fr:"On peut se demander comment agir concrètement au quotidien.", zh:"我們不禁要問，日常該如何具體行動。"},
        {fr:"Tout d'abord, on peut trier ses déchets et recycler le plus possible.", zh:"首先，可以做垃圾分類並盡量回收。"},
        {fr:"Ensuite, il vaut mieux privilégier les transports en commun ou le vélo.", zh:"接著，最好優先選擇大眾運輸或腳踏車。"},
        {fr:"Par exemple, je vais à l'université à vélo presque tous les jours.", zh:"例如，我幾乎每天騎腳踏車去學校。"},
        {fr:"On peut aussi réduire sa consommation d'eau et d'électricité.", zh:"我們也可以減少水電的消耗。"},
        {fr:"Bien sûr, ces gestes semblent petits, mais ensemble ils comptent vraiment.", zh:"當然，這些舉動看似微小，但合起來真的有意義。"},
        {fr:"En conclusion, chacun peut agir à son niveau pour protéger la planète.", zh:"總結來說，每個人都能盡一己之力保護地球。"},
      ]
    },
    { id:"wt_b1_urbain", title:"論說文：城市還是鄉村", cat:"考試", level:"B1", delf:true, delfType:"DELF B1・表達意見", wordcount:"約 175 字", intro:"論壇式表達意見。主題對應單字主題「城市生活」。",
      body:[
        {fr:"Beaucoup de gens hésitent entre vivre en ville ou à la campagne.", zh:"很多人在住城市或鄉下之間猶豫。"},
        {fr:"On peut se demander quel mode de vie est le meilleur.", zh:"我們不禁要問，哪種生活方式比較好。"},
        {fr:"D'un côté, la ville est pratique : tout est proche et animé.", zh:"一方面，城市很方便：什麼都近、又熱鬧。"},
        {fr:"Par exemple, il y a des magasins, des transports et beaucoup d'activités.", zh:"例如，有商店、交通和許多活動。"},
        {fr:"D'un autre côté, la ville est souvent bruyante et polluée.", zh:"另一方面，城市常常吵雜又有污染。"},
        {fr:"La campagne, elle, offre le calme et un contact direct avec la nature.", zh:"而鄉村則提供寧靜，以及與自然的直接接觸。"},
        {fr:"Personnellement, je préfère la ville pour mes études, mais j'aime la campagne le week-end.", zh:"我個人為了學業偏好城市，但週末喜歡鄉村。"},
        {fr:"En conclusion, chaque mode de vie a ses avantages ; tout dépend de ses priorités.", zh:"總結來說，每種生活方式都有優點，全看你的優先順序。"},
      ]
    }
  );

  E.push(
    { id:"we_b1_societe", title:"論說文：世代之間能互相理解嗎", level:"B1", delf:true, delfType:"DELF B1・表達意見", target:"~170 字",
      prompt:"論壇問題：« Les générations se comprennent-elles encore ? »（不同世代還能互相理解嗎？）請寫一篇約 170 字的回應。",
      steps:[{label:"① 引言＋表態",detail:"點出議題並表明立場。"},{label:"② 一面（差異）",detail:"承認世代差異，附例。"},{label:"③ 另一面（對話）",detail:"轉折說明仍能理解，附例。"},{label:"④ 結論",detail:"重申立場。"}],
      grille:b1grille("回應「世代理解」並表明立場") },
    { id:"we_b1_travail", title:"論說文：事業還是生活優先", level:"B1", delf:true, delfType:"DELF B1・表達意見", target:"~170 字",
      prompt:"論壇問題：« Faut-il privilégier sa carrière ou sa vie privée ? »（該以事業還是私生活為重？）請寫一篇約 170 字的回應。",
      steps:[{label:"① 引言＋表態",detail:"點出兩難並表態。"},{label:"② 工作的重要",detail:"理由＋例。"},{label:"③ 生活的重要",detail:"轉折＋例。"},{label:"④ 結論",detail:"提出平衡觀點。"}],
      grille:b1grille("回應「事業 vs 生活」並表明立場") },
    { id:"we_b1_sante", title:"論說文：如何保持健康", level:"B1", delf:true, delfType:"DELF B1・表達意見", target:"~170 字",
      prompt:"論壇問題：« Comment rester en bonne santé au quotidien ? »（日常如何保持健康？）請寫一篇約 170 字的回應，提出建議。",
      steps:[{label:"① 引言",detail:"點出健康的重要與問題。"},{label:"② 建議一（飲食）",detail:"具體說明。"},{label:"③ 建議二（運動／睡眠）",detail:"附個人例子。"},{label:"④ 結論",detail:"總結努力的方向。"}],
      grille:b1grille("回應「如何保持健康」並提出具體建議") },
    { id:"we_b1_education", title:"論說文：線上課程是否有效", level:"B1", delf:true, delfType:"DELF B1・表達意見", target:"~175 字",
      prompt:"論壇問題：« Les cours en ligne sont-ils aussi efficaces que les cours en classe ? »（線上課程和實體課一樣有效嗎？）請寫一篇約 175 字的回應。",
      steps:[{label:"① 引言＋問題",detail:"點出現象並提問。"},{label:"② 優點",detail:"自由、彈性，附例。"},{label:"③ 缺點",detail:"專注困難，附例。"},{label:"④ 結論",detail:"提出折衷（混合）。"}],
      grille:b1grille("回應「線上課程是否有效」並兼顧正反") },
    { id:"we_b1_media", title:"論說文：網路資訊可信嗎", level:"B1", delf:true, delfType:"DELF B1・表達意見", target:"~170 字",
      prompt:"論壇問題：« Peut-on faire confiance aux informations sur internet ? »（網路上的資訊可信嗎？）請寫一篇約 170 字的回應。",
      steps:[{label:"① 引言＋表態",detail:"點出現象並表態。"},{label:"② 優點",detail:"快速、免費。"},{label:"③ 風險",detail:"假新聞，附例與對策。"},{label:"④ 結論",detail:"強調保持批判。"}],
      grille:b1grille("回應「網路資訊可信度」並提出對策") },
    { id:"we_b1_environnement", title:"論說文：日常如何環保", level:"B1", delf:true, delfType:"DELF B1・表達意見", target:"~170 字",
      prompt:"論壇問題：« Comment protéger l'environnement au quotidien ? »（日常如何保護環境？）請寫一篇約 170 字的回應，提出具體做法。",
      steps:[{label:"① 引言",detail:"點出環保的重要。"},{label:"② 做法一（分類回收）",detail:"具體說明。"},{label:"③ 做法二（交通／節能）",detail:"附個人例子。"},{label:"④ 結論",detail:"強調人人可為。"}],
      grille:b1grille("回應「日常環保」並提出具體做法") },
    { id:"we_b1_urbain", title:"論說文：城市還是鄉村", level:"B1", delf:true, delfType:"DELF B1・表達意見", target:"~175 字",
      prompt:"論壇問題：« Vaut-il mieux vivre en ville ou à la campagne ? »（住城市還是鄉村比較好？）請寫一篇約 175 字的回應。",
      steps:[{label:"① 引言＋問題",detail:"點出選擇並提問。"},{label:"② 城市",detail:"優缺點，附例。"},{label:"③ 鄉村",detail:"優缺點。"},{label:"④ 結論",detail:"表明個人偏好。"}],
      grille:b1grille("回應「城市 vs 鄉村」並表明偏好") }
  );
})();

/* B1 補充 4 篇（達 15）：理財、文化、旅行、網路交友 */
(function(){
  if(!window.WRITING) return;
  const T=window.WRITING.templates, E=window.WRITING.exercises;
  const b1grille=(extra)=>["切題："+extra,"內容：理由充分、附具體例子","連貫：用連接詞與分段組織論述","詞彙：用詞恰當且多樣","文法：時態、性數一致大致正確","拼字與標點正確，字數達標"];
  T.push(
    { id:"wt_b1_argent", title:"論說文：學生如何理財", cat:"考試", level:"B1", delf:true, delfType:"DELF B1・表達意見", wordcount:"約 170 字", intro:"論壇式表達意見。主題對應單字主題「經濟」。",
      body:[
        {fr:"Quand on est étudiant, gérer son argent n'est pas toujours facile.", zh:"當學生時，理財並不總是容易。"},
        {fr:"On peut se demander comment bien gérer son budget au quotidien.", zh:"我們不禁要問，日常該如何管理預算。"},
        {fr:"Tout d'abord, il est utile de noter ses dépenses chaque mois.", zh:"首先，每月記錄開支很有用。"},
        {fr:"Ensuite, il vaut mieux distinguer les besoins des simples envies.", zh:"接著，最好區分「需要」與單純的「想要」。"},
        {fr:"Par exemple, cuisiner soi-même coûte bien moins cher que manger dehors.", zh:"例如，自己煮比外食便宜得多。"},
        {fr:"Cependant, il ne faut pas non plus se priver de tout.", zh:"然而，也不必什麼都不捨得花。"},
        {fr:"Personnellement, j'essaie d'économiser un peu chaque mois pour voyager.", zh:"我個人試著每月存一點錢去旅行。"},
        {fr:"En conclusion, avec un peu d'organisation, on peut gérer son argent sans stress.", zh:"總結來說，只要稍加規劃，就能無壓力地理財。"},
      ]
    },
    { id:"wt_b1_culture", title:"論說文：藝術與文化重要嗎", cat:"考試", level:"B1", delf:true, delfType:"DELF B1・表達意見", wordcount:"約 170 字", intro:"論壇式表達意見。主題對應單字主題「藝術」。",
      body:[
        {fr:"L'art et la culture font partie de notre vie de tous les jours.", zh:"藝術與文化是我們日常生活的一部分。"},
        {fr:"On peut se demander s'ils sont vraiment importants.", zh:"我們不禁要問，它們是否真的重要。"},
        {fr:"D'un côté, certains pensent que l'art est un luxe un peu inutile.", zh:"一方面，有些人認為藝術是有點無用的奢侈品。"},
        {fr:"Cependant, je crois que la culture nous enrichit profondément.", zh:"然而，我相信文化深深地豐富我們。"},
        {fr:"En effet, un film, un livre ou un tableau peuvent nous faire réfléchir.", zh:"確實，一部電影、一本書或一幅畫都能引人深思。"},
        {fr:"Par exemple, la musique m'aide à me détendre et à exprimer mes émotions.", zh:"例如，音樂幫我放鬆並表達情緒。"},
        {fr:"De plus, la culture rapproche les gens de différents pays.", zh:"此外，文化拉近不同國家的人。"},
        {fr:"En conclusion, l'art n'est pas un luxe, mais un véritable besoin humain.", zh:"總結來說，藝術不是奢侈，而是真正的人類需求。"},
      ]
    },
    { id:"wt_b1_voyage", title:"論說文：旅行的好處", cat:"考試", level:"B1", delf:true, delfType:"DELF B1・表達意見", wordcount:"約 170 字", intro:"論壇式表達意見。主題對應單字主題「旅行」。",
      body:[
        {fr:"Voyager est aujourd'hui plus facile et plus courant qu'avant.", zh:"旅行如今比以前更容易、更普遍。"},
        {fr:"On peut se demander si voyager apporte vraiment quelque chose.", zh:"我們不禁要問，旅行是否真的帶來收穫。"},
        {fr:"Tout d'abord, voyager permet de découvrir d'autres cultures.", zh:"首先，旅行讓人認識不同的文化。"},
        {fr:"En effet, on apprend beaucoup en rencontrant des gens différents.", zh:"確實，遇見不同的人能學到很多。"},
        {fr:"Par exemple, lors d'un voyage, j'ai dû parler une langue étrangère tous les jours.", zh:"例如，一次旅行中，我每天都得說外語。"},
        {fr:"Cependant, voyager coûte cher et n'est pas accessible à tout le monde.", zh:"然而，旅行很貴，並非人人負擔得起。"},
        {fr:"Malgré cela, je pense que chaque voyage nous fait grandir.", zh:"儘管如此，我認為每趟旅行都讓我們成長。"},
        {fr:"En conclusion, voyager est une expérience précieuse qui ouvre l'esprit.", zh:"總結來說，旅行是開闊心胸的寶貴經驗。"},
      ]
    },
    { id:"wt_b1_amitie", title:"論說文：網路上有真友誼嗎", cat:"考試", level:"B1", delf:true, delfType:"DELF B1・表達意見", wordcount:"約 175 字", intro:"論壇式表達意見。主題對應單字主題「人際關係」。",
      body:[
        {fr:"De nos jours, on rencontre de plus en plus de gens sur internet.", zh:"如今，越來越多人在網路上認識朋友。"},
        {fr:"On peut se demander si l'on peut y construire de vraies amitiés.", zh:"我們不禁要問，能否在網路上建立真正的友誼。"},
        {fr:"D'un côté, internet permet de rencontrer des gens du monde entier.", zh:"一方面，網路讓人能認識全世界的人。"},
        {fr:"Par exemple, j'ai des amis en ligne avec qui je partage les mêmes passions.", zh:"例如，我有些網友和我有共同的興趣。"},
        {fr:"D'un autre côté, derrière un écran, il est facile de mentir.", zh:"另一方面，在螢幕背後，說謊很容易。"},
        {fr:"C'est pourquoi il faut rester prudent avec les inconnus.", zh:"因此，對陌生人要保持謹慎。"},
        {fr:"Personnellement, je pense qu'une vraie amitié a besoin de rencontres réelles.", zh:"我個人認為，真正的友誼需要實際的見面。"},
        {fr:"En conclusion, internet peut créer des liens, mais l'amitié se renforce dans la vie réelle.", zh:"總結來說，網路能建立連結，但友誼在現實生活中才會更深。"},
      ]
    }
  );
  E.push(
    { id:"we_b1_argent", title:"論說文：學生如何理財", level:"B1", delf:true, delfType:"DELF B1・表達意見", target:"~170 字",
      prompt:"論壇問題：« Comment bien gérer son argent quand on est étudiant ? »（學生時期如何理財？）請寫一篇約 170 字的回應，提出建議。",
      steps:[{label:"① 引言",detail:"點出理財不易並提問。"},{label:"② 建議一（記帳／分辨需求）",detail:"具體說明。"},{label:"③ 建議二（省錢例子）",detail:"附個人例子＋讓步。"},{label:"④ 結論",detail:"總結方向。"}],
      grille:b1grille("回應「學生理財」並提出具體建議") },
    { id:"we_b1_culture", title:"論說文：藝術與文化重要嗎", level:"B1", delf:true, delfType:"DELF B1・表達意見", target:"~170 字",
      prompt:"論壇問題：« L'art et la culture sont-ils vraiment importants ? »（藝術與文化真的重要嗎？）請寫一篇約 170 字的回應。",
      steps:[{label:"① 引言＋表態",detail:"點出議題並表態。"},{label:"② 一面（質疑）",detail:"承認有人覺得無用。"},{label:"③ 另一面（價值）",detail:"反駁並舉例。"},{label:"④ 結論",detail:"重申立場。"}],
      grille:b1grille("回應「文化重要性」並表明立場") },
    { id:"we_b1_voyage", title:"論說文：旅行的好處", level:"B1", delf:true, delfType:"DELF B1・表達意見", target:"~170 字",
      prompt:"論壇問題：« Voyager apporte-t-il vraiment quelque chose ? »（旅行真的有收穫嗎？）請寫一篇約 170 字的回應。",
      steps:[{label:"① 引言＋問題",detail:"點出旅行普及並提問。"},{label:"② 好處",detail:"認識文化、語言，附例。"},{label:"③ 讓步",detail:"承認費用問題。"},{label:"④ 結論",detail:"肯定旅行的價值。"}],
      grille:b1grille("回應「旅行好處」並兼顧讓步") },
    { id:"we_b1_amitie", title:"論說文：網路上有真友誼嗎", level:"B1", delf:true, delfType:"DELF B1・表達意見", target:"~175 字",
      prompt:"論壇問題：« Peut-on construire de vraies amitiés sur internet ? »（能在網路上建立真正的友誼嗎？）請寫一篇約 175 字的回應。",
      steps:[{label:"① 引言＋問題",detail:"點出網路交友現象並提問。"},{label:"② 正面",detail:"能認識同好，附例。"},{label:"③ 風險",detail:"螢幕背後易說謊。"},{label:"④ 結論",detail:"表明個人立場。"}],
      grille:b1grille("回應「網路友誼」並表明立場") }
  );
})();
