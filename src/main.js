import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
import { useThemeStore } from './stores/theme'
const themeStore = useThemeStore()
themeStore.setTheme(themeStore.theme)
