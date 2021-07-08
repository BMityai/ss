<template>
    <div class="page container">
        <Suspense>
            <Block1 />
        </Suspense>
        <Suspense>
            <Block2 />
        </Suspense>
        <Suspense>
            <Block3 />
        </Suspense>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Block1 from "@/components/blocks/block_1.vue";
import Block2 from "@/components/blocks/block_2.vue";
import Block3 from "@/components/blocks/block_3.vue";

export default defineComponent({
    components: {
        Block1, // first block (swiper)
        Block2, // second block
        Block3, // third block
    },
    // setup() {
    //     return {};
    // },
});
</script>

