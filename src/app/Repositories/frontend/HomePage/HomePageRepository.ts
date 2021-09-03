import BackendRepositoryClient from "../../BackendRepositoryClient";
import HomePageRepositoryInterface from "./HomePageRepositoryInterface";
import HeaderDataType from '@/app/Types/GetHeaderDataType'
import BlockType from "@/app/Types/BlockType";

export default class HomePageRepository implements HomePageRepositoryInterface {

    private getContentBlocksUrl: string;
    private client: BackendRepositoryClient;

    constructor() {
        this.client = new BackendRepositoryClient();
        this.getContentBlocksUrl = 'content/';
    }

    /**
     * Get header data (logo, menu, salesLogo)
     */
    public async getHeaderData(): Promise<HeaderDataType> {
        return await this.client.fetch('header', 'GET') as unknown as HeaderDataType;
    }

    /**
     * Get home page blocks content 
     */
    public async getHomePageBlocksContent(
        blockName: 'horizontal_menu' | 'first_block' | 'second_block' | 'third_block' | 'fourthBlock' | 'fifthBlock',
        pageType: string,
        id: number | null = null
    ): Promise <BlockType[]> 
    {
        return await this.client.fetch(`${this.getContentBlocksUrl}${blockName}`, 'GET', { pageType: pageType, id: id }) as unknown as BlockType[];
    }
}