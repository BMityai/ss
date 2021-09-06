<template>
    <div class="edit_form">
        <h2>
            Edit "{{  }}"
        </h2>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import ContentService from "@/app/Services/adminhtml/ContentService";


export default defineComponent({
    props: {
        blockId: String,
    },
    async setup(props) {
        const contentService = new ContentService();
        console.log(await contentService.getBlockById(props.blockId));
        return {
        };
    },
});
</script>
