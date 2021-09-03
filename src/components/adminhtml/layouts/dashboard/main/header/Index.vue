<template>
    <div class="adminhtml-header">
        <div class="adminhtml-header-wrapper">
            <div class="left_content">
                <img
                        src="/assets/images/logo/admin_logo.png"
                        alt=""
                    />
            </div>
            <div class="right_content">
                <div class="item alerts">
                    <Alerts/>
                </div>
                <div class="item messages">
                    <Messages/>
                </div>
                <div class="item account">
                    <Account/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' >
import { defineComponent } from "vue";
import Account from './Account.vue'
import Messages from './Messages.vue'
import Alerts from './Alerts.vue'

export default defineComponent({
    components: {
        Account,
        Messages,
        Alerts
    },
    setup() {
        return {};
    },
});
</script>

