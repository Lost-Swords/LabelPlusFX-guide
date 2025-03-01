import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  title: "LabelPlusFX Guide",
  description: "A guide to using the next generation of manga localization tools",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/introduce' },
      { text: '联系作者', link: '/markdown-examples' }
    ],

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
        text: '基本功能',
        collapsed: false,
        items: [
          { text: 'LabelPlusFX是什么?', link: '/introduce/what-is-labelplusfx' },
          { text: '快速开始', link: '/introduce/getting-started' }
        ]
      },
      {
        text: '进阶操作',
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
          // { text: 'LabelPlusFX是什么?', link: '/introduce/what-is-labelplusfx' },
          // { text: '快速开始', link: '/introduce/getting-started' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lost-Swords/LabelPlusFX_New' }
    ]
  },
  lastUpdated: true, // 启用更新时间
})
