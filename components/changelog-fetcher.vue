<script setup lang="ts">
import { onMounted, ref } from 'vue'

const changelogHtml = ref('<p>正在加载更新日志…</p>')
const sourceUrl = 'https://raw.githubusercontent.com/Lost-Swords/LabelPlusFX_New/v2-fork/CHANGELOG.md'

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char] ?? char))
}

function formatInline(text: string) {
  let result = escapeHtml(text)
  result = result.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
  result = result.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  result = result.replace(/`([^`]+)`/g, '<code>$1</code>')
  return result
}

function parseMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const html: string[] = []
  let paragraph: string[] = []
  let listItems: string[] = []
  let inList = false

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${formatInline(paragraph.join(' '))}</p>`)
      paragraph = []
    }
  }

  const flushList = () => {
    if (inList) {
      html.push(`<ul>${listItems.map((item) => `<li>${item}</li>`).join('')}</ul>`)
      listItems = []
      inList = false
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (!line) {
      flushParagraph()
      flushList()
      continue
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/)
    if (headingMatch) {
      flushParagraph()
      flushList()
      const level = headingMatch[1].length
      html.push(`<h${level}>${formatInline(headingMatch[2])}</h${level}>`)
      continue
    }

    if (/^-\s+/.test(line)) {
      flushParagraph()
      inList = true
      listItems.push(formatInline(line.replace(/^-\s+/, '')))
      continue
    }

    flushParagraph()
    paragraph.push(line)
  }

  flushParagraph()
  flushList()

  return html.join('')
}

onMounted(async () => {
  try {
    const response = await fetch(sourceUrl)
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const text = await response.text()
    changelogHtml.value = parseMarkdown(text)
  } catch (error) {
    console.error('Failed to load changelog:', error)
    changelogHtml.value = '<p>更新日志加载失败，请稍后再试。</p>'
  }
})
</script>

<template>
  <div class="changelog-loader" v-html="changelogHtml" />
</template>

<style scoped>
.changelog-loader :deep(h1),
.changelog-loader :deep(h2),
.changelog-loader :deep(h3) {
  margin: 1.2rem 0 0.6rem;
  line-height: 1.3;
}

.changelog-loader :deep(p) {
  margin: 0.5rem 0;
}

.changelog-loader :deep(ul) {
  padding-left: 1.2rem;
  margin: 0.5rem 0;
}

.changelog-loader :deep(li) {
  margin: 0.25rem 0;
}

.changelog-loader :deep(a) {
  color: var(--vp-c-brand-1);
}
</style>
