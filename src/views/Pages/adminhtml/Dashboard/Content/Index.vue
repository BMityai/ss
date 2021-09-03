<template>

    <div class="content_wrapper">
        <Elements/>
        <Design/>
    </div>

</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Elements from "@/components/adminhtml/content/elements/Index.vue";
import Design from "@/components/adminhtml/content/design/Index.vue";

export default defineComponent({
    components: {
        Elements,
        Design,
    },
    setup() {
        return {};
    },
});
</script>
