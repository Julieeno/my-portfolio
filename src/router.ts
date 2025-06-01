import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import AllProjects from './views/AllProjects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'AllProjects',
    component: AllProjects
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router