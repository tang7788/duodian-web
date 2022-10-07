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
        component: () => import('@/views/home/HomeIndex.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/kind',
        component: () => import('@/views/kind/KindIndex.vue'),
        meta: {
          title: '分类'
        }
      },
      {
        path: '/car',
        component: () => import('@/views/car/CarIndex.vue'),
        meta: {
          isAuthenticated: true,
          title: '购物车'
        }
      },
      {
        path: '/my',
        component: () => import('@/views/my/MyIndex.vue'),
        meta: {
          isAuthenticated: true,
          title: '我的'
        }
      }
    ]
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/detail/DetailWrap.vue'),
    meta: {
      title: '详情'
    }
  },
  {
    path: '/search',
    component: () => import('@/views/search/SearchIndex.vue'),
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/login',
    component: () => import('@/views/login/LoginWrap.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/map',
    component: () => import('@/views/map/MapIndex.vue'),
    meta: {
      title: '地图'
    }
  },
  {
    path: '/geolocation',
    component: () => import('@/views/geolocation/GeoWrap.vue'),
    meta: {
      title: '定位'
    }
  },
  {
    path: '/address',
    component: () => import('@/views/address/AddressIndex.vue'),
    meta: {
      title: '选择地址'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to, from)
  if (to.meta.isAuthenticated) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          callback: to.path
        }
      })
    }
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  document.title = to.meta.title
})
export default router
