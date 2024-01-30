import login from '@/views/main/login.vue'
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/main/login',
        name: 'login',
        component: login,
        meta: {
            title: '',
            keepAlive: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router