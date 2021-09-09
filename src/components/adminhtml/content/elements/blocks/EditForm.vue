<template>
    <div class="edit_form">
        <h2 v-if="blockId">Edit block "{{ form.value.name }}"</h2>
        <h2 v-else>New block</h2>
        <div class="actions">
            <div class="left_panel">
                <Button
                    icon="pi pi-arrow-left"
                    label="Back"
                    class="p-button-raised p-button-secondary"
                    @click="router.go(-1)"
                />
            </div>

            <div class="right_panel">
                <Button
                    icon="pi pi-trash"
                    label="Delete"
                    v-if="blockId"
                    class="p-button-raised p-button-danger"
                    @click="confirmDelete(form.value.id)"
                />

                <Button
                    icon="pi pi-upload"
                    label="Save and continue"
                    class="p-button-raised p-button-raised"
                    @click="save(form.value)"
                />

                <Button
                    icon="pi pi-save"
                    label="Save"
                    class="p-button-raised p-button-success"
                    @click="save(form.value, true)"
                />
            </div>
        </div>

        <div class="form">
            <Accordion :multiple="true">
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
                            <div class="layout">Block Type</div>
                            <div class="value">
                                <Dropdown
                                    :filter="true"
                                    v-model="form.value.blockId"
                                    :options="blockOptions"
                                    optionLabel="value"
                                    optionValue="id"
                                    placeholder="Select a block"
                                />
                            </div>
                        </div>

                        <!-- page type -->
                        <div class="field page_type">
                            <div class="layout">Page Type</div>
                            <div class="value">
                                <Dropdown
                                    :filter="true"
                                    v-model="form.value.pageTypeId"
                                    :options="pageTypeOptions"
                                    optionLabel="value"
                                    optionValue="id"
                                    placeholder="Select a type"
                                />
                            </div>
                        </div>

                        <!-- position -->
                        <div class="field page_type">
                            <div class="layout">Position On Page</div>
                            <div class="value">
                                <Dropdown
                                    :filter="true"
                                    v-model="form.value.positionId"
                                    :options="
                                        positionOptions[form.value.pageTypeId]
                                    "
                                    optionLabel="value"
                                    optionValue="id"
                                    placeholder="Select a position"
                                />
                            </div>
                        </div>
                    </div>
                </AccordionTab>
                <AccordionTab header="Block Items Configuration">
                    <DataTable
                        :value="form.value.items"
                        :reorderableColumns="false"
                        @rowReorder="onRowReorder"
                        responsiveLayout="scroll"
                    >
                        <Column :rowReorder="true"> </Column>
                        <Column
                            field="url"
                            header="Url"
                            ref="url"
                            headerStyle="width: 50%; text-align:center"
                        >
                            <template #body="{ data }">
                                <InputText
                                    type="text"
                                    v-model="data.url"
                                    style="width: 100%"
                                />
                            </template>
                        </Column>
                        <Column
                            class="item_image"
                            ref="image"
                            field="image"
                            header="Image"
                        >
                            <template #body="{ data }">
                                <Image
                                    :src="data.image"
                                    alt="Image"
                                    preview
                                    v-if="data.image"
                                />
                                <img
                                    class="p-image"
                                    src="@/assets/frontend/images/service/adminhtml/placeholder.png"
                                    v-if="!data.image || data.image === ''"
                                    alt=""
                                />
                                <input
                                    type="file"
                                    hidden
                                    ref="fileInput"
                                    accept="image/*"
                                    @change="onUpload"
                                />
                                <Button
                                    icon="pi pi-upload"
                                    label="Choose"
                                    class="
                                        select_image
                                        p-button-raised p-button-text
                                    "
                                    @click="
                                        fileInput.click();
                                        selectItem(data);
                                    "
                                />
                            </template>
                        </Column>
                        <Column>
                            <template #body="{ data }">
                                <Button
                                    type="button"
                                    icon="pi pi-trash"
                                    :data-block-id="data.id"
                                    @click="deleteItem(data)"
                                    class="p-button-danger"
                                /> </template
                        ></Column>
                    </DataTable>
                    <div class="action_block">
                        <Button
                            label="Add Item"
                            class="p-button-raised p-button-success"
                            @click="addItem"
                        />
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
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Image from "primevue/image";
import router from "@/router";

import FormValidateHelper from "@/app/Helpers/FormValidateHelper";

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
        DataTable,
        Column,
        Button,
        Image,
    },

    async setup(props) {
        const contentService = new ContentService();
        const form = reactive({});

        if (props.blockId) {
            form.value = await contentService.getBlockById(props.blockId);
        } else {
            form.value = contentService.getEmptyBlock();
        }

        const {
            enableOptions,
            blockOptions,
            pageTypeOptions,
            positionOptions,
        } = await contentService.getOptionsForSelectField();

        const columns = ref([
            { field: "url", header: "Url" },
            { field: "image", header: "Image" },
        ]);

        const onRowReorder = (event) => {
            form.value.items = event.value;
        };

        const { onUpload, selectItem, fileInput } =
            contentService.imageUploadProcessing(form);

        const { addItem, deleteItem } =
            contentService.itemsCrudProcessing(form);

        const { confirmDelete } = contentService.blockDeleteProcessing(true);
        const { save } = contentService.saveBlock();
        return {
            form,
            blockOptions,
            pageTypeOptions,
            positionOptions,
            enableOptions,
            columns,
            onRowReorder,
            onUpload,
            selectItem,
            fileInput,
            addItem,
            deleteItem,
            router,
            confirmDelete,
            save,
        };
    },
});
</script>
