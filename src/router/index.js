import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import EmployeView from '../views/EmployeView.vue';
import UsersView from '../views/UsersView.vue';

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
  },
  {
    path: '/employe/:id',
    name: 'employeShow',
    component: EmployeView
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
