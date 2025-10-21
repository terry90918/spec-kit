<div align="center">
    <img src="./media/logo_small.webp"/>
    <h1>🌱 Spec Kit</h1>
    <h3><em>更快速地建構高品質軟體。</em></h3>
</div>

<p align="center">
    <strong>一個開源工具包，讓你專注於產品情境和可預測的結果，而不是從零開始憑感覺編寫每一段程式碼。</strong>
</p>

<p align="center">
    <a href="https://github.com/github/spec-kit/actions/workflows/release.yml"><img src="https://github.com/github/spec-kit/actions/workflows/release.yml/badge.svg" alt="Release"/></a>
    <a href="https://github.com/github/spec-kit/stargazers"><img src="https://img.shields.io/github/stars/github/spec-kit?style=social" alt="GitHub stars"/></a>
    <a href="https://github.com/github/spec-kit/blob/main/LICENSE"><img src="https://img.shields.io/github/license/github/spec-kit" alt="License"/></a>
    <a href="https://github.github.io/spec-kit/"><img src="https://img.shields.io/badge/docs-GitHub_Pages-blue" alt="Documentation"/></a>
</p>

---

## 目錄

- [🤔 什麼是規格驅動開發？](#-什麼是規格驅動開發)
- [⚡ 快速開始](#-快速開始)
- [📽️ 影片概覽](#️-影片概覽)
- [🤖 支援的 AI Agents](#-支援的-ai-agents)
- [🔧 Specify CLI 參考](#-specify-cli-參考)
- [📚 核心理念](#-核心理念)
- [🌟 開發階段](#-開發階段)
- [🎯 實驗目標](#-實驗目標)
- [🔧 前置需求](#-前置需求)
- [📖 了解更多](#-了解更多)
- [📋 詳細流程](#-詳細流程)
- [🔍 疑難排解](#-疑難排解)
- [👥 維護者](#-維護者)
- [💬 支援](#-支援)
- [🙏 致謝](#-致謝)
- [📄 授權](#-授權)

## 🤔 什麼是規格驅動開發？

規格驅動開發**顛覆了**傳統軟體開發的思維。數十年來，程式碼一直是王道——規格只是我們建立的鷹架，一旦開始「真正的」編碼工作，就會被丟棄。規格驅動開發改變了這一點：**規格變得可執行**，直接產生可運作的實作，而不僅僅是指導它們。

## ⚡ 快速開始

### 1. 安裝 Specify CLI

選擇你偏好的安裝方式：

#### 選項 1：持久安裝（推薦）

一次安裝，隨處使用：

```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

然後直接使用工具：

```bash
specify init <PROJECT_NAME>
specify check
```

要升級 specify，執行：

```bash
uv tool install specify-cli --force --from git+https://github.com/github/spec-kit.git
```

#### 選項 2：一次性使用

不安裝直接執行：

```bash
uvx --from git+https://github.com/github/spec-kit.git specify init <PROJECT_NAME>
```

**持久安裝的優點：**

- 工具保持安裝狀態並在 PATH 中可用
- 不需要建立 shell 別名
- 使用 `uv tool list`、`uv tool upgrade`、`uv tool uninstall` 進行更好的工具管理
- 更簡潔的 shell 設定

### 2. 建立專案原則

在專案目錄中啟動你的 AI 助手。助手中會提供 `/speckit.*` 命令。

使用 **`/speckit.constitution`** 命令建立專案的治理原則和開發指南，這將指導所有後續開發。

```bash
/speckit.constitution 建立專注於程式碼品質、測試標準、使用者體驗一致性和效能要求的原則
```

### 3. 建立規格

使用 **`/speckit.specify`** 命令描述你想要建構的內容。專注於**做什麼**和**為什麼**，而不是技術堆疊。

```bash
/speckit.specify 建立一個應用程式，幫助我將照片組織到不同的相簿中。相簿按日期分組，可以在主頁面上透過拖放重新組織。相簿永遠不會嵌套在其他相簿中。在每個相簿內，照片以磁磚式介面預覽。
```

### 4. 建立技術實作計畫

使用 **`/speckit.plan`** 命令提供你的技術堆疊和架構選擇。

```bash
/speckit.plan 應用程式使用 Vite，盡量減少函式庫的數量。盡可能使用原生 HTML、CSS 和 JavaScript。圖片不會上傳到任何地方，元資料儲存在本地 SQLite 資料庫中。
```

### 5. 分解為任務

使用 **`/speckit.tasks`** 從你的實作計畫建立可執行的任務清單。

```bash
/speckit.tasks
```

### 6. 執行實作

使用 **`/speckit.implement`** 執行所有任務，並根據計畫建構你的功能。

```bash
/speckit.implement
```

詳細的逐步說明請參見我們的[完整指南](./spec-driven.md)。

## 📽️ 影片概覽

想看 Spec Kit 的實際運作？觀看我們的[影片概覽](https://www.youtube.com/watch?v=a9eR1xsfvHg&pp=0gcJCckJAYcqIYzv)！

[![Spec Kit 影片標題](/media/spec-kit-video-header.jpg)](https://www.youtube.com/watch?v=a9eR1xsfvHg&pp=0gcJCckJAYcqIYzv)

## 🤖 支援的 AI Agents

| Agent                                                     | 支援 | 備註                                             |
|-----------------------------------------------------------|---------|---------------------------------------------------|
| [Claude Code](https://www.anthropic.com/claude-code)      | ✅ |                                                   |
| [GitHub Copilot](https://code.visualstudio.com/)          | ✅ |                                                   |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | ✅ |                                                   |
| [Cursor](https://cursor.sh/)                              | ✅ |                                                   |
| [Qwen Code](https://github.com/QwenLM/qwen-code)          | ✅ |                                                   |
| [opencode](https://opencode.ai/)                          | ✅ |                                                   |
| [Windsurf](https://windsurf.com/)                         | ✅ |                                                   |
| [Kilo Code](https://github.com/Kilo-Org/kilocode)         | ✅ |                                                   |
| [Auggie CLI](https://docs.augmentcode.com/cli/overview)   | ✅ |                                                   |
| [CodeBuddy CLI](https://www.codebuddy.ai/cli)             | ✅ |                                                   |
| [Roo Code](https://roocode.com/)                          | ✅ |                                                   |
| [Codex CLI](https://github.com/openai/codex)              | ✅ |                                                   |
| [Amazon Q Developer CLI](https://aws.amazon.com/developer/learning/q-developer-cli/) | ⚠️ | Amazon Q Developer CLI [不支援](https://github.com/aws/amazon-q-developer-cli/issues/3064)自訂 slash 命令參數。 |

## 🔧 Specify CLI 參考

`specify` 命令支援以下選項：

### 命令

| 命令     | 說明                                                    |
|-------------|----------------------------------------------------------------|
| `init`      | 從最新模板初始化新的 Specify 專案      |
| `check`     | 檢查已安裝的工具（`git`、`claude`、`gemini`、`code`/`code-insiders`、`cursor-agent`、`windsurf`、`qwen`、`opencode`、`codex`） |

### `specify init` 參數與選項

| 參數/選項        | 類型     | 說明                                                                  |
|------------------------|----------|------------------------------------------------------------------------------|
| `<project-name>`       | 參數 | 新專案目錄的名稱（使用 `--here` 時可選，或使用 `.` 表示目前目錄） |
| `--ai`                 | 選項   | 要使用的 AI 助手：`claude`、`gemini`、`copilot`、`cursor-agent`、`qwen`、`opencode`、`codex`、`windsurf`、`kilocode`、`auggie`、`roo`、`codebuddy` 或 `q` |
| `--script`             | 選項   | 要使用的腳本變體：`sh`（bash/zsh）或 `ps`（PowerShell）                 |
| `--ignore-agent-tools` | 旗標     | 跳過 AI agent 工具（如 Claude Code）的檢查                             |
| `--no-git`             | 旗標     | 跳過 git 儲存庫初始化                                          |
| `--here`               | 旗標     | 在目前目錄初始化專案，而不是建立新目錄   |
| `--force`              | 旗標     | 在目前目錄初始化時強制合併/覆寫（跳過確認） |
| `--skip-tls`           | 旗標     | 跳過 SSL/TLS 驗證（不建議）                            |
| `--debug`              | 旗標     | 啟用詳細除錯輸出以進行疑難排解                            |
| `--github-token`       | 選項   | 用於 API 請求的 GitHub token（或設定 GH_TOKEN/GITHUB_TOKEN 環境變數）  |

### 範例

```bash
# 基本專案初始化
specify init my-project

# 使用特定 AI 助手初始化
specify init my-project --ai claude

# 使用 Cursor 支援初始化
specify init my-project --ai cursor-agent

# 使用 Windsurf 支援初始化
specify init my-project --ai windsurf

# 使用 PowerShell 腳本初始化（Windows/跨平台）
specify init my-project --ai copilot --script ps

# 在目前目錄初始化
specify init . --ai copilot
# 或使用 --here 旗標
specify init --here --ai copilot

# 強制合併到目前（非空）目錄，不需確認
specify init . --force --ai copilot
# 或
specify init --here --force --ai copilot

# 跳過 git 初始化
specify init my-project --ai gemini --no-git

# 啟用除錯輸出以進行疑難排解
specify init my-project --ai claude --debug

# 使用 GitHub token 進行 API 請求（適用於企業環境）
specify init my-project --ai claude --github-token ghp_your_token_here

# 檢查系統需求
specify check
```

### 可用的 Slash 命令

執行 `specify init` 後，你的 AI 編碼 agent 將可以使用這些 slash 命令進行結構化開發：

#### 核心命令

規格驅動開發工作流程的必要命令：

| 命令                  | 說明                                                           |
|--------------------------|-----------------------------------------------------------------------|
| `/speckit.constitution`  | 建立或更新專案治理原則和開發指南 |
| `/speckit.specify`       | 定義你想要建構的內容（需求和使用者故事）        |
| `/speckit.plan`          | 使用你選擇的技術堆疊建立技術實作計畫     |
| `/speckit.tasks`         | 產生可執行的任務清單以供實作                     |
| `/speckit.implement`     | 執行所有任務以根據計畫建構功能         |

#### 選用命令

用於提升品質和驗證的額外命令：

| 命令              | 說明                                                           |
|----------------------|-----------------------------------------------------------------------|
| `/speckit.clarify`   | 釐清未明確指定的部分（建議在 `/speckit.plan` 之前使用；原名 `/quizme`） |
| `/speckit.analyze`   | 跨文件一致性與覆蓋率分析（在 `/speckit.tasks` 之後、`/speckit.implement` 之前執行） |
| `/speckit.checklist` | 產生自訂品質檢查清單，驗證需求的完整性、清晰度和一致性（像是「英文的單元測試」） |

### 環境變數

| 變數         | 說明                                                                                    |
|------------------|------------------------------------------------------------------------------------------------|
| `SPECIFY_FEATURE` | 覆寫非 Git 儲存庫的功能偵測。設定為功能目錄名稱（例如 `001-photo-albums`），以便在不使用 Git 分支時處理特定功能。<br/>**必須在使用 `/speckit.plan` 或後續命令之前，在你正在使用的 agent 環境中設定。** |

## 📚 核心理念

規格驅動開發是一個結構化的流程，強調：

- **意圖驅動開發**，規格在「_如何做_」之前定義「_做什麼_」
- **豐富的規格建立**，使用防護欄和組織原則
- **多步驟改進**，而不是從提示一次性產生程式碼
- **嚴重依賴**進階 AI 模型能力來解釋規格

## 🌟 開發階段

| 階段 | 重點 | 關鍵活動 |
|-------|-------|----------------|
| **0 到 1 開發**（「綠地」） | 從零開始產生 | <ul><li>從高階需求開始</li><li>產生規格</li><li>規劃實作步驟</li><li>建構生產就緒的應用程式</li></ul> |
| **創意探索** | 平行實作 | <ul><li>探索多樣化的解決方案</li><li>支援多種技術堆疊與架構</li><li>實驗 UX 模式</li></ul> |
| **迭代增強**（「棕地」） | 棕地現代化 | <ul><li>迭代新增功能</li><li>現代化遺留系統</li><li>調整流程</li></ul> |

## 🎯 實驗目標

我們的研究和實驗專注於：

### 技術獨立性

- 使用多樣化的技術堆疊建立應用程式
- 驗證規格驅動開發是一個不依賴特定技術、程式語言或框架的流程

### 企業約束

- 展示關鍵應用程式開發
- 納入組織約束（雲端提供商、技術堆疊、工程實務）
- 支援企業設計系統和合規需求

### 以使用者為中心的開發

- 為不同的使用者群體和偏好建構應用程式
- 支援各種開發方法（從憑感覺編碼到 AI 原生開發）

### 創意與迭代流程

- 驗證平行實作探索的概念
- 提供穩健的迭代功能開發工作流程
- 擴展流程以處理升級和現代化任務

## 🔧 前置需求

- **Linux/macOS/Windows**
- [支援的](#-支援的-ai-agents) AI 編碼 agent
- [uv](https://docs.astral.sh/uv/) 用於套件管理
- [Python 3.11+](https://www.python.org/downloads/)
- [Git](https://git-scm.com/downloads)

如果你在使用某個 agent 時遇到問題，請開啟 issue，以便我們改進整合。

## 📖 了解更多

- **[完整規格驅動開發方法論](./spec-driven.md)** - 深入了解完整流程
- **[詳細步驟說明](#-詳細流程)** - 逐步實作指南

---

## 📋 詳細流程

<details>
<summary>點擊展開詳細的逐步說明</summary>

你可以使用 Specify CLI 來啟動你的專案，它會將所需的文件帶入你的環境。執行：

```bash
specify init <project_name>
```

或在目前目錄初始化：

```bash
specify init .
# 或使用 --here 旗標
specify init --here
# 當目錄已有檔案時跳過確認
specify init . --force
# 或
specify init --here --force
```

![Specify CLI 在終端機中啟動新專案](./media/specify_cli.gif)

系統會提示你選擇正在使用的 AI agent。你也可以直接在終端機中指定：

```bash
specify init <project_name> --ai claude
specify init <project_name> --ai gemini
specify init <project_name> --ai copilot

# 或在目前目錄：
specify init . --ai claude
specify init . --ai codex

# 或使用 --here 旗標
specify init --here --ai claude
specify init --here --ai codex

# 強制合併到非空的目前目錄
specify init . --force --ai claude

# 或
specify init --here --force --ai claude
```

CLI 會檢查你是否安裝了 Claude Code、Gemini CLI、Cursor CLI、Qwen CLI、opencode、Codex CLI 或 Amazon Q Developer CLI。如果沒有，或者你希望在不檢查正確工具的情況下取得模板，請在命令中使用 `--ignore-agent-tools`：

```bash
specify init <project_name> --ai claude --ignore-agent-tools
```

### **步驟 1：** 建立專案原則

前往專案資料夾並執行你的 AI agent。在我們的範例中，我們使用 `claude`。

![啟動 Claude Code 環境](./media/bootstrap-claude-code.gif)

如果你看到 `/speckit.constitution`、`/speckit.specify`、`/speckit.plan`、`/speckit.tasks` 和 `/speckit.implement` 命令可用，就表示設定正確。

第一步應該是使用 `/speckit.constitution` 命令建立專案的治理原則。這有助於確保所有後續開發階段的決策一致性：

```text
/speckit.constitution 建立專注於程式碼品質、測試標準、使用者體驗一致性和效能要求的原則。包括這些原則如何指導技術決策和實作選擇的治理方式。
```

此步驟會建立或更新 `.specify/memory/constitution.md` 檔案，其中包含 AI agent 在規格、規劃和實作階段參考的專案基礎指南。

### **步驟 2：** 建立專案規格

建立專案原則後，你現在可以建立功能規格。使用 `/speckit.specify` 命令，然後提供你想要開發的專案的具體需求。

>[!IMPORTANT]
>盡可能明確說明你想要建構_什麼_以及_為什麼_。**此時不要專注於技術堆疊**。

範例提示：

```text
開發 Taskify，一個團隊生產力平台。它應該允許使用者建立專案、新增團隊成員、
指派任務、評論並以看板風格在看板之間移動任務。在這個功能的初始階段，
讓我們稱之為「建立 Taskify」，讓我們有多個使用者，但使用者會提前宣告、預先定義。
我想要五個使用者分為兩個不同的類別，一個產品經理和四個工程師。讓我們建立三個
不同的範例專案。讓我們為每個任務的狀態設定標準的看板欄位，例如「待辦」、
「進行中」、「審查中」和「完成」。此應用程式不會有登入功能，因為這只是第一個
測試，以確保我們的基本功能已設定。對於 UI 中的每個任務卡，你應該能夠在看板工作板的
不同欄位之間變更任務的目前狀態。你應該能夠為特定卡片留下無限數量的評論。你應該能夠
從該任務卡指派一個有效的使用者。當你第一次啟動 Taskify 時，它會給你一個從五個使用者中
選擇的清單。不需要密碼。當你點擊一個使用者時，你進入主視圖，顯示專案清單。當你點擊
一個專案時，你開啟該專案的看板。你會看到欄位。你可以在不同欄位之間拖放卡片。你會看到
指派給你（目前登入的使用者）的任何卡片以不同顏色顯示，這樣你就可以快速看到你的卡片。
你可以編輯你所做的任何評論，但不能編輯其他人所做的評論。你可以刪除你所做的任何評論，
但不能刪除其他人所做的評論。
```

輸入此提示後，你應該會看到 Claude Code 開始規劃和規格草擬流程。Claude Code 也會觸發一些內建腳本來設定儲存庫。

完成此步驟後，你應該會建立一個新分支（例如 `001-create-taskify`），以及 `specs/001-create-taskify` 目錄中的新規格。

產生的規格應包含一組使用者故事和功能需求，如模板中定義的那樣。

在這個階段，你的專案資料夾內容應該類似於以下內容：

```text
└── .specify
    ├── memory
    │	 └── constitution.md
    ├── scripts
    │	 ├── check-prerequisites.sh
    │	 ├── common.sh
    │	 ├── create-new-feature.sh
    │	 ├── setup-plan.sh
    │	 └── update-claude-md.sh
    ├── specs
    │	 └── 001-create-taskify
    │	     └── spec.md
    └── templates
        ├── plan-template.md
        ├── spec-template.md
        └── tasks-template.md
```

### **步驟 3：** 功能規格釐清（規劃前必須執行）

建立基線規格後，你可以繼續釐清第一次嘗試中未正確捕捉的任何需求。

你應該在建立技術計畫**之前**執行結構化的釐清工作流程，以減少下游的重新作業。

建議順序：
1. 使用 `/speckit.clarify`（結構化）- 順序性、基於覆蓋率的提問，將答案記錄在釐清部分。
2. 如果某些內容仍然模糊，可選擇性地進行臨時自由形式的改進。

如果你有意跳過釐清（例如尖峰或探索性原型），請明確說明，這樣 agent 就不會因為缺少釐清而阻塞。

範例自由形式改進提示（如果在 `/speckit.clarify` 之後仍需要）：

```text
對於你建立的每個範例專案或專案，每個專案應該有 5 到 15 個任務的可變數量，
隨機分佈在不同的完成狀態中。確保每個完成階段至少有一個任務。
```

你也應該要求 Claude Code 驗證**審查與驗收檢查清單**，勾選已驗證/通過需求的項目，並將未通過的項目留空。可以使用以下提示：

```text
閱讀審查與驗收檢查清單，如果功能規格符合標準，請勾選檢查清單中的每個項目。如果不符合，請留空。
```

重要的是要利用與 Claude Code 的互動作為釐清和詢問規格問題的機會 - **不要將它的第一次嘗試視為最終版本**。

### **步驟 4：** 產生計畫

你現在可以具體說明技術堆疊和其他技術需求。你可以使用專案模板內建的 `/speckit.plan` 命令，提示如下：

```text
我們將使用 .NET Aspire 產生這個，使用 Postgres 作為資料庫。前端應該使用
Blazor server，具有拖放任務板、即時更新。應該建立一個 REST API，包含專案 API、
任務 API 和通知 API。
```

此步驟的輸出將包含許多實作細節文件，你的目錄樹將類似於以下內容：

```text
.
├── CLAUDE.md
├── memory
│	 └── constitution.md
├── scripts
│	 ├── check-prerequisites.sh
│	 ├── common.sh
│	 ├── create-new-feature.sh
│	 ├── setup-plan.sh
│	 └── update-claude-md.sh
├── specs
│	 └── 001-create-taskify
│	     ├── contracts
│	     │	 ├── api-spec.json
│	     │	 └── signalr-spec.md
│	     ├── data-model.md
│	     ├── plan.md
│	     ├── quickstart.md
│	     ├── research.md
│	     └── spec.md
└── templates
    ├── CLAUDE-template.md
    ├── plan-template.md
    ├── spec-template.md
    └── tasks-template.md
```

檢查 `research.md` 文件，根據你的說明確保使用了正確的技術堆疊。如果有任何元件突出，你可以要求 Claude Code 改進它，甚至讓它檢查本地安裝的平台/框架版本（例如 .NET）。

此外，如果選擇的技術堆疊是快速變化的東西（例如 .NET Aspire、JS 框架），你可能想要求 Claude Code 研究相關細節，提示如下：

```text
我想要你檢查實作計畫和實作細節，尋找可能受益於額外研究的領域，因為 .NET Aspire 是一個
快速變化的函式庫。對於你識別出需要進一步研究的領域，我想要你使用我們將在此 Taskify 應用程式中
使用的特定版本的額外細節更新研究文件，並產生平行研究任務，使用來自網路的研究來釐清任何細節。
```

在此過程中，你可能會發現 Claude Code 卡在研究錯誤的事情上 - 你可以用這樣的提示幫助它朝正確的方向前進：

```text
我認為我們需要將此分解為一系列步驟。首先，識別你在實作期間需要做的任務清單，
這些任務你不確定或會受益於進一步研究。寫下這些任務的清單。然後對於這些任務中的每一個，
我想要你產生一個單獨的研究任務，這樣最終結果是我們在平行研究所有這些非常具體的任務。
我看到你所做的是看起來你正在一般性地研究 .NET Aspire，我不認為這對我們在這種情況下
會有太大幫助。那太不針對性的研究了。研究需要幫助你解決特定的針對性問題。
```

>[!NOTE]
>Claude Code 可能過於熱心並新增你未要求的元件。要求它釐清理由和變更的來源。

### **步驟 5：** 讓 Claude Code 驗證計畫

有了計畫後，你應該讓 Claude Code 檢查它，以確保沒有缺少的部分。你可以使用這樣的提示：

```text
現在我想要你審查實作計畫和實作細節檔案。仔細閱讀它，以確定是否有從閱讀中明顯看出的
任務序列需要執行。因為我不知道這裡是否有足夠的資訊。例如，當我查看核心實作時，
參考實作細節中的適當位置會很有用，這樣它可以在完成核心實作或改進的每個步驟時找到資訊。
```

這有助於改進實作計畫，並幫助你避免 Claude Code 在規劃週期中錯過的潛在盲點。初始改進通過完成後，在進行實作之前，要求 Claude Code 再次檢查檢查清單。

你也可以要求 Claude Code（如果你已安裝 [GitHub CLI](https://docs.github.com/en/github-cli/github-cli)）從你的目前分支到 `main` 建立一個包含詳細描述的 pull request，以確保正確追蹤工作。

>[!NOTE]
>在讓 agent 實作之前，也值得提示 Claude Code 交叉檢查細節，看是否有任何過度工程化的部分（記住 - 它可能過於熱心）。如果存在過度工程化的元件或決策，你可以要求 Claude Code 解決它們。確保 Claude Code 遵循 [憲法](base/memory/constitution.md) 作為它在建立計畫時必須遵守的基礎部分。

### **步驟 6：** 使用 /speckit.tasks 產生任務分解

驗證實作計畫後，你現在可以將計畫分解為可以按正確順序執行的具體、可執行的任務。使用 `/speckit.tasks` 命令從你的實作計畫自動產生詳細的任務分解：

```text
/speckit.tasks
```

此步驟會在你的功能規格目錄中建立一個 `tasks.md` 檔案，其中包含：

- **按使用者故事組織的任務分解** - 每個使用者故事成為一個獨立的實作階段，擁有自己的一組任務
- **相依性管理** - 任務按順序排列以尊重元件之間的相依性（例如，模型在服務之前，服務在端點之前）
- **平行執行標記** - 可以平行執行的任務標記為 `[P]` 以優化開發工作流程
- **檔案路徑規格** - 每個任務包含應該執行實作的確切檔案路徑
- **測試驅動開發結構** - 如果請求測試，則包含測試任務並按順序在實作之前編寫
- **檢查點驗證** - 每個使用者故事階段包含檢查點以驗證獨立功能

產生的 tasks.md 為 `/speckit.implement` 命令提供了清晰的路線圖，確保系統化的實作，保持程式碼品質並允許使用者故事的增量交付。

### **步驟 7：** 實作

準備好後，使用 `/speckit.implement` 命令執行你的實作計畫：

```text
/speckit.implement
```

`/speckit.implement` 命令將：
- 驗證所有前置條件是否就位（憲法、規格、計畫和任務）
- 從 `tasks.md` 解析任務分解
- 按正確順序執行任務，尊重相依性和平行執行標記
- 遵循你的任務計畫中定義的 TDD 方法
- 提供進度更新並適當處理錯誤

>[!IMPORTANT]
>AI agent 將執行本地 CLI 命令（例如 `dotnet`、`npm` 等）- 確保你的機器上已安裝所需的工具。

實作完成後，測試應用程式並解決 CLI 日誌中可能看不到的任何執行時錯誤（例如瀏覽器控制台錯誤）。你可以將這些錯誤複製並貼回你的 AI agent 以進行解決。

</details>

---

## 🔍 疑難排解

### Linux 上的 Git Credential Manager

如果你在 Linux 上遇到 Git 認證問題，可以安裝 Git Credential Manager：

```bash
#!/usr/bin/env bash
set -e
echo "Downloading Git Credential Manager v2.6.1..."
wget https://github.com/git-ecosystem/git-credential-manager/releases/download/v2.6.1/gcm-linux_amd64.2.6.1.deb
echo "Installing Git Credential Manager..."
sudo dpkg -i gcm-linux_amd64.2.6.1.deb
echo "Configuring Git to use GCM..."
git config --global credential.helper manager
echo "Cleaning up..."
rm gcm-linux_amd64.2.6.1.deb
```

## 👥 維護者

- Den Delimarsky ([@localden](https://github.com/localden))
- John Lam ([@jflam](https://github.com/jflam))

## 💬 支援

如需支援，請開啟 [GitHub issue](https://github.com/github/spec-kit/issues/new)。我們歡迎錯誤報告、功能請求以及有關使用規格驅動開發的問題。

## 🙏 致謝

此專案深受 [John Lam](https://github.com/jflam) 的工作和研究的影響和啟發。

## 📄 授權

此專案根據 MIT 開源授權條款授權。請參閱 [LICENSE](./LICENSE) 檔案以了解完整條款。
