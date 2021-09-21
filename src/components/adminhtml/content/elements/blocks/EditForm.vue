<template>
    <div class="edit_form">
        <div v-if="blockId">
            <h2>Edit block "{{ form.value.name }}"</h2>
        </div>

        <h2 v-else>New block</h2>
        <div class="actions">
            <div class="left_panel">
                <Button
                    icon="pi pi-arrow-left"
                    label="Back"
                    class="p-button-raised p-button-secondary"
                    @click="router.back()"
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
                    @click="handleSubmit(form.value)"
                />

                <Button
                    icon="pi pi-save"
                    label="Save"
                    class="p-button-raised p-button-success"
                    @click="handleSubmit(form.value, true)"
                />
            </div>
        </div>

        <div class="form">
            <Accordion :multiple="true">
                <AccordionTab header="General Configuration">
                    <div class="tab general">
                        <!-- enable -->
                        <div class="field enable">
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
                                        :class="{
                                            invalid:
                                                isSubmit &&
                                                !validatorResponse.name.isValid,
                                        }"
                                    />

                                    <label for="name">Name</label>
                                </span>

                                <small
                                    class="p-error"
                                    v-if="
                                        isSubmit &&
                                        !validatorResponse.name.isValid
                                    "
                                >
                                    {{ validatorResponse.name.message }}
                                </small>
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
                                        :class="{
                                            invalid:
                                                isSubmit &&
                                                !validatorResponse.title
                                                    .isValid,
                                        }"
                                    />
                                    <label for="name">Title</label>
                                </span>
                                <small
                                    class="p-error"
                                    v-if="
                                        isSubmit &&
                                        !validatorResponse.title.isValid
                                    "
                                >
                                    {{ validatorResponse.title.message }}
                                </small>
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
                                    @change="form.value.items = []"
                                    :class="{
                                        invalid:
                                            isSubmit &&
                                            !validatorResponse.blockId.isValid,
                                    }"
                                />
                                <small
                                    class="p-error"
                                    style="display: block"
                                    v-if="
                                        isSubmit &&
                                        !validatorResponse.blockId.isValid
                                    "
                                >
                                    {{ validatorResponse.blockId.message }}
                                </small>
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
                                    :class="{
                                        invalid:
                                            isSubmit &&
                                            !validatorResponse.pageTypeId
                                                .isValid,
                                    }"
                                />
                                <small
                                    class="p-error"
                                    style="display: block"
                                    v-if="
                                        isSubmit &&
                                        !validatorResponse.pageTypeId.isValid
                                    "
                                >
                                    {{ validatorResponse.pageTypeId.message }}
                                </small>
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
                                    :class="{
                                        invalid:
                                            isSubmit &&
                                            !validatorResponse.positionId
                                                .isValid,
                                    }"
                                />
                                <small
                                    class="p-error"
                                    style="display: block"
                                    v-if="
                                        isSubmit &&
                                        !validatorResponse.positionId.isValid
                                    "
                                >
                                    {{ validatorResponse.positionId.message }}
                                </small>
                            </div>
                        </div>
                    </div>
                </AccordionTab>
                <AccordionTab
                    header="Block Items Configuration"
                    v-if="form.value.blockId"
                >
                    <!-- add images -->

                    <DataTable
                        :value="form.value.items"
                        :reorderableColumns="false"
                        @rowReorder="onRowReorder"
                        responsiveLayout="scroll"
                        v-if="
                            form.value.blockId === 1 || form.value.blockId === 2
                        "
                        :class="{
                            invalid:
                                isSubmit && !validatorResponse.items.isValid,
                        }"
                    >
                        <small
                            class="p-error"
                            style="display: block"
                            v-if="isSubmit && !validatorResponse.items.isValid"
                        >
                            {{ validatorResponse.items.message }}
                        </small>
                        <Column :rowReorder="true"> </Column>
                        <Column
                            field="url"
                            header="Url"
                            ref="url"
                            headerStyle="width: 50%; text-align:center"
                        >
                            <template #body="{ data }">
                                <InputText
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
                            v-if="
                                form.value.blockId === 1 ||
                                form.value.blockId === 2
                            "
                        />
                    </div>

                    <div class="tab">
                        <div
                            class="field attribute_set"
                            v-if="
                                form.value.blockId === 3 ||
                                form.value.blockId === 4
                            "
                        >
                            <div class="layout">Attribute Set</div>
                            <div class="value">
                                <MultiSelect
                                    v-model="form.value.items"
                                    :options="attributeSetOptions"
                                    optionLabel="title"
                                    optionValue="id"
                                    placeholder="Select Attribute Set"
                                    :filter="true"
                                    :class="{
                                        invalid:
                                            isSubmit &&
                                            !validatorResponse.items.isValid,
                                    }"
                                />
                                <small
                                    class="p-error"
                                    style="display: block"
                                    v-if="
                                        isSubmit &&
                                        !validatorResponse.items.isValid
                                    "
                                >
                                    {{ validatorResponse.items.message }}
                                </small>
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
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Image from "primevue/image";
import router from "@/router";
import { useToast } from "primevue/usetoast";
import MultiSelect from "primevue/multiselect";

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
        MultiSelect,
    },

    async setup(props) {
        const toast = useToast();
        const contentService = new ContentService();
        const form = reactive({});
        const isSubmit = ref(false);

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
            attributeSetOptions,
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

        const { validatorResponse, formIsValid } = contentService.validateForm(
            form.value
        );

        const handleSubmit = (form, redirectBack) => {
            isSubmit.value = true;

            console.log(validatorResponse);

            if (!formIsValid.value || !form.items.length) {
                toast.add({
                    severity: "error",
                    summary: "Validation error",
                    detail: "Check if the form is filled out correctly",
                    life: 3000,
                });
                return;
            }

            save(form, redirectBack);
        };

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
            handleSubmit,
            validatorResponse,
            isSubmit,
            attributeSetOptions,
        };
    },
});
</script>
