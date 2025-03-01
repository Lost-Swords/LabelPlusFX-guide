# 快速开始


## 安装

首先，您需要下载安装本软件:

- win64压缩包最新版[LabelPlusFX-2.3.5-win64.zip]([LabelPlusFX-2.3.5-Win64.zip](https://github.com/Lost-Swords/LabelPlusFX_New/releases/download/v2.3.5/LabelPlusFX-2.3.5-Win64.zip))
- win64直装最新版[LabelPlusFX-setup-2.3.5-win64.exe](https://github.com/Lost-Swords/LabelPlusFX_New/releases/download/v2.3.5/LabelPlusFX-2.3.5-Win64.zip)

旧版本请参考 [release](https://github.com/Lost-Swords/LabelPlusFX_New/releases/tag/v2.3.5)

## 创建翻译文件

打开软件，从菜单

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

## 进行标号与翻译

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

## 输出翻译文件

现在，您可以开始编写文档了。在 `docs/index.md` 文件中添加一些内容：

```markdown
# 欢迎使用 LabelPlusFX

这是一个快速上手指南。
```

## 将翻译文件导入PS

当您准备好部署文档时，运行以下命令构建静态文件：

```bash
npm run docs:build
```

构建完成后，您可以将生成的文件部署到任何静态文件托管服务。

## 在PS上完成嵌字

恭喜！您已经成功搭建了一个 VitePress 项目并编写了您的第一篇文档。继续探索 VitePress 的更多功能，提升您的文档体验。