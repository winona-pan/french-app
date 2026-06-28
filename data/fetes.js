/* 法國節慶日曆 vs 台灣：依日期排序
   {date, fr(法語名), zh(中文名), note(說明), tw(台灣對照), greet(這天常說的話), greetzh} */
window.FETES = [
  {date:"1 月 1 日", fr:"Le Jour de l'An", zh:"元旦", note:"國定假日。前一晚的跨年夜大家會聚會倒數，迎接新的一年。", tw:"台灣也放元旦，但農曆春節才是最重要的年節。", greet:"Bonne année !", greetzh:"新年快樂！"},
  {date:"1 月初", fr:"L'Épiphanie", zh:"主顯節・國王餅", note:"吃「galette des rois」國王餅，餅裡藏一顆小瓷偶(fève)，吃到的人當「國王」戴紙皇冠。", tw:"台灣沒有對應節日；類似『吃到藏物者有好運』的趣味習俗。", greet:"Vive le roi !", greetzh:"國王萬歲！（給吃到蠶豆的人）"},
  {date:"2 月 2 日", fr:"La Chandeleur", zh:"聖蠟節・可麗餅日", note:"全家煎可麗餅(crêpes)，傳說單手拿硬幣、另一手順利翻餅就會帶來好運與財富。", tw:"台灣無對應；可當成『法式可麗餅日』記。", greet:"Bonne Chandeleur !", greetzh:"聖蠟節快樂！"},
  {date:"2 月 14 日", fr:"La Saint-Valentin", zh:"情人節", note:"情侶送花、巧克力、共進晚餐，氣氛浪漫。", tw:"與台灣 2/14 情人節相同；台灣另有七夕情人節。", greet:"Joyeuse Saint-Valentin !", greetzh:"情人節快樂！"},
  {date:"3–4 月（不固定）", fr:"Pâques", zh:"復活節", note:"基督教重要節日。小孩在花園找彩蛋與巧克力蛋，隔週一「lundi de Pâques」放假。", tw:"台灣無對應；時間上與清明節相近，但意義完全不同。", greet:"Joyeuses Pâques !", greetzh:"復活節快樂！"},
  {date:"5 月 1 日", fr:"La Fête du Travail", zh:"勞動節", note:"國定假日，幾乎全國放假。傳統上會互送鈴蘭花(muguet)祝福好運。", tw:"台灣 5/1 也是勞動節（勞工放假），但無送花習俗。", greet:"Bon 1er mai !", greetzh:"五一勞動節快樂！"},
  {date:"5 月 8 日", fr:"La Victoire 1945", zh:"二戰歐戰勝利紀念日", note:"紀念二戰歐洲戰場結束的國定假日，屬莊嚴的緬懷日，非歡慶。", tw:"台灣無對應節日。", greet:"Devoir de mémoire.", greetzh:"勿忘歷史、緬懷先人。（莊重）"},
  {date:"5 月底（週日）", fr:"La Fête des Mères", zh:"母親節", note:"通常在五月最後一個週日，子女送花與禮物感謝母親。", tw:"台灣母親節是五月第二個週日，日期通常比法國早。", greet:"Bonne fête, Maman !", greetzh:"媽媽，節日快樂！"},
  {date:"6 月 21 日", fr:"La Fête de la Musique", zh:"音樂節", note:"夏至這天全國街頭、廣場有免費音樂演出，業餘與專業樂手同歡，氣氛熱鬧。", tw:"台灣無國定對應，但這個概念很受喜愛。", greet:"Bonne fête de la musique !", greetzh:"音樂節快樂！"},
  {date:"7 月 14 日", fr:"La Fête nationale", zh:"國慶日・巴士底日", note:"紀念法國大革命。香榭大道閱兵、艾菲爾鐵塔煙火、各地有舞會(bal)。", tw:"台灣國慶是 10/10 雙十節，同樣有慶典與煙火。", greet:"Vive la France !", greetzh:"法蘭西萬歲！"},
  {date:"8 月 15 日", fr:"L'Assomption", zh:"聖母升天節", note:"天主教節日，國定假日；正值暑假，許多人外出度假。", tw:"台灣無對應；時間接近中元節，但意義不同。", greet:"Bon 15 août !", greetzh:"八月十五假期愉快！"},
  {date:"11 月 1 日", fr:"La Toussaint", zh:"諸聖節", note:"國定假日，家庭到墓園獻上菊花(chrysanthèmes)、追思先人，屬緬懷日。", tw:"概念上最接近台灣的清明掃墓；也因此菊花在法國別當禮物送。", greet:"En mémoire de nos proches.", greetzh:"追思逝去的親人。（莊重）"},
  {date:"11 月 11 日", fr:"L'Armistice", zh:"一戰停戰紀念日", note:"紀念第一次世界大戰結束的國定假日，莊嚴緬懷。", tw:"台灣無對應節日。", greet:"Nous nous souvenons.", greetzh:"我們緬懷紀念。（莊重）"},
  {date:"12 月 25 日", fr:"Noël", zh:"聖誕節", note:"最重要的家庭節日。平安夜大餐(réveillon)、聖誕樹、交換禮物，多與家人團聚。", tw:"台灣聖誕節氣氛濃厚但非國定假日；家庭團圓主要在農曆春節。", greet:"Joyeux Noël !", greetzh:"聖誕快樂！"},
  {date:"12 月 31 日", fr:"La Saint-Sylvestre", zh:"跨年夜", note:"和朋友聚會、派對倒數迎接新年，城市常有煙火。", tw:"與台灣跨年倒數相同，台北 101 煙火是代表。", greet:"Bonne fin d'année !", greetzh:"祝你年末愉快！"},
];
