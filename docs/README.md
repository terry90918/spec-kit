# Spec Kit 文檔

這是 Spec Kit 的 VitePress 文檔網站。

## 本地開發

```bash
# 安裝相依套件
npm install

# 啟動開發伺服器
npm run docs:dev

# 建置靜態網站
npm run docs:build

# 預覽建置結果
npm run docs:preview
```

## 文檔結構

```
docs/
├── .vitepress/
│   └── config.mts          # VitePress 配置檔
├── guide/
│   ├── getting-started.md  # 快速開始指南
│   ├── spec-driven.md      # SDD 方法論
│   ├── agents.md           # AI Agents 支援
│   └── claude.md           # Claude Code 指南
├── reference/              # API 參考（待建立）
├── public/                 # 靜態資源
│   └── logo_small.webp     # Logo
├── index.md                # 首頁
├── contributing.md         # 貢獻指南
├── security.md             # 安全性政策
└── support.md              # 支援資訊
```

## 文檔來源

所有文檔內容來自專案根目錄的繁體中文翻譯檔案（*.zh-TW.md）。

## 部署

建置後的靜態檔案位於 `docs/.vitepress/dist/`，可以部署到任何靜態網站託管服務。
