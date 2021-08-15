<template>
    <div class="first_block">
        <div class="full_width_banner">
            <swiper
                :effect="'fade'"
                :slides-per-view="1"
                :space-between="0"
                navigation
                :autoplay="{ delay: 3000, autoplayDisableOnInteraction: false }"
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
    EffectFade
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

SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar, A11y, EffectFade]);

export default defineComponent({
    components: {
        Swiper,
        SwiperSlide,
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

        const firstBlock = await service.getFirstBlockContent(
            props.pageType,
            props.id
        );

        return { firstBlock };
    },
});
</script>

