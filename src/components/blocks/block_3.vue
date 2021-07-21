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
        <div class="product-item flex-empty"></div>
        <div class="product-item flex-empty"></div>
        <div class="product-item flex-empty"></div>
        <div class="product-item flex-empty"></div>
        <div class="product-item flex-empty"></div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import ProductCard from "@/components/layouts/product_card/Index.vue";
import BlockService from "@/app/Services/frontend/BlockService";

export default defineComponent({
    components: {
        ProductCard,
    },
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
        const topProducts = await service.getThirdBlockContent(props.pageType, props.id);

        return { topProducts };
    },
});
</script>

<style scoped lang='less'>
.product_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .product-item.flex-empty {
        width: ~"calc(100% / 5 - 70px)";
        min-width: 240px;
        padding: 5px;
        margin-bottom: 20px;
        border-radius: 5px;
    }
}
</style>
