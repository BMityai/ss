import ContentRepository from '@/app/Repositories/adminhtml/Content/ContentRepository'
import { useToast } from 'primevue/usetoast';
import BackendExceptionsHandleHelper from "@/app/Helpers/BackendExceptionsHadleHelper";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import router from '@/router';

import { ref, onMounted } from "vue";


export default class AdminUserService {

    protected backendRepository: ContentRepository
    protected exceptionHandleHelper: BackendExceptionsHandleHelper

    constructor() {
        this.backendRepository = new ContentRepository();
        this.exceptionHandleHelper = new BackendExceptionsHandleHelper();

    }

    public async getBlocksTable() {
        const toast = useToast();
        const emptyFilterData = {
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },

            id: {
                operator: FilterOperator.AND,
                constraints: [
                    { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                ],
            },
            name: {
                operator: FilterOperator.AND,
                constraints: [
                    { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                ],
            },
            block: {
                operator: FilterOperator.AND,
                constraints: [
                    { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                ],
            },
            pageType: {
                operator: FilterOperator.AND,
                constraints: [
                    { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                ],
            },
            isEnable: {
                operator: FilterOperator.AND,
                constraints: [
                    { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                ],
            },
            createdAt: {
                operator: FilterOperator.AND,
                constraints: [
                    { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                ],
            },
        };

        onMounted(() => {
            loading.value = true;
            lazyParams.value = {
                first: 0,
                globalFilterFields: dt.value.globalFilterFields,
                rows: dt.value.rows,
                sortField: null,
                sortOrder: null,
                filters: filters.value,
            };

            loadLazyData();
        });

        const dt = ref();
        const loading = ref(false);
        const totalRecords = ref(0);
        const blocks = ref();
        const selectedBlocks = ref();
        const filters = ref(emptyFilterData);
        const lazyParams = ref();

        const loadLazyData = async () => {
            loading.value = true;
            lazyParams.value.globalFilterFields = dt.value.globalFilterFields;
            const data = await this.getBlocks(
                lazyParams.value,
                toast
            );
            blocks.value = data.blocks;
            totalRecords.value = data.totalBlocks;
            loading.value = false;
        };
        const onPage = (event) => {
            lazyParams.value = event;
            loadLazyData();
        };
        const onSort = (event) => {
            lazyParams.value = event;
            loadLazyData();
        };
        const onFilter = () => {
            lazyParams.value.filters = filters.value;
            loadLazyData();
        };
        const clearFilter = () => {
            lazyParams.value.sortOrder = null;
            lazyParams.value.filters = emptyFilterData;
            console.log(emptyFilterData)
            loadLazyData();
        };
        const op = ref();


        const editableBlockId = ref();

        const edit = (blockId) => {
            editableBlockId.value = blockId;
            op.value.toggle(event);
        };
        const blockEditAction = () => {
            router.push({name: 'blockEdit', params: {blockId: editableBlockId.value}})
        }

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
            edit,
            blockEditAction

        }
    }

    public async getBlockById(blockId: string) {
        return await this.backendRepository.getBlockById(blockId);
    }


    private async getBlocks(params, toast): Promise<any> {
        try {
            return await this.backendRepository.getBlocks(params);
        } catch (e) {
            this.exceptionHandleHelper.defaultHandle(e, toast);
        }
    }
}