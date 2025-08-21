<template>
  <div v-if="downloads">
    <ul>
      <li><a :href="downloads.winZip.url" target="_blank">{{ downloads.winZip.name }}</a></li>
      <li><a :href="downloads.winExe.url" target="_blank">{{ downloads.winExe.name }}</a></li>
      <li><a :href="downloads.macZip.url" target="_blank">{{ downloads.macZip.name }}</a></li>
    </ul>
  </div>
  <div v-else>正在获取最新版本下载链接...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const downloads = ref(null)

onMounted(async () => {
  const res = await fetch('https://api.github.com/repos/Lost-Swords/LabelPlusFX_New/releases/latest', {
    headers: { 'Accept': 'application/vnd.github+json' }
  })
  const data = await res.json()
  const version = data.tag_name.replace(/^v/, '')
  const base = `https://github.com/Lost-Swords/LabelPlusFX_New/releases/download/${data.tag_name}`

  downloads.value = {
    winZip: {
      name: `LabelPlusFX-${version}-Win64.zip`,
      url: `${base}/LabelPlusFX-${version}-Win64.zip`
    },
    winExe: {
      name: `LabelPlusFX-setup-${version}-Win64.exe`,
      url: `${base}/LabelPlusFX-setup-${version}-Win64.exe`
    },
    macZip: {
      name: `LabelPlusFX-setup-${version}-Mac.zip`,
      url: `${base}/LabelPlusFX-setup-${version}-Mac.zip`
    }
  }
})
</script>