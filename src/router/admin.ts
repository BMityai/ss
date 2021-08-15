import { RouteRecordRaw } from "vue-router";
import AdminAuth from '@/views/Pages/adminhtml/AuthForm/Index.vue'
import DashboardLayout from '@/components/adminhtml/layouts/dashboard/main/Index.vue'
import AdminPanelLayout from '@/components/adminhtml/layouts/main/Index.vue'
import Dashboard from '@/views/Pages/adminhtml/Dashboard/Index.vue'
import { onlyNotAuth } from '@/app/Middleware/adminhtml/Middleware'



export default class AdminRouter {
    public routes: Array<RouteRecordRaw> = []

    constructor() {
        this.setRoutes();
    }

    private setRoutes() {
        this.routes = [
            {
                path: '/admin',
                name: 'admin',
                component: AdminPanelLayout,
                children: [
                    {
                        path: '',
                        name: 'adminAuth',
                        components: { adminhtml: AdminAuth },
                        meta: {
                            middleware: [
                                onlyNotAuth
                            ]
                        }
                    },
                    {
                        path: 'dashboard',
                        name: 'dashboardLayout',
                        components: { adminhtml: DashboardLayout },
                        children: [
                            {
                                path: '',
                                name: 'dashboard',
                                components: { adminhtmlContent: Dashboard},
                                meta: {
                                   
                                }
                            }
                        ]
                    },
                ]
            },
        ]
    }
}