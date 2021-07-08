import GetFirstBlockImagesType from "@/app/Types/GetFirstBlockImagesType";
import { ref } from "vue";
import GetHeaderDataType from "../../Types/GetHederDataType";
import BackendRepositoryClient from "../BackendRepositoryClient";
import BackendRepository from "../BackendRepositoryClient";
import HomePageRepositoryInterface from "./HomePageRepositoryInterface";

export default class HomePageRepository implements HomePageRepositoryInterface {

    private getContentBlocksUrl: string;
    private client: BackendRepositoryClient;

    constructor() {
        this.client = new BackendRepositoryClient();
        this.getContentBlocksUrl = 'content/blocks/';
    }

    /**
     * Get header data (menu)
     */
    public getHeaderData(): GetHeaderDataType {
        const headerData = ref();

        const getHeaderData = async () => {
            headerData.value = await this.client.fetch('header', 'GET');
        };

        return { headerData, getHeaderData };
    }

    public getFirstBlockImages(): GetFirstBlockImagesType {
        const firstBlockImages = ref();

        const getFirstBlockImages = async () => {
            firstBlockImages.value = await this.client.fetch(`${this.getContentBlocksUrl}first_block`, 'GET');
        }

        return { firstBlockImages, getFirstBlockImages }
    }

    public getSecondBlockContent() {
        const secondBlockImages = ref();

        const getSeconfBlockImages = async () => {
            secondBlockImages.value = await this.client.fetch(`${this.getContentBlocksUrl}second_block`, 'GET');
        }

        return { secondBlockImages, getSeconfBlockImages }
    }

    public getHorizontalMenu() {
        const horizontalMenu = ref();

        const getHorizontalMenu = async () => {
            horizontalMenu.value = await this.client.fetch(`${this.getContentBlocksUrl}horizontal_menu`, 'GET');
        }

        return { horizontalMenu, getHorizontalMenu };
    }
}