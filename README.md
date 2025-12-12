# JASON_WU Portfolio

這是一個基於 HTML/CSS/JS 與 Three.js 打造的「駭客/終端機風格」個人履歷網站。
網站設計採用深色模式、霓虹綠配色，並包含 3D 粒子背景與打字機特效，適合展示資訊工程、資安或程式開發相關的作品集。

## 📁 專案結構 (Project Structure)

```text
/ (Root)
├── index.html      # 網站主結構與內容
├── style.css       # 視覺樣式、動畫與 RWD 設定
├── script.js       # 互動邏輯與 Three.js 背景特效
└── assets/         # 圖片資源資料夾
    └── avatar.png  # 個人大頭照 (建議 500x500px)
```

## 🚀 快速開始 (Quick Start)

1. **下載專案**：將所有檔案下載至本機。
2. **準備圖片**：
   - 在專案目錄下建立 `assets` 資料夾。
   - 將您的大頭照重新命名為 `avatar.png` 並放入 `assets` 資料夾中。
3. **啟動網站**：
   - 直接用瀏覽器打開 `index.html`。
   - 推薦使用 VS Code 的 **Live Server** 插件開啟，以獲得最佳瀏覽體驗。

## 🛠️ 如何客製化 (Customization)

### 1. 修改個人資訊
打開 `index.html`，搜尋並替換以下內容：
- **姓名與簡介**：搜尋 `01_User_Identity` 區塊。
- **聯絡方式**：修改 `MAIL` 與其他部分。
- **技能數據**：在 `data-progress="90"` 中修改數值 (0-100)。

### 2. 新增/修改專案
在 `index.html` 的 `03_Project_Database` 區塊中，複製一個 `.project-card` 的 div 結構即可新增專案。

### 3. 修改配色
打開 `style.css`，在最上方的 `:root` 區域修改變數：
```css
:root {
    --neon-green: #0f0;    /* 主要霓虹綠 */
    --dim-green: #003300;  /* 深綠色背景/邊框 */
    --bg-color: #050505;   /* 背景黑 */
}
```

## 💻 技術棧 (Tech Stack)

- **HTML5**: 語意化標籤
- **CSS3**: Flexbox, Grid, CSS Animations, RWD
- **JavaScript (ES6+)**: DOM 操作, 邏輯控制
- **Three.js**: 背景 3D 粒子特效 (透過 CDN 引入)


## 📝 作業操作說明 (評分重點)

### 1. 版本回復 (Git Revert)
我在這次作業中使用 `git revert` 回復了標題為 `change index.html` 的 commit。

- **原因：** `index.html` 有錯字，導致前端顯示有誤

### 2. A/B 版本實驗 (A/B Test)

| 版本代號 | 分支名稱 | 狀態 | 決策原因 |
| :--- | :--- | :--- | :--- |
| **方案 A** | `feature/add-content` | ✅ **採用 (Merged)** | 新增個人化的內容。 |
| **方案 B** | `feature/light-theme` | ❌ **未採用 (Closed)** | 深色的還是比較好看。 |

## 📄 License

此專案僅供個人展示使用。
© 2025 Jason Wu.

## ❤️ 心得

我對資訊相對擅長，對GitHub等東西有一點接觸，所以這次的作業對我來說不會太難。我一直以來都有想過作個人簡歷網站，讓大家更方便的認識我，藉由這次的作業完成自己的簡歷網站。我運用AI幫我製作前端頁面，很開心的AI把我的網站做得很好，包含 Three.js 的 3D 粒子效果等等。Git的操作我相對熟悉，以前常常 clone 別人的專案來研究，這次也讓我更加熟悉Git的進階操作