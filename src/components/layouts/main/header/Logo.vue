<template>
    <div class="logo" :data-block-id="logoBlockId">
        <router-link :to="logoUrl">
            <img v-bind:src="logoImage" alt="logo" />
            <!-- <img v-bind:src="require('@/assets/frontend/images/service/logo/logo_600x200.png')" alt="" /> -->
        </router-link>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "Logo",

    props: {
        image: {
            type: String,
            default: "",
        },
        url: {
            type: String,
            default: "/",
        },
        blockId: {
            type: String,
        },
    },

    setup(props) {
        const visibleTop = ref(false);
        const logoImage = ref(props.image);
        const logoUrl = ref(props.url);
        const logoBlockId = ref(props.blockId);
        return {
            visibleTop,
            logoImage,
            logoUrl,
            logoBlockId,
        };
    },
});
</script>
