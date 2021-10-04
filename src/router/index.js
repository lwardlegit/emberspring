import Vue from 'vue'
import VueRouter from 'vue-router'
import WireframePage from '../views/Wireframes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/designs',
    name: 'wireframes',
    component: WireframePage
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
