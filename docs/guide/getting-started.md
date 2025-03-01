# 快速开始

## 介绍

欢迎使用 LabelPlusFX 指南。本指南将帮助您快速上手使用 VitePress 构建文档。

## 安装

首先，您需要安装 VitePress。您可以使用 npm 或 yarn 进行安装：

```bash
# 使用 npm
npm install vitepress --save-dev

# 使用 yarn
yarn add vitepress --dev
```

## 创建项目结构

接下来，创建一个基本的项目结构：

```
.
├── docs
│   ├── .vitepress
│   │   └── config.js
│   └── index.md
└── package.json
```

在 `docs/.vitepress/config.js` 文件中配置您的 VitePress：

```js
module.exports = {
  title: 'LabelPlusFX 指南',
  description: '快速上手指南'
}
```

## 启动开发服务器

在 `package.json` 文件中添加以下脚本：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}
```

然后运行以下命令启动开发服务器：

```bash
npm run docs:dev
```

## 编写文档

现在，您可以开始编写文档了。在 `docs/index.md` 文件中添加一些内容：

```markdown
# 欢迎使用 LabelPlusFX

这是一个快速上手指南。
```

## 构建和部署

当您准备好部署文档时，运行以下命令构建静态文件：

```bash
npm run docs:build
```

构建完成后，您可以将生成的文件部署到任何静态文件托管服务。

## 结论

恭喜！您已经成功搭建了一个 VitePress 项目并编写了您的第一篇文档。继续探索 VitePress 的更多功能，提升您的文档体验。