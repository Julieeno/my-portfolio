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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const skills = computed(() => {
  const skillsData = tm('sections.about.skills')
  console.log('Skills data:', skillsData)
  return Array.isArray(skillsData) ? skillsData : []
})
</script>