import { RouteRecordRaw } from "vue-router";
import AdminAuth from '@/views/Pages/adminhtml/AuthForm/Index.vue'
import AdminLogout from '@/views/Pages/adminhtml/AuthForm/Logout.vue'
import DashboardLayout from '@/components/adminhtml/layouts/dashboard/main/Index.vue'
import AdminPanelLayout from '@/components/adminhtml/layouts/main/Index.vue'
import Dashboard from '@/views/Pages/adminhtml/Dashboard/HomePage/Index.vue'
import Catalog from '@/views/Pages/adminhtml/Dashboard/Catalog/Index.vue'
import Sales from '@/views/Pages/adminhtml/Dashboard/Sales/Index.vue'
import Customers from '@/views/Pages/adminhtml/Dashboard/Customers/Index.vue'
import ContentLayout from '@/views/Pages/adminhtml/Dashboard/Content/ContentLayout.vue'
import ContentList from '@/views/Pages/adminhtml/Dashboard/Content/Index.vue'
import Stores from '@/views/Pages/adminhtml/Dashboard/Stores/Index.vue'
import System from '@/views/Pages/adminhtml/Dashboard/System/Index.vue'
import Blocks from '@/views/Pages/adminhtml/Dashboard/Content/Block/Blocks.vue'
import BlockEditForm from '@/views/Pages/adminhtml/Dashboard/Content/Block/Edit.vue'
import { notAuth, auth, showAsActiveSectionInSidebar } from '@/app/Middleware/adminhtml/Middleware'
import router from ".";



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
                meta: {
                    middleware: [
                        'test'
                    ]
                },
                children: [
                    {
                        path: '',
                        name: 'adminAuth',
                        components: { adminhtml: AdminAuth },
                        meta: {
                            middleware: [
                                notAuth
                            ]
                        }
                    },
                    {
                        path: 'logout',
                        name: 'logout',
                        components: { adminhtml: AdminLogout },
                        meta: {
                            middleware: [
                                auth
                            ]
                        }
                    },
                    {
                        path: 'dashboard',
                        name: 'dashboardLayout',
                        components: { adminhtml: DashboardLayout },
                        meta: {
                            middleware: [
                                auth,
                                showAsActiveSectionInSidebar
                            ]
                        },
                        children: [
                            {
                                path: '',
                                name: 'dashboard',
                                components: { adminhtmlContent: Dashboard },
                                meta: {

                                },

                            },
                            {
                                path: 'sales',
                                name: 'sales',
                                components: { adminhtmlContent: Sales },
                                meta: {

                                },
                            },
                            {
                                path: 'catalog',
                                name: 'catalog',
                                components: { adminhtmlContent: Catalog },
                                meta: {

                                },
                            },
                            {
                                path: 'customers',
                                name: 'customers',
                                components: { adminhtmlContent: Customers },
                                meta: {

                                },
                            },
                            {
                                path: 'content',
                                name: 'contentLayout',
                                components: { adminhtmlContent: ContentLayout },
                                meta: {

                                },
                                children: [
                                    {
                                        path: '',
                                        name: 'content',
                                        components: { contentLayout: ContentList },
                                    },
                                    {
                                        path: 'blocks',
                                        name: 'contentBlocks',
                                        components: { contentLayout: Blocks },
                                    },
                                    {
                                        path: 'block/edit/:blockId',
                                        name: 'blockEdit',
                                        components: { contentLayout: BlockEditForm },
                                        props: true
                                    }
                                ]
                            },
                            {
                                path: 'stores',
                                name: 'stores',
                                components: { adminhtmlContent: Stores },

                            },
                            {
                                path: 'system',
                                name: 'system',
                                components: { adminhtmlContent: System },

                            },
                        ]
                    },
                ]
            },
        ]
    }
}
