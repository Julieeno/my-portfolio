<template>
  <section id="about" class="section-container">
    <div class="section-content">
      <p class="text-secondary whitespace-pre-line">
        {{ aboutContent }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const aboutContent = computed(() => {
  const sections = tm('sections')
  return sections?.about?.content
})
</script>