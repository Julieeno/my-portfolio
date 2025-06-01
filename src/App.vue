<template>
  <div class="min-h-screen bg-gradient-to-br from-sage-300 via-sage-200 to-sage-100 dark:from-sage-950 dark:via-sage-900 dark:to-sage-700 overflow-x-hidden">
    <div class="fixed inset-0 bg-sage-200 dark:bg-sage-800 -z-10"></div>
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
              class="flag-icon"
              role="img"
              :aria-label="languages[locale].name"
          ></span>
          <span class="text-sm hidden sm:inline">{{ languages[locale].name }}</span>
          <ChevronDownIcon
              class="h-5 w-5 transform-rotate"
              :class="{ 'rotate-180': isLanguageMenuOpen }"
          />
        </button>
        <div v-if="isLanguageMenuOpen" class="dropdown-menu">
          <button
              v-for="(lang, code) in languages"
              :key="code"
              @click="changeLanguage(code)"
              class="dropdown-item"
          >
            <span :class="`fi fi-${lang.flag}`" class="flag-icon"></span>
            {{ lang.name }}
          </button>
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useI18n} from 'vue-i18n'
import {changeLanguage as i18nChangeLanguage} from './i18n/index'
import {SunIcon, MoonIcon, ChevronDownIcon} from '@heroicons/vue/24/outline'
import 'flag-icons/css/flag-icons.min.css'

const {locale} = useI18n()
const isLanguageMenuOpen = ref(false)

const languages = {
  en: {
    name: 'English',
    flag: 'gb'
  },
  it: {
    name: 'Italiano',
    flag: 'it'
  },
  es: {
    name: 'Español',
    flag: 'es'
  },
}

const changeLanguage = (newLocale) => {
  i18nChangeLanguage(newLocale)
  isLanguageMenuOpen.value = false
}

const isDark = ref(document.documentElement.classList.contains('dark'))

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
}
</script>