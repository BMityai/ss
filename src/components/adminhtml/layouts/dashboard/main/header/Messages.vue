<template>
    <div v-badge.danger>
        <svg>
            <use
                :xlink:href="
                    require('@/assets/frontend/images/service/icons/default.svg') +
                    `#admin_header_message`
                "
            />
        </svg>
    </div>
</template>


<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return {};
    },
});
</script>
