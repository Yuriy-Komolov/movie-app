import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../pages/SignUp/SignUp.vue'),
    },
  ],
});

export default router;
