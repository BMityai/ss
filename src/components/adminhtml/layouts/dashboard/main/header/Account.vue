<template>
    <ConfirmDialog></ConfirmDialog>
    <Avatar
        :label="userLabel"
        style="background-color: #363a41; color: #fff"
        @click="toggleOverlayPanel"
        aria:haspopup="true"
        aria-controls="admin_account_overlay_panel"
    />
    <OverlayPanel
        ref="canShowOverlayPanel"
        appendTo="body"
        id="admin_account_overlay_panel"
        :breakpoints="{}"
        :style="{ right: '20px'}"
    >
        <router-link :to="{ name: 'dashboard' }" class="item">
            <svg>
                <use
                    :xlink:href="
                        require('@/assets/frontend/images/service/icons/default.svg') +
                        `#admin_header_user_profile`
                    "
                />
            </svg>
            <span> Profile </span>
        </router-link>

        <router-link :to="{ name: 'dashboard' }" class="item">
            <svg>
                <use
                    :xlink:href="
                        require('@/assets/frontend/images/service/icons/default.svg') +
                        `#admin_header_user_settings`
                    "
                />
            </svg>
            <span> Settings </span>
        </router-link>

        <div @click="confirmLogout" class="item">
            <svg>
                <use
                    :xlink:href="
                        require('@/assets/frontend/images/service/icons/default.svg') +
                        `#admin_header_user_logout`
                    "
                />
            </svg>
            <span> Log out </span>
        </div>
    </OverlayPanel>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import Avatar from "primevue/avatar";
import OverlayPanel from "primevue/overlaypanel";
import { user } from "@/app/Repositories/states/AdminUserState";
import { ref } from "vue";
import lodash from "lodash";
import { useConfirm } from "primevue/useconfirm";
import router from "@/router";
import ConfirmDialog from "primevue/confirmdialog";

export default defineComponent({
    components: {
        Avatar,
        OverlayPanel,
        ConfirmDialog,
    },
    setup() {
        const userLabel = lodash.get(user.data, "firstname", "U").charAt(0);

        const confirm = useConfirm();
        const confirmLogout = () => {
            confirm.require({
                message: "Do you want to log out?",
                header: "Logout Confirmation",
                icon: "pi pi-info-circle",
                acceptClass: "p-button-danger",
                accept: () => {
                    router.push({ name: "logout" });
                },
            });
        };

        const canShowOverlayPanel = ref();
        const toggleOverlayPanel = (event) => {
            canShowOverlayPanel.value.toggle(event);
        };

        return {
            userLabel,
            canShowOverlayPanel,
            toggleOverlayPanel,
            confirmLogout
        };
    },
});
</script>
