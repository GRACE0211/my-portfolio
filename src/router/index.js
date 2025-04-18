import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // 例如首頁
  {
    path: '/',
    component: () => import('@/views/HomePage.vue'),
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
