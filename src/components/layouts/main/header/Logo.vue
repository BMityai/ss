<template>
    <div class="logo">
        <a href="#">
            <img v-bind:src="logo" alt="" />
        </a>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "Logo",

    props: {
        logoUrl: {
            type: String,
            default: "",
        },
    },

    setup(props) {
        const visibleTop = ref(false);
        const logo = ref(props.logoUrl);
        return {
            visibleTop,
            logo,
        };
    },
});
</script>
