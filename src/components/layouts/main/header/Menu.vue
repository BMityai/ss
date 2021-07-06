<template>
    <div class="burger_menu">
        <Button
            @click="
                visibleLeft = !visibleLeft;
                showChildCategories = !showChildCategories;
            "
            class="p-mr-2"
        >
            <i
                :class="{
                    'pi pi-bars': !visibleLeft,
                    'pi pi-times': visibleLeft,
                }"
            />
        </Button>
        <Sidebar
            class="menu-sidebar"
            :class="{
                header_fixed: headerFixed,
                'child-level-visible': showChildCategories,
            }"
            v-model:visible="visibleLeft"
        >
            <!--  FIRST LEVEL CATEGORIES LIST  -->
            <ul class="first-level-categies">
                <li
                    @mouseover="selectFirstCategory(cat)"
                    v-for="cat in menu"
                    :key="cat.id"
                    :class="{ active: activeFirstLevelCategoryId == cat.id }"
                >
                    <router-link :to="cat.href">
                        <img :src="cat.icon" alt="" />
                        <span> {{ cat.name }}</span>
                    </router-link>
                </li>
            </ul>

            <!--  SECOND LEVEL CATEGORIES LIST  -->
            <div
                class="child-categories"
                :class="{ visible: showChildCategories }"
            >
                <ul class="second-level-categories list">
                    <li
                        class="second-level-category"
                        v-for="cat in activeChildCategories"
                        :key="cat.id"
                    >
                        <router-link :to="cat.href">
                            <span> {{ cat.name }}</span>
                        </router-link>

                        <!--  THIRD LEVEL CATEGORIES LIST  -->
                        <ul class="third-level-categories list">
                            <li
                                class="third-level-category"
                                v-for="thirdCat in cat.children"
                                :key="thirdCat.id"
                            >
                                <router-link :to="thirdCat.href">
                                    <span> {{ thirdCat.name }}</span>
                                </router-link>
                            </li>
                        </ul>
                        <!-- END THIRD LEVEL CATEGORIES LIST  -->
                    </li>
                </ul>
            </div>
            <!-- END SECOND LEVEL CATEGORIES LIST  -->
        </Sidebar>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, watch } from "vue";
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";

export default defineComponent({
    name: "Menu",
    props: {
        headerFixed: {
            type: Boolean,
        },
        menuItems: {
            type: Object,
        },
    },
    components: {
        Sidebar,
        Button,
    },

    setup(props) {
        const visibleLeft = ref(false);
        const headerIsFixed = ref(props.headerFixed);
        const menu = ref(props.menuItems);
        const showChildCategories = ref(false);
        const activeFirstLevelCategoryId = ref();
        const activeChildCategories = ref();

        watch(visibleLeft, () => {
            showChildCategories.value = !visibleLeft.value;
        });

        const selectFirstCategory = (category) => {
            showChildCategories.value = true;
            activeFirstLevelCategoryId.value = category.id;
            activeChildCategories.value = category.children;
        };

        return {
            visibleLeft,
            headerIsFixed,
            menu,
            showChildCategories,
            selectFirstCategory,
            activeFirstLevelCategoryId,
            activeChildCategories,
        };
    },
});
</script>

<style scoped lang='less'>
@import url("../../../../assets/css/variables.less");

.burger_menu {
    button {
        height: 50px;
        width: 60px;
        i {
            font-size: 25px;
        }
    }
}

.child-categories {
    ul {
        padding: 0 5px;
    }
    li {
        list-style-type: none;
        padding: 5px;
        width: 100%;
    }
    background: #fff;
    height: 100%;
    z-index: 1400;
    width: ~"calc(100% - 350px)";
    transition: all 0.1s linear;

    border-left: 1px #ccc solid;
    display: none;
    &.visible {
        display: block;
    }
    ul.second-level-categories {
        width: 60%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0 5px;
        li.second-level-category {
            margin-bottom: 15px;
            font-weight: 600;
            a {
                color: #000;
                text-decoration: none;
                width: 100%;
                align-items: center;
                margin-bottom: 5px;
            }

            .third-level-categories {
                margin-top: 5px;
                padding: 0;
                li.third-level-category {
                    font-weight: 400;
                    padding: 5px 0;
                    a {
                        color: @font-color;
                        text-decoration: none;
                        width: 100%;
                        align-items: center;
                    }
                }
            }
        }
    }
}

.first-level-categies {
    width: 350px;
    padding: 0 15px;
    li {
        list-style-type: none;
        padding: 5px;
        width: 100%;
        a {
            color: @font-color;
            text-decoration: none;
            display: flex;
            flex-direction: row;
            width: 100%;
            align-items: center;
            img {
                margin-right: 15px;
            }
        }
        &.active {
            background: @main-store-color;
            border-radius: 3px;
            a {
                color: #fff;
            }
        }
    }
}
</style>
