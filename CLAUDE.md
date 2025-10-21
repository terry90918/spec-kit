# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案概述

Spec Kit 是一個 Spec-Driven Development (SDD) 工具包，用於從規格文件自動生成程式碼實作。它提供 `specify` CLI 工具和一組 AI agent 命令（slash commands），支援從需求規格到實作的完整開發流程。

## 核心架構

### Python CLI 工具 (`specify`)

- **主程式**: `src/specify_cli/__init__.py` - 使用 Typer 建構的 CLI 應用
- **專案管理**: `pyproject.toml` - 定義專案相依套件和建置設定
- **主要功能**:
  - `specify init <project-name>` - 從 GitHub releases 下載並初始化專案模板
  - `specify check` - 檢查開發工具是否已安裝

### 模板系統

- **模板目錄**: `templates/` - 包含所有 AI agent 命令的模板定義
- **腳本目錄**: `scripts/bash/` 和 `scripts/powershell/` - 自動化工作流程腳本
- **命令模板**: `templates/commands/` - 定義 `/speckit.*` slash commands
  - `constitution.md` - 建立專案治理原則
  - `specify.md` - 建立功能規格
  - `plan.md` - 建立技術實作計畫
  - `tasks.md` - 產生可執行任務清單
  - `implement.md` - 執行實作
  - `clarify.md` - 釐清模糊需求
  - `analyze.md` - 跨文件一致性分析
  - `checklist.md` - 產生品質檢查清單

### 工作流程腳本

**關鍵腳本** (位於 `scripts/bash/`):

1. **create-new-feature.sh**
   - 自動產生功能編號（001, 002, ...）
   - 從功能描述建立語意化分支名稱
   - 建立 `specs/[branch-name]/` 目錄結構
   - 輸出 JSON 格式的分支和檔案路徑資訊

2. **setup-plan.sh**
   - 設定實作計畫工作流程
   - 複製 plan 模板到功能目錄
   - 輸出 JSON 格式的路徑資訊

3. **update-agent-context.sh**
   - 更新 AI agent 的上下文檔案（如 CLAUDE.md）
   - 支援多種 AI agents（claude, copilot, gemini 等）

4. **common.sh**
   - 共用的工具函數和常數定義
   - 提供路徑解析、錯誤處理等輔助功能

5. **check-prerequisites.sh**
   - 檢查必要工具是否已安裝
   - 驗證專案環境設定

## 常用開發命令

### 本地開發

```bash
# 安裝相依套件
uv sync

# 執行 CLI（開發模式）
uv run specify --help
uv run specify init my-project
uv run specify check

# 測試 CLI 安裝
uv tool install --editable .
specify --help
```

### 測試專案初始化

```bash
# 使用不同的 AI assistant 初始化專案
uv run specify init test-project --ai claude
uv run specify init test-project --ai copilot
uv run specify init test-project --ai gemini

# 在目前目錄初始化
uv run specify init . --ai claude
# 或使用 --here flag
uv run specify init --here --ai claude

# 強制覆寫（跳過確認）
uv run specify init . --force --ai claude
```

### Git 工作流程

```bash
# 專案使用標準的 Git 工作流程
git checkout -b feature-branch
git add .
git commit -m "描述變更"
git push origin feature-branch
```

## Spec-Driven Development 工作流程

當使用者使用 `specify init` 初始化專案後，會在專案中建立 `.specify/` 目錄，包含：

1. **建立專案原則**: 使用 `/speckit.constitution` 建立治理原則
2. **撰寫規格**: 使用 `/speckit.specify` 將功能描述轉換為結構化規格
3. **技術規劃**: 使用 `/speckit.plan` 產生技術實作計畫
4. **任務分解**: 使用 `/speckit.tasks` 產生可執行任務清單
5. **執行實作**: 使用 `/speckit.implement` 自動執行實作

### 規格目錄結構

```
specs/
└── 001-feature-name/
    ├── spec.md              # 功能規格
    ├── plan.md              # 實作計畫
    ├── tasks.md             # 任務清單
    ├── data-model.md        # 資料模型
    ├── research.md          # 研究筆記
    ├── quickstart.md        # 快速開始指南
    └── contracts/           # API 規格等
```

## 關鍵設計決策

### 模板發布機制

- CLI 從 GitHub Releases 下載預建的模板 ZIP 檔
- 支援多種 AI agents（claude, copilot, gemini, cursor 等）
- 支援兩種腳本類型：sh（POSIX shell）和 ps（PowerShell）
- 模板命名格式：`spec-kit-template-{agent}-{script}.zip`

### 跨平台支援

- 使用 `readchar` 實現跨平台鍵盤輸入
- 自動偵測作業系統並選擇適當的預設腳本類型
- Windows: PowerShell (ps)
- Unix-like: POSIX Shell (sh)

### Git 整合

- 自動初始化 Git repository（除非使用 `--no-git`）
- 支援非 Git repository（使用 `SPECIFY_FEATURE` 環境變數）
- 自動建立功能分支並提交初始變更

### 安全性考量

- 提醒使用者將 agent 資料夾加入 `.gitignore` 以防止憑證洩漏
- 支援 GitHub token 用於 API 請求（透過 `--github-token` 或環境變數）
- 支援跳過 TLS 驗證（`--skip-tls`，不建議使用）

## 開發注意事項

### 修改模板

- 模板位於 `templates/` 目錄
- 修改後需重新建立 release 以供 CLI 下載
- 測試時可使用 `--debug` flag 查看詳細輸出

### 新增 AI Agent 支援

1. 在 `AGENT_CONFIG` 中新增 agent 設定
2. 建立對應的模板檔案
3. 更新 `update-agent-context.sh` 以支援新 agent
4. 更新文件和測試

### 腳本開發

- Bash 腳本使用 `set -e` 確保錯誤時立即停止
- 支援 `--json` 模式輸出結構化資料
- 使用 `common.sh` 中的共用函數
- PowerShell 腳本提供相同功能的對應實作

## 相關文件

- **README.md** - 使用者文件和快速開始指南
- **spec-driven.md** - Spec-Driven Development 方法論詳細說明
- **CONTRIBUTING.md** - 貢獻指南和 PR 流程
- **AGENTS.md** - 支援的 AI agents 詳細資訊
