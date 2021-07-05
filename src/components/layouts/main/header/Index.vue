<template>
    <header ref="header">
        <div class="header-wrapper" :class="{ fixed: canFixHeader }">
            <div class="header container">
                <div class="header_items left_items">
                    <Menu v-bind="{headerFixed:canFixHeader, menuItems:menu}"/>
                    <Logo v-bind="{ logoUrl: logo }" />
                </div>

                <div class="header_items center_items">
                    <Search />
                </div>

                <div class="header_items right_items">
                    <Profile />
                    <Wishlist />
                    <Sale v-bind="{ imgUrl: salesIcon }" />
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
            logo: headerData.value.logo,
            salesIcon: headerData.value.salesLogo,
            menu: headerData.value.menu,
            header,
            canFixHeader,
        };
    },
});
</script>

<style scoped lang='less'>
header {
    .header-wrapper {
        -webkit-box-shadow: 0px 5px 10px 0px rgba(142, 142, 142, 0.2);
        box-shadow: 0px 5px 10px 0px rgba(142, 142, 142, 0.2);
            z-index: 10;

        
        &.fixed {
            position: fixed;
            top: 0;
            margin: 0 auto;
            width: 100%;
            background: #fff;
            
        }
    }
    min-height: 73px;
}
.header {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;

    .header_items {
        display: flex;
        &.center_items {
            width: 60%;
        }
        &.left_items,
        &.right_items {
            display: flex;
            justify-content: space-between;
            width: 20%;
        }
    }
}
</style>

