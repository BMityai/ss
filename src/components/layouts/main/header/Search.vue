<template>
    <div class="p-input-icon-left search_field">
        <form action="#" method="GET" @submit.prevent="">
            <InputText type="text" v-model="value1" placeholder="Поиск" />
            <Button class="pi pi-search h" type="submit" />
        </form>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

export default defineComponent({
    components: {
        Button,
        InputText,
    },
    setup() {

        return {};
    },
});
</script>


<style scoped lang='less'>
.search_field {
    width: 100%;
    input {
        width: 100%;
        padding-right: 105px;
        height: 40px;
    };
    button {
        position: absolute;
        top:0;
        right: 0;
        height: 36px;
        box-shadow: unset;
        height: 40px;
        width: 100px;
    }
}
</style>

