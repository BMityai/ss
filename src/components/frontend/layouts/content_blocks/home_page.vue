<template>
    <HomePageLayout>
        <!-- home page first position -->
        
        <template #firstPosition>
            <div :data-position="contentBlock.position"
                v-for="contentBlock in contentBlocks"
                :key="contentBlock.id"
            >
                <component :is="Block1" :data="contentBlock" v-if="contentBlock.block == 'first_block' && contentBlock.position == 'first_position'"/>
                <component :is="Block2" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'second_block' && contentBlock.position == 'first_position'"/>
                <component :is="Block3" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'third_block' && contentBlock.position == 'first_position'"/>
                <component :is="Block4" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'fourth_block' && contentBlock.position == 'first_position'"/>
                <component :is="Block5" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'fifth_block' && contentBlock.position == 'first_position'"/>
            </div>
        </template>
        
        <template #secondPosition>
            <div
                v-for="contentBlock in contentBlocks"
                :key="contentBlock.id"
            >
                <component :is="Block1" :items="contentBlock.items" v-if="contentBlock.block == 'first_block' && contentBlock.position == 'second_position'"/>
                <component :is="Block2" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'second_block' && contentBlock.position == 'second_position'"/>
                <component :is="Block3" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'third_block' && contentBlock.position == 'second_position'"/>
                <component :is="Block4" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'fourth_block' && contentBlock.position == 'second_position'"/>
                <component :is="Block5" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'fifth_block' && contentBlock.position == 'second_position'"/>
            </div>
        </template>
        
        <template #thirdPosition>
            <div
                v-for="contentBlock in contentBlocks"
                :key="contentBlock.id"
            >
                <component :is="Block1" :items="contentBlock.items" v-if="contentBlock.block == 'first_block' && contentBlock.position == 'third_position'"/>
                <component :is="Block2" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'second_block' && contentBlock.position == 'third_position'"/>
                <component :is="Block3" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'third_block' && contentBlock.position == 'third_position'"/>
                <component :is="Block4" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'fourth_block' && contentBlock.position == 'third_position'"/>
                <component :is="Block5" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'fifth_block' && contentBlock.position == 'third_position'"/>
            </div>
        </template>
        
        <template #fourthPosition>
            <div
                v-for="contentBlock in contentBlocks"
                :key="contentBlock.id"
            >
                <component :is="Block1" :items="contentBlock.items" v-if="contentBlock.block == 'first_block' && contentBlock.position == 'fourth_position'"/>
                <component :is="Block2" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'second_block' && contentBlock.position == 'fourth_position'"/>
                <component :is="Block3" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'third_block' && contentBlock.position == 'fourth_position'"/>
                <component :is="Block4" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'fourth_block' && contentBlock.position == 'fourth_position'"/>
                <component :is="Block5" v-bind="{data: contentBlock}" v-if="contentBlock.block == 'fifth_block' && contentBlock.position == 'fourth_position'"/>
            </div>
        </template>

    </HomePageLayout>
</template>

<script lang='ts'>
import BlockService from "@/app/Services/frontend/BlockService";

import { defineComponent } from "vue";
import HomePageLayout from "@/components/frontend/layouts/home_page/layout.vue";
import Block1 from "@/components/frontend/blocks/block_1.vue";
import Block2 from "@/components/frontend/blocks/block_2.vue";
import Block3 from "@/components/frontend/blocks/block_3.vue";
import Block4 from "@/components/frontend/blocks/block_4.vue";
import Block5 from "@/components/frontend/blocks/block_5.vue";
import Skeleton from "primevue/skeleton";

export default defineComponent({
    components: {
        Block1, // first block (swiper)
        Block2, // second block (custom pages)
        Block3, // third block (top products)
        Block4, // fourth block (new products)
        Block5, // fifth block (discount)
        Skeleton, // skeleton
        HomePageLayout,
    },
    async setup() {
        const service = new BlockService();
        const contentBlocks = await service.getHomePageAllContentBlocks();
        console.log(contentBlocks)
        return {
            contentBlocks,
            Block1,
            Block2, // second block (custom pages)
            Block3, // third block (top products)
            Block4, // fourth block (new products)
            Block5, // fifth block (discount)
        };
    },
});
</script>
