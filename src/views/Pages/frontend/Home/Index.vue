<template>
    <div class="page container">
        <Suspense>
            <template #default>
                <Block1 v-bind="{ pageType: 'home_page' }" />
            </template>
            <template #fallback> 
                <Skeleton class="header_skeleton" width="100%" />
            </template>
        </Suspense>

        <Suspense>
            <Block2 v-bind="{ pageType: 'home_page' }" />
        </Suspense>

        <Suspense>
            <Block4 v-bind="{ pageType: 'home_page' }" />
        </Suspense>

        <Suspense>
            <Block5 v-bind="{ pageType: 'home_page' }" />
        </Suspense>

        <Suspense>
            <Block3 v-bind="{ pageType: 'home_page' }" />
        </Suspense>

    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Block1 from "@/components/frontend/blocks/block_1.vue";
import Block2 from "@/components/frontend/blocks/block_2.vue";
import Block3 from "@/components/frontend/blocks/block_3.vue";
import Block4 from "@/components/frontend/blocks/block_4.vue";
import Block5 from "@/components/frontend/blocks/block_5.vue";
import Skeleton from 'primevue/skeleton';


export default defineComponent({
    components: {
        Block1, // first block (swiper)
        Block2, // second block (custom pages)
        Block3, // third block (top products)
        Block4, // fourth block (new products)
        Block5, // fifth block (discount)
        Skeleton // skeleton
    },
    // setup() {
    //     return {};
    // },
});
</script>
