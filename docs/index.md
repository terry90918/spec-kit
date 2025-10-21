---
layout: home

hero:
  name: "Spec Kit"
  text: "規格驅動開發工具包"
  tagline: 更快速地建構高品質軟體
  image:
    src: /logo_small.webp
    alt: Spec Kit
  actions:
    - theme: brand
      text: 快速開始
      link: /guide/getting-started
    - theme: alt
      text: 了解 SDD 方法論
      link: /guide/spec-driven
    - theme: alt
      text: GitHub
      link: https://github.com/github/spec-kit

features:
  - icon: 📝
    title: 規格驅動開發
    details: 從規格文件自動產生程式碼，專注於「做什麼」而不是「怎麼做」
  - icon: 🤖
    title: AI Agent 整合
    details: 支援 Claude Code、GitHub Copilot、Gemini CLI 等多種 AI 編碼助手
  - icon: 🔧
    title: Specify CLI
    details: 強大的命令列工具，快速初始化專案並設定開發環境
  - icon: 📋
    title: 結構化工作流程
    details: 從憲法、規格、計畫到任務，系統化的開發流程
  - icon: 🎯
    title: 任務自動化
    details: 自動產生可執行的任務清單，確保實作符合規格
  - icon: 🌍
    title: 跨平台支援
    details: 支援 Linux、macOS、Windows 和多種腳本類型（Bash、PowerShell）
---

## 什麼是規格驅動開發？

規格驅動開發（Spec-Driven Development, SDD）**顛覆了**傳統軟體開發的思維。數十年來，程式碼一直是王道——規格只是我們建立的鷹架，一旦開始「真正的」編碼工作，就會被丟棄。

規格驅動開發改變了這一點：**規格變得可執行**，直接產生可運作的實作，而不僅僅是指導它們。

## 快速開始

### 安裝 Specify CLI

```bash
# 持久安裝（推薦）
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git

# 使用工具
specify init my-project --ai claude
```

### SDD 工作流程

1. **建立專案原則** - 使用 `/speckit.constitution` 建立治理原則
2. **撰寫規格** - 使用 `/speckit.specify` 描述你想建構的內容
3. **技術規劃** - 使用 `/speckit.plan` 提供技術堆疊和架構
4. **分解任務** - 使用 `/speckit.tasks` 產生可執行任務清單
5. **執行實作** - 使用 `/speckit.implement` 自動建構功能

## 支援的 AI Agents

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div>✅ Claude Code</div>
  <div>✅ GitHub Copilot</div>
  <div>✅ Gemini CLI</div>
  <div>✅ Cursor</div>
  <div>✅ Qwen Code</div>
  <div>✅ opencode</div>
  <div>✅ Windsurf</div>
  <div>✅ Kilo Code</div>
  <div>✅ Auggie CLI</div>
  <div>✅ Roo Code</div>
  <div>✅ CodeBuddy CLI</div>
  <div>✅ Codex CLI</div>
</div>

## 核心理念

- **意圖驅動開發** - 規格在「如何做」之前定義「做什麼」
- **可執行規格** - 規格足夠精確，可直接產生可運作的系統
- **持續改進** - 一致性驗證貫穿整個過程
- **研究驅動** - 自動收集技術選型和最佳實務
- **雙向回饋** - 生產環境的洞察反饋到規格演進

## 社群與支援

- [GitHub Issues](https://github.com/github/spec-kit/issues) - 回報錯誤、請求功能
- [貢獻指南](/contributing) - 了解如何貢獻
- [完整文件](/guide/spec-driven) - 深入了解 SDD 方法論
