<template>
    <Suspense>
        <AuthForm />
    </Suspense>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
import AuthForm from "@/components/adminhtml/auth/form.vue";

export default defineComponent({
    components: {
        AuthForm,
    },
});
</script>
