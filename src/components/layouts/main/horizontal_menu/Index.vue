<template>
    <div class="horizontal_menu">
        <ul class="horizontal_menu-wrapper">
            <li
                v-for="menuItem in horizontalMenuContent"
                :key="menuItem.id"
                class="menu-item"
                :data-content-id="menuItem.id"
                :data-block="menuItem.block"
                :data-block-id="menuItem.blockId"
                :data-area="menuItem.area"
            >
                <router-link :to="menuItem.url" class="item-link">
                    <span class="block2-item-name">{{ menuItem.text }}</span>
                </router-link>
            </li>
        </ul>
        <div v-html="horizontalMenuContent.content" class="container" />
    </div>
</template>


<script lang='ts'>
import { defineComponent } from "vue";

import HorizontalMenuService from "@/app/Services/frontend/HorizontalMenuService";

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
        const service = new HorizontalMenuService();
        const horizontalMenuContent = await service.getHorizontalMenu(
            props.pageType,
            props.id
        );
        return { horizontalMenuContent };
    },
});
</script>
