# SYSTEM_ROOT // JASON_WU Portfolio

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

## 📝 Github 操作說明

### 1. Git Revert
我在這次作業中使用 `git revert` 回復了標題為 `feat: add wrong content intentionally` 的 commit。

- **原因：** 該次 commit 模擬了在開發過程中誤將錯誤的程式碼推送到遠端分支的情況。為了嚴格遵守版本控制原則，不破壞共用分支（main）的歷史紀錄（History），我選擇使用 `git revert` 產生一個新的反向 commit 來抵銷該次修改，而非使用 `git reset` 強制刪除紀錄。

### 2. A/B 版本實驗 (A/B Test)
針對 **Skills (技能列表)** 區塊，我分別在不同分支實作了兩種視覺版本，最終決策如下：

| 版本代號 | 分支名稱 | 狀態 | 決策原因 |
| :--- | :--- | :--- | :--- |
| **方案 A** | `feature/add-content` | ✅ **採用 (Merged)** | 新增個人化的內容。 |
| **方案 B** | `feature/light-theme` | ❌ **未採用 (Closed)** | 深色的還是比較好看。 |

## 📄 License

此專案僅供個人展示使用。
© 2025 Jason Wu.