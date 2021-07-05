<template>
    <div class="first_block">
        <div class="full_width_banner">
            <swiper
                :slides-per-view="1"
                :space-between="0"
                navigation
                :autoplay="{ delay: 2000, autoplayDisableOnInteraction: flase }"
                :pagination="{ clickable: true }"
                :loop="true"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >

                <swiper-slide v-for="image in images" :key="image.id" >
                    <router-link :to="image.href">
                        <img
                            :src="image.src"
                            alt=""
                        />
                    </router-link>
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

import BlockService from "@/app/Services/frontend/BlockService";

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

SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar, A11y]);

export default defineComponent({
    components: {
        Swiper,
        SwiperSlide,
    },
    async setup() {
        const service = new BlockService();

        const images = await service.getFirstBlockContent();

        return { images };
    },
});
</script>

<style scoped lang='less'>
@import url("../../assets/css/variables.less");

.first_block {
    width: 100vw;
    margin-left: ~"calc(-50vw + 50%)";
    // margin-right: ~"calc(-2 * @{container-padding})";
    .swiper-container {
        .swiper-wrapper {
            .swiper-slide img {
                width: 100%;
            }
        }
    }
}
</style>