<template>
    <div class="third_block">
        <h2 class="title" v-if="data.title.length"> {{data.title}} </h2>
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
import ProductCard from "@/components/frontend/layouts/product_card/Index.vue";


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
    setup(props) {


        // const { width, height } = useWindowSize();
        // console.log(width.value, "width");
        // console.log(height.value, "height");

        return {  };
    },
});
</script>

<style scoped lang='less'>
</style>
