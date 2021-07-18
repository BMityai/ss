import BackendRepositoryClient from "../BackendRepositoryClient";
import BackendRepository from "../BackendRepositoryClient";
import HomePageRepositoryInterface from "./HomePageRepositoryInterface";

export default class HomePageRepository implements HomePageRepositoryInterface {

    private getContentBlocksUrl: string;
    private client: BackendRepositoryClient;

    constructor() {
        this.client = new BackendRepositoryClient();
        this.getContentBlocksUrl = 'home_page/content/';
    }

    /**
     * Get header data (menu)
     */
    public async getHeaderData() {
        return await this.client.fetch('header', 'GET');
    }

    /**
     * Get home page blocks content 
     */
    public async getHomePageBlocksContent(blockName: 'horizontal_menu' | 'first_block' | 'second_block' | 'third_block', area: string, id: number | null = null) {
        return await this.client.fetch(`${this.getContentBlocksUrl}${blockName}`, 'GET', {area: area, id: id});

    }
}