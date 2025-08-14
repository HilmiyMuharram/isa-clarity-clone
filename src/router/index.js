import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '../pages/About-us.vue' // langsung pakai halaman About Us

const routes = [
  {
    path: '/',            // root path
    name: 'AboutUsHome',  // nama bebas
    component: AboutUs    // langsung render About Us
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
