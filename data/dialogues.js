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
