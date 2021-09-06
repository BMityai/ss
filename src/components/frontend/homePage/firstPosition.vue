<template >
    <HomePage>

        <template #firtsPosition>
    <Suspense>
        <template #default>
            <Block1 v-bind="{ pageType: 'home_page' }" />
        </template>
        <template #fallback>
            <Skeleton class="header_skeleton" width="100%" />
        </template>
    </Suspense>
    </template>
    </HomePage>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Block1 from "@/components/frontend/blocks/block_1.vue";
import HomePage from '@/views/Pages/frontend/Home/Index.vue'

export default defineComponent({
    components: {
        Block1, // first block (swiper)
    },
    setup() {
        return {};
    },
});
</script>
