
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

// const routes = [
//   {
//     path: '/',
//     component: MainPage
//   }
  
// ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
})

export default router
