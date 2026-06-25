/* 口說資料：window.SPEAKING = { exam, daily, slang }
   exam：{id,level,delfType,intro,tips:[...],phrases:[{fr,zh,note?}]}
   daily：{id,situation,items:[{fr,zh,note?}]}
   slang：{id,category,items:[{fr,zh,note?}]}（全部 familier 口語）
*/
window.SPEAKING = {
  exam: [
    {
      id:"sp_a1", level:"A1", delfType:"DELF A1・自我介紹與情境",
      intro:"A1 口說有三部分：① 引導式問答（關於自己）② 用提示卡向考官提問 ③ 情境角色扮演（如購物）。說慢、句子簡單即可。",
      tips:["事先準備好自我介紹：姓名、年齡、國籍、職業、興趣。","聽不懂時說 Pardon, pouvez-vous répéter ?","購物用 Je voudrais… 與 Combien ça coûte ?"],
      phrases:[
        {fr:"Bonjour, je m'appelle Winona et j'ai vingt ans.", zh:"您好，我叫 Winona，今年二十歲。"},
        {fr:"Je viens de Taïwan, mais j'étudie le français depuis un an.", zh:"我來自台灣，不過我學法文一年了。"},
        {fr:"Je suis étudiante en finance à l'université.", zh:"我是大學財金系的學生。"},
        {fr:"J'habite avec ma famille dans une grande ville.", zh:"我和家人住在一座大城市。"},
        {fr:"Pendant mon temps libre, j'aime écouter de la musique et voyager.", zh:"空閒時，我喜歡聽音樂和旅行。"},
        {fr:"J'aime aussi cuisiner et lire des romans.", zh:"我也喜歡做菜和看小說。"},
        {fr:"Pardon, je n'ai pas bien compris. Pouvez-vous répéter, s'il vous plaît ?", zh:"抱歉，我沒聽清楚。能請您再說一次嗎？"},
        {fr:"Excusez-moi, qu'est-ce que ça veut dire ?", zh:"不好意思，這是什麼意思？"},
        {fr:"Bonjour, je voudrais un café et un croissant, s'il vous plaît.", zh:"您好，我想要一杯咖啡和一個可頌，謝謝。"},
        {fr:"Combien ça coûte en tout ?", zh:"全部一共多少錢？"},
        {fr:"Est-ce que je peux payer par carte ?", zh:"我可以刷卡嗎？"},
      ]
    },
    {
      id:"sp_a2", level:"A2", delfType:"DELF A2・獨白與互動",
      intro:"A2 增加「短篇獨白」（描述日常、講一次經歷）與互動角色扮演。要能用複合過去式講過去的事。",
      tips:["描述習慣用 D'habitude…；講過去用 Le week-end dernier…","角色扮演要主動提問與回應對方。","不確定時說 Je ne suis pas encore sûre。"],
      phrases:[
        {fr:"D'habitude, je me lève à sept heures et je prends mon petit-déjeuner.", zh:"我通常七點起床，然後吃早餐。"},
        {fr:"Le week-end dernier, je suis allée à la plage avec mes amis.", zh:"上週末，我跟朋友去了海邊。"},
        {fr:"On a passé une journée géniale et on a beaucoup ri.", zh:"我們度過了很棒的一天，還笑個不停。"},
        {fr:"En général, j'aime sortir le soir, mais parfois je préfère rester chez moi.", zh:"一般來說我喜歡晚上出門，但有時更想待在家。"},
        {fr:"J'aimerais beaucoup voyager en France l'année prochaine.", zh:"我明年很想去法國旅行。"},
        {fr:"Qu'est-ce que vous me conseillez de visiter à Paris ?", zh:"您建議我在巴黎參觀什麼？"},
        {fr:"C'est une très bonne idée, merci beaucoup !", zh:"這是個很好的主意，非常感謝！"},
        {fr:"On pourrait se retrouver devant le cinéma vers huit heures.", zh:"我們可以八點左右在電影院前碰面。"},
        {fr:"Je ne suis pas encore sûre, je dois vérifier mon emploi du temps.", zh:"我還不太確定，我得查一下我的行程。"},
        {fr:"Désolée, je suis un peu en retard, il y avait beaucoup de circulation.", zh:"抱歉我有點遲到，剛剛交通很塞。"},
      ]
    },
    {
      id:"sp_b1", level:"B1", delfType:"DELF B1・表達並捍衛觀點",
      intro:"B1 要能就一個主題表達並捍衛自己的觀點，並在情境中互動解決問題。",
      tips:["結構：表態 → 理由 → 舉例。","用連接詞串連（d'abord, ensuite, cependant…）。","禮貌地表達不同意：Je comprends, mais…"],
      phrases:[
        {fr:"À mon avis, c'est un sujet vraiment important qu'il faut prendre au sérieux.", zh:"我認為這是個非常重要、必須認真看待的議題。"},
        {fr:"Je pense que c'est une bonne chose, parce que ça facilite la vie de tout le monde.", zh:"我覺得這是好事，因為它讓大家的生活更方便。"},
        {fr:"Par exemple, dans mon pays, beaucoup de gens utilisent déjà cette solution.", zh:"例如，在我的國家，很多人已經在用這個方法。"},
        {fr:"D'un côté, il y a des avantages, mais d'un autre côté, il faut rester prudent.", zh:"一方面有好處，但另一方面也得保持謹慎。"},
        {fr:"Je comprends votre point de vue, mais je ne suis pas tout à fait d'accord.", zh:"我理解您的觀點，但我不完全同意。"},
        {fr:"Vous avez raison sur ce point, cependant il faut aussi penser aux conséquences.", zh:"這點您說得對，不過也得考慮後果。"},
        {fr:"Personnellement, je préfère la première solution, car elle me semble plus juste.", zh:"我個人偏好第一個方案，因為它在我看來更公平。"},
        {fr:"Pour conclure, je dirais que tout dépend de la situation de chacun.", zh:"總結來說，我認為一切取決於每個人的情況。"},
        {fr:"Si j'ai bien compris, vous voulez dire que la qualité compte plus que la quantité.", zh:"如果我沒理解錯，您的意思是品質比數量更重要。"},
        {fr:"Est-ce que vous pourriez préciser ce que vous entendez par là ?", zh:"您能說明一下您指的是什麼嗎？"},
      ]
    },
    {
      id:"sp_b2", level:"B2", delfType:"DELF B2・發表與辯論",
      intro:"B2 要依一篇短文發表觀點，並與考官辯論。需論證清晰、語域恰當、能反駁對方。",
      tips:["結構化發表：引言 → 論點（附例）→ 結論。","辯論時先承認對方一點，再反駁（Certes…, mais…）。","用強調句讓論點更有力（C'est… qui/que…）。"],
      phrases:[
        {fr:"Je vais aborder la question des réseaux sociaux et de leur impact sur la société.", zh:"我要談談社群媒體及其對社會的影響這個問題。"},
        {fr:"Il est indéniable que cette technologie a profondément transformé notre manière de communiquer.", zh:"不可否認，這項技術深刻改變了我們溝通的方式。"},
        {fr:"Certes, on peut lui reprocher certains excès, mais il n'en reste pas moins qu'elle offre de réelles opportunités.", zh:"誠然，它有些過頭之處，但仍然帶來真正的機會。"},
        {fr:"Permettez-moi de nuancer votre propos sur ce point précis.", zh:"容我在這一點上對您的說法做點補充。"},
        {fr:"C'est précisément là que réside tout l'enjeu du débat.", zh:"這正是整個辯論的關鍵所在。"},
        {fr:"Loin de moi l'idée de nier les difficultés, mais je crois qu'elles peuvent être surmontées.", zh:"我絕無意否認這些困難，但我相信它們是可以克服的。"},
        {fr:"On pourrait objecter que les inégalités persistent, et c'est un argument tout à fait valable.", zh:"有人可能會反駁說不平等依然存在，這是個完全站得住腳的論點。"},
        {fr:"En définitive, je reste convaincue que les bénéfices l'emportent sur les risques.", zh:"歸根究柢，我仍深信好處大於風險。"},
        {fr:"Je maintiens donc ma position, tout en reconnaissant la complexité du problème.", zh:"因此我堅持我的立場，同時也承認問題的複雜性。"},
        {fr:"Pour résumer mon point de vue, je dirais qu'un équilibre reste à trouver.", zh:"總結我的觀點，我會說我們仍需找到一個平衡。"},
      ]
    },
  ],

  daily: [
    { id:"sd_smalltalk", situation:"寒暄與社交", items:[
      {fr:"Salut ! Ça fait super longtemps, comment tu vas ?", zh:"嗨！好久不見，你最近好嗎？"},
      {fr:"Ça va bien, merci ! Et toi, quoi de neuf ?", zh:"我很好，謝謝！那你呢，有什麼新鮮事？"},
      {fr:"Pas grand-chose, le travail comme d'habitude.", zh:"沒什麼，就跟平常一樣忙工作。"},
      {fr:"Bon, je dois y aller, mais on se reparle très vite !", zh:"好啦，我得走了，我們很快再聊！"},
      {fr:"Passe une bonne journée et bon courage pour ton examen !", zh:"祝你有美好的一天，考試加油！"},
      {fr:"Ça m'a fait plaisir de te voir, à très bientôt !", zh:"很高興見到你，很快再見！"},
    ]},
    { id:"sd_cafe", situation:"咖啡館與餐廳", items:[
      {fr:"Bonjour, est-ce que vous avez une table pour deux personnes ?", zh:"您好，請問有兩人的位子嗎？"},
      {fr:"Je vais prendre le plat du jour et une carafe d'eau, s'il vous plaît.", zh:"我要點今日特餐和一壺水，謝謝。"},
      {fr:"Qu'est-ce que vous me recommandez comme dessert ?", zh:"您推薦什麼甜點？"},
      {fr:"C'était vraiment délicieux, mes compliments au chef !", zh:"真的很好吃，請替我向主廚致意！"},
      {fr:"L'addition, s'il vous plaît. Est-ce qu'on peut payer séparément ?", zh:"買單，謝謝。我們可以分開付嗎？"},
    ]},
    { id:"sd_shop", situation:"購物與付款", items:[
      {fr:"Bonjour, je cherche un cadeau pour une amie, auriez-vous des idées ?", zh:"您好，我在找送朋友的禮物，您有什麼建議嗎？"},
      {fr:"Est-ce que vous auriez ce modèle dans une autre couleur ?", zh:"這款您有別的顏色嗎？"},
      {fr:"Je peux l'essayer ? Où sont les cabines, s'il vous plaît ?", zh:"我可以試穿嗎？請問試衣間在哪？"},
      {fr:"Finalement, je vais le prendre. Je peux payer par carte ?", zh:"最後我決定買了。我可以刷卡嗎？"},
      {fr:"Merci beaucoup, passez une bonne journée !", zh:"非常感謝，祝您有美好的一天！"},
    ]},
    { id:"sd_direction", situation:"問路與交通", items:[
      {fr:"Excusez-moi de vous déranger, je cherche la gare, c'est par où ?", zh:"不好意思打擾了，我在找車站，往哪邊走？"},
      {fr:"Est-ce que c'est loin d'ici ou je peux y aller à pied ?", zh:"離這裡遠嗎，還是我可以走路過去？"},
      {fr:"Je crois que je me suis trompée de direction.", zh:"我想我走錯方向了。"},
      {fr:"Un aller-retour pour Lyon, s'il vous plaît.", zh:"一張去里昂的來回票，謝謝。"},
      {fr:"Pardon, est-ce que ce train s'arrête bien à Avignon ?", zh:"不好意思，這班車有停亞維儂嗎？"},
    ]},
    { id:"sd_phone", situation:"電話與約定", items:[
      {fr:"Allô, bonjour, est-ce que je pourrais parler à Marie, s'il vous plaît ?", zh:"喂您好，請問可以找 Marie 嗎？"},
      {fr:"Je suis désolée, elle n'est pas là pour le moment, voulez-vous laisser un message ?", zh:"抱歉她現在不在，您要留言嗎？"},
      {fr:"Pas de souci, je rappellerai plus tard.", zh:"沒關係，我晚點再打。"},
      {fr:"Ça te dirait qu'on aille au cinéma ce week-end ?", zh:"這週末要不要一起去看電影？"},
      {fr:"Parfait, on se dit samedi à 18 heures alors !", zh:"太好了，那就說定週六六點！"},
    ]},
    { id:"sd_help", situation:"應急與求助", items:[
      {fr:"Excusez-moi, pourriez-vous m'aider, s'il vous plaît ?", zh:"不好意思，您能幫我一下嗎？"},
      {fr:"Je ne me sens pas très bien, j'ai besoin de m'asseoir un instant.", zh:"我不太舒服，我需要坐下來一下。"},
      {fr:"Est-ce qu'il y a une pharmacie près d'ici ?", zh:"這附近有藥局嗎？"},
      {fr:"J'ai perdu mon portefeuille, qu'est-ce que je dois faire ?", zh:"我弄丟了錢包，我該怎麼辦？"},
      {fr:"Appelez une ambulance, s'il vous plaît, c'est urgent !", zh:"請叫救護車，這很緊急！"},
    ]},
  ],

  slang: [
    { id:"ss_fillers", category:"口頭禪／填補詞（讓你聽起來自然）", items:[
      {fr:"du coup", zh:"所以、結果（超高頻填補詞）", note:"年輕人口頭禪，正式場合少用。"},
      {fr:"en fait", zh:"其實……", note:"萬用開頭，口語極常見。"},
      {fr:"genre", zh:"就像、之類的", note:"純口語填補詞，勿用於寫作。"},
      {fr:"… quoi.", zh:"……之類的（句末語氣詞）", note:"放句尾，很隨意。"},
      {fr:"voilà", zh:"就這樣／對", note:"萬用結尾與肯定。"},
      {fr:"bref", zh:"總之", note:"打住話題、要收尾時用。"},
    ]},
    { id:"ss_reaction", category:"評價與回應（好 / 壞 / 酷）", items:[
      {fr:"C'est top !", zh:"超讚！", note:"輕鬆場合都能用。"},
      {fr:"C'est nul.", zh:"很爛。", note:"隨意，帶點抱怨。"},
      {fr:"C'est ouf !", zh:"太誇張了！太狂了！", note:"ouf 是 fou 的反讀（verlan），年輕人用語。"},
      {fr:"trop bien !", zh:"超棒！", note:"口語強調，trop＝très。"},
      {fr:"pas mal !", zh:"還不錯！", note:"含蓄稱讚，各場合通用。"},
      {fr:"Carrément !", zh:"完全是！絕對！", note:"強烈同意。"},
    ]},
    { id:"ss_feeling", category:"狀態與情緒", items:[
      {fr:"Je suis crevé(e).", zh:"我累爆了。", note:"超常用，比 fatigué 更口語。"},
      {fr:"J'ai la flemme.", zh:"我懶得動。", note:"日常高頻，學起來很實用。"},
      {fr:"Ça me soûle.", zh:"煩死我了。", note:"較隨意，熟人之間用。"},
      {fr:"Je kiffe trop !", zh:"我超愛的！", note:"年輕人用語（源自阿拉伯語）。"},
      {fr:"T'inquiète !", zh:"別擔心！沒事啦！", note:"T'inquiète pas 的口語縮略。"},
      {fr:"Tranquille.", zh:"沒問題、放輕鬆。", note:"萬用安撫詞。"},
    ]},
    { id:"ss_words", category:"日常口語替換詞", items:[
      {fr:"un truc", zh:"一個東西（萬用）", note:"想不起名字時超好用。"},
      {fr:"un mec / une meuf", zh:"一個男生／女生", note:"meuf 是 femme 的 verlan，很隨意。"},
      {fr:"bosser", zh:"工作（口語）", note:"＝travailler，朋友間常用。"},
      {fr:"le boulot", zh:"工作、差事（口語）", note:"＝le travail。"},
      {fr:"le fric", zh:"錢（口語）", note:"隨意，正式勿用。"},
      {fr:"choper", zh:"抓到、得到、感染（感冒）", note:"J'ai chopé un rhume.（我感冒了）。"},
    ]},
  ],
};
