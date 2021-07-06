<template>
    <div class="page container">
        <Suspense>
            <Block1 />
        </Suspense>
        <Suspense>
            <Block2 />
        </Suspense>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Block1 from "@/components/blocks/block_1.vue";
import Block2 from "@/components/blocks/block_2.vue";

export default defineComponent({
    components: {
        Block1, // first block (swiper)
        Block2, // second block
    },
    // setup() {
    //     return {};
    // },
});
</script>

