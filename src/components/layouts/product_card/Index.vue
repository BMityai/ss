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


