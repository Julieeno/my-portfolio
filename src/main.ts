import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/style.css'
import en from './i18n/en.json'
import it from './i18n/it.json'
import es from './i18n/es.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    it,
    es
  }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')