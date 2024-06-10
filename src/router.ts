import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './pages/home/index.vue';
import About from './pages/about/index.vue';
import Work from './pages/work/index.vue';
import Contact from './pages/contact/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/work',
    name: 'Work',
    component: Work,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
