<template>
    <Toast position="bottom-right"/>

    <div class="adminhtml-page">
        <!-- HEADER -->
        <Suspense>
            <Header />
        </Suspense>

        <!-- CONTAINER -->
        <div class="adminhtml-container">
            <!-- SIDEBAR -->
            <Sidebar />

            <div class="adminhtml-content">
                <router-view name="adminhtmlContent"></router-view>
            </div>
        </div>
    </div>
</template>


<script lang='ts'>
import { defineComponent } from "vue";
import { isAuth, user } from "@/app/Repositories/states/AdminUserState";
import Header from "@/components/adminhtml/layouts/dashboard/main/header/Index.vue";
import Sidebar from "@/components/adminhtml/layouts/dashboard/main/sidebar/Index.vue";
import Toast from "primevue/toast";


export default defineComponent({
    components: {
        Header,
        Sidebar,
        Toast,
    },
    setup() {

        return {};
    },
});
</script>

<style scoped lang='less'>
.adminhtml-container {
    min-height: 100vh;
    .adminhtml-content {
        width: 100%;
        padding: 60px 10px 10px 80px;
        transition: padding 0.2s linear;
    }
    .show_titles + .adminhtml-content {
        padding: 60px 10px 10px 210px;
    }
}
</style>
