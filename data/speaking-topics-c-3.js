/* 口說主題練習 C1/C2 批次 3：人工智慧（C1×3、C2×3） */
(function(){
  window.SPEAKING_TOPICS = window.SPEAKING_TOPICS || [];
  const TP=window.SPEAKING_TOPICS;
  TP.push(
    /* ===== 人工智慧 C1 ===== */
    { id:"st_c1_ai_quotidien", level:"C1", theme:"人工智慧", title:"AI 在日常生活",
      intro:"C1：流暢談 AI 議題。談人工智慧在生活中的應用。",
      items:[
        {q:"Comment l'intelligence artificielle est-elle présente dans notre quotidien ?", qzh:"人工智慧如何存在於我們的日常？", a:"Elle est partout : assistants vocaux, recommandations, traduction automatique.", azh:"它無所不在：語音助理、推薦、自動翻譯。"},
        {q:"Utilisez-vous des outils d'IA ?", qzh:"您會使用 AI 工具嗎？", a:"Oui, régulièrement, pour traduire ou organiser mon travail.", azh:"是的，我常用來翻譯或整理工作。"},
        {q:"Ces outils vous facilitent-ils la vie ?", qzh:"這些工具讓您生活更便利嗎？", a:"Beaucoup ; ils me font gagner un temps précieux.", azh:"很大程度上，它們為我省下寶貴時間。"},
        {q:"Y a-t-il des inconvénients ?", qzh:"有什麼缺點嗎？", a:"On peut devenir dépendant et perdre certains réflexes.", azh:"人可能變得依賴、失去某些本能。"},
        {q:"Faut-il apprendre à les utiliser dès l'école ?", qzh:"該從學校就學會使用嗎？", a:"Oui, c'est devenu une compétence essentielle.", azh:"該，這已成為必備能力。"},
      ]
    },
    { id:"st_c1_ai_travail", level:"C1", theme:"人工智慧", title:"AI 與工作",
      intro:"C1：談 AI 如何改變職場。",
      items:[
        {q:"L'IA va-t-elle transformer le monde du travail ?", qzh:"AI 會改變職場嗎？", a:"Profondément ; elle automatise de nombreuses tâches répétitives.", azh:"深刻地；它自動化許多重複性任務。"},
        {q:"Quels métiers sont les plus concernés ?", qzh:"哪些職業最受影響？", a:"Surtout ceux fondés sur des tâches routinières et prévisibles.", azh:"尤其是以例行、可預測任務為主的工作。"},
        {q:"L'IA crée-t-elle aussi des emplois ?", qzh:"AI 也創造工作嗎？", a:"Oui, de nouveaux métiers liés aux données et à la technologie.", azh:"是，與資料和科技相關的新職業。"},
        {q:"Comment s'y préparer ?", qzh:"該如何因應？", a:"En développant des compétences que la machine ne possède pas.", azh:"培養機器不具備的能力。"},
        {q:"Faut-il en avoir peur ?", qzh:"該害怕它嗎？", a:"Plutôt s'y adapter que la craindre.", azh:"與其畏懼，不如去適應。"},
      ]
    },
    { id:"st_c1_ai_principe", level:"C1", theme:"人工智慧", title:"機器學習原理",
      intro:"C1：談機器學習如何運作。",
      items:[
        {q:"Comment fonctionne l'apprentissage automatique ?", qzh:"機器學習如何運作？", a:"La machine apprend à partir de grandes quantités de données.", azh:"機器從大量資料中學習。"},
        {q:"Pourquoi les données sont-elles si importantes ?", qzh:"資料為何如此重要？", a:"Sans données de qualité, les modèles deviennent peu fiables.", azh:"沒有優質資料，模型就不可靠。"},
        {q:"L'IA peut-elle se tromper ?", qzh:"AI 會出錯嗎？", a:"Bien sûr ; elle reproduit parfois les biais de ses données.", azh:"當然；它有時複製資料中的偏誤。"},
        {q:"Comprend-elle vraiment ce qu'elle fait ?", qzh:"它真的理解自己在做什麼嗎？", a:"Non, elle calcule des probabilités sans véritable conscience.", azh:"不，它計算機率，並無真正的意識。"},
        {q:"Ses progrès vous impressionnent-ils ?", qzh:"它的進步讓您驚艷嗎？", a:"Oui, surtout la rapidité avec laquelle elle évolue.", azh:"是的，尤其它演進的速度。"},
      ]
    },
    /* ===== 人工智慧 C2 ===== */
    { id:"st_c2_ai_ethique", level:"C2", theme:"人工智慧", title:"AI 倫理",
      intro:"C2：精準辯證 AI 的倫理問題。",
      items:[
        {q:"Quels sont les principaux enjeux éthiques de l'IA ?", qzh:"AI 主要的倫理課題是？", a:"La transparence, la responsabilité et le respect de la vie privée.", azh:"透明、究責與隱私的尊重。"},
        {q:"Qui est responsable si une IA cause un préjudice ?", qzh:"AI 造成損害時誰該負責？", a:"La question reste complexe : concepteurs, utilisateurs ou entreprises.", azh:"這問題仍複雜：設計者、使用者或企業。"},
        {q:"Les biais algorithmiques sont-ils inévitables ?", qzh:"演算法偏誤無可避免嗎？", a:"Difficiles à éliminer, car ils proviennent de données humaines.", azh:"難以消除，因為它們源自人類的資料。"},
        {q:"Faut-il encadrer l'IA par la loi ?", qzh:"該用法律規範 AI 嗎？", a:"Oui, une régulation est indispensable pour prévenir les dérives.", azh:"該，監管對防止失控不可或缺。"},
        {q:"Peut-on concilier innovation et éthique ?", qzh:"創新與倫理能兼顧嗎？", a:"Oui, à condition d'intégrer l'éthique dès la conception.", azh:"可以，前提是從設計階段就納入倫理。"},
      ]
    },
    { id:"st_c2_ai_emploi", level:"C2", theme:"人工智慧", title:"AI 與就業未來",
      intro:"C2：談 AI 對就業的長遠影響。",
      items:[
        {q:"L'IA menace-t-elle réellement l'emploi humain ?", qzh:"AI 真的威脅人類就業嗎？", a:"Elle transforme l'emploi plus qu'elle ne le détruit entièrement.", azh:"它改變就業，而非完全摧毀。"},
        {q:"Faut-il instaurer un revenu universel face à l'automatisation ?", qzh:"面對自動化該推行全民基本收入嗎？", a:"C'est une piste sérieuse, mais qui soulève de nombreuses questions.", azh:"這是個值得認真考慮的方向，但引發許多疑問。"},
        {q:"Comment préserver la valeur du travail humain ?", qzh:"如何保住人類工作的價值？", a:"En valorisant la créativité, l'empathie et le jugement.", azh:"透過重視創造力、同理與判斷力。"},
        {q:"Les inégalités risquent-elles de se creuser ?", qzh:"不平等會加劇嗎？", a:"Oui, si l'accès à ces technologies reste inégal.", azh:"是，若取得這些科技的機會仍不均。"},
        {q:"Êtes-vous optimiste pour l'avenir du travail ?", qzh:"您對工作的未來樂觀嗎？", a:"Modérément, à condition d'anticiper et de bien former les gens.", azh:"審慎樂觀，前提是及早預備並做好培訓。"},
      ]
    },
    { id:"st_c2_ai_creativite", level:"C2", theme:"人工智慧", title:"AI 與創造力",
      intro:"C2：談 AI 是否真能有創造力。",
      items:[
        {q:"L'IA peut-elle être réellement créative ?", qzh:"AI 能真正有創造力嗎？", a:"Elle imite la créativité, mais sans intention ni émotion propre.", azh:"它模仿創造力，卻沒有自身的意圖與情感。"},
        {q:"L'art généré par IA a-t-il de la valeur ?", qzh:"AI 生成的藝術有價值嗎？", a:"Cela dépend : il interroge notre définition même de l'art.", azh:"看情況：它叩問我們對藝術的定義。"},
        {q:"Menace-t-elle les artistes ?", qzh:"它威脅藝術家嗎？", a:"Elle bouscule certains métiers, mais peut aussi devenir un outil.", azh:"它衝擊某些行業，但也能成為工具。"},
        {q:"Qui est l'auteur d'une œuvre créée par IA ?", qzh:"AI 創作的作品作者是誰？", a:"La question juridique n'est pas encore tranchée.", azh:"這個法律問題尚無定論。"},
        {q:"La créativité restera-t-elle propre à l'humain ?", qzh:"創造力會仍是人類獨有嗎？", a:"En grande partie, car elle naît de notre vécu et de nos émotions.", azh:"大致是，因為它源於我們的經歷與情感。"},
      ]
    }
  );
})();
