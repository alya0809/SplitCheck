
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/mainPage.vue'
import SplitPage from '@/pages/SplitPage.vue'
import aboutPage from '@/pages/aboutPage.vue'
import examplePage from '@/pages/examplePage.vue'

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
  },
  {
    path: '/about',
    name: aboutPage,
    component: aboutPage
  },
  {
    path: '/example',
    name: examplePage,
    component: examplePage
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
