import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import StudentView from '@/views/StudentView.vue';
import StudentDetail from '@/views/StudentDetail.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/student',
    name: 'StudentView',
    component: StudentView
  },
  {
    path: '/student/:id',
    name: 'StudentDetail',
    component: StudentDetail,
    props: true
  },
  {
    path: '/studentList',
    redirect: '/student',
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
