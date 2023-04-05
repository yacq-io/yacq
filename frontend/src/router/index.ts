import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/list',
            name: 'list',
            component: () => import('../views/QuizListView.vue'),
        },
        {
            path: '/edit/:title',
            name: 'edit',
            component: () => import('../views/QuizEditView.vue'),
            props: true
        }
    ]
});

export default router;
