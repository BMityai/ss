<template>
    <div class="horizontal_menu">
        <div v-html="horizontalMenuContent.content" class="container"/>
    </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue'

import HorizontalMenuService from '@/app/Services/frontend/HorizontalMenuService'

export default defineComponent({
    async setup() {
        const service = new HorizontalMenuService();
        const horizontalMenuContent = await service.getHorizontalMenu();
        return { horizontalMenuContent }
    },
})
</script>
