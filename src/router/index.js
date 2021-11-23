import Vue from 'vue'
import VueRouter from 'vue-router'
import Informacion from '../views/Informacion.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/informacion/:id',
    name: 'Informacion',
    component: Informacion
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
