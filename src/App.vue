<template>
    <router-view />
</template>


<script>
export default {
    mounted() {
        let swiperScript = document.createElement("script");
        let swiperStyle = document.createElement("style");
        swiperScript.setAttribute(
            "src",
            "/assets/js/swiper/swiper-bundle.js"
        );
        swiperStyle.setAttribute(
            "src",
            "/assets/css/swiper/swiper.css"
        );

        document.head.appendChild(swiperScript);
        document.head.appendChild(swiperStyle);
    },
};
</script>
