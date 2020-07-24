import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/successPro',
    component: () => import('../views/SuccessPro.vue')
  },
  {
    path: '/joinUs',
    component: () => import('../views/JoinUs.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
