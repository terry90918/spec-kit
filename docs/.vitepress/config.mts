import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Spec Kit",
  description: "規格驅動開發工具包 - 更快速地建構高品質軟體",
  lang: 'zh-TW',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo_small.webp',

    nav: [
      { text: '首頁', link: '/' },
      { text: '快速開始', link: '/guide/getting-started' },
      { text: 'SDD 方法論', link: '/guide/spec-driven' },
      { text: 'AI Agents', link: '/guide/agents' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速開始', link: '/guide/getting-started' },
          { text: '規格驅動開發', link: '/guide/spec-driven' },
          { text: 'AI Agents 支援', link: '/guide/agents' },
          { text: 'Claude Code 指南', link: '/guide/claude' },
        ]
      },
      {
        text: '參考',
        items: [
          { text: 'Specify CLI', link: '/reference/cli' },
          { text: 'Slash 命令', link: '/reference/commands' },
        ]
      },
      {
        text: '貢獻',
        items: [
          { text: '貢獻指南', link: '/contributing' },
          { text: '安全性政策', link: '/security' },
          { text: '支援', link: '/support' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/github/spec-kit' }
    ],

    footer: {
      message: '基於 MIT 授權發布',
      copyright: 'Copyright © 2024-present GitHub'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-TW': {
            translations: {
              button: {
                buttonText: '搜尋文件',
                buttonAriaLabel: '搜尋文件'
              },
              modal: {
                noResultsText: '無法找到相關結果',
                resetButtonTitle: '清除查詢條件',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換'
                }
              }
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/github/spec-kit/edit/main/docs/:path',
      text: '在 GitHub 上編輯此頁面'
    },

    lastUpdated: {
      text: '最後更新於',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    },

    outline: {
      label: '頁面導航'
    },

    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '選單',
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式'
  }
})
