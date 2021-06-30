<template>
    <div class="burger_menu">
        <Button
            @click="visibleLeft = !visibleLeft"
            class="p-mr-2"
            :loading="isLoading"
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
            45654654654
        </Sidebar>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";

export default defineComponent({
    name: "Menu",
    props: {
        headerFixed: {
            type: Boolean,
        },
    },
    components: {
        Sidebar,
        Button,
    },

    setup(props) {
        const visibleLeft = ref(false);
        const headerIsFixed = ref(props.headerFixed);
        
        return {
            visibleLeft,
            headerIsFixed
        };
    },
});
</script>

<style scoped lang='less'>
.burger_menu {
    button {
        height: 40px;
        width: 60px;
        i {
            font-size: 25px;
        }
    }
}
</style>
