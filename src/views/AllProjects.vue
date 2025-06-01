<template>
  <div class="min-h-screen pt-20">
    <div class="container-custom mx-auto px-4 lg:px-8 mb-8">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="page-header lg:page-header page-header--mobile lg:page-header">
            {{ pageTitle }}
          </h1>
          <p class="text-secondary">
            {{ pageSubtitle }}
          </p>
        </div>
        <router-link to="/" class="inline-flex items-center gap-2 text-accent hover:text-sage-800 dark:hover:text-sage-200 font-medium transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          {{ backToHomeText }}
        </router-link>
      </div>

      <div class="relative mb-8">
        <input
            type="text"
            v-model="searchQuery"
            :placeholder="t('searchPlaceholder')"
            class="input w-full max-w-md"
        />
      </div>
    </div>
    <div class="container-custom mx-auto px-4 lg:px-8">
      <div class="section-container">
        <div class="overflow-x-auto">
          <table class="w-full table-auto">
            <thead>
              <tr class="border-b border-sage-200 dark:border-sage-700">
                <th class="px-6 py-4 text-left text-sm font-semibold text-primary w-1/5">
                  {{ tableHeaders.name }}
                </th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-primary w-20">
                  {{ tableHeaders.year }}
                </th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-primary w-2/5">
                  {{ tableHeaders.description }}
                </th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-primary w-1/4">
                  {{ tableHeaders.technologies }}
                </th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-primary w-32">
                  {{ tableHeaders.links }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-sage-200 dark:divide-sage-700">
              <tr v-for="(project, index) in allProjects" 
                  :key="index"
                  :class="{'table-row-highlight': isSearchActive && isProjectMatched(project)}"
                  class="hover:bg-sage-100 dark:hover:bg-sage-800 transition-colors">
                <td class="px-6 py-6">
                  <div class="experience-item__title">
                    {{ project.name }}
                  </div>
                </td>
                <td class="px-6 py-6">
                  <span class="text-muted text-sm">
                    {{ project.year }}
                  </span>
                </td>
                <td class="px-6 py-6">
                  <p class="experience-item__description text-sm leading-relaxed">
                    {{ project.description }}
                  </p>
                </td>
                <td class="px-6 py-6">
                  <div class="tag-container">
                    <span v-for="tag in project.tags" 
                          :key="tag"
                          :class="[
                            'tag-pill text-xs',
                            isSearchActive && matchesSearch(tag) ? 'table-tag-highlight' : ''
                          ]">
                      {{ tag }}
                    </span>
                  </div>
                </td>
                <td class="px-6 py-6">
                  <div class="flex gap-3">
                    <a v-if="project.documentLink" 
                       :href="project.documentLink" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="link text-sm">
                      <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      Link
                    </a>
                    <a v-if="project.githubLink" 
                       :href="project.githubLink" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="link text-sm">
                      <svg class="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const searchQuery = ref('')

const allProjects = computed(() => {
  const sections = tm('sections')
  const items = sections?.projects?.items

  if (!items || typeof items !== 'object') {
    return []
  }

  return Object.values(items)
})

const pageTitle = computed(() => {
  const sections = tm('sections')
  return sections?.projects?.allProjectsTitle || 'All Projects'
})

const pageSubtitle = computed(() => {
  const sections = tm('sections')
  return sections?.projects?.allProjectsSubtitle || 'Complete list of my projects and work'
})

const backToHomeText = computed(() => {
  const sections = tm('sections')
  return sections?.projects?.backToHome || 'Back to Home'
})

const tableHeaders = computed(() => {
  const sections = tm('sections')
  return {
    name: sections?.projects?.tableHeaders?.name || 'Name',
    year: sections?.projects?.tableHeaders?.year || 'Year',
    description: sections?.projects?.tableHeaders?.description || 'Description',
    technologies: sections?.projects?.tableHeaders?.technologies || 'Technologies',
    links: sections?.projects?.tableHeaders?.links || 'Links'
  }
})

const isSearchActive = computed(() => searchQuery.value.length >= 2)

const isProjectMatched = (project) => {
  if (!isSearchActive.value || !project) return false
  const query = searchQuery.value.toLowerCase()
  return project.name?.toLowerCase().includes(query) ||
         project.description?.toLowerCase().includes(query) ||
         (project.tags && project.tags.some(tag => tag.toLowerCase().includes(query)))
}

const matchesSearch = (tag) => {
  if (!searchQuery.value) return false
  return tag.toLowerCase().includes(searchQuery.value.toLowerCase())
}
</script>

<style scoped>
.table-row-highlight {
  background: linear-gradient(
      90deg,
      rgba(203, 211, 206, 0.2) 0%,
      rgba(176, 189, 180, 0.3) 25%,
      rgba(148, 166, 153, 0.4) 50%,
      rgba(176, 189, 180, 0.3) 75%,
      rgba(203, 211, 206, 0.2) 100%
  ) !important;
  background-size: 300% 100%;
  animation: table-sparkle 4s ease-in-out infinite;
}

.table-tag-highlight {
  background: linear-gradient(
      45deg,
      rgba(148, 166, 153, 0.5) 0%,
      rgba(176, 189, 180, 0.7) 50%,
      rgba(148, 166, 153, 0.5) 100%
  ) !important;
  background-size: 200% 200%;
  animation: tag-sparkle 2s ease-in-out infinite;
}

.dark .table-row-highlight {
  background: linear-gradient(
      90deg,
      rgba(176, 189, 180, 0.25) 0%,
      rgba(148, 166, 153, 0.35) 25%,
      rgba(121, 143, 127, 0.45) 50%,
      rgba(148, 166, 153, 0.35) 75%,
      rgba(176, 189, 180, 0.25) 100%
  ) !important;
}

.dark .table-tag-highlight {
  background: linear-gradient(
      45deg,
      rgba(176, 189, 180, 0.5) 0%,
      rgba(203, 211, 206, 0.7) 50%,
      rgba(176, 189, 180, 0.5) 100%
  ) !important;
}

@keyframes table-sparkle {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes tag-sparkle {
  0%, 100% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
}
</style>