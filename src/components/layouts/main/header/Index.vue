<template>
    <header ref="header">
        <div class="header-wrapper" :class="{ fixed: canFixHeader }">
            <div class="header container">
                <div class="header_items left_items">
                    <Menu
                        v-bind="{ headerFixed: canFixHeader, menuItems: menu }"
                    />
                    <Logo v-bind="{ image: logo.image, url: logo.url, blockId: logo.blockId }" />
                </div>

                <div class="header_items center_items">
                    <Search />
                </div>

                <div class="header_items right_items">
                    <Profile />
                    <Wishlist />
                    <Sale v-bind="{ image: salesIcon.image, url: salesIcon.url, blockId: salesIcon.blockId }" />
                </div>
            </div>
        </div>
    </header>
</template>

<script >
import { defineComponent } from "vue";
import Menu from "@/components/layouts/main/header/Menu.vue";
import Logo from "@/components/layouts/main/header/Logo.vue";
import Search from "@/components/layouts/main/header/Search.vue";
import Profile from "@/components/layouts/main/header/Profile.vue";
import Wishlist from "@/components/layouts/main/header/Wishlist.vue";
import Sale from "@/components/layouts/main/header/Sale.vue";
import HeaderService from "@/app/Services/frontend/HeaderService";

export default defineComponent({
    name: "Header",
    components: {
        Menu,
        Logo,
        Search,
        Profile,
        Wishlist,
        Sale,
    },
    async setup() {
        const service = new HeaderService();

        const { header, canFixHeader } = service.canFixHeader();
        const headerData = await service.getHeaderData();

        return {
            logo: headerData.logo,
            salesIcon: headerData.salesLogo,
            menu: headerData.menu,
            header,
            canFixHeader,
        };
    },
});
</script>


