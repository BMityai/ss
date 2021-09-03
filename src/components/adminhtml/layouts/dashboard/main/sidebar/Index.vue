<template >
    <div
        class="adminhtml-sidebar"
        :class="{
            show_titles: showTitles,
        }"
        @mouseover="showTitles = true"
        @mouseleave="showTitles = false"
    >
        <router-link
            :to="{ name: 'dashboard' }"
            class="item-menu"
            :class="{ active: activeSection == 'dashboard' }"
        >
            <svg>
                <use
                    :xlink:href="
                        require('@/assets/frontend/images/service/icons/default.svg') +
                        `#admin_sidebar_dashboard`
                    "
                />
            </svg>
            <span>Dashboard</span>
        </router-link>

        <router-link
            :to="{ name: 'sales' }"
            class="item-menu"
            :class="{ active: activeSection == 'sales' }"
        >
            <svg>
                <use
                    :xlink:href="
                        require('@/assets/frontend/images/service/icons/default.svg') +
                        `#admin_sidebar_sales`
                    "
                />
            </svg>
            <span>Sales</span>
        </router-link>

        <router-link
            :to="{ name: 'catalog' }"
            class="item-menu"
            :class="{ active: activeSection == 'catalog' }"
        >
            <svg>
                <use
                    :xlink:href="
                        require('@/assets/frontend/images/service/icons/default.svg') +
                        `#admin_sidebar_catalog`
                    "
                />
            </svg>
            <span>Catalog</span>
        </router-link>

        <router-link
            :to="{ name: 'customers' }"
            class="item-menu"
            :class="{ active: activeSection == 'customers' }"
        >
            <svg>
                <use
                    :xlink:href="
                        require('@/assets/frontend/images/service/icons/default.svg') +
                        `#admin_sidebar_customers`
                    "
                />
            </svg>
            <span>Customers</span>
        </router-link>

        <router-link
            :to="{ name: 'content' }"
            class="item-menu"
            :class="{ active: activeSection == 'contentLayout' }"
        >
            <svg>
                <use
                    :xlink:href="
                        require('@/assets/frontend/images/service/icons/default.svg') +
                        `#admin_sidebar_content`
                    "
                />
            </svg>
            <span>Content</span>
        </router-link>

        <router-link
            :to="{ name: 'stores' }"
            class="item-menu"
            :class="{ active: activeSection == 'stores' }"
        >
            <svg>
                <use
                    :xlink:href="
                        require('@/assets/frontend/images/service/icons/default.svg') +
                        `#admin_sidebar_stores`
                    "
                />
            </svg>
            <span>Stores</span>
        </router-link>

        <router-link
            :to="{ name: 'system' }"
            class="item-menu"
            :class="{ active: activeSection == 'system' }"
        >
            <svg>
                <use
                    :xlink:href="
                        require('@/assets/frontend/images/service/icons/default.svg') +
                        `#admin_sidebar_system`
                    "
                />
            </svg>
            <span>System</span>
        </router-link>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import { activeSection } from "@/app/Repositories/states/AdminPanelFrontStates";

export default defineComponent({
    setup() {
        const showTitles = ref(false);

        return {
            showTitles,
            activeSection,
        };
    },
});
</script>

