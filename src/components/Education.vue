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
      <div class="flex justify-center mt-8">
        <a href="https://drive.google.com/file/d/1-3uJw6IVzXK_O08lYJxoiDs3sgZsi59p/view?usp=sharing"
           target="_blank" 
           rel="noopener noreferrer"
           class="inline-flex items-center gap-2 text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-200 font-medium transition-colors">
          {{ cvButtonText }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
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
  const sections = tm('sections')

  const items = sections?.education?.items

  if (!items || typeof items !== 'object') {
    return []
  }

  return Object.values(items)
})

const cvLink = computed(() => {
  const sections = tm('sections')
  return sections?.education?.cvLink || 'https://drive.google.com/file/d/YOUR_CV_FILE_ID/view'
})

const cvButtonText = computed(() => {
  const sections = tm('sections')
  return sections?.education?.cvButtonText || 'View CV'
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