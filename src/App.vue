<template>
  <div class="min-h-screen bg-sage-50 dark:bg-sage-950">
    <div class="fixed top-0 right-0 z-50 p-4 flex items-center gap-3">
      <button
          @click="toggleTheme"
          class="control-button"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <SunIcon v-if="!isDark" class="h-5 w-5"/>
        <MoonIcon v-else class="h-5 w-5"/>
      </button>

      <div class="relative">
        <button
            @click="isLanguageMenuOpen = !isLanguageMenuOpen"
            class="control-button flex items-center gap-2"
        >
          <span
              :class="`fi fi-${languages[locale].flag}`"
              role="img"
              :aria-label="languages[locale].name"
          ></span>
          <span class="text-sm hidden sm:inline">{{ languages[locale].name }}</span>
          <ChevronDownIcon
              class="h-5 w-5"
              :class="{ 'transform rotate-180': isLanguageMenuOpen }"
          />
        </button>
        <div v-if="isLanguageMenuOpen"
             class="absolute right-0 mt-2 w-40 rounded-lg bg-white dark:bg-sage-800 shadow-lg border border-sage-200 dark:border-sage-700 py-1">
          <button
              v-for="(lang, code) in languages"
              :key="code"
              @click="changeLanguage(code)"
              class="w-full px-4 py-2 text-left hover:bg-sage-100 dark:hover:bg-sage-700 flex items-center gap-2"
          >
            <span :class="`fi fi-${lang.flag}`"></span>
            {{ lang.name }}
          </button>
        </div>
      </div>
    </div>

    <div class="min-h-screen pt-20">
      <div class="lg:hidden px-4">
        <aside class="mb-8">
          <h1 class="text-2xl font-bold mb-6 text-sage-900 dark:text-sage-50">
            {{ t('title') }}
          </h1>

          <div class="relative mb-6">
            <input
                type="text"
                v-model="searchQuery"
                :placeholder="t('searchPlaceholder')"
                class="input w-64"
            />
          </div>

          <nav class="nav-container">
            <a
                v-for="section in ['about', 'education', 'experience']"
                :key="section"
                :href="`#${section}`"
                class="nav-link"
                :class="{ 'active': currentSection === section }"
                @click="scrollToSection($event, section)"
            >
              {{ t(`nav.${section}`) }}
            </a>
          </nav>
        </aside>

        <main class="space-y-16">
          <section id="about">
            <About/>
          </section>
          <section id="education">
            <Education :search-query="searchQuery" :search-active="isSearchActive" />
          </section>
          <section id="experience">
            <Experience :search-query="searchQuery" :search-active="isSearchActive" />
          </section>
        </main>
      </div>

      <div class="hidden lg:block">
        <div class="container mx-auto">
          <div class="flex justify-center">
            <div class="w-full max-w-7xl flex gap-24 px-4">
              <aside class="w-[450px] fixed top-32 flex flex-col h-[calc(100vh-8rem)]">
                <div class="flex-1">
                  <h1 class="text-5xl font-bold mb-6 text-sage-900 dark:text-sage-50">
                    {{ t('title') }}
                  </h1>

                  <div class="relative mb-6">
                    <input
                        type="text"
                        v-model="searchQuery"
                        :placeholder="t('searchPlaceholder')"
                        class="input w-64"
                    />
                  </div>

                  <nav class="nav-container">
                    <a
                        v-for="section in ['about', 'education', 'experience']"
                        :key="section"
                        :href="`#${section}`"
                        class="nav-link"
                        :class="{ 'active': currentSection === section }"
                        @click="scrollToSection($event, section)"
                    >
                      {{ t(`nav.${section}`) }}
                    </a>
                  </nav>
                </div>

                <div class="mb-12 pb-8">
                  <div class="flex items-center justify-start gap-8">
                    <a
                        href="mailto:giuliano@giuliano.com"
                        class="contact-icon"
                        aria-label="Email">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M20.5 4h-17A2.503 2.503 0 001 6.5v11A2.503 2.503 0 003.5 20h17a2.503 2.503 0 002.5-2.5v-11A2.503 2.503 0 0020.5 4zM20 6l-8 6.182L4 6h16zM3.5 18A.504.504 0 013 17.5V6.738l8.138 6.287a1 1 0 001.224 0L20.5 6.738V17.5a.504.504 0 01-.5.5h-16.5z"/>
                      </svg>
                    </a>
                    <a
                        href="https://github.com/giuliano"
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
                        href="https://linkedin.com/in/giuliano"
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

              <main class="ml-[600px] w-[600px] space-y-16 py-8">
                <section id="about-desktop">
                  <About/>
                </section>
                <section id="education-desktop">
                  <Education :search-query="searchQuery" :search-active="isSearchActive" />
                </section>
                <section id="experience-desktop">
                  <Experience :search-query="searchQuery" :search-active="isSearchActive" />
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue'
import {useI18n} from 'vue-i18n'
import {SunIcon, MoonIcon, ChevronDownIcon} from '@heroicons/vue/24/outline'
import About from './components/About.vue'
import Education from './components/Education.vue'
import Experience from './components/Experience.vue'
import 'flag-icons/css/flag-icons.min.css'

const {t, locale} = useI18n()
const isLanguageMenuOpen = ref(false)

const languages = {
  en: {
    name: 'English',
    flag: 'gb'
  },
  it: {
    name: 'Italiano',
    flag: 'it'
  }
}

const changeLanguage = (newLocale) => {
  locale.value = newLocale
  isLanguageMenuOpen.value = false
  localStorage.setItem('preferred-locale', newLocale)
}

const searchQuery = ref('')
const isDark = ref(document.documentElement.classList.contains('dark'))
const currentSection = ref('about')

// Removed the handleResize function since it's no longer needed
// (it was only used for mobile menu which we don't have)

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
  const sections = ['about', 'education', 'experience']
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

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
}
</script>

<style>
.container {
  @apply w-full;
  max-width: 1600px;
}

@media (min-width: 1024px) and (max-width: 1199px) {
  aside.fixed {
    width: 250px;
  }

  main {
    margin-left: 340px !important;
    width: 540px !important;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.nav-link {
  @apply transition-all duration-200;
}

@media (min-width: 1024px) and (max-width: 1199px) {
  aside.fixed {
    width: 250px;
  }

  main.ml-[300px] {
    margin-left: 250px;
    width: 600px;
  }
}

.container {
  @apply w-full;
  max-width: 1280px;
}

aside.fixed {
  max-width: calc((100vw - 640px - 4rem) / 2);
}

.transform {
  @apply transition-transform duration-200;
}

@media (min-width: 1024px) {
  .ml-64 {
    margin-left: 16rem;
  }
}

.fi {
  @apply inline-block w-5 h-4 bg-contain bg-no-repeat align-middle;
}

.control-button {
  @apply h-10 px-3 rounded-lg
  bg-white/80 dark:bg-sage-800/80
  hover:bg-white dark:hover:bg-sage-700
  text-sage-800 dark:text-sage-200
  transition-colors duration-200
  backdrop-filter backdrop-blur-sm
  flex items-center;
}

html {
  scroll-behavior: smooth;
}

.highlight-match {
  position: relative;
  overflow: hidden;
  background: linear-gradient(
      90deg,
      rgba(203, 211, 206, 0.15) 0%,
      rgba(176, 189, 180, 0.25) 25%,
      rgba(148, 166, 153, 0.3) 50%,
      rgba(176, 189, 180, 0.25) 75%,
      rgba(203, 211, 206, 0.15) 100%
  );
  background-size: 200% auto;
  animation: sage-sparkle 5s ease-in-out infinite;
  border: 2px solid rgba(148, 166, 153, 0.3);
  box-shadow: 0 0 20px rgba(148, 166, 153, 0.3),
  inset 0 0 20px rgba(176, 189, 180, 0.2);
}

@keyframes sage-sparkle {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.highlight-match::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
      35deg,
      transparent 45%,
      rgba(176, 189, 180, 0.5) 48%,
      rgba(203, 211, 206, 0.8) 50%,
      rgba(176, 189, 180, 0.5) 52%,
      transparent 55%
  );
  animation: sage-shine 4s ease-in-out infinite;
}

@keyframes sage-shine {
  0% {
    transform: translateX(-100%) rotate(35deg);
    opacity: 0;
  }
  25% {
    opacity: 0.8;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    transform: translateX(200%) rotate(35deg);
    opacity: 0;
  }
}

.dark .highlight-match {
  background: linear-gradient(
      90deg,
      rgba(176, 189, 180, 0.2) 0%,
      rgba(148, 166, 153, 0.3) 25%,
      rgba(121, 143, 127, 0.35) 50%,
      rgba(148, 166, 153, 0.3) 75%,
      rgba(176, 189, 180, 0.2) 100%
  );
  border: 2px solid rgba(148, 166, 153, 0.4);
  box-shadow: 0 0 20px rgba(148, 166, 153, 0.4),
  inset 0 0 20px rgba(176, 189, 180, 0.3);
}

.dark .highlight-match::before {
  background: linear-gradient(
      35deg,
      transparent 45%,
      rgba(176, 189, 180, 0.6) 48%,
      rgba(203, 211, 206, 0.9) 50%,
      rgba(176, 189, 180, 0.6) 52%,
      transparent 55%
  );
}

.transition-theme {
  @apply transition-all duration-200 ease-in-out;
}

.highlight-tag {
  position: relative;
  overflow: hidden;
  animation: tag-pulse 1.8s ease-in-out infinite;
  border: 2px solid rgba(148, 166, 153, 0.8) !important;
  box-shadow: 0 0 15px rgba(148, 166, 153, 0.4),
  inset 0 0 8px rgba(148, 166, 153, 0.3) !important;
  transform-origin: center;
  z-index: 1;
}

@keyframes tag-pulse {
  0% {
    transform: scale(1);
    background-color: rgba(148, 166, 153, 0.3);
  }
  50% {
    transform: scale(1.05);
    background-color: rgba(148, 166, 153, 0.6);
  }
  100% {
    transform: scale(1);
    background-color: rgba(148, 166, 153, 0.3);
  }
}

.highlight-tag::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
      35deg,
      transparent 45%,
      rgba(176, 189, 180, 0.5) 48%,
      rgba(203, 211, 206, 0.8) 50%,
      rgba(176, 189, 180, 0.5) 52%,
      transparent 55%
  );
  animation: tag-shine 1.5s ease-in-out infinite;
  z-index: 2;
}

@keyframes tag-shine {
  0% {
    transform: translateX(-100%) rotate(35deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%) rotate(35deg);
    opacity: 0;
  }
}

.dark .highlight-tag {
  border: 2px solid rgba(176, 189, 180, 0.8) !important;
  box-shadow: 0 0 15px rgba(176, 189, 180, 0.4),
  inset 0 0 8px rgba(176, 189, 180, 0.3) !important;
}

.dark .highlight-tag::before {
  background: linear-gradient(
      35deg,
      transparent 45%,
      rgba(176, 189, 180, 0.5) 48%,
      rgba(203, 211, 206, 0.8) 50%,
      rgba(176, 189, 180, 0.5) 52%,
      transparent 55%
  );
}

@keyframes tag-dark-pulse {
  0% {
    background-color: rgba(176, 189, 180, 0.3);
  }
  50% {
    background-color: rgba(176, 189, 180, 0.6);
  }
  100% {
    background-color: rgba(176, 189, 180, 0.3);
  }
}

.dark .highlight-tag {
  animation: tag-dark-pulse 1.5s ease-in-out infinite;
}

.btn-secondary {
  @apply px-3 py-2 rounded-lg
  bg-white/80 dark:bg-sage-800/80
  hover:bg-white dark:hover:bg-sage-700
  text-sage-800 dark:text-sage-200
  transition-colors duration-200
  backdrop-filter backdrop-blur-sm;
}

#app {
  @apply min-h-screen bg-sage-50 dark:bg-sage-950;
}

html, body {
  @apply bg-sage-50 dark:bg-sage-950;
}

.nav-link {
  @apply dark:text-sage-300 transition-colors;
}

.nav-link.active {
  @apply text-sage-900 dark:text-sage-50 font-medium;
}

.contact-icon {
  @apply text-sage-600 hover:text-sage-800 dark:text-sage-400 dark:hover:text-sage-200
  transition-all duration-300 ease-in-out ;
}

.contact-icon svg {
  @apply transform-gpu;
  shape-rendering: geometricPrecision;
}
</style>