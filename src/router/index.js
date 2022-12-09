import { createRouter, createWebHistory } from 'vue-router'
import guanyuwomeng from '../components/guanyuwomeng.vue'
import about from '../components/about.vue'
const routes = [
  {
    path: '/guanyuwomeng',
    name: 'guanyuwomeng',
    component: guanyuwomeng
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/about.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
