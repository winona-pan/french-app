/* 主題清單與等級設定 */
const THEMES = [
  {id:"greetings", level:"A1", name:"打招呼與自我介紹", data:(window.VOCAB.greetings||[])},
  {id:"numbers", level:"A1", name:"數字／時間／日期", data:(window.VOCAB.numbers||[])},
  {id:"family", level:"A1", name:"家庭與人際關係", data:(window.VOCAB.family||[])},
  {id:"colors", level:"A1", name:"顏色／形狀", data:(window.VOCAB.colors||[])},
  {id:"adjectives", level:"A1", name:"基本形容詞", data:(window.VOCAB.adjectives||[])},
  {id:"food", level:"A1", name:"食物與飲料", data:(window.VOCAB.food||[])},
  {id:"home", level:"A1", name:"居家空間與日常用品", data:(window.VOCAB.home||[])},
  {id:"clothes", level:"A1", name:"服飾穿搭", data:(window.VOCAB.clothes||[])},
  {id:"body", level:"A1", name:"身體與健康用語", data:(window.VOCAB.body||[])},
  {id:"animals", level:"A1", name:"動物", data:(window.VOCAB.animals||[])},
  {id:"transport", level:"A1", name:"交通工具與方向", data:(window.VOCAB.transport||[])},
  {id:"weather", level:"A1", name:"天氣", data:(window.VOCAB.weather||[])},
  {id:"school", level:"A1", name:"學校用品與學科", data:(window.VOCAB.school||[])},
  {id:"jobs", level:"A1", name:"職業", data:(window.VOCAB.jobs||[])},
  {id:"places", level:"A1", name:"城市與地點", data:(window.VOCAB.places||[])},
  {id:"verbs", level:"A1", name:"常用動詞", data:(window.VOCAB.verbs||[])},
  {id:"function", level:"A1", name:"介系詞／連接詞／疑問詞", data:(window.VOCAB.function||[])},
  {id:"hobbies", level:"A1", name:"興趣愛好基礎", data:(window.VOCAB.hobbies||[])},
  {id:"food_a2", level:"A2", name:"食物與飲料（進階）", data:(window.VOCAB.food_a2||[])},
  {id:"transport_a2", level:"A2", name:"交通與出行（進階）", data:(window.VOCAB.transport_a2||[])},
];
const LEVELS = ["A1","A2","B1","B2"];
