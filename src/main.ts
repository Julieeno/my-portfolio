import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import i18n from './i18n/index'
import router from "./router.ts";

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')