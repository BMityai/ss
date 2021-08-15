<template>
    <div class="product-card">
        <div class="product-image-content">
            <div class="actions">
                <div class="to-wishlist">
                    <button>
                        <svg>
                            <use :xlink:href="require('@/assets/frontend/images/service/icons/default.svg') + `#add_to_wishlist`"/> <!-- or #added_to_wishlist -->
                        </svg>
                    </button>
                </div>
                <div class="quick-view">
                    <button>
                        <svg>
                            <use :xlink:href="require('@/assets/frontend/images/service/icons/default.svg') + `#quick_view`"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="product-flags">
                <div class="top">топ</div>
                <div class="discount">-5%</div>
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
            <div class="special-price">5999 ₸</div>
            <div class="price">9999 ₸</div>
        </div>
        <div class="product-date">25-05-2021 10:45</div>
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


