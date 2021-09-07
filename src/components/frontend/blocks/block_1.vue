<template>
    <div class="first_block">
        <h2 class="title" v-if="data.title"> {{data.title}} </h2>
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
                    v-for="item in data.items"
                    :key="item.id"
                    :data-content-block-item-id="item.id"
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
    EffectFade,
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

SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar, A11y, EffectFade]);

export default defineComponent({
    name: "Block1",
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        data: Object 
    },

    setup(props) {
        return {};
    },
});
</script>

