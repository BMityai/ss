import ContentRepository from '@/app/Repositories/adminhtml/Content/ContentRepository'
import { useToast } from 'primevue/usetoast';
import BackendExceptionsHandleHelper from "@/app/Helpers/BackendExceptionsHadleHelper";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import router from '@/router';
import { useConfirm } from "primevue/useconfirm";
import UploadRepository from '@/app/Repositories/adminhtml/Uploader/UploadRepository';
import { validate } from '@/app/Helpers/ValidateHelper';

import { ref, reactive, onMounted, watch } from "vue";
import { ConfirmationServiceMethods } from 'primevue/confirmationservice';
import { ToastServiceMethods } from 'primevue/toastservice';


export default class ContentService {

    protected backendRepository: ContentRepository;
    protected exceptionHandleHelper: BackendExceptionsHandleHelper;
    protected uploadRepository: UploadRepository;
    protected confirm: ConfirmationServiceMethods;
    protected toast: ToastServiceMethods;

    constructor() {
        this.backendRepository = new ContentRepository();
        this.exceptionHandleHelper = new BackendExceptionsHandleHelper();
        this.uploadRepository = new UploadRepository();
        this.confirm = useConfirm();
        this.toast = useToast();
    }

    public async getBlocksTable() {
        const selectedBlocks = ref();
        this.toast = useToast();
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
            title: {
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
        const filters = ref(emptyFilterData);
        const lazyParams = ref();

        const loadLazyData = async () => {
            loading.value = true;
            lazyParams.value.globalFilterFields = dt.value.globalFilterFields;
            const data = await this.getBlocks(
                lazyParams.value
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
            router.push({ name: 'blockEdit', params: { blockId: editableBlockId.value } })
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
            blockEditAction,
            editableBlockId

        }
    }

    /**
     * Get options for select field
     */
    public async getOptionsForSelectField() {
        const enableOptions = ref([
            { label: "Enable", value: 1 },
            { label: "Disable", value: 0 },
        ]);
        const contentBlockOptions = await this.getBlockDictOptions() as any; // @todo typecast
        const blockOptions = contentBlockOptions.blockOptions;
        const pageTypeOptions = contentBlockOptions.pageTypeOptions
        const positionOptions = contentBlockOptions.positionOptions
        return {
            enableOptions,
            blockOptions,
            pageTypeOptions,
            positionOptions
        }
    }

    /**
     * Image upload to items
     */
    public imageUploadProcessing(form) {  //@todo typecast

        const onUpload = async (event) => {
            const file = event.target.files[0];
            const allowedFormats = ["jpg", "jpeg", "png", "gif"];
            const typeSplit = file["type"].split("/");
            if (
                typeSplit[0] !== "image" ||
                !allowedFormats.includes(typeSplit[1])
            ) {
                fileInput.value.value = null;
                this.toast.add({
                    severity: "error",
                    summary: "Upload image",
                    detail: "Wrong file format",
                    life: 3000,
                });

                return; //@todo validate
            }

            for (const item of form.value.items) {
                if (item.id !== editedItemId.value) {
                    continue;
                }

                item.file = file;

                const newSrc = await this.uploadRepository.uploadFile(file);
                item.image = newSrc;
            }
        };

        const editedItemId = ref();
        const selectItem = (item) => {
            editedItemId.value = item.id;
        };

        const fileInput = ref();
        return {
            onUpload,
            selectItem,
            fileInput
        }
    }

    /**
     * Content Block items create & delete actions
     */
    public itemsCrudProcessing(form) { //@todo typecast

        const addItem = () => {
            form.value.items.push({
                id: "new-item-" + Date.now(),
                image: "",
                position: "",
                url: "",
            });
        };

        const deleteItem = (item) => { //@todo typecast

            const itemIndex = form.value.items.indexOf(item);
            form.value.items.splice(itemIndex, 1);
        };

        return {
            addItem,
            deleteItem
        };
    }

    /**
     * Get block by id
     */
    public async getBlockById(blockId: string) {
        return await this.backendRepository.getBlockById(blockId);
    }

    /**
     * Delete block
     */
    public blockDeleteProcessing(redirectBack = false) {

        const confirmDelete = (blockId) => {
            this.confirm.require({
                message: "Are you sure you want to delete this block?",
                header: "Confirmation",
                icon: "pi pi-exclamation-triangle",
                accept: async () => {
                    try {
                        await this.backendRepository.deleteBlockById(blockId)
                        this.toast.add({
                            severity: "success",
                            summary: "Content block",
                            detail: "Block successfully deleted",
                            life: 3000,
                        });

                        if (redirectBack) {
                            router.back()
                        }

                    } catch (e) {
                        this.toast.add({
                            severity: "error",
                            summary: "Error",
                            detail: "Failed to delete block",
                            life: 3000,
                        });
                    }
                },
                reject: () => {
                    this.toast.add({
                        severity: "info",
                        summary: "Content block",
                        detail: "You have rejected",
                        life: 3000,
                    });
                },
            });


        };
        return { confirmDelete }
    }

    /**
     * Get empty block
     */
    public getEmptyBlock() {
        return {
            id: '',
            isEnable: 1,
            name: '',
            title: '',
            blockId: '',
            pageTypeId: '',
            positionId: '',
            items: []
        }
    }

    /**
     * Validate form
     */
    public validateForm(form) {
        const rules = {
            isEnable: 1,
            name: {
                required: true,
                minLength: 4
            },
            title: {
                required: true,
                minLength: 4
            },
            blockId: '',
            pageTypeId: '',
            positionId: '',
        }
        const { validatorResponse, formIsValid } = validate(form, rules);

        return { validatorResponse, formIsValid };
    }

    /**
     * Save block
     */
    public saveBlock() {
        const save = async (form, redirectBack = false) => {
            try {
                await this.backendRepository.saveContentBlock(form)
            } catch (e) {
                alert(e)
            }
            console.log(form)
        };
        return { save };
    }

    /**
     * Get block dict options
     */
    private async getBlockDictOptions() {
        try {

            return await this.backendRepository.getBlockDictOptions();
        } catch (e) {
            this.exceptionHandleHelper.defaultHandle(e, this.toast);
        }
    }

    /**
     * Get blocks
     */
    private async getBlocks(params): Promise<any> {
        try {
            return await this.backendRepository.getBlocks(params);
        } catch (e) {
            this.exceptionHandleHelper.defaultHandle(e, this.toast);
        }
    }
}