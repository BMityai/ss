import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Pages/frontend/Home/Index.vue'
import CustomPage from '@/views/Pages/CustomPage.vue'
import MainLayout from '@/components/frontend/layouts/main/Index.vue'
import AdminRouter from './admin'
import { getAdminUserStateFromBackend } from '@/app/Middleware/adminhtml/Middleware'


let routes: Array<RouteRecordRaw> = [
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
                components: { pageContent: CustomPage } // Custom page
            },
        ],
    },

]

// Merge admin routes
routes = routes.concat(new AdminRouter().routes)


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


router.beforeEach(async (to, from, next) => {
    await getAdminUserStateFromBackend(to, from, next)  // get admin user state from backend when reload page or first initial

    if (!to.meta.middleware) {
        return next();
    }
    // handle middlewares from routes
    for (const middleware of to.meta.middleware as any) {
        middleware(to, from, next)
    }
})

export default router
