import Vue from 'vue'
import VueRouter from 'vue-router'
import DesignPage from '../views/Designs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/designs',
    name: 'wireframes',
    component: DesignPage
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
