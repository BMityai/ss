<template>
    <div>
        <DataTable
            :value="blocks"
            :lazy="true"
            :paginator="true"
            :rows="10"
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
            :rowsPerPageOptions="[10, 25, 50]"
            @sort="onSort($event)"
            @filter="onFilter($event)"
            :globalFilterFields="[
                'id',
                'name',
                'title',
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
                        <div class="actions">
                            <Button
                                label="Create"
                                icon="pi pi-plus-circle"
                                class="p-button-success"
                            />
                            <Button
                                style="margin-left: 10px"
                                label="Delete"
                                icon="pi pi-trash"
                                class="p-button-danger"
                                v-if="selectedBlocks && selectedBlocks.length"
                            />
                        </div>
                    </div>

                    <div class="right_block">
                        <Button
                            type="button"
                            icon="pi pi-filter-slash"
                            label="Clear"
                            style="margin-right: 10px"
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

            <Column field="title" header="Title" ref="title" :sortable="true">
                <template #body="{ data }">
                    <span class="image-text">{{ data.title }}</span>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText
                        type="text"
                        v-model="filterModel.value"
                        @keydown.enter="filterCallback()"
                        class="p-column-filter"
                        placeholder="Search by title"
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
                                style="width: 120px; text-align: left"
                                label="Edit"
                                icon="pi pi-pencil"
                                @click="blockEditAction"
                            />
                        </div>
                        <div class="action">
                            <Button
                                style="
                                    width: 120px;
                                    margin-top: 5px;
                                    text-align: left;
                                "
                                label="Delete"
                                class="p-button-danger"
                                icon="pi pi-trash"
                                @click="confirmDelete(editableBlockId)"
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
import Button from "primevue/button";
import OverlayPanel from "primevue/overlaypanel";

import InputText from "primevue/inputtext";

export default {
    components: {
        DataTable,
        Column,
        InputText,
        Button,
        OverlayPanel,
    },
    async setup() {
        const contentService = new ContentService();

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
            blockEditAction,
            editableBlockId
        } = await contentService.getBlocksTable();

        const { confirmDelete } = contentService.blockDeleteProcessing();
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
            blockEditAction,
            editableBlockId
        };
    },
};
</script>                  