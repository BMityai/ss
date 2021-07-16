<template>
    <div class="product-card">
        <div class="product-image-content">
            <div class="actions">
                <div class="to-wishlist"></div>
                <div class="discount">-5%</div>
                <div class="quick-view"></div>
                <div class="bestseller"></div>
            </div>
            <a href="#">
                <div class="img">
                    <img src="https://via.placeholder.com/160x160" alt="" />
                </div>
            </a>
        </div>
        <a href="#">
            <div class="product-name">
                <p>testname</p>
            </div>
        </a>
        <div class="product-price-content">
            <div class="price">9999</div>
            <div class="special-price">5999</div>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
    // props: {
    //     product
    // }
    setup() {
        return {};
    },
});
</script>



<style scoped lang='less'>
.product-card {
    width: ~"calc(100% / 5 - 70px)";
    min-width: 240px;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    &:hover {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.06);
    }
    .product-image-content {
        .img {
            img {
                width: 100%;
            }
        }
    }
}
</style>
