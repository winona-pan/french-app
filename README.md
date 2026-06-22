# Carnet de Français｜法文學習筆記

主題式法文背單字 App（A1 為主），含日常會話、文法輔助與練習題。純 vanilla JS、無框架、無打包工具，可直接部署 GitHub Pages。

## 功能
- **雙導覽**：依主題瀏覽 / 依等級瀏覽（A1–B2）
- **雙單字介面**：翻牌卡片 / 列表（可勾選已學會、加星收藏）
- **三種練習題**：中法選擇題（中↔法雙向）、句子填空、拼字輸入測驗（檢查重音符號）
- **動詞現在式六人稱變化**、**名詞／形容詞陰性形**
- localStorage 記錄學習進度，手機優先設計

## 檔案結構
```
index.html        HTML 外殼，依序載入 CSS → 資料檔 → 主程式
style.css         全部樣式（南法粉藍主題）
data/
  greetings.js …  18 個主題的單字資料，掛在 window.VOCAB.<主題>
  themes.js       主題清單與等級（須在所有資料檔之後載入）
js/
  app.js          工具、狀態、畫面渲染、練習題引擎
```

## 部署到 GitHub Pages
1. 把整個資料夾推到 GitHub repo（例如 repo 名 `francais`）。
2. Settings → Pages → Source 選 `main` 分支、`/ (root)`。
3. 幾分鐘後即可透過 `https://<帳號>.github.io/francais/` 開啟。

本機測試：直接雙擊 `index.html` 也能跑（classic script，不受 file:// 限制）。

## 怎麼新增單字
打開對應主題的 `data/<主題>.js`，照同樣格式加一筆即可：
```js
{ id:"x99", word:"法文", match:"比對用拼寫", pos:"詞性",
  zh:"中文", example_fr:"例句", example_zh:"中文翻譯",
  conj:["je …","tu …","il …","nous …","vous …","ils …"], // 動詞才需要
  fem:"陰性形" }                                            // 有陰陽變化才需要
```
- `match`：填空／拼字測驗的比對基準，小寫、可不含重音（系統會自動忽略重音與標點）。
- 若同一主題內出現重複拼寫（例如 sucre 名詞與 sucré 形容詞），把其中一個 `match` 加尾碼（如 `sucre2`）避免衝突。

## 怎麼新增主題（之後擴充 A2–B2）
1. 新增 `data/<新主題>.js`，內容掛在 `window.VOCAB.<新主題>`。
2. 在 `index.html` 的資料區加一行 `<script src="data/<新主題>.js"></script>`（放在 themes.js 之前）。
3. 在 `data/themes.js` 的 `THEMES` 陣列加一筆，`level` 填 `A2`/`B1`/`B2`，`data` 指向 `(window.VOCAB.<新主題>||[])`。
