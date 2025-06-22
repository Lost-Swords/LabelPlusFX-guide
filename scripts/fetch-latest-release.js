const fs = require('fs');
const https = require('https');

const owner = 'Lost-Swords';
const repo = 'LabelPlusFX_New';

// 最新 tag 页面跳转
const options = {
  host: 'github.com',
  path: `/${owner}/${repo}/releases/latest`,
  method: 'GET',
  headers: {
    'User-Agent': 'node'
  }
};

const req = https.request(options, res => {
  const location = res.headers.location;
  if (!location) {
    console.error('❌ 无法获取跳转链接');
    process.exit(1);
  }

  const match = location.match(/\/tag\/(v[\d.]+)/);
  if (!match) {
    console.error('❌ 无法提取 tag 版本号');
    process.exit(1);
  }

  const tag = match[1];
  const version = tag.replace(/^v/, ''); // 去掉v前缀方便拼接

  const downloadBase = `https://github.com/${owner}/${repo}/releases/download/${tag}`;

  const downloads = {
    tag,
    version,
    files: {
      winZip: {
        name: `LabelPlusFX-${version}-Win64.zip`,
        url: `${downloadBase}/LabelPlusFX-${version}-Win64.zip`
      },
      winExe: {
        name: `LabelPlusFX-setup-${version}-Win64.exe`,
        url: `${downloadBase}/LabelPlusFX-setup-${version}-Win64.exe`
      },
      macZip: {
        name: `LabelPlusFX-setup-${version}-Mac.zip`,
        url: `${downloadBase}/LabelPlusFX-setup-${version}-Mac.zip`
      }
    }
  };

  fs.writeFileSync('./docs/public/latest-release.json', JSON.stringify(downloads, null, 2));
  console.log(`✅ 版本 ${tag} 的多平台下载链接已写入 latest-release.json`);
});

req.on('error', error => {
  console.error('请求出错:', error);
});

req.end();
