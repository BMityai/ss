<template>
    <Suspense>
        <EditForm :blockId="blockId"/>
    </Suspense>
</template>

<script>
import { defineComponent } from "vue";
import EditForm from "@/components/adminhtml/content/elements/blocks/EditForm.vue";


export default defineComponent({
    props: {
        blockId: String,
    },
    components: {
        EditForm
    },
    setup() {
       
        return {
        };
    },
});
</script>
