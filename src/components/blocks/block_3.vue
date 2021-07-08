<template>
    <div class="product_list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import ProductCard from '@/components/layouts/product_card/Index.vue';

export default defineComponent({
    components: {
        ProductCard,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped lang='less'>
.product_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
