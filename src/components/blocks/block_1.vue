<template>
    <div class="first_block">
        <div class="full_width_banner">
            <swiper
                :slides-per-view="1"
                :space-between="0"
                navigation
                :autoplay="{ delay: 2000, autoplayDisableOnInteraction: false }"
                :pagination="{ clickable: true }"
                :loop="true"
            >
                <swiper-slide
                    v-for="item in firstBlock"
                    :key="item.id"
                    :data-content-id="item.id"
                    :data-block="item.block"
                    :data-block-id="item.blockId"
                    :data-area="item.area"
                >
                    <router-link :to="item.url">
                        <img :src="item.image" alt="" />
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
    props: {
        area: {
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

        const firstBlock = await service.getFirstBlockContent(
            props.area,
            props.id
        );

        return { firstBlock };
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