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
                    @mouseover="selectFirstCategory(firstLevelCategory)"
                    v-for="firstLevelCategory in categories"
                    :key="firstLevelCategory.id"
                    :class="{ active: activeFirstLevelCategoryId == firstLevelCategory.id }"
                >
                    <router-link :to="firstLevelCategory.attributes.url" @click="visibleLeft = !visibleLeft">
                        <img :src="firstLevelCategory.attributes.thumbnail" alt="" />
                        <span> {{ firstLevelCategory.attributes.name }}</span>
                    </router-link>
                </li>
            </ul>

             <!-- SECOND LEVEL CATEGORIES LIST  -->
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
                    
                        <router-link :to="cat.attributes.url" @click="visibleLeft = !visibleLeft">
                            <span> {{ cat.attributes.name }}</span>
                        </router-link>

                        <!--  THIRD LEVEL CATEGORIES LIST  -->
                        <ul class="third-level-categories list">
                            <li
                                class="third-level-category"
                                v-for="thirdCat in cat.children"
                                :key="thirdCat.id"
                            >
                                <router-link :to="thirdCat.attributes.url" @click="visibleLeft = !visibleLeft">
                                    <span> {{ thirdCat.attributes.name }}</span>
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
import { defineComponent, ref, watch } from "vue";
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
        const categories = ref(props.menuItems);
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
            categories,
            showChildCategories,
            selectFirstCategory,
            activeFirstLevelCategoryId,
            activeChildCategories,
        };
    },
});
</script>

