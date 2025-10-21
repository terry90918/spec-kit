## 貢獻至 Spec Kit

您好！我們很高興您願意貢獻至 Spec Kit。對此專案的貢獻將在專案的[開源授權條款](LICENSE)下[發佈](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license)至公眾。

請注意，本專案遵守[貢獻者行為準則](CODE_OF_CONDUCT.md)。參與本專案即表示您同意遵守其條款。

## 執行和測試程式碼的先決條件

這些是一次性安裝，用於在 pull request (PR) 提交過程中於本地測試您的變更。

1. 安裝 [Python 3.11+](https://www.python.org/downloads/)
1. 安裝 [uv](https://docs.astral.sh/uv/) 進行套件管理
1. 安裝 [Git](https://git-scm.com/downloads)
1. 擁有[可用的 AI 編碼代理](README.md#-supported-ai-agents)

<details>
<summary><b>💡 如果您使用 <code>VSCode</code> 或 <code>GitHub Codespaces</code> 作為 IDE 的提示</b></summary>

<br>

假設您的機器已安裝 [Docker](https://docker.com)，您可以透過這個 [VSCode 擴充套件](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)使用 [Dev Containers](https://containers.dev)，輕鬆設定您的開發環境，得益於專案根目錄的 `.devcontainer/devcontainer.json` 檔案，上述工具已經安裝並配置完成。

使用方式：

- 檢出此儲存庫
- 使用 VSCode 開啟
- 開啟[命令選擇區](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)並選擇「Dev Containers: Open Folder in Container...」

在 [GitHub Codespaces](https://github.com/features/codespaces) 上更加簡單，因為它會在開啟 codespace 時自動使用 `.devcontainer/devcontainer.json`。

</details>

## 提交 pull request

>[!NOTE]
>如果您的 pull request 引入了大幅度變更，對 CLI 或儲存庫其他部分的工作產生實質影響（例如：您引入了新的範本、參數或其他重大變更），請確保已與專案維護者**討論並達成共識**。未經事前討論和同意的大幅度變更 pull request 將會被關閉。

1. Fork 並 clone 此儲存庫
1. 配置並安裝相依套件：`uv sync`
1. 確保 CLI 在您的機器上運作：`uv run specify --help`
1. 建立新分支：`git checkout -b my-branch-name`
1. 進行變更、新增測試，並確保一切仍正常運作
1. 如相關，使用範例專案測試 CLI 功能
1. 推送至您的 fork 並提交 pull request
1. 等待您的 pull request 被審查和合併。

以下事項將增加您的 pull request 被接受的可能性：

- 遵循專案的編碼慣例。
- 為新功能撰寫測試。
- 如果您的變更影響面向使用者的功能，請更新文件（`README.md`、`spec-driven.md`）。
- 保持變更盡可能專注。如果有多個互不相依的變更，請考慮將它們作為獨立的 pull request 提交。
- 撰寫[優質的 commit 訊息](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)。
- 使用 Spec-Driven Development 工作流程測試您的變更，以確保相容性。

## 開發工作流程

在開發 spec-kit 時：

1. 使用您選擇的編碼代理，透過 `specify` CLI 命令（`/speckit.specify`、`/speckit.plan`、`/speckit.tasks`）測試變更
2. 驗證 `templates/` 目錄中的範本是否正常運作
3. 測試 `scripts/` 目錄中的腳本功能
4. 如果進行了重大流程變更，請確保記憶檔案（`memory/constitution.md`）已更新

## Spec Kit 中的 AI 貢獻

> [!IMPORTANT]
>
> 如果您使用**任何形式的 AI 協助**來貢獻至 Spec Kit，
> 必須在 pull request 或 issue 中揭露。

我們歡迎並鼓勵使用 AI 工具來協助改進 Spec Kit！許多有價值的貢獻都透過 AI 協助進行程式碼生成、問題偵測和功能定義而得到提升。

話雖如此，如果您在貢獻至 Spec Kit 時使用任何形式的 AI 協助（例如：代理、ChatGPT），
**必須在 pull request 或 issue 中揭露**，並說明使用 AI 協助的程度（例如：文件註解 vs. 程式碼生成）。

如果您的 PR 回應或評論是由 AI 生成的，也請揭露。

例外情況是，微小的空格或錯字修正不需要揭露，只要變更僅限於程式碼的小部分或簡短片語。

揭露範例：

> 此 PR 主要由 GitHub Copilot 撰寫。

或更詳細的揭露：

> 我諮詢了 ChatGPT 以理解程式碼庫，但解決方案
> 完全由我本人手動撰寫。

未揭露此資訊首先對 pull request 另一端的人類操作者不尊重，也使得難以判斷應對此貢獻施加多少審查力度。

在理想世界中，AI 協助將產生與人類同等或更高品質的工作。但這不是我們今天生活的世界，在大多數情況下，當人類監督或專業知識不在迴圈中時，它會生成無法合理維護或演進的程式碼。

### 我們期待的內容

提交 AI 協助的貢獻時，請確保包含：

- **明確揭露 AI 使用** - 您對 AI 使用以及使用程度保持透明
- **人類理解和測試** - 您已親自測試變更並理解它們的作用
- **明確的理由** - 您可以解釋為什麼需要此變更以及它如何符合 Spec Kit 的目標
- **具體證據** - 包含測試案例、場景或範例，展示改進效果
- **您自己的分析** - 分享您對端到端開發者體驗的想法

### 我們將關閉的內容

我們保留關閉以下貢獻的權利：

- 未經驗證就提交的未測試變更
- 未解決特定 Spec Kit 需求的通用建議
- 未經人類審查或理解的批量提交

### 成功的指導方針

關鍵在於展示您理解並驗證了您提出的變更。如果維護者可以輕易判斷貢獻完全由 AI 生成，沒有人類投入或測試，它可能需要在提交前進行更多工作。

持續提交低品質 AI 生成變更的貢獻者，可能會由維護者自行決定限制其進一步貢獻。

請尊重維護者並揭露 AI 協助。

## 資源

- [Spec-Driven Development 方法論](./spec-driven.md)
- [如何貢獻至開源](https://opensource.guide/how-to-contribute/)
- [使用 Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub 說明](https://help.github.com)
