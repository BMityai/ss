<template>
    <footer>
        <div class="container">
            <div class="footer_items">
                <div class="footer_block info_for_customer">
                    <div class="title">Информация для покупателей</div>
                    <div class="content">
                        <div>
                            <router-link :to="'/'"
                                >Как сделать заказ</router-link
                            >
                        </div>
                        <div><router-link :to="'/'">Доставка</router-link></div>
                        <div><router-link :to="'/'">Оплата</router-link></div>
                        <div>
                            <router-link :to="'/'">Безопасность</router-link>
                        </div>
                    </div>
                </div>
                <div class="footer_block info_for_seller">
                    <div class="title">Информация для партнеров</div>
                    <div class="content">
                        <div>
                            <router-link :to="'/'"
                                >Как стать партнером</router-link
                            >
                        </div>
                        <div>
                            <router-link :to="'/'"
                                >Что продавать на Gramarket</router-link
                            >
                        </div>
                        <div>
                            <router-link :to="'/'">Продвижение</router-link>
                        </div>
                        <div>
                            <router-link :to="'/'"
                                >Реферальная программа</router-link
                            >
                        </div>
                        <div>
                            <router-link :to="'/'">Правила продажи</router-link>
                        </div>
                    </div>
                </div>
                <div class="footer_block about_us">
                    <div class="title">О нас</div>
                    <div class="content">
                        <div>
                            <router-link :to="'/'">О "GRAMARKET"</router-link>
                        </div>
                        <div><router-link :to="'/'">Контакты</router-link></div>
                        <div><router-link :to="'/'">Вакансии</router-link></div>
                    </div>
                </div>
                <div class="footer_block copyright">
                    <!-- <div class="title">Копирайт</div> -->
                    <div class="content">
                        <div class="date">{{ copyrightRange }}</div>
                        <img src="/assets/images/logo/logo_footer.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        const copyrightRange = `2021 - ${new Date().getFullYear()} © GRAMARKET.KZ`;
        return {
            copyrightRange
        };
    },
});
</script>


<style scoped>
</style>