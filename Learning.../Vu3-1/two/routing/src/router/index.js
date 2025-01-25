import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import StudentView from '@/views/StudentView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/student',
    name: 'StudentView',
    component: StudentView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
