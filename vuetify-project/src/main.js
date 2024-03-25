
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import router from './router/router.js'
// Composables
import { createApp } from 'vue'



const app = createApp(App)

registerPlugins(app)

app
.use(router)
.mount('#app');
