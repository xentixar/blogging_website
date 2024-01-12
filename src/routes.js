import { createRouter, createWebHistory } from 'vue-router';
import HomeVue from './views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
