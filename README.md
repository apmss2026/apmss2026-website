# APMSS 2026 Website

## 作者
本網站由APMSS網管組組長 陳彥臻 建立，特別感謝 APMSS2026的全體人員 讓這個活動成為可能。

## 關於專案
這是APMSS 2026（Asia-Pacific Medical Students' Symposium）亞太醫學生研討會的官方網站。本網站使用純HTML、CSS和JavaScript建立，無需額外的框架或套件。

## 專案結構
```
APMSS2026/
├── img/                    # 圖片資源
│   ├── logo.png           # 網站Logo
│   ├── background.png     # 主視覺背景圖
│   ├── banner.png         # 橫幅圖片
│   └── agenda.jpg         # 議程時程表
├── js/                     # JavaScript檔案
│   └── main.js            # 主要互動功能
├── index.html             # 首頁
├── theme.html             # 主題頁面
├── agenda.html            # 議程頁面
├── activities.html        # 活動頁面
├── registration.html      # 報名頁面
├── style.css              # 主要樣式表
└── README.md              # 專案說明
```

## 網站特色

### 設計風格
- **色彩系統**: #38AEFB (藍色)、#F9ABFF (粉色)、#B0A3FF (紫色)、#D1D1D1 (淺灰)、#565656 (深灰)
- **響應式設計**: 支援桌面、平板和手機等各種裝置
- **現代化界面**: 使用漸層色彩和動畫效果

### 功能特點
- **固定半透明導航**: Header在滾動時保持可見且具有透明效果
- **打字動畫**: 首頁副標題具有科技感的打字機效果
- **響應式選單**: 在小螢幕設備上自動轉換為漢堡選單
- **平滑滾動**: 頁面間導航和內部錨點跳轉使用平滑動畫
- **漸入動畫**: 內容區塊在進入視窗時觸發漸入效果

### 頁面內容

#### 首頁 (index.html)
- Hero區塊：主視覺圖片與打字動畫標題
- 研討會介紹
- 主題概述
- 活動預覽

#### 主題頁面 (theme.html)  
- 主題說明：「Redefining Medicine: Resilience, Innovation, and Global Impact」
- 四個子主題以田字格排列：
  - 精準醫學 (Precision Medicine)
  - 再生醫學 (Regenerative Medicine)
  - 生物醫學工程 (Biomedical Engineering)
  - 醫療碳足跡 (Healthcare Carbon Footprint)

#### 議程頁面 (agenda.html)
- 完整的研討會時程表圖片展示

#### 活動頁面 (activities.html)
- 主題講座
- 臨床技能訓練
- 醫院參訪
- 文化交流活動

#### 報名頁面 (registration.html)
- 早鳥優惠價格資訊
- 團體報名折扣
- 住宿資訊
- 線上報名表單連結

## 技術規格

### HTML
- 使用語義化HTML5標籤
- 支援多語言 (zh-TW)
- SEO友善的meta標籤

### CSS
- 使用CSS Grid和Flexbox進行版面配置
- CSS動畫和過渡效果
- 響應式媒體查詢
- 自定義CSS變數用於色彩管理

### JavaScript
- 純Vanilla JavaScript，無外部依賴
- 打字機動畫效果
- 響應式選單控制
- 滾動觸發動畫
- 平滑導航功能

## 瀏覽器支援
- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 使用方式

### 本地開發
1. 將所有檔案放置在同一資料夾中
2. 使用任何HTTP服務器運行（例如：`python3 -m http.server 5000`）
3. 在瀏覽器中訪問 `http://localhost:5000`

### 部署
本專案為靜態網站，可以部署到任何支援靜態檔案託管的平台：
- GitHub Pages
- Netlify  
- Vercel
- 或任何Web服務器

## 活動資訊
- **主辦單位**: 國立台灣大學醫學院
- **活動時間**: 2026年1月26日至1月31日
- **地點**: 台灣台北市國立台灣大學
- **主題**: Redefining Medicine: Resilience, Innovation, and Global Impact

## 聯絡資訊
- **Email**: apmss2026@gmail.com
- **Facebook**: APMSS - Asia-Pacific Medical Students' Symposium
- **Instagram**: apmss_2026

---
© 2026 APMSS. All rights reserved.