import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import EmployeView from '../views/EmployeView.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/employe',
    name: 'employe',
    component: EmployeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
