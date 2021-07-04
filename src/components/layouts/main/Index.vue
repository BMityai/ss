<template>
    <Navigation />
    <Suspense>
        <Header />
    </Suspense>

    <HorizontalMenu />
    <div class="main-wrapper">
        <slot name="pageContent"></slot>
    </div>
    <Footer />
</template>


<script lang='ts'>
import { defineComponent } from "vue";
import Navigation from "@/components/layouts/main/header/Navigation.vue";
import Header from "@/components/layouts/main/header/Index.vue";
import Footer from "@/components/layouts/main/footer/Index.vue";
import HorizontalMenu from "@/components/layouts/main/horizontal_menu/Index.vue";

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
