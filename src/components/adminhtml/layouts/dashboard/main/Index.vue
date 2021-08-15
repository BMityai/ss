<template>
    <div class="container">
        <router-view name="adminhtmlContent"></router-view>
    </div>
</template>


<script lang='ts'>
import { defineComponent } from "vue";
import { isAuth, user } from "@/app/Repositories/states/AdminUserState";

export default defineComponent({
    setup() {
        console.log(isAuth, "dashboard");
        console.log(user, "dashboard");
        return {};
    },
});
</script>
