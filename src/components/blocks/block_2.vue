<template>
    <div class="second_block">
        <!-- <div class="block_container" v-html="secondBlockContent.content" /> -->
        <div class="category-banners-block">
            <div class="block4">
                <div class="block4-half">
                    <div id="block4_4-5" data-dy-embedded-object="true">
                        <div id="block4_4" class="block4_item">
                            <a
                                href="https://www.meloman.kz/videogames/nintendo/?from=block44"
                            >
                                <img
                                    src="https://cdn.dynamicyield.com/api/8771345/images/1d011f65ab4cb__23_png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div id="block4_5" class="block4_item">
                            <a
                                href="https://www.meloman.kz/TOP-50-Naushniki-audiotehnika-elektronika?product_list_order=product_rate&amp;from=block44"
                            >
                                <img
                                    src="https://cdn.dynamicyield.com/api/8771345/images/b313d5c0ea93__29_png"
                                    alt=""
                                />
                            </a>
                        </div>

                        <div id="block4_2" class="block4_item">
                            <a
                                href="https://www.meloman.kz/press/zharkie-novinki-chitaem-v-ijule.html?from=block42s"
                            >
                                <img
                                    src="https://simg.marwin.kz/media/wysiwyg/dynamic/mel4-2/1.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div id="block4_3" class="block4_item">
                            <a
                                href="https://www.meloman.kz/press/novinka-holsty-marki-dell-arte.html?from=block42s"
                            >
                                <img
                                    src="https://simg.marwin.kz/media/wysiwyg/dynamic/mel4-2/19-05-21_Standard_View_D2.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div id="block4_6" class="block4_item">
                            <a
                                href="https://www.meloman.kz/table-games/bricks/?from=block42s"
                            >
                                <img
                                    src="https://simg.marwin.kz/media/wysiwyg/dynamic/mel4-2/19-05-21_Standard_View_D3.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div id="block4_7" class="block4_item">
                            <a
                                href="https://www.meloman.kz/press/must-have-dlya-lyubogo-hudozhnika-maneken-cheloveka.html?from=block42s"
                            >
                                <img
                                    src="https://simg.marwin.kz/media/wysiwyg/dynamic/4-2-3/22.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import BlockService from "@/app/Services/frontend/BlockService";

export default defineComponent({
    async setup() {
        const service = new BlockService();

        const secondBlockContent = await service.getSecondBlockContent();
        console.log(secondBlockContent.value);
        return { secondBlockContent };
    },
});
</script>


