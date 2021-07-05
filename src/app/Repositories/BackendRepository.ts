import { ref } from "vue";
import GetHeaderDataType from "../Types/GetHederDataType";
import BackendRepositoryInterfase from "./BackendRepositoryInterfase";
import Repository from "./Repository";

export default class BackendRepository extends Repository implements BackendRepositoryInterfase {

    /**
     * Get header data (menu)
     */
    public getHeaderData(): GetHeaderDataType {
        const headerData = ref();

        const getHeaderData = async () => {
            headerData.value = await this.fetch('header', 'GET');
        };

        return { headerData, getHeaderData };
    }

    public getFirstBlockImages() {
        const firstBlockImages = ref();

        const getFirstBlockImages = async () => {
            firstBlockImages.value = await this.fetch('first_block', 'GET');
        }

        return { firstBlockImages, getFirstBlockImages }
    }

    public getSecondBlockContent() {
        const secondBlockImages = ref();

        const getSeconfBlockImages = async () => {
            secondBlockImages.value = await this.fetch('second_block', 'GET');
        }

        return { secondBlockImages, getSeconfBlockImages }
    }

    public getHorizontalMenu() {
        const horizontalMenu = ref();

        const getHorizontalMenu = async () => {
            horizontalMenu.value = await this.fetch('horizontal_menu', 'GET');
        }

        return { horizontalMenu, getHorizontalMenu };
    }
}