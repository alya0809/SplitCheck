// Composables
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import SplitPage from '@/pages/SplitPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ExamplePage from '@/pages/ExamplePage.vue'

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
    name: AboutPage,
    component: AboutPage
  },
  {
    path: '/example',
    name: ExamplePage,
    component: ExamplePage
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
