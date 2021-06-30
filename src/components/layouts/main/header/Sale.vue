<template>

    <div class="sales">
        <a href="#">
            <img v-bind:src="img" alt="" />
        </a>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "Sales",

    props: {
        imgUrl: {
            type: String,
            default: "",
        },
    },

    setup(props) {
        const visibleTop = ref(false);
        const img = ref(props.imgUrl);
        return {
            visibleTop,
            img,
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
