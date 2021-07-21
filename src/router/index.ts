import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Pages/Home.vue'
import CustomPage from '@/views/Pages/CustomPage.vue'
import MainLayout from '@/components/layouts/main/Index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'mainLayout', // Header and Footer
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'Home',
                components: { pageContent: Home } // Home Page
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'CustomPage',
                components: { pageContent: CustomPage }
            },
        ],

    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
