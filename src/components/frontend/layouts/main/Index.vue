<template>
    <Navigation />
    <Suspense>
        <Header />
    </Suspense>

    <Suspense>
        <HorizontalMenu />
    </Suspense>

    <div class="main-wrapper">
        <router-view  name="pageContent">

        </router-view>
    </div>
    <Footer />
</template>


<script lang='ts'>
import { defineComponent } from "vue";
import Navigation from "@/components/frontend/layouts/main/header/Navigation.vue";
import Header from "@/components/frontend/layouts/main/header/Index.vue";
import Footer from "@/components/frontend/layouts/main/footer/Index.vue";
import HorizontalMenu from "@/components/frontend/layouts/main/horizontal_menu/Index.vue";

export default defineComponent({
    components: {
        Header,
        Footer,
        Navigation,
        HorizontalMenu,
    },
    setup() {
        return {};
    },
});
</script>
