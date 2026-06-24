/* 依主題情境會話：window.DIALOGUES[主題id] = [ {title, lines:[{sp,fr,zh}]} ] */
window.DIALOGUES = window.DIALOGUES || {};

window.DIALOGUES.greetings = [
  {
    title: "初次見面",
    lines: [
      {sp:"A", fr:"Bonjour ! Vous vous appelez comment ?", zh:"您好！您叫什麼名字？"},
      {sp:"B", fr:"Je m'appelle Marie. Et vous ?", zh:"我叫瑪麗。您呢？"},
      {sp:"A", fr:"Moi, c'est Paul. Enchanté !", zh:"我是保羅。很高興認識您！"},
      {sp:"B", fr:"Enchantée. Vous venez d'où ?", zh:"我也是。您來自哪裡？"},
      {sp:"A", fr:"Je viens de Lyon. Et vous ?", zh:"我來自里昂。您呢？"},
      {sp:"B", fr:"Je viens de Taïwan.", zh:"我來自台灣。"},
    ]
  },
  {
    title: "在路上遇到朋友",
    lines: [
      {sp:"A", fr:"Salut ! Ça va ?", zh:"嗨！你好嗎？"},
      {sp:"B", fr:"Ça va bien, merci. Et toi ?", zh:"我很好，謝謝。你呢？"},
      {sp:"A", fr:"Comme ci, comme ça. Je suis un peu fatigué.", zh:"還好啦。我有點累。"},
      {sp:"B", fr:"Repose-toi bien ! À bientôt.", zh:"好好休息！待會見。"},
      {sp:"A", fr:"À bientôt, bonne journée !", zh:"待會見，祝你有美好的一天！"},
    ]
  },
];

window.DIALOGUES.food_a2 = [
  {
    title: "在餐廳點餐",
    lines: [
      {sp:"服務生", fr:"Bonjour, vous avez choisi ?", zh:"您好，您決定好了嗎？"},
      {sp:"客人", fr:"Oui, je voudrais le menu à vingt euros.", zh:"好了，我想要二十歐元的套餐。"},
      {sp:"服務生", fr:"Très bien. Et comme entrée ?", zh:"好的。前菜要什麼呢？"},
      {sp:"客人", fr:"Une salade, s'il vous plaît. Je suis végétarienne.", zh:"請給我一份沙拉。我吃素。"},
      {sp:"服務生", fr:"D'accord. Et comme plat ?", zh:"好的。主菜呢？"},
      {sp:"客人", fr:"Les courgettes grillées. Ce n'est pas trop épicé ?", zh:"烤櫛瓜。那個不會太辣吧？"},
      {sp:"服務生", fr:"Non, pas du tout. Et comme dessert ?", zh:"不會，完全不會。甜點呢？"},
      {sp:"客人", fr:"Une tarte aux pommes. Merci !", zh:"一份蘋果塔。謝謝！"},
    ]
  },
  {
    title: "結帳與小費",
    lines: [
      {sp:"客人", fr:"L'addition, s'il vous plaît.", zh:"麻煩結帳。"},
      {sp:"服務生", fr:"Voilà. Ça fait vingt-trois euros.", zh:"來了，一共二十三歐元。"},
      {sp:"客人", fr:"Je peux payer par carte ?", zh:"可以刷卡嗎？"},
      {sp:"服務生", fr:"Bien sûr.", zh:"當然可以。"},
      {sp:"客人", fr:"Voici, et le reste, c'est pour vous.", zh:"這是錢，剩下的是給您的（小費）。"},
      {sp:"服務生", fr:"Merci beaucoup, bonne soirée !", zh:"非常感謝，祝您有個愉快的夜晚！"},
    ]
  },
];

window.DIALOGUES.family = [
  {
    title: "聊家庭",
    lines: [
      {sp:"Léa", fr:"Tu as des frères et sœurs ?", zh:"你有兄弟姊妹嗎？"},
      {sp:"Marc", fr:"Oui, j'ai un frère et une sœur.", zh:"有，我有一個哥哥和一個妹妹。"},
      {sp:"Léa", fr:"Ton frère est plus âgé que toi ?", zh:"你哥哥比你大嗎？"},
      {sp:"Marc", fr:"Oui, et ma sœur est plus jeune.", zh:"對，而我妹妹比較小。"},
      {sp:"Léa", fr:"Et tes parents, ils travaillent ?", zh:"那你父母有工作嗎？"},
      {sp:"Marc", fr:"Mon père est médecin et ma mère est professeur.", zh:"我爸爸是醫生，媽媽是老師。"},
    ]
  },
];

window.DIALOGUES.numbers = [
  {
    title: "約時間",
    lines: [
      {sp:"Anne", fr:"Il est quelle heure ?", zh:"現在幾點？"},
      {sp:"Tom", fr:"Il est trois heures et demie.", zh:"三點半。"},
      {sp:"Anne", fr:"On se retrouve à quelle heure demain ?", zh:"我們明天幾點碰面？"},
      {sp:"Tom", fr:"À dix heures, devant la gare.", zh:"十點，在車站前面。"},
      {sp:"Anne", fr:"D'accord, à demain !", zh:"好，明天見！"},
      {sp:"Tom", fr:"À demain !", zh:"明天見！"},
    ]
  },
];

window.DIALOGUES.food = [
  {
    title: "在市場買菜",
    lines: [
      {sp:"顧客", fr:"Bonjour, je voudrais un kilo de pommes.", zh:"你好，我想要一公斤蘋果。"},
      {sp:"商販", fr:"Voilà. Et avec ça ?", zh:"好的。還要別的嗎？"},
      {sp:"顧客", fr:"Je prends aussi des tomates.", zh:"我還要一些番茄。"},
      {sp:"商販", fr:"Combien en voulez-vous ?", zh:"您要多少？"},
      {sp:"顧客", fr:"Cinq, s'il vous plaît. Ça fait combien ?", zh:"五個，謝謝。一共多少錢？"},
      {sp:"商販", fr:"Quatre euros cinquante.", zh:"四歐元五十。"},
    ]
  },
];

window.DIALOGUES.school = [
  {
    title: "聊課程",
    lines: [
      {sp:"Hugo", fr:"Tu as cours aujourd'hui ?", zh:"你今天有課嗎？"},
      {sp:"Emma", fr:"Oui, j'ai un cours de français ce matin.", zh:"有，今天早上有一堂法文課。"},
      {sp:"Hugo", fr:"C'est difficile ?", zh:"難嗎？"},
      {sp:"Emma", fr:"Un peu, mais le professeur est très gentil.", zh:"有點，但老師人很好。"},
      {sp:"Hugo", fr:"Tu as beaucoup de devoirs ?", zh:"你功課多嗎？"},
      {sp:"Emma", fr:"Oui, je dois étudier ce soir.", zh:"是啊，今晚我得唸書。"},
    ]
  },
];

window.DIALOGUES.places = [
  {
    title: "問路",
    lines: [
      {sp:"路人", fr:"Excusez-moi, où est la gare ?", zh:"不好意思，車站在哪裡？"},
      {sp:"居民", fr:"Allez tout droit, puis tournez à gauche.", zh:"一直走，然後左轉。"},
      {sp:"路人", fr:"C'est loin ?", zh:"很遠嗎？"},
      {sp:"居民", fr:"Non, c'est à cinq minutes à pied.", zh:"不會，走路五分鐘。"},
      {sp:"路人", fr:"Merci beaucoup !", zh:"非常感謝！"},
      {sp:"居民", fr:"Je vous en prie.", zh:"不客氣。"},
    ]
  },
];

window.DIALOGUES.weather = [
  {
    title: "聊天氣",
    lines: [
      {sp:"Chloé", fr:"Quel temps fait-il aujourd'hui ?", zh:"今天天氣如何？"},
      {sp:"Paul", fr:"Il fait beau, mais il y a du vent.", zh:"天氣很好，但有風。"},
      {sp:"Chloé", fr:"Il va pleuvoir demain ?", zh:"明天會下雨嗎？"},
      {sp:"Paul", fr:"Oui, prends ton parapluie.", zh:"會，帶把傘吧。"},
      {sp:"Chloé", fr:"Il fait froid en ce moment.", zh:"最近很冷。"},
      {sp:"Paul", fr:"Oui, c'est l'hiver !", zh:"對啊，冬天到了！"},
    ]
  },
];

window.DIALOGUES.transport = [
  {
    title: "搭公車",
    lines: [
      {sp:"乘客", fr:"Pardon, ce bus va au centre-ville ?", zh:"不好意思，這班公車有到市中心嗎？"},
      {sp:"司機", fr:"Oui, montez ici.", zh:"有，從這裡上車。"},
      {sp:"乘客", fr:"Combien coûte le ticket ?", zh:"車票多少錢？"},
      {sp:"司機", fr:"Un euro cinquante.", zh:"一歐元五十。"},
      {sp:"乘客", fr:"Je descends où pour le musée ?", zh:"去博物館要在哪下車？"},
      {sp:"司機", fr:"Au troisième arrêt.", zh:"第三站。"},
    ]
  },
];

window.DIALOGUES.clothes = [
  {
    title: "買衣服",
    lines: [
      {sp:"顧客", fr:"Bonjour, je cherche un pull.", zh:"你好，我在找一件毛衣。"},
      {sp:"店員", fr:"Quelle taille faites-vous ?", zh:"您穿什麼尺寸？"},
      {sp:"顧客", fr:"Du M, en bleu si possible.", zh:"M號，可以的話要藍色。"},
      {sp:"店員", fr:"Voilà. Vous voulez l'essayer ?", zh:"這件。您要試穿嗎？"},
      {sp:"顧客", fr:"Oui. La cabine est où ?", zh:"好。試衣間在哪？"},
      {sp:"店員", fr:"Au fond à droite.", zh:"在最裡面右邊。"},
    ]
  },
];

window.DIALOGUES.colors = [
  {
    title: "挑顏色",
    lines: [
      {sp:"Sami", fr:"J'aime bien ce sac. Tu le préfères en quelle couleur ?", zh:"我喜歡這個包。你比較喜歡什麼顏色的？"},
      {sp:"Inès", fr:"En rouge, c'est joli.", zh:"紅色的很好看。"},
      {sp:"Sami", fr:"Moi, je préfère le bleu ou le vert.", zh:"我比較喜歡藍色或綠色。"},
      {sp:"Inès", fr:"Le noir va avec tout.", zh:"黑色百搭。"},
      {sp:"Sami", fr:"C'est vrai, mais le blanc est plus clair.", zh:"是啊，不過白色比較明亮。"},
      {sp:"Inès", fr:"Prends le jaune, c'est gai !", zh:"買黃色的吧，很活潑！"},
    ]
  },
];

window.DIALOGUES.adjectives = [
  {
    title: "形容一個地方",
    lines: [
      {sp:"Lucas", fr:"Comment est ton nouvel appartement ?", zh:"你的新公寓怎麼樣？"},
      {sp:"Nora", fr:"Il est grand et lumineux.", zh:"又大又明亮。"},
      {sp:"Lucas", fr:"C'est cher ?", zh:"貴嗎？"},
      {sp:"Nora", fr:"Non, le loyer est bas.", zh:"不會，房租很低。"},
      {sp:"Lucas", fr:"Et le quartier ?", zh:"那社區呢？"},
      {sp:"Nora", fr:"Il est calme et propre.", zh:"很安靜也很乾淨。"},
    ]
  },
];

window.DIALOGUES.home = [
  {
    title: "參觀新家",
    lines: [
      {sp:"訪客", fr:"Ta maison est très jolie !", zh:"你家好漂亮！"},
      {sp:"主人", fr:"Merci ! Voici le salon.", zh:"謝謝！這是客廳。"},
      {sp:"訪客", fr:"La cuisine est par là ?", zh:"廚房在那邊嗎？"},
      {sp:"主人", fr:"Oui, et les chambres sont à l'étage.", zh:"對，臥室在樓上。"},
      {sp:"訪客", fr:"Il y a un jardin ?", zh:"有花園嗎？"},
      {sp:"主人", fr:"Oui, derrière la maison.", zh:"有，在屋子後面。"},
    ]
  },
];

window.DIALOGUES.body = [
  {
    title: "看醫生",
    lines: [
      {sp:"醫生", fr:"Bonjour, qu'est-ce qui ne va pas ?", zh:"您好，哪裡不舒服？"},
      {sp:"病人", fr:"J'ai mal à la tête et à la gorge.", zh:"我頭痛，喉嚨也痛。"},
      {sp:"醫生", fr:"Vous avez de la fièvre ?", zh:"您有發燒嗎？"},
      {sp:"病人", fr:"Oui, un peu.", zh:"有，一點點。"},
      {sp:"醫生", fr:"C'est un rhume. Reposez-vous bien.", zh:"是感冒。好好休息。"},
      {sp:"病人", fr:"Merci, docteur.", zh:"謝謝醫生。"},
    ]
  },
];

window.DIALOGUES.animals = [
  {
    title: "聊寵物",
    lines: [
      {sp:"Théo", fr:"Tu as un animal à la maison ?", zh:"你家有養寵物嗎？"},
      {sp:"Jade", fr:"Oui, j'ai un chat et un chien.", zh:"有，我養一隻貓和一隻狗。"},
      {sp:"Théo", fr:"Comment ils s'appellent ?", zh:"牠們叫什麼名字？"},
      {sp:"Jade", fr:"Le chat s'appelle Minou, le chien Rex.", zh:"貓叫 Minou，狗叫 Rex。"},
      {sp:"Théo", fr:"Ils s'entendent bien ?", zh:"牠們相處得好嗎？"},
      {sp:"Jade", fr:"Oui, ils jouent ensemble.", zh:"好啊，牠們會一起玩。"},
    ]
  },
];

window.DIALOGUES.jobs = [
  {
    title: "聊工作",
    lines: [
      {sp:"Manon", fr:"Qu'est-ce que tu fais dans la vie ?", zh:"你做什麼工作？"},
      {sp:"Yanis", fr:"Je suis infirmier. Et toi ?", zh:"我是護士。你呢？"},
      {sp:"Manon", fr:"Je suis cuisinière dans un restaurant.", zh:"我在餐廳當廚師。"},
      {sp:"Yanis", fr:"Tu travailles le week-end ?", zh:"你週末上班嗎？"},
      {sp:"Manon", fr:"Oui, mais j'aime mon métier.", zh:"是啊，但我喜歡我的工作。"},
      {sp:"Yanis", fr:"C'est le plus important !", zh:"那最重要了！"},
    ]
  },
];

window.DIALOGUES.verbs = [
  {
    title: "週末做什麼",
    lines: [
      {sp:"Eva", fr:"Qu'est-ce que tu fais ce week-end ?", zh:"你這週末要做什麼？"},
      {sp:"Noah", fr:"Je vais lire et regarder un film.", zh:"我要看書和看電影。"},
      {sp:"Eva", fr:"Tu ne sors pas ?", zh:"你不出門嗎？"},
      {sp:"Noah", fr:"Si, je vais manger avec des amis.", zh:"會啊，我要跟朋友吃飯。"},
      {sp:"Eva", fr:"On peut faire du sport ensemble ?", zh:"我們可以一起運動嗎？"},
      {sp:"Noah", fr:"Bonne idée, j'adore courir !", zh:"好主意，我超愛跑步！"},
    ]
  },
];

window.DIALOGUES.function = [
  {
    title: "東西在哪裡",
    lines: [
      {sp:"Camille", fr:"Où sont mes clés ?", zh:"我的鑰匙在哪？"},
      {sp:"Léo", fr:"Elles sont sur la table.", zh:"在桌上。"},
      {sp:"Camille", fr:"Non, il n'y a rien sur la table.", zh:"沒有，桌上什麼都沒有。"},
      {sp:"Léo", fr:"Regarde sous le journal, ou dans ton sac.", zh:"看看報紙下面，或你的包包裡。"},
      {sp:"Camille", fr:"Ah, elles sont à côté du téléphone !", zh:"啊，在電話旁邊！"},
      {sp:"Léo", fr:"Voilà, parfait !", zh:"找到了，太好了！"},
    ]
  },
];

window.DIALOGUES.hobbies = [
  {
    title: "聊興趣",
    lines: [
      {sp:"Alice", fr:"Qu'est-ce que tu aimes faire ?", zh:"你喜歡做什麼？"},
      {sp:"Raphaël", fr:"J'aime la musique et la lecture.", zh:"我喜歡音樂和閱讀。"},
      {sp:"Alice", fr:"Tu joues d'un instrument ?", zh:"你會演奏樂器嗎？"},
      {sp:"Raphaël", fr:"Oui, je joue du piano. Et toi ?", zh:"會，我彈鋼琴。你呢？"},
      {sp:"Alice", fr:"Moi, je préfère le sport et les jeux vidéo.", zh:"我比較喜歡運動和電玩。"},
      {sp:"Raphaël", fr:"On pourrait jouer ensemble !", zh:"我們可以一起玩！"},
    ]
  },
];

window.DIALOGUES.transport_a2 = [
  {
    title: "在火車站",
    lines: [
      {sp:"旅客", fr:"Bonjour, je voudrais un aller-retour pour Lyon.", zh:"你好，我要一張到里昂的來回票。"},
      {sp:"售票員", fr:"Pour quand ?", zh:"什麼時候的？"},
      {sp:"旅客", fr:"Aujourd'hui. Le prochain train part à quelle heure ?", zh:"今天。下一班火車幾點開？"},
      {sp:"售票員", fr:"À quatorze heures, quai numéro cinq.", zh:"十四點，五號月台。"},
      {sp:"旅客", fr:"Il est à l'heure ?", zh:"準點嗎？"},
      {sp:"售票員", fr:"Oui, mais n'oubliez pas de composter votre billet.", zh:"是的，但別忘了打票。"},
    ]
  },
];

window.DIALOGUES.travel_a2 = [
  {
    title: "辦理住宿",
    lines: [
      {sp:"旅客", fr:"Bonjour, j'ai une réservation au nom de Chen.", zh:"你好，我有用 Chen 的名字訂房。"},
      {sp:"櫃檯", fr:"Bienvenue ! Vous restez combien de nuits ?", zh:"歡迎！您住幾晚？"},
      {sp:"旅客", fr:"Trois nuits. Le petit-déjeuner est inclus ?", zh:"三晚。含早餐嗎？"},
      {sp:"櫃檯", fr:"Oui, de sept à dix heures.", zh:"含，七點到十點。"},
      {sp:"旅客", fr:"Parfait. Où est l'office de tourisme ?", zh:"太好了。旅遊服務中心在哪？"},
      {sp:"櫃檯", fr:"Juste en face de l'hôtel.", zh:"就在飯店對面。"},
    ]
  },
];

window.DIALOGUES.shopping_a2 = [
  {
    title: "退換商品",
    lines: [
      {sp:"顧客", fr:"Bonjour, je voudrais échanger ce pull.", zh:"你好，我想換這件毛衣。"},
      {sp:"店員", fr:"Quel est le problème ?", zh:"有什麼問題嗎？"},
      {sp:"顧客", fr:"Il est trop petit. Vous avez la taille au-dessus ?", zh:"太小了。有大一號的嗎？"},
      {sp:"店員", fr:"Oui. Vous avez le reçu ?", zh:"有。您有收據嗎？"},
      {sp:"顧客", fr:"Le voici.", zh:"在這裡。"},
      {sp:"店員", fr:"Parfait, l'échange est possible.", zh:"好的，可以換貨。"},
    ]
  },
];

window.DIALOGUES.jobs_a2 = [
  {
    title: "求職面試",
    lines: [
      {sp:"面試官", fr:"Bonjour, parlez-moi de votre expérience.", zh:"你好，談談您的經驗。"},
      {sp:"應徵者", fr:"J'ai travaillé trois ans dans une entreprise de marketing.", zh:"我在一家行銷公司工作過三年。"},
      {sp:"面試官", fr:"Pourquoi voulez-vous ce poste ?", zh:"您為什麼想要這個職位？"},
      {sp:"應徵者", fr:"J'aime les défis et je suis très motivée.", zh:"我喜歡挑戰，而且我很有幹勁。"},
      {sp:"面試官", fr:"Quand pouvez-vous commencer ?", zh:"您什麼時候能開始？"},
      {sp:"應徵者", fr:"Dès le mois prochain.", zh:"下個月就可以。"},
    ]
  },
];

window.DIALOGUES.money_a2 = [
  {
    title: "在銀行開戶",
    lines: [
      {sp:"顧客", fr:"Bonjour, je voudrais ouvrir un compte.", zh:"你好，我想開戶。"},
      {sp:"行員", fr:"Bien sûr. Vous avez une pièce d'identité ?", zh:"當然。您有身分證件嗎？"},
      {sp:"顧客", fr:"Oui, voici mon passeport.", zh:"有，這是我的護照。"},
      {sp:"行員", fr:"Vous voulez aussi une carte bancaire ?", zh:"您也要一張銀行卡嗎？"},
      {sp:"顧客", fr:"Oui, et je voudrais faire un virement.", zh:"要，我還想轉一筆帳。"},
      {sp:"行員", fr:"D'accord, je m'en occupe.", zh:"好的，我來幫您處理。"},
    ]
  },
];

window.DIALOGUES.body_a2 = [
  {
    title: "在藥局",
    lines: [
      {sp:"顧客", fr:"Bonjour, j'ai mal à la gorge et je tousse.", zh:"你好，我喉嚨痛還咳嗽。"},
      {sp:"藥師", fr:"Vous avez de la fièvre ?", zh:"您有發燒嗎？"},
      {sp:"顧客", fr:"Un peu. Vous avez un médicament ?", zh:"有一點。您有藥嗎？"},
      {sp:"藥師", fr:"Oui, ce sirop est efficace contre la toux.", zh:"有，這個糖漿對咳嗽很有效。"},
      {sp:"顧客", fr:"Il me faut une ordonnance ?", zh:"需要處方箋嗎？"},
      {sp:"藥師", fr:"Non, c'est en vente libre. Soignez-vous bien !", zh:"不用，這是成藥。好好養病！"},
    ]
  },
];

window.DIALOGUES.school_a2 = [
  {
    title: "大學註冊",
    lines: [
      {sp:"學生", fr:"Bonjour, je voudrais m'inscrire en licence de droit.", zh:"你好，我想註冊法律學士。"},
      {sp:"職員", fr:"Avez-vous déjà votre diplôme du lycée ?", zh:"您有高中文憑了嗎？"},
      {sp:"學生", fr:"Oui. Quand commence le semestre ?", zh:"有。學期什麼時候開始？"},
      {sp:"職員", fr:"En septembre. Voici votre emploi du temps.", zh:"九月。這是您的課表。"},
      {sp:"學生", fr:"Est-ce qu'il y a des bourses ?", zh:"有獎學金嗎？"},
      {sp:"職員", fr:"Oui, vous pouvez faire une demande en ligne.", zh:"有，您可以線上申請。"},
    ]
  },
];

window.DIALOGUES.home_a2 = [
  {
    title: "看房子",
    lines: [
      {sp:"房客", fr:"Bonjour, l'appartement est toujours à louer ?", zh:"你好，這間公寓還在出租嗎？"},
      {sp:"房東", fr:"Oui, il est libre le mois prochain.", zh:"是的，下個月空出來。"},
      {sp:"房客", fr:"Quel est le loyer ?", zh:"房租多少？"},
      {sp:"房東", fr:"Six cents euros, charges comprises.", zh:"六百歐元，含水電。"},
      {sp:"房客", fr:"Il est meublé ?", zh:"有附傢俱嗎？"},
      {sp:"房東", fr:"Oui, et il y a un balcon.", zh:"有，還有一個陽台。"},
    ]
  },
];

window.DIALOGUES.emotions_a2 = [
  {
    title: "安慰朋友",
    lines: [
      {sp:"Lou", fr:"Ça n'a pas l'air d'aller. Qu'est-ce qu'il y a ?", zh:"你看起來不太對。怎麼了？"},
      {sp:"Sara", fr:"Je suis stressée à cause de mes examens.", zh:"我因為考試壓力很大。"},
      {sp:"Lou", fr:"Ne t'inquiète pas, tu as bien travaillé.", zh:"別擔心，你很努力了。"},
      {sp:"Sara", fr:"J'ai peur d'échouer.", zh:"我怕考不好。"},
      {sp:"Lou", fr:"Calme-toi, tout va bien se passer.", zh:"冷靜點，一切都會順利的。"},
      {sp:"Sara", fr:"Merci, ça me fait du bien.", zh:"謝謝，我覺得好多了。"},
    ]
  },
];

window.DIALOGUES.relationships_a2 = [
  {
    title: "約朋友見面",
    lines: [
      {sp:"Max", fr:"Ça fait longtemps ! On se voit ce week-end ?", zh:"好久不見！我們週末見個面？"},
      {sp:"Lina", fr:"Avec plaisir ! Tu es libre samedi ?", zh:"好啊！你星期六有空嗎？"},
      {sp:"Max", fr:"Oui. On invite aussi Marie ?", zh:"有。我們也約瑪麗嗎？"},
      {sp:"Lina", fr:"Bonne idée, elle sera contente.", zh:"好主意，她會很開心。"},
      {sp:"Max", fr:"On se retrouve au café à trois heures ?", zh:"我們三點在咖啡館碰面？"},
      {sp:"Lina", fr:"Parfait, à samedi !", zh:"太好了，星期六見！"},
    ]
  },
];

window.DIALOGUES.clothes_a2 = [
  {
    title: "在服飾店試穿",
    lines: [
      {sp:"顧客", fr:"Je peux essayer cette veste en cuir ?", zh:"我可以試穿這件皮外套嗎？"},
      {sp:"店員", fr:"Bien sûr. Quelle taille ?", zh:"當然。什麼尺寸？"},
      {sp:"顧客", fr:"Du quarante. Elle existe en noir ?", zh:"四十號。有黑色的嗎？"},
      {sp:"店員", fr:"Oui. La cabine d'essayage est là-bas.", zh:"有。試衣間在那邊。"},
      {sp:"顧客", fr:"Elle me va bien ?", zh:"我穿起來好看嗎？"},
      {sp:"店員", fr:"Très bien, elle est assortie à votre pantalon.", zh:"很好看，跟您的褲子很搭。"},
    ]
  },
];

window.DIALOGUES.tech_a2 = [
  {
    title: "電腦出問題",
    lines: [
      {sp:"Théo", fr:"Mon ordinateur ne s'allume plus.", zh:"我的電腦開不了機了。"},
      {sp:"Nina", fr:"Tu as vérifié le chargeur ?", zh:"你檢查過充電器了嗎？"},
      {sp:"Théo", fr:"Oui, mais la batterie est peut-être morte.", zh:"檢查了，但電池可能掛了。"},
      {sp:"Nina", fr:"Tu as sauvegardé tes fichiers ?", zh:"你檔案有備份嗎？"},
      {sp:"Théo", fr:"Heureusement, tout est en ligne.", zh:"還好，全都在雲端。"},
      {sp:"Nina", fr:"Alors télécharge-les sur mon portable.", zh:"那就下載到我筆電上吧。"},
    ]
  },
];

window.DIALOGUES.city_a2 = [
  {
    title: "聊環保",
    lines: [
      {sp:"Adam", fr:"Tu tries tes déchets à la maison ?", zh:"你在家會做垃圾分類嗎？"},
      {sp:"Zoé", fr:"Oui, je recycle le papier et le plastique.", zh:"會，我回收紙和塑膠。"},
      {sp:"Adam", fr:"C'est important pour l'environnement.", zh:"這對環境很重要。"},
      {sp:"Zoé", fr:"Et je prends les transports en commun.", zh:"而且我搭大眾運輸。"},
      {sp:"Adam", fr:"Moi, j'essaie de moins gaspiller l'eau.", zh:"我則是盡量少浪費水。"},
      {sp:"Zoé", fr:"Chaque petit geste compte.", zh:"每個小動作都有用。"},
    ]
  },
];

window.DIALOGUES.nature_a2 = [
  {
    title: "颱風來了",
    lines: [
      {sp:"Yuki", fr:"Tu as vu les prévisions ? Un typhon arrive.", zh:"你看天氣預報了嗎？颱風要來了。"},
      {sp:"Léo", fr:"Oui, il va y avoir des inondations.", zh:"看了，會有水災。"},
      {sp:"Yuki", fr:"Il faut rester à la maison demain.", zh:"明天得待在家。"},
      {sp:"Léo", fr:"Le vent souffle déjà très fort.", zh:"風已經吹得很強了。"},
      {sp:"Yuki", fr:"Fais des réserves d'eau et de nourriture.", zh:"多存點水和食物。"},
      {sp:"Léo", fr:"D'accord, on se prépare.", zh:"好，我們做準備。"},
    ]
  },
];

window.DIALOGUES.leisure_a2 = [
  {
    title: "安排週末",
    lines: [
      {sp:"Emma", fr:"On fait quoi ce week-end ?", zh:"我們週末做什麼？"},
      {sp:"Hugo", fr:"On pourrait faire de l'escalade.", zh:"我們可以去攀岩。"},
      {sp:"Emma", fr:"Je préfère quelque chose de plus calme.", zh:"我比較想做安靜一點的。"},
      {sp:"Hugo", fr:"Une exposition de peinture, alors ?", zh:"那看個畫展？"},
      {sp:"Emma", fr:"Bonne idée ! Il y en a une au musée.", zh:"好主意！博物館有一個。"},
      {sp:"Hugo", fr:"Parfait, c'est passionnant.", zh:"太好了，很有趣。"},
    ]
  },
];

window.DIALOGUES.daily_a2 = [
  {
    title: "聊早晨作息",
    lines: [
      {sp:"Clara", fr:"Tu te lèves à quelle heure le matin ?", zh:"你早上幾點起床？"},
      {sp:"Sam", fr:"Je me réveille à sept heures.", zh:"我七點醒。"},
      {sp:"Clara", fr:"Tu prends ton temps ?", zh:"你會慢慢來嗎？"},
      {sp:"Sam", fr:"Non, je me dépêche toujours.", zh:"不，我總是趕時間。"},
      {sp:"Clara", fr:"Tu prends un petit-déjeuner ?", zh:"你會吃早餐嗎？"},
      {sp:"Sam", fr:"Juste un café, d'habitude.", zh:"通常只喝杯咖啡。"},
    ]
  },
];

window.DIALOGUES.festivals_a2 = [
  {
    title: "籌備生日派對",
    lines: [
      {sp:"Inès", fr:"On organise une fête pour son anniversaire ?", zh:"我們幫他辦個生日派對？"},
      {sp:"Tom", fr:"Oui ! On invite combien de personnes ?", zh:"好！要邀幾個人？"},
      {sp:"Inès", fr:"Une vingtaine. Tu t'occupes des décorations ?", zh:"大約二十個。你負責裝飾嗎？"},
      {sp:"Tom", fr:"D'accord, et toi le gâteau et les bougies.", zh:"好，你負責蛋糕和蠟燭。"},
      {sp:"Inès", fr:"On fait la fête chez moi ?", zh:"在我家慶祝嗎？"},
      {sp:"Tom", fr:"Parfait, ça va être convivial !", zh:"太好了，一定很熱鬧！"},
    ]
  },
];

window.DIALOGUES.appearance_a2 = [
  {
    title: "描述外貌",
    lines: [
      {sp:"Léa", fr:"Comment je vais te reconnaître ?", zh:"我怎麼認出你？"},
      {sp:"Marc", fr:"Je suis grand, avec les cheveux longs et bruns.", zh:"我個子高，留著棕色長髮。"},
      {sp:"Léa", fr:"Tu portes des lunettes ?", zh:"你戴眼鏡嗎？"},
      {sp:"Marc", fr:"Oui, et j'ai une veste rouge.", zh:"戴，而且我穿紅色外套。"},
      {sp:"Léa", fr:"D'accord. Moi, je suis blonde et assez mince.", zh:"好。我是金髮，蠻瘦的。"},
      {sp:"Marc", fr:"Parfait, à tout à l'heure !", zh:"好，待會見！"},
    ]
  },
];

window.DIALOGUES.sports_a2 = [
  {
    title: "比賽之後",
    lines: [
      {sp:"Paul", fr:"Alors, vous avez gagné le match ?", zh:"怎麼樣，你們贏了嗎？"},
      {sp:"Lina", fr:"Oui ! On a battu l'autre équipe trois à un.", zh:"贏了！我們三比一擊敗對手。"},
      {sp:"Paul", fr:"Bravo ! Tu as marqué un but ?", zh:"太棒了！你有進球嗎？"},
      {sp:"Lina", fr:"Oui, mais je suis épuisée.", zh:"有，但我累垮了。"},
      {sp:"Paul", fr:"Repose-toi bien après l'effort.", zh:"運動後好好休息。"},
      {sp:"Lina", fr:"Je vais m'étirer d'abord.", zh:"我先做伸展。"},
    ]
  },
];

window.DIALOGUES.movements_a2 = [
  {
    title: "瑜伽課",
    lines: [
      {sp:"教練", fr:"Asseyez-vous et respirez doucement.", zh:"坐下，慢慢呼吸。"},
      {sp:"學員", fr:"Comme ça ?", zh:"像這樣嗎？"},
      {sp:"教練", fr:"Oui. Maintenant, penchez-vous en avant.", zh:"對。現在身體往前傾。"},
      {sp:"學員", fr:"Je n'arrive pas à toucher mes pieds.", zh:"我碰不到腳。"},
      {sp:"教練", fr:"Pliez un peu les genoux, ne forcez pas.", zh:"膝蓋微彎，別勉強。"},
      {sp:"學員", fr:"Ah, c'est mieux comme ça !", zh:"啊，這樣好多了！"},
    ]
  },
];

window.DIALOGUES.objects_a2 = [
  {
    title: "尋找遺失物",
    lines: [
      {sp:"旅客", fr:"J'ai perdu mon sac dans le train.", zh:"我把包包掉在火車上了。"},
      {sp:"站務員", fr:"Il est comment ?", zh:"它長什麼樣子？"},
      {sp:"旅客", fr:"En cuir marron, assez grand.", zh:"棕色皮的，蠻大的。"},
      {sp:"站務員", fr:"Qu'est-ce qu'il y a dedans ?", zh:"裡面有什麼？"},
      {sp:"旅客", fr:"Mon portefeuille et mes clés.", zh:"我的錢包和鑰匙。"},
      {sp:"站務員", fr:"Allez voir au bureau des objets trouvés.", zh:"去失物招領處看看吧。"},
    ]
  },
];

/* ============ B1 主題會話（20）============ */
window.DIALOGUES.opinions_b1 = [
  {
    title: "討論一部電影",
    lines: [
      {sp:"友A", fr:"À mon avis, ce film est vraiment surprenant.", zh:"我覺得這部電影真的很出人意料。"},
      {sp:"友B", fr:"Ah bon ? Personnellement, je l'ai trouvé un peu long.", zh:"是嗎？我個人覺得有點冗長。"},
      {sp:"友A", fr:"C'est vrai, mais l'histoire est originale, non ?", zh:"確實，不過故事很原創，不是嗎？"},
      {sp:"友B", fr:"Sur ce point, je suis d'accord. Les acteurs sont excellents.", zh:"這點我同意，演員都很出色。"},
      {sp:"友A", fr:"Exactement. Franchement, je te le recommande.", zh:"沒錯。老實說，我很推薦你看。"},
    ]
  },
];

window.DIALOGUES.abstract_b1 = [
  {
    title: "聊夢想與自由",
    lines: [
      {sp:"友A", fr:"Qu'est-ce que la liberté représente pour toi ?", zh:"自由對你來說代表什麼？"},
      {sp:"友B", fr:"Pour moi, c'est la possibilité de choisir ma propre vie.", zh:"對我而言，是能夠選擇自己人生的可能。"},
      {sp:"友A", fr:"Je comprends. Mais la liberté a aussi ses limites.", zh:"我懂。但自由也有它的界限。"},
      {sp:"友B", fr:"Bien sûr. Ma liberté s'arrête où commence celle des autres.", zh:"當然。我的自由止於他人的自由開始之處。"},
      {sp:"友A", fr:"C'est une belle façon de voir les choses.", zh:"這是個很美的看法。"},
    ]
  },
];

window.DIALOGUES.society_b1 = [
  {
    title: "談世代差異",
    lines: [
      {sp:"年輕人", fr:"Je trouve que les générations ne se comprennent plus.", zh:"我覺得不同世代之間越來越不理解彼此了。"},
      {sp:"長輩", fr:"C'est normal, la société évolue très vite.", zh:"這很正常，社會變化得很快。"},
      {sp:"年輕人", fr:"Oui, surtout à cause de la technologie.", zh:"是啊，尤其是因為科技。"},
      {sp:"長輩", fr:"Pourtant, certaines valeurs restent les mêmes.", zh:"不過，有些價值觀始終沒變。"},
      {sp:"年輕人", fr:"Vous avez raison. Le respect, par exemple.", zh:"您說得對，比如尊重。"},
    ]
  },
];

window.DIALOGUES.work_b1 = [
  {
    title: "和同事討論專案",
    lines: [
      {sp:"同事A", fr:"On doit rendre ce projet avant vendredi.", zh:"我們得在週五前交出這個專案。"},
      {sp:"同事B", fr:"Je sais, mais on manque encore de temps.", zh:"我知道，但我們時間還是不夠。"},
      {sp:"同事A", fr:"On pourrait se répartir les tâches ?", zh:"我們可以分配一下工作嗎？"},
      {sp:"同事B", fr:"Bonne idée. Je m'occupe de la présentation.", zh:"好主意。我負責簡報。"},
      {sp:"同事A", fr:"Parfait. Moi, je rédige le rapport.", zh:"太好了。我來寫報告。"},
    ]
  },
];

window.DIALOGUES.health_b1 = [
  {
    title: "看醫生描述症狀",
    lines: [
      {sp:"醫生", fr:"Bonjour, qu'est-ce qui ne va pas ?", zh:"您好，哪裡不舒服呢？"},
      {sp:"病人", fr:"J'ai mal à la tête depuis trois jours.", zh:"我頭痛已經三天了。"},
      {sp:"醫生", fr:"Avez-vous de la fièvre ?", zh:"您有發燒嗎？"},
      {sp:"病人", fr:"Un peu, et je me sens très fatigué.", zh:"有一點，而且我覺得很疲倦。"},
      {sp:"醫生", fr:"Je vous prescris un traitement. Reposez-vous bien.", zh:"我開個處方給您。好好休息。"},
    ]
  },
];

window.DIALOGUES.education_b1 = [
  {
    title: "和教授討論選課",
    lines: [
      {sp:"學生", fr:"Je voudrais m'inscrire à votre cours de linguistique.", zh:"我想選您的語言學課程。"},
      {sp:"教授", fr:"Avez-vous déjà suivi des cours dans ce domaine ?", zh:"您之前修過這個領域的課嗎？"},
      {sp:"學生", fr:"Oui, j'ai étudié la phonétique l'an dernier.", zh:"有，我去年修過語音學。"},
      {sp:"教授", fr:"Parfait. Le cours demande beaucoup de lectures.", zh:"很好。這門課需要大量閱讀。"},
      {sp:"學生", fr:"Pas de problème, le sujet me passionne.", zh:"沒問題，這個主題讓我很有熱情。"},
    ]
  },
];

window.DIALOGUES.media_b1 = [
  {
    title: "討論新聞可信度",
    lines: [
      {sp:"友A", fr:"Tu as vu cette information sur les réseaux ?", zh:"你看到社群上那則消息了嗎？"},
      {sp:"友B", fr:"Oui, mais je me méfie un peu de la source.", zh:"看到了，但我對來源有點存疑。"},
      {sp:"友A", fr:"Tu as raison, il faut toujours vérifier.", zh:"你說得對，永遠都要查證。"},
      {sp:"友B", fr:"Beaucoup de fausses nouvelles circulent en ce moment.", zh:"現在流傳著很多假新聞。"},
      {sp:"友A", fr:"Mieux vaut consulter plusieurs journaux sérieux.", zh:"最好還是參考幾家可靠的報紙。"},
    ]
  },
];

window.DIALOGUES.relations_b1 = [
  {
    title: "化解一場誤會",
    lines: [
      {sp:"友A", fr:"Je crois qu'il y a eu un malentendu entre nous.", zh:"我想我們之間有點誤會。"},
      {sp:"友B", fr:"Oui, je me suis senti blessé l'autre jour.", zh:"是啊，那天我覺得有點受傷。"},
      {sp:"友A", fr:"Je suis désolé, ce n'était pas mon intention.", zh:"我很抱歉，那不是我的本意。"},
      {sp:"友B", fr:"Merci de me le dire. Ça me touche.", zh:"謝謝你這麼說，我很感動。"},
      {sp:"友A", fr:"L'important, c'est de se parler franchement.", zh:"重要的是坦誠地溝通。"},
    ]
  },
];

window.DIALOGUES.internet_b1 = [
  {
    title: "聊社群媒體的影響",
    lines: [
      {sp:"友A", fr:"Tu passes combien de temps sur ton téléphone par jour ?", zh:"你每天花多少時間在手機上？"},
      {sp:"友B", fr:"Trop, sûrement plus de trois heures.", zh:"太多了，大概超過三小時。"},
      {sp:"友A", fr:"Les réseaux sociaux nous rendent un peu dépendants.", zh:"社群媒體讓我們有點上癮。"},
      {sp:"友B", fr:"C'est vrai. J'essaie de me déconnecter le week-end.", zh:"確實。我試著週末時不上線。"},
      {sp:"友A", fr:"Bonne résolution, je devrais faire pareil.", zh:"好決心，我也該這麼做。"},
    ]
  },
];

window.DIALOGUES.environment_b1 = [
  {
    title: "聊資源回收",
    lines: [
      {sp:"室友A", fr:"Tu sais où on jette le verre ?", zh:"你知道玻璃要丟哪裡嗎？"},
      {sp:"室友B", fr:"Dans le bac vert, en bas de l'immeuble.", zh:"丟樓下的綠色回收桶。"},
      {sp:"室友A", fr:"Et le plastique, on le trie aussi ?", zh:"那塑膠也要分類嗎？"},
      {sp:"室友B", fr:"Oui, chaque déchet a son conteneur.", zh:"對，每種垃圾都有自己的桶子。"},
      {sp:"室友A", fr:"D'accord, je ferai plus attention désormais.", zh:"好，以後我會更注意。"},
    ]
  },
];

window.DIALOGUES.law_b1 = [
  {
    title: "詢問租屋合約",
    lines: [
      {sp:"租客", fr:"Le contrat est pour combien de temps ?", zh:"合約是租多久呢？"},
      {sp:"房東", fr:"Un an, renouvelable automatiquement.", zh:"一年，可自動續約。"},
      {sp:"租客", fr:"Et la caution, c'est combien ?", zh:"那押金是多少？"},
      {sp:"房東", fr:"Un mois de loyer, rendu à votre départ.", zh:"一個月房租，退租時歸還。"},
      {sp:"租客", fr:"Très bien. Je vais lire le contrat attentivement.", zh:"好的，我會仔細閱讀合約。"},
    ]
  },
];

window.DIALOGUES.economy_b1 = [
  {
    title: "聊物價上漲",
    lines: [
      {sp:"友A", fr:"As-tu remarqué que tout devient plus cher ?", zh:"你有發現什麼都變貴了嗎？"},
      {sp:"友B", fr:"Oui, surtout les courses et le loyer.", zh:"有，尤其是買菜和房租。"},
      {sp:"友A", fr:"Mon salaire, lui, n'augmente pas.", zh:"而我的薪水卻沒漲。"},
      {sp:"友B", fr:"Il faut faire des économies, c'est sûr.", zh:"看來真的得省一點了。"},
      {sp:"友A", fr:"Je compare les prix avant chaque achat maintenant.", zh:"我現在每次買東西前都會比價。"},
    ]
  },
];

window.DIALOGUES.art_b1 = [
  {
    title: "參觀展覽",
    lines: [
      {sp:"友A", fr:"Cette peinture me touche beaucoup.", zh:"這幅畫很打動我。"},
      {sp:"友B", fr:"Les couleurs sont vraiment expressives.", zh:"色彩真的很有表現力。"},
      {sp:"友A", fr:"On dirait que l'artiste exprime sa tristesse.", zh:"感覺藝術家在表達他的哀傷。"},
      {sp:"友B", fr:"Chacun peut l'interpréter à sa façon.", zh:"每個人都能用自己的方式去解讀。"},
      {sp:"友A", fr:"C'est ça qui est beau dans l'art.", zh:"這正是藝術的美妙之處。"},
    ]
  },
];

window.DIALOGUES.travel_b1 = [
  {
    title: "規劃一趟旅程",
    lines: [
      {sp:"友A", fr:"On part où cet été, finalement ?", zh:"我們今年夏天到底要去哪？"},
      {sp:"友B", fr:"Et si on visitait le sud de la France ?", zh:"不如去法國南部？"},
      {sp:"友A", fr:"Bonne idée ! On pourrait louer une voiture.", zh:"好主意！我們可以租台車。"},
      {sp:"友B", fr:"Il faut réserver l'hôtel à l'avance.", zh:"飯店得提前訂。"},
      {sp:"友A", fr:"Je m'en occupe ce soir.", zh:"我今晚來處理。"},
    ]
  },
];

window.DIALOGUES.character_b1 = [
  {
    title: "描述一個朋友的個性",
    lines: [
      {sp:"友A", fr:"Comment est ton nouveau colocataire ?", zh:"你新室友人怎麼樣？"},
      {sp:"友B", fr:"Il est très calme et plutôt timide.", zh:"他很冷靜，而且有點害羞。"},
      {sp:"友A", fr:"Ah, il est facile à vivre alors ?", zh:"啊，那他很好相處囉？"},
      {sp:"友B", fr:"Oui, mais parfois un peu trop silencieux.", zh:"對，不過有時太安靜了點。"},
      {sp:"友A", fr:"L'important, c'est qu'il soit honnête.", zh:"重要的是他為人誠實。"},
    ]
  },
];

window.DIALOGUES.connectors_b1 = [
  {
    title: "討論搬家的利弊",
    lines: [
      {sp:"友A", fr:"Je pense déménager, parce que mon loyer est trop élevé.", zh:"我在想搬家，因為我的房租太高了。"},
      {sp:"友B", fr:"D'un côté, tu économiserais ; mais d'un autre, c'est loin du travail.", zh:"一方面你能省錢；但另一方面，那裡離公司很遠。"},
      {sp:"友A", fr:"C'est vrai. Cependant, le quartier est plus calme.", zh:"確實。不過，那一區比較安靜。"},
      {sp:"友B", fr:"Donc tout dépend de ce qui compte le plus pour toi.", zh:"所以一切取決於對你而言什麼最重要。"},
      {sp:"友A", fr:"Effectivement, je vais y réfléchir.", zh:"沒錯，我會好好想想。"},
    ]
  },
];

window.DIALOGUES.time_b1 = [
  {
    title: "安排會面時間",
    lines: [
      {sp:"友A", fr:"On se voit quand pour le projet ?", zh:"我們什麼時候碰面討論專案？"},
      {sp:"友B", fr:"Mardi prochain, ça te convient ?", zh:"下週二，你方便嗎？"},
      {sp:"友A", fr:"Plutôt en fin d'après-midi, vers dix-sept heures.", zh:"傍晚比較好，大概五點。"},
      {sp:"友B", fr:"Parfait. Disons dix-sept heures au café.", zh:"太好了。那就五點在咖啡廳。"},
      {sp:"友A", fr:"D'accord, je le note tout de suite.", zh:"好，我馬上記下來。"},
    ]
  },
];

window.DIALOGUES.urban_b1 = [
  {
    title: "聊住在大城市",
    lines: [
      {sp:"友A", fr:"Tu te plais à vivre en ville ?", zh:"你喜歡住在城市裡嗎？"},
      {sp:"友B", fr:"Oui, tout est pratique, mais c'est bruyant.", zh:"喜歡，什麼都很方便，但很吵。"},
      {sp:"友A", fr:"Et les transports, ça va ?", zh:"那交通呢，還好嗎？"},
      {sp:"友B", fr:"Le métro est rapide, mais souvent bondé.", zh:"地鐵很快，但常常很擠。"},
      {sp:"友A", fr:"Moi, je préférerais un peu plus de nature.", zh:"我的話，會比較想要多一點自然。"},
    ]
  },
];

window.DIALOGUES.gastronomy_b1 = [
  {
    title: "推薦一道菜",
    lines: [
      {sp:"友A", fr:"Qu'est-ce que tu me conseilles ici ?", zh:"你推薦我點這裡的什麼？"},
      {sp:"友B", fr:"Le bœuf bourguignon est délicieux.", zh:"紅酒燉牛肉很好吃。"},
      {sp:"友A", fr:"C'est un plat épicé ?", zh:"那是道辣的菜嗎？"},
      {sp:"友B", fr:"Non, c'est mijoté longtemps, très savoureux.", zh:"不會，它是慢燉的，非常入味。"},
      {sp:"友A", fr:"Parfait, je vais essayer ça.", zh:"太好了，我就試試這道。"},
    ]
  },
];

window.DIALOGUES.consumption_b1 = [
  {
    title: "退換貨",
    lines: [
      {sp:"顧客", fr:"Bonjour, je voudrais échanger ce pull.", zh:"您好，我想換這件毛衣。"},
      {sp:"店員", fr:"Bien sûr. Quel est le problème ?", zh:"當然。請問是什麼問題呢？"},
      {sp:"顧客", fr:"La taille ne me va pas, c'est trop petit.", zh:"尺寸不合，太小了。"},
      {sp:"店員", fr:"Avez-vous gardé le ticket de caisse ?", zh:"您有保留收據嗎？"},
      {sp:"顧客", fr:"Oui, le voici. Merci beaucoup.", zh:"有，在這裡。非常感謝。"},
    ]
  },
];

/* ============ B2 主題會話（前 20）============ */
window.DIALOGUES.psychology_b2 = [
  {
    title: "安慰焦慮的朋友",
    lines: [
      {sp:"友A", fr:"Je me sens dépassé en ce moment, j'angoisse pour tout.", zh:"我最近覺得快撐不住了，什麼都讓我焦慮。"},
      {sp:"友B", fr:"Je comprends. Tu traverses une période éprouvante.", zh:"我懂。你正經歷一段難熬的時期。"},
      {sp:"友A", fr:"J'ai l'impression de ne plus rien maîtriser.", zh:"我覺得自己什麼都掌控不了了。"},
      {sp:"友B", fr:"Sois indulgent avec toi-même. Une chose à la fois.", zh:"對自己寬容一點。一次面對一件事就好。"},
      {sp:"友A", fr:"Merci, ça me fait du bien d'en parler.", zh:"謝謝，說出來讓我好過多了。"},
    ]
  },
];

window.DIALOGUES.formal_b2 = [
  {
    title: "會議上的正式發言",
    lines: [
      {sp:"主持人", fr:"Je vous remercie d'avoir pris le temps de venir.", zh:"感謝各位撥冗出席。"},
      {sp:"與會者", fr:"C'est un plaisir. Permettez-moi de présenter notre proposition.", zh:"這是我的榮幸。容我介紹我們的提案。"},
      {sp:"主持人", fr:"Je vous en prie, nous vous écoutons.", zh:"請說，我們洗耳恭聽。"},
      {sp:"與會者", fr:"En somme, ce projet vise à améliorer notre efficacité.", zh:"總而言之，這個專案旨在提升我們的效率。"},
      {sp:"主持人", fr:"Vos arguments me paraissent tout à fait pertinents.", zh:"您的論點在我看來相當中肯。"},
    ]
  },
];

window.DIALOGUES.idioms_b2 = [
  {
    title: "對話中的慣用語",
    lines: [
      {sp:"友A", fr:"Cet examen, j'ai vraiment réussi les doigts dans le nez.", zh:"這場考試，我真的輕輕鬆鬆就過了。"},
      {sp:"友B", fr:"Tu as de la chance ! Moi, j'ai galéré.", zh:"你真幸運！我則是費盡了力氣。"},
      {sp:"友A", fr:"Allez, ne fais pas la tête. C'est du passé.", zh:"好啦，別擺臭臉了。都過去了。"},
      {sp:"友B", fr:"Tu as raison, il ne faut pas en faire tout un plat.", zh:"你說得對，不必小題大作。"},
      {sp:"友A", fr:"Voilà ! On va fêter ça, c'est moi qui régale.", zh:"這就對了！我們去慶祝一下，我請客。"},
    ]
  },
];

window.DIALOGUES.science_b2 = [
  {
    title: "討論一項研究發現",
    lines: [
      {sp:"研究員A", fr:"Notre hypothèse semble enfin confirmée par les résultats.", zh:"我們的假設似乎終於被結果證實了。"},
      {sp:"研究員B", fr:"Oui, mais l'échantillon reste assez limité.", zh:"是的，但樣本仍相當有限。"},
      {sp:"研究員A", fr:"Il faudra reproduire l'expérience pour conclure.", zh:"得重複實驗才能下定論。"},
      {sp:"研究員B", fr:"Exactement. La rigueur avant tout.", zh:"正是。嚴謹至上。"},
      {sp:"研究員A", fr:"Publions d'abord ces données préliminaires.", zh:"我們先發表這些初步數據吧。"},
    ]
  },
];

window.DIALOGUES.philosophy_b2 = [
  {
    title: "辯論自由意志",
    lines: [
      {sp:"友A", fr:"Crois-tu que nous soyons vraiment libres de nos choix ?", zh:"你相信我們的選擇真的是自由的嗎？"},
      {sp:"友B", fr:"En partie. Nos décisions sont influencées par notre passé.", zh:"部分是。我們的決定受到過去的影響。"},
      {sp:"友A", fr:"Donc le libre arbitre ne serait qu'une illusion ?", zh:"那自由意志難道只是個幻覺？"},
      {sp:"友B", fr:"Pas forcément. On garde une marge de réflexion.", zh:"不一定。我們仍保有思考的餘地。"},
      {sp:"友A", fr:"Voilà une question qui n'aura jamais de réponse définitive.", zh:"這正是個永遠沒有定論的問題。"},
    ]
  },
];

window.DIALOGUES.politics_b2 = [
  {
    title: "討論選舉",
    lines: [
      {sp:"友A", fr:"As-tu suivi le débat des candidats hier soir ?", zh:"你有看昨晚候選人的辯論嗎？"},
      {sp:"友B", fr:"Oui, mais aucun ne m'a vraiment convaincu.", zh:"看了，但沒有一個真正說服我。"},
      {sp:"友A", fr:"Leurs promesses me paraissent peu réalistes.", zh:"他們的承諾在我看來不太實際。"},
      {sp:"友B", fr:"Il faut voter quand même, c'est un devoir citoyen.", zh:"還是得投票，這是公民的責任。"},
      {sp:"友A", fr:"Tu as raison, l'abstention ne change rien.", zh:"你說得對，棄權什麼都改變不了。"},
    ]
  },
];

window.DIALOGUES.business_b2 = [
  {
    title: "商業提案會議",
    lines: [
      {sp:"提案人", fr:"Notre stratégie repose sur trois axes principaux.", zh:"我們的策略建立在三大主軸上。"},
      {sp:"主管", fr:"Quel serait le retour sur investissement attendu ?", zh:"預期的投資報酬會是多少？"},
      {sp:"提案人", fr:"Une rentabilité dès la deuxième année.", zh:"從第二年起就能獲利。"},
      {sp:"主管", fr:"Intéressant. Et les risques éventuels ?", zh:"很有意思。那潛在風險呢？"},
      {sp:"提案人", fr:"Limités, à condition de bien gérer le budget.", zh:"有限，前提是妥善管理預算。"},
    ]
  },
];

window.DIALOGUES.rhetoric_b2 = [
  {
    title: "討論一首詩",
    lines: [
      {sp:"友A", fr:"Cette métaphore de la mer m'a beaucoup frappé.", zh:"這個以海為喻的修辭讓我印象深刻。"},
      {sp:"友B", fr:"Oui, elle évoque à la fois la liberté et l'angoisse.", zh:"是啊，它同時喚起自由與不安。"},
      {sp:"友A", fr:"Le poète joue habilement sur les sonorités.", zh:"詩人巧妙地玩弄著聲韻。"},
      {sp:"友B", fr:"C'est ce qui rend le texte si musical.", zh:"這正是讓這首詩如此富有音樂性的原因。"},
      {sp:"友A", fr:"Chaque relecture y révèle un sens nouveau.", zh:"每次重讀都能發現新的意涵。"},
    ]
  },
];

window.DIALOGUES.history_b2 = [
  {
    title: "聊一段歷史",
    lines: [
      {sp:"友A", fr:"Cette révolution a profondément marqué le pays.", zh:"這場革命深深影響了這個國家。"},
      {sp:"友B", fr:"Oui, elle a bouleversé l'ordre social de l'époque.", zh:"是的，它顛覆了當時的社會秩序。"},
      {sp:"友A", fr:"On en ressent encore les conséquences aujourd'hui.", zh:"我們至今仍能感受到它的影響。"},
      {sp:"友B", fr:"L'histoire éclaire souvent le présent.", zh:"歷史往往照亮當下。"},
      {sp:"友A", fr:"C'est pour ça qu'il faut l'étudier sérieusement.", zh:"正因如此才要認真研究它。"},
    ]
  },
];

window.DIALOGUES.geography_b2 = [
  {
    title: "描述一個地區的地貌",
    lines: [
      {sp:"友A", fr:"Cette région est dominée par un immense plateau.", zh:"這個地區以一片廣闊的高原為主。"},
      {sp:"友B", fr:"Et le climat y est plutôt aride, non ?", zh:"那裡的氣候相當乾旱，對吧？"},
      {sp:"友A", fr:"Oui, les précipitations sont rares.", zh:"對，降水很少。"},
      {sp:"友B", fr:"Pourtant, la vallée semble très fertile.", zh:"不過，這個河谷看起來很肥沃。"},
      {sp:"友A", fr:"Grâce au fleuve qui la traverse.", zh:"多虧了流經其中的那條河。"},
    ]
  },
];

window.DIALOGUES.medicine_b2 = [
  {
    title: "和醫生討論治療方案",
    lines: [
      {sp:"病人", fr:"Docteur, ce traitement comporte-t-il des effets secondaires ?", zh:"醫生，這個療程有副作用嗎？"},
      {sp:"醫生", fr:"Quelques-uns, mais généralement bénins.", zh:"有一些，但通常輕微。"},
      {sp:"病人", fr:"Existe-t-il une alternative moins lourde ?", zh:"有沒有比較不那麼吃重的替代方案？"},
      {sp:"醫生", fr:"Oui, mais elle est un peu moins efficace.", zh:"有，不過效果稍微差一點。"},
      {sp:"病人", fr:"Je préfère suivre votre recommandation.", zh:"我還是聽從您的建議。"},
    ]
  },
];

window.DIALOGUES.tech_ethics_b2 = [
  {
    title: "辯論人工智慧的倫理",
    lines: [
      {sp:"友A", fr:"L'intelligence artificielle pose de vraies questions éthiques.", zh:"人工智慧帶來了真切的倫理問題。"},
      {sp:"友B", fr:"Surtout concernant la protection des données.", zh:"尤其是關於資料的保護。"},
      {sp:"友A", fr:"Qui sera responsable en cas d'erreur ?", zh:"出錯時誰該負責？"},
      {sp:"友B", fr:"C'est tout l'enjeu, et la loi reste floue.", zh:"這正是關鍵所在，而法律仍模糊不清。"},
      {sp:"友A", fr:"Il faut encadrer ces technologies au plus vite.", zh:"必須儘快規範這些技術。"},
    ]
  },
];

window.DIALOGUES.language_b2 = [
  {
    title: "聊學語言的方法",
    lines: [
      {sp:"友A", fr:"Comment fais-tu pour progresser si vite en français ?", zh:"你法文怎麼進步得這麼快？"},
      {sp:"友B", fr:"Je m'immerge : films, podcasts, lectures.", zh:"我讓自己沉浸其中：電影、podcast、閱讀。"},
      {sp:"友A", fr:"Et tu n'as pas peur de faire des fautes ?", zh:"你不怕犯錯嗎？"},
      {sp:"友B", fr:"Au contraire, l'erreur fait partie de l'apprentissage.", zh:"恰恰相反，錯誤是學習的一部分。"},
      {sp:"友A", fr:"C'est une belle façon de voir les choses.", zh:"這是個很好的心態。"},
    ]
  },
];

window.DIALOGUES.justice_b2 = [
  {
    title: "討論一樁案件",
    lines: [
      {sp:"友A", fr:"Tu crois que l'accusé sera condamné ?", zh:"你覺得被告會被定罪嗎？"},
      {sp:"友B", fr:"Difficile à dire, les preuves sont contestées.", zh:"很難說，證據受到質疑。"},
      {sp:"友A", fr:"Pourtant, plusieurs témoins l'accablent.", zh:"不過，好幾名證人對他不利。"},
      {sp:"友B", fr:"La présomption d'innocence reste un principe sacré.", zh:"無罪推定仍是個神聖的原則。"},
      {sp:"友A", fr:"C'est au tribunal de trancher, pas à nous.", zh:"該由法院裁決，不是我們。"},
    ]
  },
];

window.DIALOGUES.social_issues_b2 = [
  {
    title: "討論貧富差距",
    lines: [
      {sp:"友A", fr:"Les inégalités ne cessent de se creuser.", zh:"貧富差距不斷擴大。"},
      {sp:"友B", fr:"C'est vrai, l'écart entre riches et pauvres est énorme.", zh:"確實，貧富之間的差距極大。"},
      {sp:"友A", fr:"L'éducation pourrait réduire cette fracture.", zh:"教育或許能縮小這道鴻溝。"},
      {sp:"友B", fr:"À condition qu'elle soit accessible à tous.", zh:"前提是人人都能取得。"},
      {sp:"友A", fr:"C'est là tout le défi de notre société.", zh:"這正是我們社會的一大挑戰。"},
    ]
  },
];

window.DIALOGUES.sustainability_b2 = [
  {
    title: "討論氣候政策",
    lines: [
      {sp:"友A", fr:"Les mesures actuelles te semblent-elles suffisantes ?", zh:"你覺得現行的措施足夠嗎？"},
      {sp:"友B", fr:"Non, il faudrait réduire bien plus nos émissions.", zh:"不夠，我們應該大幅減少排放。"},
      {sp:"友A", fr:"Mais l'économie en pâtirait à court terme.", zh:"但經濟短期內會受影響。"},
      {sp:"友B", fr:"L'inaction coûtera bien plus cher à long terme.", zh:"長遠來看，什麼都不做的代價更高。"},
      {sp:"友A", fr:"Le développement durable est notre seule issue.", zh:"永續發展是我們唯一的出路。"},
    ]
  },
];

window.DIALOGUES.art_critique_b2 = [
  {
    title: "評論一幅畫",
    lines: [
      {sp:"評論者A", fr:"La composition de ce tableau est d'une grande maîtrise.", zh:"這幅畫的構圖極為精湛。"},
      {sp:"評論者B", fr:"Oui, le jeu d'ombre et de lumière est saisissant.", zh:"是啊，光影的運用令人驚艷。"},
      {sp:"評論者A", fr:"L'artiste transmet une émotion presque palpable.", zh:"藝術家傳達出一種幾乎可觸的情感。"},
      {sp:"評論者B", fr:"C'est une œuvre à la fois sobre et puissante.", zh:"這是件既內斂又有力量的作品。"},
      {sp:"評論者A", fr:"Elle restera, à mon sens, intemporelle.", zh:"依我看，它將是不朽的。"},
    ]
  },
];

window.DIALOGUES.journalism_b2 = [
  {
    title: "記者採訪",
    lines: [
      {sp:"記者", fr:"Pouvez-vous nous expliquer la situation actuelle ?", zh:"您能為我們說明目前的情況嗎？"},
      {sp:"受訪者", fr:"Bien sûr. La crise s'aggrave depuis plusieurs semaines.", zh:"當然。危機已惡化好幾週了。"},
      {sp:"記者", fr:"Quelles mesures sont envisagées ?", zh:"目前考慮採取哪些措施？"},
      {sp:"受訪者", fr:"Plusieurs pistes sont à l'étude, sans décision encore.", zh:"有幾個方向正在評估，尚未定案。"},
      {sp:"記者", fr:"Merci pour ces précisions.", zh:"謝謝您的說明。"},
    ]
  },
];

window.DIALOGUES.negotiation_b2 = [
  {
    title: "商務談判",
    lines: [
      {sp:"買方", fr:"Votre prix nous paraît un peu élevé.", zh:"貴方的價格我們覺得稍高。"},
      {sp:"賣方", fr:"Il reflète la qualité de notre service.", zh:"這反映了我們的服務品質。"},
      {sp:"買方", fr:"Seriez-vous ouvert à un compromis ?", zh:"貴方願意各退一步嗎？"},
      {sp:"賣方", fr:"Nous pourrions envisager une remise sur le volume.", zh:"我們可以考慮量大的折扣。"},
      {sp:"買方", fr:"Voilà une base de discussion intéressante.", zh:"這是個值得談下去的基礎。"},
    ]
  },
];

window.DIALOGUES.finance_b2 = [
  {
    title: "討論投資",
    lines: [
      {sp:"友A", fr:"Tu penses qu'il faut investir maintenant ?", zh:"你覺得現在該進場投資嗎？"},
      {sp:"友B", fr:"Le marché est volatil, je resterais prudent.", zh:"市場波動很大，我會保守一點。"},
      {sp:"友A", fr:"Mais à long terme, les actions rapportent.", zh:"但長期來看，股票是有報酬的。"},
      {sp:"友B", fr:"À condition de diversifier ton portefeuille.", zh:"前提是要分散你的投資組合。"},
      {sp:"友A", fr:"Sage conseil. Je ne mettrai pas tout au même endroit.", zh:"明智的建議。我不會把雞蛋放同一個籃子。"},
    ]
  },
];

/* ============ B2 主題會話（後 20）============ */
window.DIALOGUES.abstract_verbs_b2 = [
  {
    title: "討論一個計畫的演變",
    lines: [
      {sp:"友A", fr:"Le projet a beaucoup évolué depuis le début.", zh:"這個計畫從一開始就有了很大的轉變。"},
      {sp:"友B", fr:"Oui, il a fallu adapter notre approche.", zh:"是啊，我們不得不調整做法。"},
      {sp:"友A", fr:"Certaines idées ont fini par s'imposer d'elles-mêmes.", zh:"有些想法最後自然而然地確立了下來。"},
      {sp:"友B", fr:"On a su tirer parti de chaque difficulté.", zh:"我們懂得從每個困難中汲取養分。"},
      {sp:"友A", fr:"C'est ainsi qu'un projet mûrit vraiment.", zh:"一個計畫正是這樣真正成熟起來的。"},
    ]
  },
];

window.DIALOGUES.correspondence_b2 = [
  {
    title: "交代一封正式信",
    lines: [
      {sp:"主管", fr:"Pourriez-vous rédiger un courrier au fournisseur ?", zh:"您能寫封信給供應商嗎？"},
      {sp:"助理", fr:"Bien sûr. Sur quel ton, formel je suppose ?", zh:"當然。語氣方面，我想是正式的吧？"},
      {sp:"主管", fr:"Oui. Rappelez-lui les termes de notre accord.", zh:"對。提醒他我們協議的條款。"},
      {sp:"助理", fr:"Dois-je mentionner le délai de livraison ?", zh:"需要提到交貨期限嗎？"},
      {sp:"主管", fr:"Absolument, et terminez par une formule de politesse.", zh:"當然，並以禮貌的結尾語作結。"},
    ]
  },
];

window.DIALOGUES.academic_writing_b2 = [
  {
    title: "和指導教授討論論文",
    lines: [
      {sp:"學生", fr:"Ma problématique vous semble-t-elle assez claire ?", zh:"您覺得我的研究問題夠清楚嗎？"},
      {sp:"教授", fr:"Elle gagnerait à être formulée plus précisément.", zh:"如果表述得更精確會更好。"},
      {sp:"學生", fr:"Et ma méthodologie, est-elle solide ?", zh:"那我的研究方法扎實嗎？"},
      {sp:"教授", fr:"Oui, mais étayez-la avec davantage de sources.", zh:"扎實，但要用更多文獻來佐證。"},
      {sp:"學生", fr:"Merci, je vais revoir cette partie.", zh:"謝謝，我會重新檢視這個部分。"},
    ]
  },
];

window.DIALOGUES.statistics_b2 = [
  {
    title: "解讀一份數據報告",
    lines: [
      {sp:"同事A", fr:"Les ventes ont augmenté de douze pour cent.", zh:"銷售成長了百分之十二。"},
      {sp:"同事B", fr:"C'est une hausse significative par rapport à l'an dernier.", zh:"相較於去年，這是顯著的成長。"},
      {sp:"同事A", fr:"En revanche, la marge a légèrement diminué.", zh:"另一方面，利潤率略為下滑。"},
      {sp:"同事B", fr:"La tendance reste globalement positive.", zh:"整體趨勢仍是正向的。"},
      {sp:"同事A", fr:"Présentons ces chiffres sous forme de graphique.", zh:"我們把這些數字做成圖表來呈現吧。"},
    ]
  },
];

window.DIALOGUES.counseling_b2 = [
  {
    title: "諮商會談",
    lines: [
      {sp:"個案", fr:"J'ai du mal à exprimer ce que je ressens.", zh:"我很難說出自己的感受。"},
      {sp:"諮商師", fr:"Prenez votre temps, rien ne presse.", zh:"慢慢來，不急。"},
      {sp:"個案", fr:"J'ai l'impression de toujours tout refouler.", zh:"我總覺得自己一直在壓抑一切。"},
      {sp:"諮商師", fr:"Mettre des mots dessus est déjà un grand pas.", zh:"能把它化為言語，已經是很大的一步。"},
      {sp:"個案", fr:"Ça me fait du bien d'être enfin écouté.", zh:"終於被傾聽，讓我感覺好多了。"},
    ]
  },
];

window.DIALOGUES.philosophy_schools_b2 = [
  {
    title: "討論不同哲學立場",
    lines: [
      {sp:"友A", fr:"Te sens-tu plutôt proche du stoïcisme ?", zh:"你覺得自己比較偏向斯多葛主義嗎？"},
      {sp:"友B", fr:"Oui, l'idée de maîtriser ses émotions me parle.", zh:"是的，克制情緒的概念很打動我。"},
      {sp:"友A", fr:"Moi, je penche davantage vers l'existentialisme.", zh:"我則比較傾向存在主義。"},
      {sp:"友B", fr:"Parce qu'il insiste sur la liberté de l'individu ?", zh:"因為它強調個人的自由？"},
      {sp:"友A", fr:"Exactement. Nous créons nous-mêmes notre sens.", zh:"沒錯。我們自己創造自身的意義。"},
    ]
  },
];

window.DIALOGUES.religion_b2 = [
  {
    title: "聊信仰與世俗",
    lines: [
      {sp:"友A", fr:"La spiritualité occupe-t-elle une place dans ta vie ?", zh:"靈性在你的生活裡佔有一席之地嗎？"},
      {sp:"友B", fr:"Pas vraiment, je suis plutôt laïque.", zh:"不太有，我比較世俗。"},
      {sp:"友A", fr:"Pourtant, beaucoup y cherchent un sens à la vie.", zh:"不過，許多人從中尋找生命的意義。"},
      {sp:"友B", fr:"Je le respecte, chacun sa quête.", zh:"我尊重，每個人都有自己的追尋。"},
      {sp:"友A", fr:"L'essentiel, c'est de rester ouvert aux autres.", zh:"重要的是對他人保持開放。"},
    ]
  },
];

window.DIALOGUES.urban_planning_b2 = [
  {
    title: "討論一項都市計畫",
    lines: [
      {sp:"居民", fr:"Ce projet va-t-il vraiment améliorer le quartier ?", zh:"這個計畫真的能改善這一區嗎？"},
      {sp:"規劃師", fr:"Oui, nous voulons créer plus d'espaces verts.", zh:"是的，我們想增加更多綠地。"},
      {sp:"居民", fr:"Et la circulation, qu'en sera-t-il ?", zh:"那交通呢，會怎麼樣？"},
      {sp:"規劃師", fr:"Nous piétonniserons une partie du centre.", zh:"我們會把市中心一部分改為行人徒步區。"},
      {sp:"居民", fr:"Voilà qui rendrait la ville plus agréable.", zh:"這會讓城市更宜人。"},
    ]
  },
];

window.DIALOGUES.food_critique_b2 = [
  {
    title: "美食家品評",
    lines: [
      {sp:"美食家", fr:"L'équilibre des saveurs est tout simplement parfait.", zh:"各種滋味的平衡簡直完美。"},
      {sp:"主廚", fr:"Merci. J'ai cherché à sublimer le produit.", zh:"謝謝。我想凸顯食材本身。"},
      {sp:"美食家", fr:"La cuisson de la viande est remarquable.", zh:"這塊肉的火候令人讚嘆。"},
      {sp:"主廚", fr:"Le secret réside dans la patience.", zh:"祕訣在於耐心。"},
      {sp:"美食家", fr:"Un vrai moment de plaisir des sens.", zh:"真是一場感官的享受。"},
    ]
  },
];

window.DIALOGUES.cinema_b2 = [
  {
    title: "影評討論",
    lines: [
      {sp:"影評A", fr:"La mise en scène de ce film est vraiment audacieuse.", zh:"這部片的場面調度真的很大膽。"},
      {sp:"影評B", fr:"Oui, mais le scénario manque un peu de rythme.", zh:"是啊，但劇本節奏稍嫌不足。"},
      {sp:"影評A", fr:"Le jeu des acteurs rattrape largement ce défaut.", zh:"演員的演技大大彌補了這個缺點。"},
      {sp:"影評B", fr:"La photographie, elle, est tout simplement sublime.", zh:"至於攝影，簡直美極了。"},
      {sp:"影評A", fr:"Un film imparfait, mais qui marque les esprits.", zh:"一部不完美、卻令人難忘的片子。"},
    ]
  },
];

window.DIALOGUES.education_b2 = [
  {
    title: "討論教學法",
    lines: [
      {sp:"教師A", fr:"Comment maintenir la motivation des élèves ?", zh:"要怎麼維持學生的學習動機？"},
      {sp:"教師B", fr:"En rendant les cours plus interactifs et concrets.", zh:"讓課程更互動、更具體。"},
      {sp:"教師A", fr:"L'approche ludique fonctionne-t-elle vraiment ?", zh:"寓教於樂的方式真的有效嗎？"},
      {sp:"教師B", fr:"Oui, elle développe l'autonomie et la curiosité.", zh:"有，它能培養自主性與好奇心。"},
      {sp:"教師A", fr:"Je vais essayer cette méthode dès la rentrée.", zh:"我開學就來試試這個方法。"},
    ]
  },
];

window.DIALOGUES.workplace_b2 = [
  {
    title: "談升遷與職涯",
    lines: [
      {sp:"員工", fr:"J'aimerais évoluer vers un poste à responsabilités.", zh:"我希望能晉升到有更多責任的職位。"},
      {sp:"主管", fr:"Vous avez fait vos preuves, c'est indéniable.", zh:"您確實已證明了自己，這無庸置疑。"},
      {sp:"員工", fr:"Quelles compétences devrais-je encore développer ?", zh:"我還該加強哪些能力？"},
      {sp:"主管", fr:"Surtout le management d'équipe.", zh:"主要是團隊管理。"},
      {sp:"員工", fr:"Je suis prêt à m'investir pleinement.", zh:"我準備好全心投入了。"},
    ]
  },
];

window.DIALOGUES.wine_b2 = [
  {
    title: "侍酒師介紹一款酒",
    lines: [
      {sp:"侍酒師", fr:"Ce rouge possède des arômes de fruits mûrs.", zh:"這款紅酒帶有成熟果香。"},
      {sp:"客人", fr:"Et en bouche, comment est-il ?", zh:"那入口的口感如何？"},
      {sp:"侍酒師", fr:"Corsé, avec des tanins fondus et une belle finale.", zh:"醇厚，單寧柔順，餘韻悠長。"},
      {sp:"客人", fr:"Avec quel plat le conseilleriez-vous ?", zh:"您建議搭配哪道菜？"},
      {sp:"侍酒師", fr:"Il accompagne parfaitement une viande rouge.", zh:"它與紅肉是絕配。"},
    ]
  },
];

window.DIALOGUES.fashion_b2 = [
  {
    title: "討論一個系列",
    lines: [
      {sp:"友A", fr:"Cette nouvelle collection est très élégante.", zh:"這個新系列非常優雅。"},
      {sp:"友B", fr:"Oui, les coupes sont à la fois sobres et modernes.", zh:"是啊，剪裁既簡約又現代。"},
      {sp:"友A", fr:"J'adore le choix des matières naturelles.", zh:"我很喜歡天然質料的選擇。"},
      {sp:"友B", fr:"Le styliste a vraiment du goût.", zh:"這位設計師真的很有品味。"},
      {sp:"友A", fr:"Ces pièces sont intemporelles, on les portera longtemps.", zh:"這些單品永不退流行，能穿很久。"},
    ]
  },
];

window.DIALOGUES.music_b2 = [
  {
    title: "演出後的討論",
    lines: [
      {sp:"友A", fr:"Quelle interprétation ! J'en ai eu des frissons.", zh:"多麼精彩的詮釋！我都起雞皮疙瘩了。"},
      {sp:"友B", fr:"La soliste est une véritable virtuose.", zh:"那位獨奏家是個真正的演奏名家。"},
      {sp:"友A", fr:"Le crescendo final était bouleversant.", zh:"最後的漸強撼動人心。"},
      {sp:"友B", fr:"Et l'acoustique de la salle, exceptionnelle.", zh:"而這個廳的音響效果也出類拔萃。"},
      {sp:"友A", fr:"Une soirée que je ne suis pas près d'oublier.", zh:"這是個我很難忘記的夜晚。"},
    ]
  },
];

window.DIALOGUES.competition_b2 = [
  {
    title: "賽後採訪",
    lines: [
      {sp:"記者", fr:"Félicitations ! Comment expliquez-vous cette victoire ?", zh:"恭喜！您如何解釋這場勝利？"},
      {sp:"選手", fr:"Par des mois d'entraînement et beaucoup de ténacité.", zh:"靠的是數月的訓練與堅韌的毅力。"},
      {sp:"記者", fr:"Le mental a-t-il fait la différence ?", zh:"心理素質是致勝關鍵嗎？"},
      {sp:"選手", fr:"Absolument, c'est lui qui m'a permis de tenir.", zh:"絕對是，正是它讓我撐了下去。"},
      {sp:"記者", fr:"Quel est votre prochain objectif ?", zh:"您下一個目標是什麼？"},
    ]
  },
];

window.DIALOGUES.exploration_b2 = [
  {
    title: "分享一趟探險",
    lines: [
      {sp:"友A", fr:"Alors, comment s'est passé ton périple ?", zh:"那你的長途旅程怎麼樣？"},
      {sp:"友B", fr:"Inoubliable. Je suis sorti des sentiers battus.", zh:"難以忘懷。我走了非觀光的路線。"},
      {sp:"友A", fr:"Tu n'as pas eu peur de t'aventurer seul ?", zh:"你不怕獨自冒險嗎？"},
      {sp:"友B", fr:"Un peu, mais le dépaysement en valait la peine.", zh:"有點，但那份異地感很值得。"},
      {sp:"友A", fr:"Ça donne vraiment envie de partir à mon tour.", zh:"這真讓我也想出發了。"},
    ]
  },
];

window.DIALOGUES.personality_b2 = [
  {
    title: "描述性格的轉變",
    lines: [
      {sp:"友A", fr:"Tu sembles plus serein qu'avant.", zh:"你看起來比以前從容多了。"},
      {sp:"友B", fr:"Oui, j'ai appris à mieux maîtriser mes émotions.", zh:"是啊，我學會更好地駕馭自己的情緒。"},
      {sp:"友A", fr:"Avant, tu t'emportais facilement.", zh:"以前你很容易動怒。"},
      {sp:"友B", fr:"C'est vrai. Avec le temps, j'ai gagné en maturité.", zh:"確實。隨著時間，我變得更成熟了。"},
      {sp:"友A", fr:"Tu sembles vraiment bien dans ta peau.", zh:"你看起來真的很自在做自己。"},
    ]
  },
];

window.DIALOGUES.science_branches_b2 = [
  {
    title: "解釋一個科學概念",
    lines: [
      {sp:"學生", fr:"Pouvez-vous m'expliquer la photosynthèse simplement ?", zh:"您能簡單解釋光合作用嗎？"},
      {sp:"老師", fr:"La plante transforme la lumière en énergie.", zh:"植物把光轉化成能量。"},
      {sp:"學生", fr:"Et elle produit de l'oxygène au passage ?", zh:"過程中還會產生氧氣？"},
      {sp:"老師", fr:"Exactement, c'est essentiel pour tout être vivant.", zh:"沒錯，這對所有生命體都至關重要。"},
      {sp:"學生", fr:"Merci, c'est beaucoup plus clair maintenant.", zh:"謝謝，現在清楚多了。"},
    ]
  },
];

window.DIALOGUES.law_b2 = [
  {
    title: "律師諮詢",
    lines: [
      {sp:"當事人", fr:"Ai-je le droit de contester cette décision ?", zh:"我有權對這個裁決提出異議嗎？"},
      {sp:"律師", fr:"Oui, vous pouvez faire appel dans un délai d'un mois.", zh:"有，您可以在一個月內提起上訴。"},
      {sp:"當事人", fr:"Quelles preuves dois-je rassembler ?", zh:"我該蒐集哪些證據？"},
      {sp:"律師", fr:"Tout document attestant de votre bonne foi.", zh:"任何能證明您誠信的文件。"},
      {sp:"當事人", fr:"Merci, je me sens déjà plus rassuré.", zh:"謝謝，我已經安心多了。"},
    ]
  },
];
