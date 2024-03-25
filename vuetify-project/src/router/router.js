
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/mainPage.vue'
import SplitPage from '@/pages/SplitPage.vue'

const routes = [
  {
    path: '/',
    name: MainPage,
    component: MainPage
  },
  {
    path: '/split',
    name: SplitPage,
    component: SplitPage
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
