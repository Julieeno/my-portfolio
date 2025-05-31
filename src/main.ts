import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/style.css'
import enMessages from './i18n/en.json'
import itMessages from './i18n/it.json'
import esMessages from './i18n/es.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: enMessages,
    it: itMessages,
    es: esMessages
  }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')