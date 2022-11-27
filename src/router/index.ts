import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
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
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  if (to.path === '/login' && localCache.getCache('token')) return '/'
})
export default router
