<template>
    <div class="third_block">
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
        const topProducts = await service.getThirdBlockContent(
            props.pageType,
            props.id
        );

        return { topProducts };
    },
});
</script>

<style scoped lang='less'>
</style>
