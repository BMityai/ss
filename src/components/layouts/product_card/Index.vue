<template>
    <div class="product-card">
        <div class="product-image-content">
            <div class="actions">
                <div class="to-wishlist"></div>
                <div class="discount">-5%</div>
                <div class="quick-view"></div>
                <div class="bestseller"></div>
            </div>
            <div class="img">
                <img src="https://via.placeholder.com/160x160" alt="">
            </div>
        </div>

        <div class="product-name">
            <p>testname</p>
        </div>
        <div class="product-price-content">
            <div class="price">9999</div>
            <div class="special-price">5999</div>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
    // props: {
    //     product
    // }
    setup() {
        return {}
        // const product
    },
})
</script>



<style scoped lang='less'>
    .product-card {
        width: ~'calc(100% / 5 - 70px)';
        .product-image-content {
            .img {
                img {
                    width: 100%;
                }
            }
        }
    }
</style>
