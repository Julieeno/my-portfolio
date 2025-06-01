<template>
  <div class="min-h-screen pt-20">
    <div class="mobile-layout">
      <aside class="mb-8">
        <div class="mb-6">
          <h1 class="page-header--mobile">
            Giuliano Lazzara
          </h1>
          <p class="text-2xl font-bold text-sage-800 dark:text-sage-200 mb-2">
            {{ t('occupation') }}
          </p>
          <p class="text-secondary mb-4">
            {{ t('heading') }}
          </p>
        </div>

        <div class="relative mb-4">
          <input
              type="text"
              v-model="searchQuery"
              :placeholder="t('searchPlaceholder')"
              class="input w-64"
          />
        </div>
        <nav class="nav-container">
          <a
              v-for="section in ['about', 'experience', 'education', 'projects']"
              :key="section"
              :href="`#${section}`"
              class="nav-link"
              :class="{ 'active': currentSection === section }"
              @click="scrollToSection($event, section)"
          >
            {{ navItems[section] }}
          </a>
        </nav>
        <div class="mt-8 mb-4">
          <div class="flex items-center justify-start gap-6">
            <a
                href="mailto:giulianolazzara@gmail.com"
                class="contact-icon"
                aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M20.5 4h-17A2.503 2.503 0 001 6.5v11A2.503 2.503 0 003.5 20h17a2.503 2.503 0 002.5-2.5v-11A2.503 2.503 0 0020.5 4zM20 6l-8 6.182L4 6h16zM3.5 18A.504.504 0 013 17.5V6.738l8.138 6.287a1 1 0 001.224 0L20.5 6.738V17.5a.504.504 0 01-.5.5h-16.5z"/>
              </svg>
            </a>
            <a
                href="https://github.com/Julieeno"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-icon"
                aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
                href="https://www.linkedin.com/in/giuliano-lazzara/"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-icon"
                aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </aside>
      <main class="space-y-16">
        <section id="about">
          <About/>
        </section>
        <section id="experience">
          <Experience :search-query="searchQuery" :search-active="isSearchActive" />
        </section>
        <section id="education">
          <Education :search-query="searchQuery" :search-active="isSearchActive" />
        </section>
        <section id="projects">
          <Projects :search-query="searchQuery" :search-active="isSearchActive" />
        </section>
      </main>
    </div>
    <div class="desktop-layout">
      <div class="container-custom mx-auto">
        <div class="flex justify-center">
          <div class="w-full max-w-7xl flex gap-24 px-4">
            <aside class="sidebar-fixed">
              <div class="flex-1">
                <div class="mb-2">
                  <h1 class="page-header">
                    Giuliano Lazzara
                  </h1>
                  <p class="text-3xl font-bold text-sage-800 dark:text-sage-200 mb-2 whitespace-pre-line">
                    {{ t('occupation') }}
                  </p>
                  <p class="text-secondary mb-6 whitespace-pre-line">
                    {{ t('heading') }}
                  </p>
                </div>

                <div class="relative mb-10">
                  <input
                      type="text"
                      v-model="searchQuery"
                      :placeholder="t('searchPlaceholder')"
                      class="input w-64"
                  />
                </div>
                <nav class="nav-container">
                  <a
                      v-for="section in ['about', 'experience', 'education', 'projects']"
                      :key="section"
                      :href="`#${section}`"
                      class="nav-link"
                      :class="{ 'active': currentSection === section }"
                      @click="scrollToSection($event, section)"
                  >
                    {{ navItems[section] }}
                  </a>
                </nav>
              </div>
              <div class="mb-12 pb-8">
                <div class="flex items-center justify-start gap-8">
                  <a
                      href="mailto:giulianolazzara@gmail.com"
                      class="contact-icon"
                      aria-label="Email">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path
                          d="M20.5 4h-17A2.503 2.503 0 001 6.5v11A2.503 2.503 0 003.5 20h17a2.503 2.503 0 002.5-2.5v-11A2.503 2.503 0 0020.5 4zM20 6l-8 6.182L4 6h16zM3.5 18A.504.504 0 013 17.5V6.738l8.138 6.287a1 1 0 001.224 0L20.5 6.738V17.5a.504.504 0 01-.5.5h-16.5z"/>
                    </svg>
                  </a>
                  <a
                      href="https://github.com/Julieeno"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="contact-icon"
                      aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path
                          d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                      href="https://www.linkedin.com/in/giuliano-lazzara/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="contact-icon"
                      aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </aside>
            <main class="main-content">
              <section id="about-desktop">
                <About/>
              </section>
              <section id="experience-desktop">
                <Experience :search-query="searchQuery" :search-active="isSearchActive" />
              </section>
              <section id="education-desktop">
                <Education :search-query="searchQuery" :search-active="isSearchActive" />
              </section>
              <section id="projects-desktop">
                <Projects :search-query="searchQuery" :search-active="isSearchActive" />
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue'
import {useI18n} from 'vue-i18n'
import About from '../components/About.vue'
import Education from '../components/Education.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'

const {t, tm} = useI18n()

const navItems = computed(() => {
  const nav = tm('nav')
  
  if (!nav || typeof nav !== 'object') {
    return {}
  }
  
  return nav
})

const searchQuery = ref('')
const currentSection = ref('about')

const scrollToSection = (event, sectionId) => {
  event.preventDefault()

  const isMobileView = window.innerWidth < 1024
  const targetId = isMobileView ? sectionId : `${sectionId}-desktop`
  const element = document.getElementById(targetId)

  if (element) {
    currentSection.value = sectionId

    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const updateCurrentSection = () => {
  const sections = ['about', 'experience', 'education', 'projects']
  const isMobileView = window.innerWidth < 1024

  for (const section of sections) {
    const targetId = isMobileView ? section : `${section}-desktop`
    const element = document.getElementById(targetId)

    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom > 100) {
        currentSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateCurrentSection)
  updateCurrentSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateCurrentSection)
})

const isSearchActive = computed(() => searchQuery.value.length >= 2)
</script>