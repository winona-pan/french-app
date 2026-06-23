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
