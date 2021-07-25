<template>
    <div class="third_block">
        <h2 class="title"> ТОП-30 популярных товаров </h2>
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
import { useWindowSize } from "vue-window-size";

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

        // const { width, height } = useWindowSize();
        // console.log(width.value, "width");
        // console.log(height.value, "height");

        return { topProducts };
    },
});
</script>

<style scoped lang='less'>
</style>
