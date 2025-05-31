<template>
  <section id="about" class="section-container">
    <div class="section-content">
      <p class="text-sage-800 dark:text-sage-300">
        {{ t('sections.about.content') }}
      </p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="skill in skills" :key="skill" class="tag-pill">
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const skills = ['JavaScript', 'Vue.js', 'TypeScript', 'TailwindCSS', 'Python', 'Git']
</script>