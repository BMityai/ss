<template>
    <div class="second_block">
        <div class="block_container" v-html="secondBlockContent.content" />
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import BlockService from "@/app/Services/frontend/BlockService";

export default defineComponent({
    props: {
        area: {
            type: String,
            default: 'home_page'
        },
        id: {
            type: Number,
            default: null
        }
    },
    async setup(props) {
        const service = new BlockService();

        const secondBlockContent = await service.getSecondBlockContent(props.area, props.id);
        return { secondBlockContent };
    },
});
</script>


