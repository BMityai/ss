import { reactive, ref } from "vue";
import BackendRepositoryInterfase from "./BackendRepositoryInterfase";

export default class BackendRepository implements BackendRepositoryInterfase {

    url: string;

    constructor() {
        this.url = process.env.VUE_APP_BACKEND_URL;
    }

    public getHeaderData() {
        const headerData = ref();

        const getHeaderData = async () => {
            const response = await fetch(`${this.url}/header`, { method: 'GET' })
            headerData.value = await response.json();
        }

        return { headerData, getHeaderData };
    }
}