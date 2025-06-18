import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  title: "LabelPlusFX Guide",
  description: "A guide to using the next generation of manga localization tools",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/introduce/what-is-labelplusfx' },
      { text: '联系作者', link: '/support/contact-author' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    sidebar: [
      {
        text: '简介',
        collapsed: false,
        items: [
          { text: 'LabelPlusFX是什么?', link: '/introduce/what-is-labelplusfx' },
          { text: '快速开始', link: '/introduce/getting-started' }
        ]
      },
      {
        text: '基本操作',
        collapsed: false,
        items: [
           { text: '界面概述', link: '/base/interface' },
          { text: '快捷键', link: '/base/quick-work' },
          // { text: '快速开始', link: '/introduce/getting-started' }
        ]
      },
      {
        text: '进阶使用',
        collapsed: false,
        items: [
          // { text: 'LabelPlusFX是什么?', link: '/introduce/what-is-labelplusfx' },
          // { text: '快速开始', link: '/introduce/getting-started' }
        ]
      },
      {
        text: '更多支持',
        collapsed: false,
        items: [
          { text: '更新日志', link: '/support/change-log' },
          // { text: '快速开始', link: '/introduce/getting-started' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lost-Swords/LabelPlusFX_New' }
    ],
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
  },
  ignoreDeadLinks: true, // 忽略死链接
})

