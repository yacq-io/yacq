import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import QuizListView from '@/views/QuizListView.vue';
import QuizEditView from '@/views/QuizEditView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/list',
      name: 'list',
      component: QuizListView,
    },
    {
      path: '/edit/:title',
      name: 'edit',
      component: QuizEditView,
      props: true,
    },
  ],
});

export default router;
