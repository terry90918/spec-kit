# AGENTS.md

## 關於 Spec Kit 與 Specify

**GitHub Spec Kit** 是一個綜合性工具組，用於實現規格驅動開發（Spec-Driven Development, SDD）—— 一種強調在實作前建立清晰規格的方法論。該工具組包含範本、腳本和工作流程，引導開發團隊採用結構化的方法來建構軟體。

**Specify CLI** 是命令列介面，用於透過 Spec Kit 框架來初始化專案。它會設定必要的目錄結構、範本和 AI agent 整合，以支援規格驅動開發工作流程。

該工具組支援多種 AI 程式碼助手，讓團隊能夠使用他們偏好的工具，同時維持一致的專案結構和開發實務。

---

## 一般慣例

- 任何對 Specify CLI 的 `__init__.py` 所做的更改都需要在 `pyproject.toml` 中更新版本號，並在 `CHANGELOG.md` 中新增條目。

## 新增 Agent 支援

本節說明如何在 Specify CLI 中新增對新 AI agents/assistants 的支援。在整合新 AI 工具到規格驅動開發工作流程時，請使用本指南作為參考。

### 概觀

Specify 透過在初始化專案時產生特定 agent 的命令檔案和目錄結構來支援多種 AI agents。每個 agent 都有自己的慣例：

- **命令檔案格式**（Markdown、TOML 等）
- **目錄結構**（`.claude/commands/`、`.windsurf/workflows/` 等）
- **命令呼叫模式**（斜線命令、CLI 工具等）
- **參數傳遞慣例**（`$ARGUMENTS`、`{{args}}` 等）

### 目前支援的 Agents

| Agent | 目錄 | 格式 | CLI 工具 | 說明 |
|-------|-----------|---------|----------|-------------|
| **Claude Code** | `.claude/commands/` | Markdown | `claude` | Anthropic 的 Claude Code CLI |
| **Gemini CLI** | `.gemini/commands/` | TOML | `gemini` | Google 的 Gemini CLI |
| **GitHub Copilot** | `.github/prompts/` | Markdown | N/A（基於 IDE） | VS Code 中的 GitHub Copilot |
| **Cursor** | `.cursor/commands/` | Markdown | `cursor-agent` | Cursor CLI |
| **Qwen Code** | `.qwen/commands/` | TOML | `qwen` | 阿里巴巴的 Qwen Code CLI |
| **opencode** | `.opencode/command/` | Markdown | `opencode` | opencode CLI |
| **Codex CLI** | `.codex/commands/` | Markdown | `codex` | Codex CLI |
| **Windsurf** | `.windsurf/workflows/` | Markdown | N/A（基於 IDE） | Windsurf IDE workflows |
| **Kilo Code** | `.kilocode/rules/` | Markdown | N/A（基於 IDE） | Kilo Code IDE |
| **Auggie CLI** | `.augment/rules/` | Markdown | `auggie` | Auggie CLI |
| **Roo Code** | `.roo/rules/` | Markdown | N/A（基於 IDE） | Roo Code IDE |
| **CodeBuddy CLI** | `.codebuddy/commands/` | Markdown | `codebuddy` | CodeBuddy CLI |
| **Amazon Q Developer CLI** | `.amazonq/prompts/` | Markdown | `q` | Amazon Q Developer CLI |

### 逐步整合指南

請依照以下步驟新增一個新的 agent（以假設的新 agent 為例）：

#### 1. 新增至 AGENT_CONFIG

**重要**：使用實際的 CLI 工具名稱作為鍵值，而非簡化版本。

在 `src/specify_cli/__init__.py` 的 `AGENT_CONFIG` 字典中新增新的 agent。這是所有 agent 中繼資料的**唯一真實來源**：

```python
AGENT_CONFIG = {
    # ... 現有的 agents ...
    "new-agent-cli": {  # 使用實際的 CLI 工具名稱（使用者在終端機中輸入的內容）
        "name": "New Agent Display Name",
        "folder": ".newagent/",  # agent 檔案的目錄
        "install_url": "https://example.com/install",  # 安裝文件的 URL（如果是基於 IDE 則為 None）
        "requires_cli": True,  # 如果需要 CLI 工具則為 True，基於 IDE 的 agents 則為 False
    },
}
```

**關鍵設計原則**：字典的鍵值應該與使用者安裝的實際執行檔名稱相符。例如：
- ✅ 使用 `"cursor-agent"`，因為 CLI 工具確實叫做 `cursor-agent`
- ❌ 如果工具是 `cursor-agent`，不要使用 `"cursor"` 作為捷徑

這樣可以消除整個程式碼庫中特殊情況對應的需求。

**欄位說明**：
- `name`：向使用者顯示的易讀顯示名稱
- `folder`：儲存 agent 特定檔案的目錄（相對於專案根目錄）
- `install_url`：安裝文件的 URL（基於 IDE 的 agents 設為 `None`）
- `requires_cli`：在初始化期間是否需要檢查 CLI 工具

#### 2. 更新 CLI 說明文字

更新 `init()` 命令中的 `--ai` 參數說明文字以包含新的 agent：

```python
ai_assistant: str = typer.Option(None, "--ai", help="AI assistant to use: claude, gemini, copilot, cursor-agent, qwen, opencode, codex, windsurf, kilocode, auggie, codebuddy, new-agent-cli, or q"),
```

同時更新任何列出可用 agents 的函式文件字串、範例和錯誤訊息。

#### 3. 更新 README 文件

更新 `README.md` 中的 **Supported AI Agents** 區塊以包含新的 agent：

- 在表格中新增新的 agent，並註明適當的支援層級（完整/部分）
- 包含 agent 的官方網站連結
- 新增任何關於 agent 實作的相關註記
- 確保表格格式保持對齊且一致

#### 4. 更新發布套件腳本

修改 `.github/workflows/scripts/create-release-packages.sh`：

##### 新增至 ALL_AGENTS 陣列：
```bash
ALL_AGENTS=(claude gemini copilot cursor-agent qwen opencode windsurf q)
```

##### 為目錄結構新增 case 陳述式：
```bash
case $agent in
  # ... 現有的 cases ...
  windsurf)
    mkdir -p "$base_dir/.windsurf/workflows"
    generate_commands windsurf md "\$ARGUMENTS" "$base_dir/.windsurf/workflows" "$script" ;;
esac
```

#### 4. 更新 GitHub 發布腳本

修改 `.github/workflows/scripts/create-github-release.sh` 以包含新 agent 的套件：

```bash
gh release create "$VERSION" \
  # ... 現有的套件 ...
  .genreleases/spec-kit-template-windsurf-sh-"$VERSION".zip \
  .genreleases/spec-kit-template-windsurf-ps-"$VERSION".zip \
  # 在此處新增新的 agent 套件
```

#### 5. 更新 Agent Context 腳本

##### Bash 腳本（`scripts/bash/update-agent-context.sh`）：

新增檔案變數：
```bash
WINDSURF_FILE="$REPO_ROOT/.windsurf/rules/specify-rules.md"
```

新增至 case 陳述式：
```bash
case "$AGENT_TYPE" in
  # ... 現有的 cases ...
  windsurf) update_agent_file "$WINDSURF_FILE" "Windsurf" ;;
  "")
    # ... 現有的檢查 ...
    [ -f "$WINDSURF_FILE" ] && update_agent_file "$WINDSURF_FILE" "Windsurf";
    # 更新預設建立條件
    ;;
esac
```

##### PowerShell 腳本（`scripts/powershell/update-agent-context.ps1`）：

新增檔案變數：
```powershell
$windsurfFile = Join-Path $repoRoot '.windsurf/rules/specify-rules.md'
```

新增至 switch 陳述式：
```powershell
switch ($AgentType) {
    # ... 現有的 cases ...
    'windsurf' { Update-AgentFile $windsurfFile 'Windsurf' }
    '' {
        foreach ($pair in @(
            # ... 現有的配對 ...
            @{file=$windsurfFile; name='Windsurf'}
        )) {
            if (Test-Path $pair.file) { Update-AgentFile $pair.file $pair.name }
        }
        # 更新預設建立條件
    }
}
```

#### 6. 更新 CLI 工具檢查（選擇性）

對於需要 CLI 工具的 agents，在 `check()` 命令和 agent 驗證中新增檢查：

```python
# 在 check() 命令中
tracker.add("windsurf", "Windsurf IDE (optional)")
windsurf_ok = check_tool_for_tracker("windsurf", "https://windsurf.com/", tracker)

# 在 init 驗證中（僅當需要 CLI 工具時）
elif selected_ai == "windsurf":
    if not check_tool("windsurf", "Install from: https://windsurf.com/"):
        console.print("[red]Error:[/red] Windsurf CLI is required for Windsurf projects")
        agent_tool_missing = True
```

**注意**：CLI 工具檢查現在會根據 AGENT_CONFIG 中的 `requires_cli` 欄位自動處理。在 `check()` 或 `init()` 命令中不需要額外的程式碼變更 - 它們會自動遍歷 AGENT_CONFIG 並根據需要檢查工具。

## 重要的設計決策

### 使用實際的 CLI 工具名稱作為鍵值

**關鍵**：在新增新的 agent 到 AGENT_CONFIG 時，始終使用**實際的執行檔名稱**作為字典鍵值，而非簡化或方便的版本。

**為何這很重要：**
- `check_tool()` 函式使用 `shutil.which(tool)` 來在系統 PATH 中尋找執行檔
- 如果鍵值不符合實際的 CLI 工具名稱，你需要在整個程式碼庫中進行特殊情況對應
- 這會產生不必要的複雜性和維護負擔

**範例 - Cursor 的教訓：**

❌ **錯誤的方法**（需要特殊情況對應）：
```python
AGENT_CONFIG = {
    "cursor": {  # 與實際工具不符的簡寫
        "name": "Cursor",
        # ...
    }
}

# 然後你需要在每個地方進行特殊處理：
cli_tool = agent_key
if agent_key == "cursor":
    cli_tool = "cursor-agent"  # 對應到真實的工具名稱
```

✅ **正確的方法**（不需要對應）：
```python
AGENT_CONFIG = {
    "cursor-agent": {  # 符合實際的執行檔名稱
        "name": "Cursor",
        # ...
    }
}

# 不需要特殊情況 - 直接使用 agent_key！
```

**此方法的好處：**
- 消除散佈在整個程式碼庫中的特殊情況邏輯
- 使程式碼更易於維護和理解
- 減少在新增新 agents 時出現錯誤的機會
- 工具檢查「自然運作」而不需要額外的對應

#### 7. 更新 Devcontainer 檔案（選擇性）

對於具有 VS Code 擴充功能或需要 CLI 安裝的 agents，更新 devcontainer 組態檔：

##### 基於 VS Code 擴充功能的 Agents

對於可作為 VS Code 擴充功能使用的 agents，將它們新增到 `.devcontainer/devcontainer.json`：

```json
{
  "customizations": {
    "vscode": {
      "extensions": [
        // ... 現有的擴充功能 ...
        // [新 Agent 名稱]
        "[新 Agent 擴充功能 ID]"
      ]
    }
  }
}
```

##### 基於 CLI 的 Agents

對於需要 CLI 工具的 agents，將安裝命令新增到 `.devcontainer/post-create.sh`：

```bash
#!/bin/bash

# 現有的安裝...

echo -e "\n🤖 Installing [新 Agent 名稱] CLI..."
# run_command "npm install -g [agent-cli-package]@latest" # 基於 node 的 CLI 範例
# 或其他安裝指令（必須是非互動式且與 Linux Debian "Trixie" 或更新版本相容）...
echo "✅ Done"

```

**快速提示：**

- **基於擴充功能的 agents**：新增到 `devcontainer.json` 中的 `extensions` 陣列
- **基於 CLI 的 agents**：將安裝腳本新增到 `post-create.sh`
- **混合型 agents**：可能同時需要擴充功能和 CLI 安裝
- **徹底測試**：確保在 devcontainer 環境中安裝能夠運作

## Agent 分類

### 基於 CLI 的 Agents

需要安裝命令列工具：
- **Claude Code**：`claude` CLI
- **Gemini CLI**：`gemini` CLI
- **Cursor**：`cursor-agent` CLI
- **Qwen Code**：`qwen` CLI
- **opencode**：`opencode` CLI
- **Amazon Q Developer CLI**：`q` CLI
- **CodeBuddy CLI**：`codebuddy` CLI

### 基於 IDE 的 Agents
在整合開發環境中運作：
- **GitHub Copilot**：內建於 VS Code/相容編輯器
- **Windsurf**：內建於 Windsurf IDE

## 命令檔案格式

### Markdown 格式
使用者：Claude、Cursor、opencode、Windsurf、Amazon Q Developer

```markdown
---
description: "命令說明"
---

命令內容包含 {SCRIPT} 和 $ARGUMENTS 佔位符。
```

### TOML 格式
使用者：Gemini、Qwen

```toml
description = "命令說明"

prompt = """
命令內容包含 {SCRIPT} 和 {{args}} 佔位符。
"""
```

## 目錄慣例

- **CLI agents**：通常是 `.<agent-name>/commands/`
- **IDE agents**：遵循 IDE 特定的模式：
  - Copilot：`.github/prompts/`
  - Cursor：`.cursor/commands/`
  - Windsurf：`.windsurf/workflows/`

## 參數模式

不同的 agents 使用不同的參數佔位符：
- **基於 Markdown/prompt**：`$ARGUMENTS`
- **基於 TOML**：`{{args}}`
- **腳本佔位符**：`{SCRIPT}`（會被替換為實際的腳本路徑）
- **Agent 佔位符**：`__AGENT__`（會被替換為 agent 名稱）

## 測試新 Agent 整合

1. **建置測試**：在本機執行套件建立腳本
2. **CLI 測試**：測試 `specify init --ai <agent>` 命令
3. **檔案產生**：驗證正確的目錄結構和檔案
4. **命令驗證**：確保產生的命令能與 agent 一起運作
5. **Context 更新**：測試 agent context 更新腳本

## 常見陷阱

1. **使用簡寫鍵值而非實際的 CLI 工具名稱**：始終使用實際的執行檔名稱作為 AGENT_CONFIG 鍵值（例如 `"cursor-agent"` 而非 `"cursor"`）。這可以避免在整個程式碼庫中需要特殊情況對應。
2. **忘記更新腳本**：在新增新 agents 時，bash 和 PowerShell 腳本都必須更新。
3. **不正確的 `requires_cli` 值**：僅對實際具有 CLI 工具需要檢查的 agents 設為 `True`；對於基於 IDE 的 agents 設為 `False`。
4. **錯誤的參數格式**：為每種 agent 類型使用正確的佔位符格式（Markdown 用 `$ARGUMENTS`，TOML 用 `{{args}}`）。
5. **目錄命名**：精確遵循 agent 特定的慣例（檢查現有 agents 的模式）。
6. **說明文字不一致**：一致地更新所有面向使用者的文字（說明字串、文件字串、README、錯誤訊息）。

## 未來考量

在新增新 agents 時：

- 考慮 agent 的原生命令/工作流程模式
- 確保與規格驅動開發流程的相容性
- 記錄任何特殊需求或限制
- 以學到的經驗更新本指南
- 在新增至 AGENT_CONFIG 之前驗證實際的 CLI 工具名稱

---

*每當有新的 agents 被新增時，都應該更新本文件以保持準確性和完整性。*
