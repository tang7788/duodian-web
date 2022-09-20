import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/main/MainIndex.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/HomeIndex.vue')
      },
      {
        path: '/kind',
        component: () => import('@/views/kind/KindIndex.vue')
      },
      {
        path: '/car',
        component: () => import('@/views/car/CarIndex.vue')
      },
      {
        path: '/my',
        component: () => import('@/views/my/MyIndex.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
