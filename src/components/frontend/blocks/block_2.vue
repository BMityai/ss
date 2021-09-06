<template>
    <div class="second_block">
        <div
            class="block_item"
            v-for="content in data.items"
            :key="content.id"
            :data-content-block-item-id="content.id"
        >
            <router-link :to="content.url">
                <img :src="content.image" :alt="`${content.pageType}_${content.block}_${content.id}`" />
            </router-link>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        data: Object
    },

    setup() {
        
        return {  };
    },
});
</script>


