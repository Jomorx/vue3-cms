import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import '@/assets/css/index.less'
import { useLoginStore } from './store'
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
const loginStore = useLoginStore()

loginStore.loadLocalLogin()
app.mount('#app')
