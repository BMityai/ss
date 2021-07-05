<template>
    <div class="burger_menu">
        <Button
            @click="visibleLeft = !visibleLeft"
            class="p-mr-2"
        >
            <i
                :class="{
                    'pi pi-bars': !visibleLeft,
                    'pi pi-times': visibleLeft,
                }"
            />
        </Button>
        <Sidebar
            class="menu-sidebar"
            :class="{ header_fixed: headerFixed }"
            v-model:visible="visibleLeft"
        >
            <ul>
                <li v-for="cat in menu" :key="cat.id"><router-link :to='cat.href'>{{cat.name}}</router-link></li>
            </ul>
        </Sidebar>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";

export default defineComponent({
    name: "Menu",
    props: {
        headerFixed: {
            type: Boolean,
        },
        menuItems: {
            type: Object,
        },
    },
    components: {
        Sidebar,
        Button,
    },

    setup(props) {
        const visibleLeft = ref(false);
        const headerIsFixed = ref(props.headerFixed);
        const menu = ref(props.menuItems);
        
        return {
            visibleLeft,
            headerIsFixed,
            menu
        };
    },
});
</script>

<style scoped lang='less'>
.burger_menu {
    button {
        height: 50px;
        width: 60px;
        i {
            font-size: 25px;
        }
    }
}
</style>
