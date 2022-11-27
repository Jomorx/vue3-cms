import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/layouts',
    component: () => import('@/layouts/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/pages/login/login.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default router
