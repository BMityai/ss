<template>
    <div class="edit_form">
        <h2>Edit form "{{ form.value.name }}"</h2>

        <div class="form">
            <Accordion :activeIndex="[0]" :multiple="true">
                <AccordionTab header="General Configuration">
                    <div class="general">
                        <!-- enable -->
                        <div class="field name">
                            <div class="layout">Enable</div>
                            <div class="value">
                                <SelectButton
                                    v-model="form.value.isEnable"
                                    :options="enableOptions"
                                    optionLabel="label"
                                    optionValue="value"
                                />
                            </div>
                        </div>

                        <!-- name -->
                        <div class="field name">
                            <div class="layout">Name</div>
                            <div class="value">
                                <span class="p-float-label">
                                    <InputText
                                        id="name"
                                        type="text"
                                        v-model="form.value.name"
                                    />
                                    <label for="name">Name</label>
                                </span>
                            </div>
                        </div>

                        <!-- title -->
                        <div class="field title">
                            <div class="layout">Title</div>
                            <div class="value">
                                <span class="p-float-label">
                                    <InputText
                                        id="title"
                                        type="text"
                                        v-model="form.value.title"
                                    />
                                    <label for="name">Title</label>
                                </span>
                            </div>
                        </div>

                        <!-- block -->
                        <div class="field block">
                            <div class="layout">Block</div>
                            <div class="value">
                                <Dropdown
                                    :filter="true"
                                    v-model="form.value.blockId"
                                    :options="contentBlockOptions.blockOptions"
                                    optionLabel="value"
                                    optionValue="id"
                                    placeholder="Select a block"
                                />
                            </div>
                        </div>

                        <!-- block -->
                        <div class="field page_type">
                            <div class="layout">Page Type</div>
                            <div class="value">
                                <Dropdown
                                    :filter="true"
                                    v-model="form.value.blockId"
                                    :options="contentBlockOptions.pageTypeOptions"
                                    optionLabel="value"
                                    optionValue="id"
                                    placeholder="Select a block"
                                />
                            </div>
                        </div>
                    </div>
                </AccordionTab>
            </Accordion>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import ContentService from "@/app/Services/adminhtml/ContentService";
import InputText from "primevue/inputtext";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Dropdown from "primevue/dropdown";
import SelectButton from "primevue/selectbutton";

export default defineComponent({
    props: {
        // blockId: [String, null]
        blockId: [String, null],
    },
    components: {
        InputText,
        Accordion,
        AccordionTab,
        Dropdown,
        SelectButton,
    },

    async setup(props) {
        const contentService = new ContentService();
        const form = reactive({});

        if (props.blockId) {
            form.value = await contentService.getBlockById(props.blockId);
        }
        const contentBlockOptions = await contentService.getBlockDictOptions();

        console.log(contentBlockOptions)

       
        const enableOptions = ref([{label:'Enable', value: 1}, {label:'Disable', value: 0}]);

        // Promise.allSettled()
        return {
            form,
            contentBlockOptions,
            enableOptions
        };
    },
});
</script>
