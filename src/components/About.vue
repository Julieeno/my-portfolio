<template>
  <section id="about" class="section-container">
    <div class="section-content">
      <p class="text-secondary">
        {{ t('sections.about.content') }}
      </p>
      <div class="tag-container--compact">
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