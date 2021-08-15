<template>
    <div class="second_block">
        <div
            class="block_item"
            v-for="content in secondBlockContent"
            :key="content.id"
            :data-id="content.id"
            :data-block="content.block"
            :data-block-id="content.blockId"
            :data-page-type="content.pageType"
        >
            <router-link :to="content.url">
                <img :src="content.image" :alt="`${content.pageType}_${content.block}_${content.id}`" />
            </router-link>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import BlockService from "@/app/Services/frontend/BlockService";

export default defineComponent({
    props: {
        pageType: {
            type: String,
            default: "home_page",
        },
        id: {
            type: Number,
            default: null,
        },
    },
    async setup(props) {
        const service = new BlockService();

        const secondBlockContent = await service.getSecondBlockContent(
            props.pageType,
            props.id
        );
        return { secondBlockContent };
    },
});
</script>


