<template>
  <section id="education" class="section-container">
    <div class="content-grid">
      <div v-for="(item, key) in educationItems" :key="key"
        :class="{'highlight-match': searchActive && isItemMatched(item)}"
        class="experience-item">
        <h3 class="experience-item__title">
          {{ item.title }}
        </h3>
        <p class="experience-item__meta">
          <span v-html="parseMarkdown(item.institution)"></span> — {{ item.year }}
        </p>
        <p class="experience-item__description">
          <span v-html="parseMarkdown(item.description)"></span>
        </p>
        <div class="tag-container">
          <span v-for="tag in item.tags" :key="tag"
                :class="[
                  'tag-pill',
                  searchActive && matchesSearch(tag) ? 'highlight-tag' : ''
                ]">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  },
  searchActive: {
    type: Boolean,
    default: false
  }
})

const { t, tm } = useI18n()

const educationItems = computed(() => {
  const items = tm('sections.education.items') ||
                tm('education.items') || 
                tm('education') || 
                t('sections.education.items', {}, { returnObjects: true })
  
  console.log('Education items:', items)
  
  if (!items) return []
  
  return Array.isArray(items) ? items : Object.values(items)
})

const parseMarkdown = (text) => {
  if (!text) return ''
  
  return text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g, 
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="font-bold text-sage-700 dark:text-sage-300 hover:text-sage-900 dark:hover:text-sage-100 no-underline">$1</a>'
  )
}

const isItemMatched = (item) => {
  if (!props.searchQuery || !item) return false
  const query = props.searchQuery.toLowerCase()
  return item.title?.toLowerCase().includes(query) ||
         item.description?.toLowerCase().includes(query) ||
         (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query)))
}

const matchesSearch = (tag) => {
  if (!props.searchQuery) return false
  return tag.toLowerCase().includes(props.searchQuery.toLowerCase())
}
</script>