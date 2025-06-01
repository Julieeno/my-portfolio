<template>
  <section id="projects" class="section-container">
    <div class="content-grid">
      <div v-for="(item, key) in projectItems" :key="key"
           :class="{'highlight-match': searchActive && isItemMatched(item)}"
           class="experience-item">
        <div class="flex justify-between items-start mb-2">
          <h3 class="experience-item__title">
            {{ item.name }}
          </h3>
          <span class="text-sage-600 dark:text-sage-400 text-sm font-medium">
            {{ item.year }}
          </span>
        </div>
        
        <p class="experience-item__description mb-3">
          {{ item.description }}
        </p>
        
        <div class="flex gap-3 mb-3">
          <a v-if="item.documentLink" 
             :href="item.documentLink" 
             target="_blank" 
             rel="noopener noreferrer"
             class="inline-flex items-center gap-1 text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-200 text-sm font-medium transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            Link
          </a>
          <a v-if="item.githubLink" 
             :href="item.githubLink" 
             target="_blank" 
             rel="noopener noreferrer"
             class="inline-flex items-center gap-1 text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-200 text-sm font-medium transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Code
          </a>
        </div>
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
        <router-link to="/projects" 
                     class="inline-flex items-center gap-2 text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-200 font-medium transition-colors">
          {{ viewAllButtonText }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </router-link>
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

const projectItems = computed(() => {
  const sections = tm('sections')
  const items = sections?.projects?.items

  if (!items || typeof items !== 'object') {
    return []
  }

  return Object.values(items).slice(0, 4)
})

const viewAllButtonText = computed(() => {
  const sections = tm('sections')
  return sections?.projects?.viewAllButton || 'View All Projects'
})

const isItemMatched = (item) => {
  if (!props.searchQuery || !item) return false
  const query = props.searchQuery.toLowerCase()
  return item.name?.toLowerCase().includes(query) ||
         item.description?.toLowerCase().includes(query) ||
         (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query)))
}

const matchesSearch = (tag) => {
  if (!props.searchQuery) return false
  return tag.toLowerCase().includes(props.searchQuery.toLowerCase())
}
</script>

<style scoped>

</style>