<template>
  <div v-if="downloads">
    <ul>
      <li><a :href="downloads.files.winZip.url" target="_blank">{{ downloads.files.winZip.name }}</a></li>
      <li><a :href="downloads.files.winExe.url" target="_blank">{{ downloads.files.winExe.name }}</a></li>
      <li><a :href="downloads.files.macZip.url" target="_blank">{{ downloads.files.macZip.name }}</a></li>
    </ul>
  </div>
  <div v-else>正在获取最新版本下载链接...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const downloads = ref(null)

onMounted(async () => {
  const res = await fetch('/latest-release.json')
  downloads.value = await res.json()
})
</script>