import { onBeforeMount, onMounted, onUnmounted, reactive, Ref, ref } from "vue";
import UseHeaderFixType from "@/app/Types/UseHeaderFixTypes";
import BackendRepository from "@/app/Repositories/BackendRepository";

export default class HeaderService {
    url: string;

    constructor() {
        this.url = process.env.VUE_APP_BACKEND_URL;

    }
    public canFixHeader(): UseHeaderFixType {
        const header = ref(null) as Ref;
        const canFixHeader = ref(false);

        function handleScroll(): void {
            const top = header.value?.getBoundingClientRect().top;
            canFixHeader.value = top <= 0;
        }

        // this will register the event when the component is mounted on the DOM
        onMounted(function () {
            window.addEventListener("scroll", handleScroll);
        });

        // We then unregister the listener when the component is removed from the DOM
        onUnmounted(() => {
            window.removeEventListener("scroll", handleScroll);
        });

        return { header, canFixHeader }
    }

    /**
     * Get header data (menu items, logo, sale icon ...)
     */
    public async getHeaderData() {
        const repository = new BackendRepository();
        const { headerData, getHeaderData } = repository.getHeaderData()
        await getHeaderData();
        
        return headerData;
    }
}