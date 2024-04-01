
import { registerPlugins } from '@/plugins'

// Components
import App from '@/App.vue'
import router from '@/router/router.js'
import store from '@/store/index.js'
// Composables
import { createApp } from 'vue'
import '@/styles/style.css'


const app = createApp(App)

registerPlugins(app)

app
.use(router)
.use(store)
.mount('#app');
