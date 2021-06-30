<template>
    <MainLayout>
        <template v-slot:pageContent>
            
            <div class="page container">PAGE CONTENT</div>

        </template>
    </MainLayout>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import MainLayout from '@/components/layouts/main/Index.vue'

export default defineComponent({
    components: {
        MainLayout //Header and footer
    },
    setup() {
        return {};
    },
})
</script>

<style scoped lang='less'>
    .page.container {
        height: 200vh;
    }
</style>
