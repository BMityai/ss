<template>

    <!-- CONTENT BLOCKS -->
    <Suspense>
        <ContentBlocks />
    </Suspense>



</template>

<script lang='ts'>
import { defineComponent } from "vue";
import ContentBlocks from "@/components/frontend/layouts/content_blocks/home_page.vue";

export default defineComponent({
    components: {
        ContentBlocks,
    },
    setup() {
        return {};
    },
});
</script>
