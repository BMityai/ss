<template>
    <div class="sales" :data-block-id="logoBlockId">
        <router-link :to="logoUrl" >
            <img v-bind:src="logoImage" alt="" />
        </router-link>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "Sales",

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

<style scoped lang='less'>
.sales {
    width: 100%;
    text-align: center;
}
</style>
