<template>
    <div class="second_block">
        <div class="block_container" v-html="secondBlockContent.content" />
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import BlockService from "@/app/Services/frontend/BlockService";

export default defineComponent({
    async setup() {
        const service = new BlockService();

        const secondBlockContent = await service.getSecondBlockContent();
        return { secondBlockContent };
    },
});
</script>


