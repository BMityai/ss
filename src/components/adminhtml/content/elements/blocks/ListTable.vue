<template>
    <Toast />

    <h2>list table</h2>

    <div>
        <DataTable
            :value="blocks"
            :lazy="true"
            :paginator="true"
            :rows="25"
            :rowHover="true"
            v-model:filters="filters"
            filterDisplay="menu"
            v-model:selection="selectedBlocks"
            ref="dt"
            :resizableColumns="true"
            showGridlines
            dataKey="id"
            columnResizeMode="fit"
            :totalRecords="totalRecords"
            :loading="loading"
            @page="onPage($event)"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            :rowsPerPageOptions="[25, 50, 75]"
            @sort="onSort($event)"
            @filter="onFilter($event)"
            :globalFilterFields="[
                'id',
                'name',
                'block',
                'pageType',
                'isEnable',
                'createdAt',
            ]"
            responsiveLayout="scroll"
        >
            <template #header>
                <div class="p-d-flex p-jc-between p-ai-center">
                    <div class="left_block">
                        <Button
                            label="Create"
                            icon="pi pi-plus-circle"
                            class="p-button-success"
                        />
                        <Button
                            label="Delete"
                            icon="pi pi-trash"
                            class="p-button-danger"
                        />
                    </div>

                    <div class="right_block">
                        <Button
                            type="button"
                            icon="pi pi-filter-slash"
                            label="Clear"
                            class="p-button-warning"
                            @click="clearFilter()"
                        />

                        <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText
                                @input="onFilter"
                                v-model="filters['global'].value"
                                placeholder="Keyword Search"
                            />
                        </span>
                    </div>
                </div>
            </template>
            <template #empty> Not found </template>

            <Column selectionMode="multiple" headerStyle="width: 1rem"></Column>

            <Column field="id" header="Id" :sortable="true">
                <template #body="{ data }">
                    <span class="image-text">{{ data.id }}</span>
                </template>
                <template #filter="{ filterModel }">
                    <InputText
                        type="text"
                        v-model="filterModel.value"
                        class="p-column-filter"
                        placeholder="Search by id"
                    />
                </template>
            </Column>
            <Column field="name" header="Name" ref="name" :sortable="true">
                <template #body="{ data }">
                    <span class="image-text">{{ data.name }}</span>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText
                        type="text"
                        v-model="filterModel.value"
                        @keydown.enter="filterCallback()"
                        class="p-column-filter"
                        placeholder="Search by name"
                    />
                </template>
            </Column>

            <Column
                field="block"
                header="Block"
                filterField="block"
                ref="block"
                :sortable="true"
            >
                <template #body="{ data }">
                    <span class="image-text">{{ data.block }}</span>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText
                        type="text"
                        v-model="filterModel.value"
                        @keydown.enter="filterCallback()"
                        class="p-column-filter"
                        placeholder="Search by block"
                    />
                </template>
            </Column>
            <Column
                field="pageType"
                header="Page Type"
                ref="pageType"
                :sortable="true"
            >
                <template #body="{ data }">
                    <span class="image-text">{{ data.pageType }}</span>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText
                        type="text"
                        v-model="filterModel.value"
                        @keydown.enter="filterCallback()"
                        class="p-column-filter"
                        placeholder="Search by page type"
                    />
                </template>
            </Column>
            <Column
                field="isEnable"
                header="Status"
                filterField="isEnable"
                ref="isEnable"
                :sortable="true"
            >
                <template #body="{ data }">
                    <span class="image-text">{{ data.isEnable }}</span>
                </template>

                <template #filter="{ filterModel, filterCallback }">
                    <InputText
                        type="text"
                        v-model="filterModel.value"
                        @keydown.enter="filterCallback()"
                        class="p-column-filter"
                        placeholder="Search by enable"
                    />
                </template>
            </Column>

            <Column
                field="createdAt"
                header="Created"
                filterField="createdAt"
                ref="createdAt"
                :sortable="true"
            >
                <template #body="{ data }">
                    <span class="image-text">{{ data.createdAt }}</span>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText
                        type="text"
                        v-model="filterModel.value"
                        @keydown.enter="filterCallback()"
                        class="p-column-filter"
                        placeholder="Search created at"
                    />
                </template>
            </Column>

            <Column
                headerStyle="width: 4rem; text-align: center"
                bodyStyle="text-align: center; overflow: visible"
            >
                <template #body="{ data }">
                    <Button
                        type="button"
                        icon="pi pi-cog"
                        :data-block-id="data.id"
                        @click="edit(data.id)"
                    />
                    <OverlayPanel
                        ref="op"
                        appendTo="body"
                        :showCloseIcon="false"
                        id="overlay_panel"
                    >
                        <div class="action">
                            <Button
                                style="width: 120px"
                                label="Edit"
                                icon="pi pi-pencil"
                            />
                        </div>
                        <div class="action">
                            <Button
                                style="width: 120px; margin-top:5px"
                                label="Delete"
                                class="p-button-danger"
                                icon="pi pi-trash"
                                @click="confirmDelete"
                            />
                        </div>
                    </OverlayPanel>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script >
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ContentService from "@/app/Services/adminhtml/ContentService";
import Toast from "primevue/toast";
import Button from "primevue/button";
import OverlayPanel from "primevue/overlaypanel";
import ConfirmDialog from "primevue/confirmdialog";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";

import InputText from "primevue/inputtext";

export default {
    components: {
        Toast,
        DataTable,
        Column,
        InputText,
        Button,
        OverlayPanel,
    },
    async setup() {
        const contentService = new ContentService();
        const toast = useToast();
        const confirm = useConfirm();

        const {
            dt,
            loading,
            totalRecords,
            blocks,
            filters,
            lazyParams,
            onPage,
            onSort,
            onFilter,
            selectedBlocks,
            clearFilter,
            op,
            edit,
        } = await contentService.getBlocksTable();

        const confirmDelete = () => {
            confirm.require({
                message: "Are you sure you want to delete this block?",
                header: "Confirmation",
                icon: "pi pi-exclamation-triangle",
                accept: () => {
                    toast.add({
                        severity: "info",
                        summary: "Confirmed",
                        detail: "You have accepted",
                        life: 3000,
                    });
                },
                reject: () => {
                    toast.add({
                        severity: "error",
                        summary: "Rejected",
                        detail: "You have rejected",
                        life: 3000,
                    });
                },
            });
        };

        return {
            dt,
            loading,
            totalRecords,
            blocks,
            filters,
            lazyParams,
            onPage,
            onSort,
            onFilter,
            selectedBlocks,
            clearFilter,
            op,
            confirmDelete,
            edit,
        };
    },
};
</script>                  