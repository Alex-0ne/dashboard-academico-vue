import { createApp } from 'vue'
import App from './App.vue'  // ← Debe apuntar a ./App.vue
import store from './store'
import router from './router'
import './styles/main.scss'

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')