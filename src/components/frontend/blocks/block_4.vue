<template>
    <div class="fourth_block">
        <h2 class="title">Новинки</h2>
        <div class="new_items">
            <swiper
                :slides-per-view="6"
                :slides-per-group="6"
                :space-between="0"
                :breakpoints="{
                    800: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1000: {
                        slidesPerView: 4,
                    },
                    1500: {
                        slidesPerView: 6,
                    },
                }"
                navigation
                :autoplay="{ delay: 4000, autoplayDisableOnInteraction: false }"
                :loop="true"
            >
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
                <swiper-slide>
                    <ProductCard />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script lang='ts'>
// Import Swiper Vue.js components
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

import { defineComponent } from "vue";
// Import Swiper styles
import "swiper/swiper.less";
import "swiper/components/a11y/a11y.less";
import "swiper/components/controller/controller.less";
import "swiper/components/effect-coverflow/effect-coverflow.less";
import "swiper/components/effect-cube/effect-cube.less";
import "swiper/components/effect-fade/effect-fade.less";
import "swiper/components/effect-flip/effect-flip.less";
import "swiper/components/lazy/lazy.less";
import "swiper/components/navigation/navigation.less";
import "swiper/components/pagination/pagination.less";
import "swiper/components/scrollbar/scrollbar.less";
import "swiper/components/thumbs/thumbs.less";
import "swiper/components/zoom/zoom.less";
import ProductCard from "@/components/frontend/layouts/product_card/Index.vue";
import BlockService from "@/app/Services/frontend/BlockService";

SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar, A11y]);

export default defineComponent({
    components: {
        Swiper,
        SwiperSlide,
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
        service.moveNavigationOutsideOfContainer(".fourth_block", ".new_items");
        return {};
    },
});
</script>

