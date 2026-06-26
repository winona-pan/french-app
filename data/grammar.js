/* 文法資料：window.GRAMMAR = [ {id, level, title, summary, blocks:[...]} ]
   blocks 區塊型別：
     {t:"prose", x:"中文說明"}
     {t:"h",     x:"小標題"}
     {t:"note",  x:"提醒"}
     {t:"table", head:[...], rows:[[...],...]}   // 表頭一律中文；內容自動偵測中／法字型
     {t:"ex",    items:[[法文, 中文],...]}        // 例句，附發音鈕
*/
window.GRAMMAR = [
  /* ============ A1 ============ */
  {
    id:"g_a1_gender_articles", level:"A1", title:"名詞的陰陽性與冠詞",
    summary:"le / la / les 與 un / une / des 的用法",
    blocks:[
      {t:"prose", x:"法文名詞分「陽性」與「陰性」，前面的冠詞要跟著變。冠詞分兩種：定冠詞（特指已知的人事物）與不定冠詞（泛指某一個）。"},
      {t:"h", x:"定冠詞（這／那個特定的）"},
      {t:"table", head:["陽性","陰性","複數"], rows:[["le / l'","la / l'","les"]]},
      {t:"h", x:"不定冠詞（某一個）"},
      {t:"table", head:["陽性","陰性","複數"], rows:[["un","une","des"]]},
      {t:"note", x:"名詞若以母音或啞音 h 開頭，le / la 都縮成 l'：l'ami、l'eau。但氣音 h 不縮：le héros、la honte。"},
      {t:"ex", items:[["le livre","那本書"],["une fleur","一朵花"],["des amis","一些朋友"],["la maison","那間房子"],["un ami","一個朋友"]]},
    ]
  },
  {
    id:"g_a1_gender_clues", level:"A1", title:"名詞陰陽性的辨識（字尾規律與例外）",
    summary:"從字尾判斷性別的常見傾向",
    blocks:[
      {t:"prose", x:"法文名詞的性別大多得逐字記，但「字尾」常能提供線索。以下整理常見傾向，幫助你猜測。"},
      {t:"h", x:"通常為「陽性」的字尾"},
      {t:"table", head:["字尾","例"], rows:[["-age","le fromage（乳酪）"],["-ment","le moment（時刻）"],["-eau","le bureau（辦公桌）"],["-isme","le tourisme（觀光）"],["-in / -on","le jardin（花園）／le poisson（魚）"]]},
      {t:"h", x:"通常為「陰性」的字尾"},
      {t:"table", head:["字尾","例"], rows:[["-tion / -sion","la nation（國家）"],["-té","la liberté（自由）"],["-ée","la journée（一天）"],["-ette","la fourchette（叉子）"],["-ance / -ence","la chance（運氣）"],["-ie / -ure","la vie（生命）／la nature（大自然）"]]},
      {t:"note", x:"重要例外要小心：陽性的 le musée、le lycée（雖然 -ée）、le problème、le système（-ème 多源自希臘文，陽性）；陰性的 une page、une image、une plage（雖然 -age）。性別是文法規則、不一定符合邏輯，最保險還是「連冠詞一起背」。"},
      {t:"ex", items:[["le village","村莊（陽性）"],["la décision","決定（陰性）"],["le musée","博物館（例外陽性）"],["la situation","情況（陰性）"],["le gouvernement","政府（陽性）"]]},
    ]
  },
  {
    id:"g_a1_subject_etre", level:"A1", title:"主詞代名詞與 être（是）",
    summary:"je、tu、il… 加上動詞 être",
    blocks:[
      {t:"prose", x:"句子的基本骨架是「主詞代名詞 + 動詞」。être 意思是「是」，是最常用的動詞之一，變化要背熟。"},
      {t:"table", head:["主詞","être"], rows:[["je","suis"],["tu","es"],["il / elle","est"],["nous","sommes"],["vous","êtes"],["ils / elles","sont"]]},
      {t:"note", x:"vous 可指「您」（禮貌的單數）或「你們」（複數）。ils 用於全是男性或男女混合，elles 只用於全是女性。"},
      {t:"ex", items:[["Je suis étudiant.","我是學生。"],["Elle est française.","她是法國人。"],["Nous sommes prêts.","我們準備好了。"],["Vous êtes en retard.","你們遲到了。"],["C'est mon meilleur ami.","這是我最好的朋友。"]]},
    ]
  },
  {
    id:"g_a1_avoir", level:"A1", title:"動詞 avoir（有）",
    summary:"表示擁有，也用於年齡與許多片語",
    blocks:[
      {t:"prose", x:"avoir 意思是「有」，除了表示擁有，還用在年齡、感覺等許多固定說法。"},
      {t:"table", head:["主詞","avoir"], rows:[["j'","ai"],["tu","as"],["il / elle","a"],["nous","avons"],["vous","avez"],["ils / elles","ont"]]},
      {t:"note", x:"年齡用 avoir 而非 être：J'ai vingt ans.（我二十歲，字面是「我有二十歲」）。常見片語：avoir faim（餓）、avoir soif（渴）、avoir raison（有理）。"},
      {t:"ex", items:[["J'ai un frère.","我有一個兄弟。"],["Tu as raison.","你說得對。"],["Ils ont faim.","他們餓了。"],["Nous avons deux enfants.","我們有兩個孩子。"],["Vous avez l'heure ?","請問現在幾點？"]]},
    ]
  },
  {
    id:"g_a1_er_verbs", level:"A1", title:"第一類動詞（-er）現在式",
    summary:"最大宗的規則動詞，以 parler 為例",
    blocks:[
      {t:"prose", x:"大多數法文動詞以 -er 結尾，變化規則完全一致。去掉字尾 -er，再依人稱加上對應字尾即可。以 parler（說）為例。"},
      {t:"table", head:["主詞","parler","字尾"], rows:[["je","parle","-e"],["tu","parles","-es"],["il / elle","parle","-e"],["nous","parlons","-ons"],["vous","parlez","-ez"],["ils / elles","parlent","-ent"]]},
      {t:"note", x:"-e、-es、-e、-ent 這四個字尾發音完全相同（字尾不發音）；只有 nous (-ons) 和 vous (-ez) 聽得出差別。"},
      {t:"ex", items:[["Je parle français.","我說法文。"],["Nous habitons à Taipei.","我們住在台北。"],["Ils aiment la musique.","他們喜歡音樂。"],["Tu travailles beaucoup.","你工作很拚。"],["Elle aime danser.","她喜歡跳舞。"]]},
    ]
  },
  {
    id:"g_a1_negation", level:"A1", title:"否定句 ne … pas",
    summary:"把動詞夾在 ne 和 pas 中間",
    blocks:[
      {t:"prose", x:"法文否定要用「兩個字」包住動詞：主詞 + ne + 動詞 + pas。"},
      {t:"table", head:["肯定","否定"], rows:[["Je comprends.","Je ne comprends pas."],["Elle est là.","Elle n'est pas là."],["Nous travaillons.","Nous ne travaillons pas."]]},
      {t:"note", x:"動詞（或其後接詞）以母音開頭時，ne 縮成 n'：Je n'aime pas。口語中常省略 ne，只說 pas：「Je sais pas.」"},
      {t:"ex", items:[["Je ne comprends pas.","我不懂。"],["Elle n'est pas là.","她不在。"],["Ce n'est pas grave.","沒關係。"],["Je ne sais pas.","我不知道。"],["Ne t'inquiète pas.","別擔心。"]]},
    ]
  },
  {
    id:"g_a1_questions", level:"A1", title:"疑問句的三種問法",
    summary:"語調、est-ce que、倒裝",
    blocks:[
      {t:"prose", x:"是非問句（回答 oui / non）有三種問法，差別在正式程度。"},
      {t:"table", head:["方式","例句","語氣"], rows:[["語調上揚","Tu viens ?","口語"],["est-ce que","Est-ce que tu viens ?","中性"],["主詞倒裝","Viens-tu ?","正式"]]},
      {t:"note", x:"常用疑問詞：où（哪裡）、quand（何時）、comment（如何）、pourquoi（為什麼）、combien（多少）、qui（誰）、que / quoi（什麼）。"},
      {t:"ex", items:[["Où habites-tu ?","你住哪裡？"],["Est-ce que c'est loin ?","那會很遠嗎？"],["Comment ça va ?","你好嗎？"],["Quand pars-tu ?","你何時出發？"],["Pourquoi es-tu triste ?","你為什麼難過？"]]},
    ]
  },
  {
    id:"g_a1_adjectives", level:"A1", title:"形容詞的性數一致與位置",
    summary:"形容詞跟著名詞變陰陽性與單複數",
    blocks:[
      {t:"prose", x:"形容詞要跟它修飾的名詞「性數一致」：陰性通常加 -e，複數通常加 -s。多數形容詞放在名詞「後面」。"},
      {t:"table", head:["","陽性","陰性"], rows:[["單數","grand","grande"],["複數","grands","grandes"]]},
      {t:"note", x:"少數常用的短形容詞放在名詞「前面」：grand、petit、bon、beau、joli、jeune、nouveau、vieux。"},
      {t:"ex", items:[["une voiture rouge","一台紅色的車"],["un petit chien","一隻小狗"],["des fleurs blanches","一些白花"],["un grand jardin","一座大花園"],["une jolie robe","一件漂亮的洋裝"]]},
    ]
  },
  {
    id:"g_a1_adj_feminine", level:"A1", title:"陰性形容詞的構成（規律與例外）",
    summary:"加 -e 的各種變化與不規則",
    blocks:[
      {t:"prose", x:"形容詞的陰性大多是「加 -e」，但依字尾有不同規則，也有一批要背的不規則。"},
      {t:"h", x:"規則變化"},
      {t:"table", head:["陽性字尾","陰性變化","例"], rows:[["（一般）","＋ -e","grand → grande"],["-e 結尾","不變","rouge → rouge"],["-er","-ère","cher → chère"],["-eux","-euse","heureux → heureuse"],["-f","-ve","actif → active"],["-en / -on","-enne / -onne","bon → bonne"],["-el / -eil","-elle / -eille","naturel → naturelle"]]},
      {t:"h", x:"常見不規則（要背）"},
      {t:"table", head:["陽性","陰性"], rows:[["beau","belle"],["nouveau","nouvelle"],["vieux","vieille"],["blanc","blanche"],["long","longue"],["doux","douce"],["frais","fraîche"]]},
      {t:"note", x:"-en / -on 會雙寫子音再加 e（bon → bonne）；-eux → -euse、-f → -ve 是高頻考點，務必熟記。"},
      {t:"ex", items:[["une belle maison","一棟漂亮的房子"],["une longue histoire","一個漫長的故事"],["une femme heureuse","一個幸福的女人"],["une nouvelle voiture","一台新車"],["une vieille amie","一位老朋友"]]},
    ]
  },
  {
    id:"g_a1_plural", level:"A1", title:"名詞與形容詞的複數變化（規律與例外）",
    summary:"加 -s 與特殊字尾、不規則",
    blocks:[
      {t:"prose", x:"複數一般在字尾「加 -s」（而且這個 -s 不發音），但有幾組特殊字尾，以及少數完全不規則的字。"},
      {t:"h", x:"規則與特殊字尾"},
      {t:"table", head:["字尾","複數","例"], rows:[["（一般）","＋ -s","un livre → des livres"],["-s / -x / -z","不變","un fils → des fils"],["-au / -eau / -eu","＋ -x","un château → des châteaux"],["-al","-aux","un cheval → des chevaux"],["-ou","＋ -s（多數）","un trou → des trous"]]},
      {t:"h", x:"要小心的例外"},
      {t:"table", head:["類型","例外","複數"], rows:[["-al 改加 -s","bal, festival, carnaval","des festivals"],["-ou 改加 -x（7 個）","bijou, chou, genou, caillou…","des bijoux"],["完全不規則","un œil","des yeux"],["完全不規則","monsieur","messieurs"]]},
      {t:"note", x:"那 7 個加 -x 的 -ou 字：bijou、caillou、chou、genou、hibou、joujou、pou。形容詞的複數規則與名詞相同（加 -s，-al → -aux）：un homme normal → des hommes normaux。"},
      {t:"ex", items:[["des cheveux","頭髮（複數）"],["des journaux","報紙們"],["des yeux bleus","藍色的眼睛"],["des animaux","一些動物"],["des choux","一些高麗菜"]]},
    ]
  },
  {
    id:"g_a1_possessive", level:"A1", title:"所有格形容詞（我的、你的…）",
    summary:"mon / ma / mes 跟著「東西」變，不是跟「人」",
    blocks:[
      {t:"prose", x:"所有格形容詞要跟「被擁有的東西」性數一致，而不是跟擁有者。例如「她的父親」用 son（因為 père 是陽性），不是因為「她」而用陰性。"},
      {t:"table", head:["","陽性單數","陰性單數","複數"], rows:[["我的","mon","ma","mes"],["你的","ton","ta","tes"],["他／她的","son","sa","ses"],["我們的","notre","notre","nos"],["你們／您的","votre","votre","vos"],["他們的","leur","leur","leurs"]]},
      {t:"note", x:"陰性名詞若以母音開頭，改用 mon / ton / son（為了好發音）：mon amie（我的女性朋友）、son école（他／她的學校）。"},
      {t:"ex", items:[["mon père","我的父親"],["ma sœur","我的姊妹"],["mes parents","我的父母"],["notre maison","我們的家"],["leurs enfants","他們的孩子"]]},
    ]
  },
  {
    id:"g_a1_demonstrative", level:"A1", title:"指示形容詞（這個、那個）",
    summary:"ce / cet / cette / ces",
    blocks:[
      {t:"prose", x:"指示形容詞表示「這／那個」，同樣要跟名詞性數一致。"},
      {t:"table", head:["陽性","陽性（母音前）","陰性","複數"], rows:[["ce","cet","cette","ces"]]},
      {t:"note", x:"陽性名詞若以母音或啞音 h 開頭，用 cet（發音才順）：cet homme、cet ami、cet hôtel。"},
      {t:"ex", items:[["ce livre","這本書"],["cet arbre","這棵樹"],["cette maison","這間房子"],["cet hôtel","這間飯店"],["ces gens","這些人"]]},
    ]
  },
  {
    id:"g_a1_a_de_contraction", level:"A1", title:"à 與 de 跟冠詞的縮合",
    summary:"au / aux / du / des：遇到 le、les 必須縮合",
    blocks:[
      {t:"prose", x:"介系詞 à（在／到）和 de（的／從）碰到定冠詞 le、les 時，「必須」縮合成一個字。碰到 la、l' 則「不」縮合。"},
      {t:"h", x:"à ＋ 冠詞"},
      {t:"table", head:["組合","縮合","例子","中譯"], rows:[["à + le","au","au cinéma","去電影院"],["à + les","aux","aux États-Unis","在美國"],["à + la","à la","à la maison","在家"],["à + l'","à l'","à l'école","在學校"]]},
      {t:"h", x:"de ＋ 冠詞"},
      {t:"table", head:["組合","縮合","例子","中譯"], rows:[["de + le","du","du pain","一些麵包"],["de + les","des","des amis","朋友們的"],["de + la","de la","de la chance","一些運氣"],["de + l'","de l'","de l'eau","一些水"]]},
      {t:"note", x:"小提醒：只有遇到 le、les 才縮（au/aux、du/des）。la 和 l' 永遠維持原樣。"},
      {t:"ex", items:[["Je vais au marché.","我去市場。"],["Il parle aux étudiants.","他對學生們說話。"],["la porte du jardin","花園的門"],["Je viens du Japon.","我來自日本。"],["Il joue aux cartes.","他在玩牌。"]]},
    ]
  },
  {
    id:"g_a1_futur_proche", level:"A1", title:"最近未來式（aller ＋ 原形動詞）",
    summary:"表示即將發生：je vais partir",
    blocks:[
      {t:"prose", x:"要表達「即將、快要做某事」，用 aller 的現在式變化 ＋ 動詞「原形」。這是初學者最實用的未來表達。"},
      {t:"table", head:["主詞","aller"], rows:[["je","vais"],["tu","vas"],["il / elle","va"],["nous","allons"],["vous","allez"],["ils / elles","vont"]]},
      {t:"note", x:"結構：主詞 ＋ aller（變位）＋ 原形動詞。否定把 aller 夾起來：Il ne va pas venir.（他不會來。）"},
      {t:"ex", items:[["Je vais partir.","我要走了。"],["On va manger.","我們要去吃飯。"],["Il ne va pas venir.","他不會來。"],["Je vais faire les courses.","我要去買東西。"],["Vous allez adorer !","你們會超愛的！"]]},
    ]
  },
  {
    id:"g_a1_numbers_time", level:"A1", title:"數字、時間與日期",
    summary:"報時、星期、月份的基本說法",
    blocks:[
      {t:"prose", x:"問時間說 Quelle heure est-il ?，回答用 Il est …。分鐘可用 et quart（十五分）、et demie（半）、moins le quart（差十五分）。"},
      {t:"table", head:["法文","中譯"], rows:[["Il est une heure.","一點"],["Il est deux heures et quart.","兩點十五分"],["Il est trois heures et demie.","三點半"],["Il est midi.","中午十二點"]]},
      {t:"note", x:"星期與月份開頭「不」大寫：lundi（週一）、janvier（一月）。日期說「le ＋ 數字 ＋ 月份」：le 14 juillet。"},
      {t:"ex", items:[["Il est huit heures.","八點了。"],["On est lundi.","今天星期一。"],["le 14 juillet","七月十四日"],["Il est minuit.","半夜十二點。"],["Mon anniversaire est le 3 mai.","我的生日是五月三日。"]]},
    ]
  },

  /* ============ A2 ============ */
  {
    id:"g_a2_passe_compose_avoir", level:"A2", title:"複合過去式（avoir 助動詞）",
    summary:"表達過去完成的動作：j'ai mangé",
    blocks:[
      {t:"prose", x:"複合過去式（passé composé）描述過去「已完成」的動作。結構：主詞 ＋ avoir（現在式）＋ 過去分詞。大多數動詞用 avoir 當助動詞。"},
      {t:"h", x:"過去分詞的規則變化"},
      {t:"table", head:["原形字尾","過去分詞","例"], rows:[["-er","-é","parler → parlé"],["-ir","-i","finir → fini"],["-re","-u","attendre → attendu"]]},
      {t:"note", x:"常見不規則過去分詞要背：avoir→eu、être→été、faire→fait、voir→vu、prendre→pris、mettre→mis、boire→bu、lire→lu。"},
      {t:"ex", items:[["J'ai mangé une pomme.","我吃了一顆蘋果。"],["Tu as fini ton travail.","你做完工作了。"],["Ils ont vu le film.","他們看了那部電影。"],["Nous avons pris le train.","我們搭了火車。"],["Qu'est-ce que tu as dit ?","你說了什麼？"]]},
    ]
  },
  {
    id:"g_a2_passe_compose_etre", level:"A2", title:"複合過去式（être 助動詞）",
    summary:"移動／變化動詞與代動詞用 être，分詞要一致",
    blocks:[
      {t:"prose", x:"少數表示「移動或狀態變化」的動詞，以及所有代動詞，複合過去式要用 être 當助動詞。此時過去分詞要跟「主詞」性數一致。"},
      {t:"table", head:["動詞","意思","動詞","意思"], rows:[["aller","去","venir","來"],["partir","離開","arriver","抵達"],["entrer","進入","sortir","出去"],["monter","上去","descendre","下來"],["naître","出生","mourir","死亡"],["rester","停留","tomber","跌倒"]]},
      {t:"note", x:"過去分詞跟主詞一致：陰性加 -e、複數加 -s。Elle est partie. / Ils sont arrivés. / Elles sont venues."},
      {t:"ex", items:[["Je suis allé(e) au marché.","我去了市場。"],["Elle est née en 2000.","她在 2000 年出生。"],["Nous sommes rentrés tard.","我們很晚回家。"],["Ils sont arrivés en retard.","他們遲到了。"],["Tu es déjà parti ?","你已經走了嗎？"]]},
    ]
  },
  {
    id:"g_a2_imparfait", level:"A2", title:"未完成過去式（imparfait）",
    summary:"描述過去的背景、習慣與持續狀態",
    blocks:[
      {t:"prose", x:"未完成過去式描述過去的「背景、習慣、持續中的狀態」。作法：取 nous 的現在式（nous parlons）去掉 -ons，再加上 imparfait 字尾。"},
      {t:"table", head:["主詞","parler","字尾"], rows:[["je","parlais","-ais"],["tu","parlais","-ais"],["il / elle","parlait","-ait"],["nous","parlions","-ions"],["vous","parliez","-iez"],["ils / elles","parlaient","-aient"]]},
      {t:"note", x:"只有 être 的詞幹不規則（用 ét-）：j'étais、tu étais、il était…（但字尾完全一樣）。"},
      {t:"ex", items:[["Quand j'étais petit, j'habitais à Lyon.","我小時候住在里昂。"],["Il faisait beau.","（那時）天氣很好。"],["Nous regardions la télé.","我們（那時）在看電視。"],["Avant, je prenais le bus.","以前我都搭公車。"],["Il y avait beaucoup de monde.","（那時）人很多。"]]},
    ]
  },
  {
    id:"g_a2_pc_vs_imparfait", level:"A2", title:"複合過去 vs 未完成過去",
    summary:"事件用 PC，背景用 imparfait",
    blocks:[
      {t:"prose", x:"這兩個過去時態常一起出現：複合過去式表達「發生的事件」（主線），未完成過去式表達「當時的背景、狀態」。"},
      {t:"table", head:["未完成過去（背景）","複合過去（事件）"], rows:[["持續、習慣、描述","一次完成的動作"],["Il pleuvait…","…quand le téléphone a sonné."]]},
      {t:"note", x:"口訣：背景、氛圍、正在進行 → imparfait；突然發生、推動劇情 → passé composé。"},
      {t:"ex", items:[["Je dormais quand tu es arrivé.","你到的時候我在睡覺。"],["Il faisait nuit, alors j'ai allumé la lumière.","天黑了，所以我開了燈。"],["Je lisais quand il a téléphoné.","他打電話來時我正在看書。"],["On marchait quand il a commencé à pleuvoir.","我們走著走著就下起雨來。"]]},
    ]
  },
  {
    id:"g_a2_cod", level:"A2", title:"直接受詞代名詞（COD）",
    summary:"le / la / les 代替直接受詞，放在動詞前",
    blocks:[
      {t:"prose", x:"直接受詞代名詞代替「動詞後不加介系詞的名詞」，放在動詞「前面」，避免重複。"},
      {t:"table", head:["人稱","COD"], rows:[["我","me / m'"],["你","te / t'"],["他／它","le / l'"],["她／它","la / l'"],["我們","nous"],["你們／您","vous"],["他們／她們","les"]]},
      {t:"note", x:"複合時態時放助動詞前，且過去分詞要跟 COD 性數一致：Je l'ai vue.（我看到她了，vue 加 e）。"},
      {t:"ex", items:[["Tu vois Marie ? — Oui, je la vois.","你看到瑪麗了嗎？—有，我看到她。"],["Je le connais bien.","我很熟他。"],["Ils nous invitent.","他們邀請我們。"],["Cette chanson ? Je l'adore.","這首歌？我超愛。"],["Tu m'entends ?","你聽得到我嗎？"]]},
    ]
  },
  {
    id:"g_a2_coi", level:"A2", title:"間接受詞代名詞（COI）",
    summary:"lui / leur 代替「à ＋ 人」",
    blocks:[
      {t:"prose", x:"間接受詞代名詞代替「à ＋ 人」的結構，同樣放在動詞前面。"},
      {t:"table", head:["人稱","COI"], rows:[["我","me / m'"],["你","te / t'"],["他／她","lui"],["我們","nous"],["你們／您","vous"],["他們／她們","leur"]]},
      {t:"note", x:"常搭配 parler à、téléphoner à、donner à、écrire à 等動詞。注意：COI 的過去分詞「不」需性數一致。"},
      {t:"ex", items:[["Je parle à Paul → Je lui parle.","我跟他說話。"],["Tu écris à tes parents ? — Oui, je leur écris.","你寫信給父母嗎？—有，我寫給他們。"],["Je lui ai téléphoné hier.","我昨天打電話給他。"],["Tu peux me passer le sel ?","可以把鹽遞給我嗎？"]]},
    ]
  },
  {
    id:"g_a2_y_en", level:"A2", title:"代名詞 y 與 en",
    summary:"y 代替「à／地點」，en 代替「de／數量」",
    blocks:[
      {t:"prose", x:"y 代替「à ＋ 物」或地點；en 代替「de ＋ 物」或一個數量。兩者都放在動詞前。"},
      {t:"table", head:["代名詞","代替","例"], rows:[["y","à ＋ 物 / 地點","J'y vais.（我去那裡）"],["en","de ＋ 物 / 數量","J'en veux.（我要一些）"]]},
      {t:"note", x:"y 不用於「人」（à ＋ 人要用 lui / leur）。en 常搭配數量：J'en ai deux.（我有兩個）。"},
      {t:"ex", items:[["Tu vas à Paris ? — Oui, j'y vais.","你去巴黎嗎？—對，我去。"],["Tu as du pain ? — Oui, j'en ai.","你有麵包嗎？—有，我有一些。"],["J'y pense souvent.","我常想到這件事。"],["Des amis ? J'en ai beaucoup.","朋友？我有很多。"]]},
    ]
  },
  {
    id:"g_a2_comparatif", level:"A2", title:"比較級與最高級",
    summary:"plus / moins / aussi … que",
    blocks:[
      {t:"prose", x:"比較兩者用 plus（更）、moins（較不）、aussi（一樣）＋ 形容詞 ＋ que。最高級則在前面加定冠詞。"},
      {t:"table", head:["類型","結構","例"], rows:[["更…","plus … que","plus grand que（比…高）"],["較不…","moins … que","moins cher que（比…便宜）"],["一樣…","aussi … que","aussi vite que（和…一樣快）"]]},
      {t:"note", x:"不規則：bon（好的）→ meilleur（更好的）；bien（好地）→ mieux（更好地）。最高級：le plus grand、la meilleure。"},
      {t:"ex", items:[["Il est plus grand que moi.","他比我高。"],["C'est le meilleur restaurant.","這是最好的餐廳。"],["Elle court aussi vite que lui.","她跑得和他一樣快。"],["Ce film est moins bon que l'autre.","這部片不如另一部好。"],["C'est la plus belle ville du pays.","這是全國最美的城市。"]]},
    ]
  },
  {
    id:"g_a2_futur_simple", level:"A2", title:"簡單未來式（futur simple）",
    summary:"原形 ＋ 字尾，表達較正式或較遠的未來",
    blocks:[
      {t:"prose", x:"簡單未來式表達未來，比「最近未來（aller ＋ 原形）」更正式、時間也可較遠。多數動詞用「原形 ＋ 字尾」。"},
      {t:"table", head:["主詞","parler","字尾"], rows:[["je","parlerai","-ai"],["tu","parleras","-as"],["il / elle","parlera","-a"],["nous","parlerons","-ons"],["vous","parlerez","-ez"],["ils / elles","parleront","-ont"]]},
      {t:"note", x:"不規則「詞幹」要背，但字尾都一樣：être→ser-、avoir→aur-、aller→ir-、faire→fer-、venir→viendr-、pouvoir→pourr-。"},
      {t:"ex", items:[["Je partirai demain.","我明天會出發。"],["Nous serons là à huit heures.","我們八點會到。"],["Il fera beau.","天氣會很好。"],["Un jour, je voyagerai partout.","總有一天我要環遊世界。"],["On verra bien.","到時就知道了。"]]},
    ]
  },
  {
    id:"g_a2_pronominaux", level:"A2", title:"代動詞（反身動詞）",
    summary:"動作回到自己：se laver, s'appeler",
    blocks:[
      {t:"prose", x:"代動詞的動作回到主詞自己，動詞前要加反身代名詞（me、te、se…）。常用於日常作息。"},
      {t:"table", head:["主詞","se laver（洗澡）"], rows:[["je","me lave"],["tu","te laves"],["il / elle","se lave"],["nous","nous lavons"],["vous","vous lavez"],["ils / elles","se lavent"]]},
      {t:"note", x:"代動詞的複合過去式一律用 être：Je me suis levé(e).（我起床了），過去分詞通常跟主詞性數一致。"},
      {t:"ex", items:[["Je me lève à sept heures.","我七點起床。"],["Elle s'appelle Marie.","她叫瑪麗。"],["Nous nous reposons.","我們在休息。"],["Dépêche-toi !","快一點！"],["Ils se sont rencontrés à l'école.","他們在學校認識的。"]]},
    ]
  },
  {
    id:"g_a2_ir_re_verbs", level:"A2", title:"第二、三類動詞（-ir / -re）",
    summary:"finir 與 vendre 的規則變化",
    blocks:[
      {t:"prose", x:"除了 -er，還有以 -ir（如 finir）和 -re（如 vendre）結尾的規則動詞，各有自己的變化。"},
      {t:"h", x:"finir 型（-ir）"},
      {t:"table", head:["主詞","finir"], rows:[["je","finis"],["tu","finis"],["il / elle","finit"],["nous","finissons"],["vous","finissez"],["ils / elles","finissent"]]},
      {t:"h", x:"vendre 型（-re）"},
      {t:"table", head:["主詞","vendre"], rows:[["je","vends"],["tu","vends"],["il / elle","vend"],["nous","vendons"],["vous","vendez"],["ils / elles","vendent"]]},
      {t:"note", x:"finir 型在 nous / vous / ils 多了 -iss-。注意 partir、sortir、dormir 屬「短型 -ir」，變化不同（je pars、je sors）。"},
      {t:"ex", items:[["Je finis à six heures.","我六點結束。"],["Ils vendent leur maison.","他們在賣房子。"],["Nous choisissons un cadeau.","我們在挑禮物。"],["Tu réussis toujours.","你總是成功。"],["J'attends le bus depuis dix minutes.","我等公車等了十分鐘。"]]},
    ]
  },
  {
    id:"g_a2_partitif", level:"A2", title:"部分冠詞與數量表達",
    summary:"du / de la / des：表達「一些、不特定的量」",
    blocks:[
      {t:"prose", x:"部分冠詞表示「一些、不特定的量」，用於不可數或抽象的東西（如食物、飲料、概念）。"},
      {t:"table", head:["陽性","陰性","母音前","複數"], rows:[["du","de la","de l'","des"]]},
      {t:"note", x:"否定句中，部分冠詞與不定冠詞都變成 de：Je ne mange pas de viande.。數量詞後也用 de：beaucoup de、un peu de、un kilo de。"},
      {t:"ex", items:[["Je bois du café.","我喝咖啡。"],["Elle mange de la salade.","她吃沙拉。"],["Il y a beaucoup de monde.","有很多人。"],["Tu veux de l'eau ?","你要喝點水嗎？"],["Je n'ai pas de monnaie.","我沒有零錢。"]]},
    ]
  },

  /* ============ B1 ============ */
  {
    id:"g_b1_subjonctif_form", level:"B1", title:"虛擬式現在式：構成",
    summary:"取 ils 現在式去 -ent，加虛擬式字尾",
    blocks:[
      {t:"prose", x:"虛擬式（subjonctif）表達主觀的意願、情感、懷疑或必要。構成：取 ils 的現在式（ils parlent）去掉 -ent，加上虛擬式字尾。前面通常有 que。"},
      {t:"table", head:["主詞","parler (subj.)","字尾"], rows:[["que je","parle","-e"],["que tu","parles","-es"],["qu'il / elle","parle","-e"],["que nous","parlions","-ions"],["que vous","parliez","-iez"],["qu'ils / elles","parlent","-ent"]]},
      {t:"note", x:"nous / vous 的形式與未完成過去相同。重要不規則：être（que je sois）、avoir（que j'aie）、faire（que je fasse）、aller（que j'aille）、pouvoir（que je puisse）、savoir（que je sache）。"},
      {t:"ex", items:[["Il faut que je parle.","我必須說。"],["Je veux que tu viennes.","我要你來。"],["Il faut que nous soyons prêts.","我們必須準備好。"],["Il faut que tu fasses attention.","你必須小心。"],["Je veux que tout soit prêt.","我要一切都準備好。"]]},
    ]
  },
  {
    id:"g_b1_subjonctif_use", level:"B1", title:"何時用虛擬式",
    summary:"由意願、必要、情感、懷疑的主句觸發",
    blocks:[
      {t:"prose", x:"虛擬式幾乎都出現在 que 子句中，由特定的「主句」觸發。記住觸發的「類型」最有效。"},
      {t:"table", head:["類型","觸發語","例"], rows:[["意願","vouloir que, souhaiter que","Je veux que tu restes."],["必要","il faut que, il est important que","Il faut que tu dormes."],["情感","être content que, avoir peur que","Je suis content qu'il vienne."],["懷疑","douter que, ne pas penser que","Je doute qu'il vienne."]]},
      {t:"note", x:"注意：penser que、espérer que、être sûr que（肯定陳述）後面用「直陳式」，不用虛擬式。讓步連接詞 bien que、pour que、avant que 也觸發虛擬式。"},
      {t:"ex", items:[["Je suis ravi que tu sois là.","我很高興你在。"],["Il faut qu'on parte.","我們得走了。"],["Bien qu'il pleuve, on sort.","雖然下雨，我們還是出門。"],["J'ai peur qu'il soit trop tard.","我擔心已經太遲了。"],["Il vaut mieux que tu restes.","你最好留下來。"]]},
    ]
  },
  {
    id:"g_b1_conditionnel", level:"B1", title:"條件式現在式（conditionnel）",
    summary:"未來詞幹 ＋ 未完成過去字尾",
    blocks:[
      {t:"prose", x:"條件式表達禮貌、假設下的結果、願望或建議。構成：用「簡單未來的詞幹」加上「未完成過去的字尾」。"},
      {t:"table", head:["主詞","aimer (cond.)","字尾"], rows:[["j'","aimerais","-ais"],["tu","aimerais","-ais"],["il / elle","aimerait","-ait"],["nous","aimerions","-ions"],["vous","aimeriez","-iez"],["ils / elles","aimeraient","-aient"]]},
      {t:"note", x:"常見用途：禮貌請求（Je voudrais…）、給建議（Tu devrais…）、假設結果（Si…, je ferais…）。不規則詞幹與簡單未來相同（ser-, aur-, ir-…）。"},
      {t:"ex", items:[["Je voudrais un café.","我想要一杯咖啡。"],["Tu devrais te reposer.","你應該休息一下。"],["J'aimerais voyager.","我想去旅行。"],["Pourriez-vous m'aider ?","您能幫我嗎？"],["À ta place, je refuserais.","換作是我，我會拒絕。"]]},
    ]
  },
  {
    id:"g_b1_si", level:"B1", title:"假設句 si（條件句）",
    summary:"si 子句與主句的時態搭配",
    blocks:[
      {t:"prose", x:"si（如果）引導條件句，主句與從句的時態必須互相搭配。最常見的有兩種組合。"},
      {t:"table", head:["si 子句","主句","用法"], rows:[["si ＋ 現在式","現在 / 未來 / 命令","真實、可能發生"],["si ＋ 未完成過去","條件式現在","假設、與現實相反"]]},
      {t:"note", x:"關鍵：si 後面「絕不」接未來式或條件式。牢記組合：Si ＋ imparfait → conditionnel。"},
      {t:"ex", items:[["Si tu veux, on y va.","如果你想，我們就去。"],["S'il fait beau, on sortira.","如果天氣好，我們就出門。"],["Si j'avais le temps, je viendrais.","如果我有時間，我就會來。"],["Si tu étais libre, on irait au ciné.","如果你有空，我們就去看電影。"],["Si j'étais riche, je voyagerais.","如果我有錢，我就去旅行。"]]},
    ]
  },
  {
    id:"g_b1_qui_que", level:"B1", title:"關係代名詞 qui / que",
    summary:"qui 當主詞、que 當受詞",
    blocks:[
      {t:"prose", x:"關係代名詞把兩個句子連起來，避免重複。差別在於它在子句裡扮演的角色：qui 是「主詞」，que 是「受詞」。"},
      {t:"table", head:["代名詞","角色","例"], rows:[["qui","主詞（後接動詞）","l'homme qui parle（在說話的男人）"],["que","受詞（後接主詞）","le livre que je lis（我在讀的書）"]]},
      {t:"note", x:"que 在母音前縮成 qu'：la fille qu'il aime。複合過去時，que 前的先行詞會讓過去分詞性數一致：les fleurs que j'ai achetées。"},
      {t:"ex", items:[["C'est l'ami qui m'aide.","這是幫我的那位朋友。"],["Voici le film que j'adore.","這是我超愛的那部電影。"],["La personne que tu cherches est partie.","你找的人離開了。"],["C'est une histoire qui finit bien.","這是個結局美好的故事。"]]},
    ]
  },
  {
    id:"g_b1_ou_dont", level:"B1", title:"關係代名詞 où / dont",
    summary:"où 代地點時間、dont 代「de ＋ 名詞」",
    blocks:[
      {t:"prose", x:"où 代替地點或時間；dont 代替「de ＋ 名詞」的結構，是學習者較容易卡的一個。"},
      {t:"table", head:["代名詞","代替","例"], rows:[["où","地點 / 時間","la ville où j'habite（我住的城市）"],["dont","de ＋ 名詞","le livre dont je parle（我在說的那本書）"]]},
      {t:"note", x:"dont 常見於 parler de、avoir besoin de、être fier de、rêver de 等片語：la personne dont j'ai besoin（我需要的那個人）。"},
      {t:"ex", items:[["le jour où je suis né","我出生的那一天"],["C'est ce dont j'ai envie.","這正是我想要的。"],["C'est le restaurant dont tout le monde parle.","這就是大家都在談的餐廳。"],["Le moment où je l'ai rencontrée était magique.","我遇見她的那一刻很奇妙。"]]},
    ]
  },
  {
    id:"g_b1_plus_que_parfait", level:"B1", title:"愈過去式（plus-que-parfait）",
    summary:"過去的過去：avais ＋ 過去分詞",
    blocks:[
      {t:"prose", x:"愈過去式表達「過去的過去」——在另一個過去動作之前就已完成的事。構成：助動詞（avoir / être）的未完成過去 ＋ 過去分詞。"},
      {t:"table", head:["主詞","parler (PQP)"], rows:[["j'","avais parlé"],["tu","avais parlé"],["il / elle","avait parlé"],["nous","avions parlé"],["vous","aviez parlé"],["ils / elles","avaient parlé"]]},
      {t:"note", x:"助動詞的選擇與複合過去相同（移動／代動詞用 être）：j'étais parti、je m'étais levé，過去分詞同樣要一致。"},
      {t:"ex", items:[["Il avait déjà mangé quand je suis arrivé.","我到的時候他已經吃過了。"],["Elle était partie avant midi.","她中午前就離開了。"],["Je n'avais jamais vu ça.","我從沒見過這種事。"],["Ils étaient déjà sortis quand j'ai appelé.","我打電話時他們已經出門了。"]]},
    ]
  },
  {
    id:"g_b1_gerondif", level:"B1", title:"副動詞（gérondif：en ＋ -ant）",
    summary:"表同時、方式、條件，同一主詞",
    blocks:[
      {t:"prose", x:"副動詞表示「同時、方式、條件或原因」，形式是 en ＋ 現在分詞（-ant）。注意：兩個動作必須是「同一個主詞」。"},
      {t:"table", head:["意義","例","中譯"], rows:[["同時","en marchant","一邊走路"],["方式","en travaillant","透過工作"],["條件","en partant tôt","早點出發的話"]]},
      {t:"note", x:"現在分詞作法：取 nous 現在式去掉 -ons 再加 -ant（nous finissons → finissant）。三個不規則：étant、ayant、sachant。"},
      {t:"ex", items:[["Il chante en cuisinant.","他一邊做飯一邊唱歌。"],["En travaillant dur, tu réussiras.","努力工作的話，你會成功。"],["Elle écoute de la musique en étudiant.","她邊讀書邊聽音樂。"],["On apprend en faisant des erreurs.","人在犯錯中學習。"]]},
    ]
  },
  {
    id:"g_b1_passive", level:"B1", title:"被動語態（voix passive）",
    summary:"être ＋ 過去分詞 ＋ par",
    blocks:[
      {t:"prose", x:"被動語態強調「動作的承受者」。構成：être（隨時態變化）＋ 過去分詞，動作者用 par 引出。過去分詞要跟主詞性數一致。"},
      {t:"table", head:["主動","被動"], rows:[["Le chef prépare le plat.","Le plat est préparé par le chef."],["（主詞發出動作）","（主詞承受動作）"]]},
      {t:"note", x:"être 可用各種時態：a été préparé（已被）、sera préparé（將被）。動作者不重要時可省略「par …」。"},
      {t:"ex", items:[["Ce livre a été écrit en 1990.","這本書寫於 1990 年。"],["La maison est entourée d'arbres.","房子被樹木環繞。"],["Les résultats seront annoncés demain.","結果明天公布。"],["Ce pont a été construit au 19e siècle.","這座橋建於十九世紀。"]]},
    ]
  },
  {
    id:"g_b1_double_pronouns", level:"B1", title:"雙代名詞並用的順序",
    summary:"me / le / lui / y / en 的固定排序",
    blocks:[
      {t:"prose", x:"一句裡同時出現兩個代名詞時，有固定的排列順序，全部放在動詞前。"},
      {t:"table", head:["1","2","3","4","5"], rows:[["me / te / se","le / la","lui","y","en"],["nous / vous","les","leur","",""]]},
      {t:"note", x:"口訣順序：me/te/se/nous/vous → le/la/les → lui/leur → y → en。例：Je le lui donne.（我把它給他）、Il y en a.（那裡有一些）。"},
      {t:"ex", items:[["Je te le prête.","我把它借給你。"],["Il me l'a dit.","他跟我說了這件事。"],["Donne-les-moi.","把它們給我。"],["Tu me le promets ?","你跟我保證？"],["Je vais lui en parler.","我會跟他談這件事。"]]},
    ]
  },
  {
    id:"g_b1_discours_indirect", level:"B1", title:"間接引述（discours indirect）",
    summary:"把直接引語改成 que / si 子句",
    blocks:[
      {t:"prose", x:"間接引述是把別人說的話轉述出來。直接引語的引號改成 que 子句，人稱與某些字要跟著調整。"},
      {t:"table", head:["直接引述","間接引述"], rows:[["Il dit : « Je suis fatigué. »","Il dit qu'il est fatigué."],["Elle demande : « Tu viens ? »","Elle demande si tu viens."],["« Où vas-tu ? »","Il demande où tu vas."]]},
      {t:"note", x:"是非問句改用 si 引導；有疑問詞則保留（où、quand、comment…）。若主句是過去式，從句時態還要往後推移（這部分留待 B2 深入）。"},
      {t:"ex", items:[["Il dit qu'il a faim.","他說他餓了。"],["Elle demande si c'est vrai.","她問這是不是真的。"],["Il m'a dit qu'il viendrait.","他跟我說他會來。"],["Elle demande ce que tu fais.","她問你在做什麼。"]]},
    ]
  },
  {
    id:"g_b1_connecteurs", level:"B1", title:"邏輯連接詞（原因、結果、轉折）",
    summary:"parce que / donc / pourtant / bien que",
    blocks:[
      {t:"prose", x:"連接詞讓論述有條理。依「邏輯關係」分類來記最有效率。"},
      {t:"table", head:["關係","連接詞","例"], rows:[["原因","parce que, car, puisque","Je reste parce qu'il pleut."],["結果","donc, alors, c'est pourquoi","Il pleut, donc je reste."],["轉折","mais, pourtant, cependant","C'est cher, pourtant je l'achète."],["讓步","bien que（＋虛擬式）","Bien qu'il pleuve, je sors."]]},
      {t:"note", x:"bien que 後面要接虛擬式。car 較書面、parce que 較口語，兩者都表原因，但 car 不能放句首。"},
      {t:"ex", items:[["Il fait froid, donc je mets un manteau.","天冷，所以我穿大衣。"],["Bien que ce soit difficile, je continue.","雖然很難，我還是繼續。"],["Puisque tu insistes, j'accepte.","既然你堅持，我就答應。"],["Il est malade, c'est pourquoi il est absent.","他生病了，所以缺席。"]]},
    ]
  },

  /* ============ B2 ============ */
  {
    id:"g_b2_subjonctif_passe", level:"B2", title:"虛擬式過去式（subjonctif passé）",
    summary:"主觀子句中「已完成」的動作",
    blocks:[
      {t:"prose", x:"虛擬式過去式表達在主句「之前已完成」、且帶主觀色彩的動作。構成：avoir / être 的虛擬式現在 ＋ 過去分詞。觸發語與虛擬式現在相同，差別只在「已完成」。"},
      {t:"table", head:["主詞","parler（subj. passé）"], rows:[["que j'","aie parlé"],["que tu","aies parlé"],["qu'il / elle","ait parlé"],["que nous","ayons parlé"],["que vous","ayez parlé"],["qu'ils / elles","aient parlé"]]},
      {t:"note", x:"être 類動詞：que je sois parti(e)、qu'elle soit venue。常用於情感／懷疑＋已發生的事。"},
      {t:"ex", items:[["Je suis content que tu sois venu.","我很高興你來了。"],["Bien qu'il ait beaucoup travaillé, il a échoué.","儘管他很努力，還是失敗了。"],["Je doute qu'elle ait compris.","我懷疑她當時有沒有聽懂。"],["Il est possible qu'ils soient déjà partis.","他們有可能已經走了。"],["C'est dommage que vous n'ayez pas pu venir.","你們沒能來真可惜。"]]},
    ]
  },
  {
    id:"g_b2_conditionnel_passe", level:"B2", title:"條件式過去式與第三型假設句",
    summary:"過去未實現的假設、後悔與委婉指責",
    blocks:[
      {t:"prose", x:"條件式過去式表達「過去未實現的假設結果」，也用來表達後悔或委婉的指責。構成：avoir / être 的條件式現在 ＋ 過去分詞。"},
      {t:"table", head:["主詞","faire（cond. passé）"], rows:[["j'","aurais fait"],["tu","aurais fait"],["il / elle","aurait fait"],["nous","aurions fait"],["vous","auriez fait"],["ils / elles","auraient fait"]]},
      {t:"note", x:"第三型假設句（與過去事實相反）：Si ＋ plus-que-parfait → conditionnel passé。委婉指責常用：Tu aurais dû…（你早該…）。"},
      {t:"ex", items:[["Si j'avais su, je ne serais pas venu.","早知道我就不來了。"],["Tu aurais dû lui dire la vérité.","你當初該跟他說實話。"],["J'aurais aimé te voir.","我本來很想見你。"],["Sans toi, j'aurais abandonné.","沒有你，我早就放棄了。"],["Elle aurait pu réussir si elle avait essayé.","她要是試了，本來能成功。"]]},
    ]
  },
  {
    id:"g_b2_concordance", level:"B2", title:"間接引述的時態後移",
    summary:"主句為過去式時，子句時態往過去推移",
    blocks:[
      {t:"prose", x:"當引述的主句是「過去式」時，被引述子句的時態要往過去推移，這就是 concordance des temps（時態配合），是 DELF 寫作的關鍵細節。"},
      {t:"table", head:["直接（現在主句）","間接（過去主句）"], rows:[["現在：il vient","未完成：qu'il venait"],["複合過去：il est venu","愈過去：qu'il était venu"],["未來：il viendra","條件式：qu'il viendrait"]]},
      {t:"note", x:"時間詞也要調整：aujourd'hui → ce jour-là、hier → la veille、demain → le lendemain、maintenant → à ce moment-là。"},
      {t:"ex", items:[["Il a dit qu'il était fatigué.","他說他當時累了。"],["Elle m'a demandé si je viendrais.","她問我會不會來。"],["Il a expliqué qu'il avait déjà fini.","他解釋說他早就做完了。"],["Ils ont annoncé qu'ils partiraient le lendemain.","他們宣布隔天會出發。"],["Je pensais qu'elle avait raison.","我當時以為她是對的。"]]},
    ]
  },
  {
    id:"g_b2_passive_avancee", level:"B2", title:"被動語態（各時態）與替代說法",
    summary:"各時態被動，及 on / se faire 的口語替代",
    blocks:[
      {t:"prose", x:"被動語態可用於各種時態。口語中常用 on 或 se faire ＋ 原形 來避開正式被動，更自然。"},
      {t:"table", head:["時態 / 形式","例"], rows:[["現在","Le projet est validé."],["複合過去","Le projet a été validé."],["未來","Le projet sera validé."],["口語替代","On a validé le projet. / Il s'est fait voler son sac."]]},
      {t:"note", x:"動作者不明或不重要時可省略 par…。se faire ＋ 原形 表示「遭遇某事」：Il s'est fait renvoyer.（他被開除了）。口語極常用 on 取代被動。"},
      {t:"ex", items:[["Cette loi a été votée l'an dernier.","這條法律去年通過。"],["Le coupable sera jugé en mars.","嫌犯將於三月受審。"],["On m'a dit que c'était fermé.","有人跟我說那裡關了。"],["Elle s'est fait gronder par son chef.","她被主管罵了。"],["Le bâtiment est en train d'être rénové.","這棟建築正在翻修中。"]]},
    ]
  },
  {
    id:"g_b2_mise_en_relief", level:"B2", title:"強調句（mise en relief）",
    summary:"c'est … qui / que、ce qui … c'est",
    blocks:[
      {t:"prose", x:"把句子的某部分提出來強調，是論述與口說讓論點更有力的常用技巧，DELF 口說與寫作都很加分。"},
      {t:"table", head:["結構","強調對象","例"], rows:[["c'est … qui","主詞","C'est moi qui ai raison."],["c'est … que","受詞 / 其他","C'est ce livre que je veux."],["ce qui … c'est","主詞概念","Ce qui compte, c'est l'effort."],["ce que … c'est","受詞概念","Ce que j'aime, c'est voyager."]]},
      {t:"note", x:"c'est … qui 強調主詞時，動詞要跟被強調的人稱一致：C'est moi qui ai（不是 a）。"},
      {t:"ex", items:[["C'est toi qui décides.","由你來決定。"],["C'est pour ça que je suis venu.","我就是為這個而來的。"],["Ce qui m'intéresse, c'est la culture.","我感興趣的是文化。"],["Ce dont j'ai besoin, c'est de temps.","我需要的是時間。"],["C'est en forgeant qu'on devient forgeron.","熟能生巧。（諺語）"]]},
    ]
  },
  {
    id:"g_b2_subjonctif_connecteurs", level:"B2", title:"觸發虛擬式的進階連接詞",
    summary:"afin que、à condition que、avant que…",
    blocks:[
      {t:"prose", x:"許多表「目的、條件、時間、讓步、擔憂」的連接詞會強制接虛擬式。用對這些連接詞，DELF B2 論說文會很加分。"},
      {t:"table", head:["關係","連接詞","例"], rows:[["目的","afin que, pour que","Je t'explique pour que tu comprennes."],["條件","à condition que, pourvu que","D'accord, à condition que tu m'aides."],["時間","avant que, jusqu'à ce que","Partons avant qu'il pleuve."],["讓步","bien que, quoique","Quoiqu'il soit tard, je continue."],["擔憂","de peur que, de crainte que","Je me dépêche de peur qu'il parte."]]},
      {t:"note", x:"注意：après que 理論上接直陳式（雖常被混用）。sans que、à moins que 也接虛擬式。"},
      {t:"ex", items:[["Je le répète afin que tout le monde comprenne.","我重複一遍好讓大家都懂。"],["Tu peux sortir pourvu que tu rentres tôt.","你可以出去，只要早點回來。"],["Restons jusqu'à ce que ça se calme.","我們待到平靜下來為止。"],["Bien que ce soit risqué, ça vaut le coup.","雖然有風險，但值得。"],["Il a réussi sans que personne l'aide.","沒有任何人幫忙，他就成功了。"]]},
    ]
  },
  {
    id:"g_b2_accord_pp", level:"B2", title:"過去分詞的一致",
    summary:"être 跟主詞、avoir 跟前置直接受詞",
    blocks:[
      {t:"prose", x:"過去分詞何時要性數一致，是 DELF 寫作常被扣分的細節。掌握三條主規則就能應付大多數情況。"},
      {t:"table", head:["助動詞","一致對象","例"], rows:[["être","跟主詞","Elle est partie. / Ils sont venus."],["avoir ＋ 前置受詞","跟「前置」直接受詞","Les fleurs que j'ai achetées."],["avoir（受詞在後）","不變","J'ai acheté des fleurs."]]},
      {t:"note", x:"代動詞通常跟主詞（Elle s'est lavée），但若動詞後已有直接受詞，分詞就不變：Elle s'est lavé les mains。"},
      {t:"ex", items:[["La lettre que j'ai écrite est longue.","我寫的那封信很長。"],["Elles se sont rencontrées à Paris.","她們在巴黎相遇。"],["Les clés ? Je les ai perdues.","鑰匙？我把它們弄丟了。"],["Nous avons mangé toute la tarte.","我們把整個派吃光了。"],["Elle s'est lavé les mains.","她洗了手。"]]},
    ]
  },
  {
    id:"g_b2_relatifs_composes", level:"B2", title:"進階關係代名詞（lequel、ce qui / que / dont）",
    summary:"介系詞後的關係代名詞與不明先行詞",
    blocks:[
      {t:"prose", x:"介系詞後面要用 lequel 系列；ce qui / ce que / ce dont 則代替「整個句子」或不明確的先行詞。"},
      {t:"table", head:["形式","用法","例"], rows:[["lequel / laquelle…","介系詞 ＋ 物","la table sur laquelle…"],["auquel / duquel","à / de ＋ lequel","le problème auquel je pense"],["ce qui","代替整句（主詞）","Il pleut, ce qui m'ennuie."],["ce que / ce dont","代替整句（受詞）","Dis-moi ce que tu veux."]]},
      {t:"note", x:"介系詞後接「人」時多用 qui（la personne avec qui…）；接「物」用 lequel（l'outil avec lequel…）。"},
      {t:"ex", items:[["Voici le stylo avec lequel j'écris.","這是我用來寫字的筆。"],["C'est une question à laquelle je ne peux pas répondre.","這是個我無法回答的問題。"],["Il est en retard, ce qui m'énerve.","他遲到了，這讓我惱火。"],["Je sais ce que tu penses.","我知道你在想什麼。"],["Ce dont il a peur, c'est l'échec.","他怕的是失敗。"]]},
    ]
  },
  {
    id:"g_b2_nominalisation", level:"B2", title:"名詞化（書面／新聞體）",
    summary:"動詞轉名詞，讓句子更精簡正式",
    blocks:[
      {t:"prose", x:"把動詞或形容詞轉成名詞，讓句子更精簡、更書面，是新聞標題與正式寫作的特色，也是 DELF 閱讀常見的句型。"},
      {t:"table", head:["動詞","名詞","例"], rows:[["augmenter","l'augmentation","l'augmentation des prix（物價上漲）"],["arriver","l'arrivée","l'arrivée du train（火車抵達）"],["créer","la création","la création d'emplois（創造就業）"],["fermer","la fermeture","la fermeture du magasin（商店歇業）"]]},
      {t:"note", x:"名詞化在新聞標題中極常見（例：「Hausse du chômage」＝失業率上升）。寫作中適度使用能提升正式度與訊息密度。"},
      {t:"ex", items:[["La hausse du chômage inquiète.","失業率上升令人憂心。"],["L'interdiction est entrée en vigueur.","禁令已生效。"],["Le développement durable est une priorité.","永續發展是當務之急。"],["La réduction des dépenses est nécessaire.","削減開支是必要的。"]]},
    ]
  },
  {
    id:"g_b2_negation_avancee", level:"B2", title:"否定的細緻表達",
    summary:"ne…plus / jamais / rien / personne / que",
    blocks:[
      {t:"prose", x:"除了 ne…pas，法文有一整套否定，能精準表達「不再、從不、什麼都不、誰都不、只有」。"},
      {t:"table", head:["否定","意義","例"], rows:[["ne … plus","不再","Je ne fume plus."],["ne … jamais","從不","Il n'est jamais content."],["ne … rien","什麼都不","Je ne vois rien."],["ne … personne","誰都不","Il n'y a personne."],["ne … que","只（限定）","Je n'ai que dix euros."]]},
      {t:"note", x:"ne…que 不是否定，而是「只有」（＝seulement）。口語中 ne 常被省略：「J'ai que dix euros.」「Y a personne.」——這是道地口語的明顯特徵。"},
      {t:"ex", items:[["Je ne comprends rien à ce texte.","這篇我完全看不懂。"],["Personne n'est venu.","沒有人來。"],["Elle ne sort jamais le soir.","她晚上從不出門。"],["Il ne reste plus de pain.","麵包沒了。"],["Je n'ai qu'une question.","我只有一個問題。"]]},
    ]
  },
  {
    id:"g_b2_passe_simple", level:"B2", title:"書面語過去時（passé simple，辨識）",
    summary:"文學與歷史敘述專用，學會辨認即可",
    blocks:[
      {t:"prose", x:"passé simple 是文學、童話與歷史敘述專用的過去時，「只出現在書面」，口語完全不用。對學習者而言，學會「辨認」就足夠，DELF 閱讀小說／故事會遇到。"},
      {t:"table", head:["主詞","parler","être","avoir"], rows:[["il / elle","parla","fut","eut"],["ils / elles","parlèrent","furent","eurent"]]},
      {t:"note", x:"口語與日常書信一律用複合過去（passé composé）取代。第三人稱最常見：il alla（去）、il fit（做）、il vint（來）、il prit（拿）。"},
      {t:"ex", items:[["Il entra et s'assit.","他走進來坐下。（文學體）"],["Elle prit le livre et partit.","她拿起書離開了。"],["Ils furent très surpris.","他們非常驚訝。"],["Le roi mourut en 1715.","國王於 1715 年駕崩。"]]},
    ]
  },
  {
    id:"g_b2_registres", level:"B2", title:"語域：口語 vs 書面（registre）",
    summary:"同一個意思的三種正式程度說法",
    blocks:[
      {t:"prose", x:"法文很重視「語域」——同樣的意思，在口語（familier）、日常（courant）、正式書面（soutenu）會用不同說法。DELF 的口說與寫作都會評分這一點。"},
      {t:"table", head:["口語 familier","日常 courant","正式 / 書面 soutenu"], rows:[["Y a pas de souci.","Il n'y a pas de problème.","Cela ne pose aucun problème."],["Je sais pas.","Je ne sais pas.","Je l'ignore."],["C'est nul.","Ce n'est pas bien.","Cela laisse à désirer."],["un truc","une chose","un élément"],["bosser","travailler","exercer une activité"]]},
      {t:"note", x:"口語特徵：省略 ne、用 on 代 nous、ça 代 cela、句末加 quoi / hein。書面則保留完整否定、用 nous、避免縮略與填充詞。DELF 口說可用 courant，寫作（正式信、論說文）要往 soutenu 靠。"},
      {t:"ex", items:[["Ça marche ! → Entendu.","好的！（口語 → 正式）"],["On y va ? → Allons-y.","我們走吧？（口語 → 正式）"],["Je peux pas venir. → Je ne peux pas venir.","我不能來。（口語 → 書面）"],["C'est trop bien ! → C'est remarquable.","超棒的！（口語 → 正式）"],["Bref, je suis d'accord. → En somme, je suis d'accord.","總之我同意。（口語 → 正式）"]]},
    ]
  },
];
