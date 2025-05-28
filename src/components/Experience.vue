<template>
  <section id="experience" class="section-container">
    <div class="space-y-6">
      <div v-for="(item, key) in experienceItems" :key="key"
        :class="{'highlight-match': searchActive && isItemMatched(item)}"
        class="section-content">
        <h3 class="text-lg font-semibold text-sage-800 dark:text-sage-200">
          {{ item.title }}
        </h3>
        <p class="text-sm text-sage-600 dark:text-sage-400 mb-1">
          {{ item.company }} — {{ item.year }}
        </p>
        <p class="text-sage-700 dark:text-sage-300 mt-2">
          {{ item.description }}
        </p>
        <div class="mt-3 flex flex-wrap gap-2">
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

const experienceItems = computed(() => {
  return tm('sections.experience.items') || {}
})

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