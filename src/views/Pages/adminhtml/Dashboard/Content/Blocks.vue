<template>
    <h2>Blocks</h2>
    <Suspense>
        <ListTable />
    </Suspense>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import ListTable from "@/components/adminhtml/content/elements/blocks/ListTable.vue";
export default defineComponent({
    components: {
        ListTable,
    },
    setup() {
        return {};
    },
});
</script>
