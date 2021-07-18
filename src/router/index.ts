import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Pages/Home.vue'
import MainLayout from '@/components/layouts/main/Index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'mainLayout', // Header and Footer
        component: MainLayout,
        children:[
            {
                path:'',
                name: 'Home',
                components: {pageContent:Home} // Home Page
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
