import { Ref } from "vue";

export default interface GetHeaderDataType {
    headerData: Ref<any>,
    getHeaderData: () => Promise<void>
}