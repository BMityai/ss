
import BackendRepositoryClient from "../../BackendRepositoryClient";
import ContentRepositoryInterface from "./ContentRepositoryInterface";

export default class ContentRepository implements ContentRepositoryInterface {

    private adminUrl: string;
    private contentBlocksUrl: string;
    private client: BackendRepositoryClient;

    constructor() {
        this.client = new BackendRepositoryClient();
        this.adminUrl = 'admin';
        this.contentBlocksUrl = '/content/blocks';
    }

    /**
     * Auth user
     */
    public async getBlocks(params) {
        return await this.client.fetch(`${this.adminUrl}${this.contentBlocksUrl}`, 'GET', params);
    }

    public async getBlockById(blockId) {
        return await this.client.fetch(`${this.adminUrl}/content/block/${blockId}`, 'GET');
    }

    public async deleteBlockById(blockId) {
        return await this.client.fetch(`${this.adminUrl}/content/block/${blockId}`, 'DELETE');
    }

    public async getBlockDictOptions() {
        return await this.client.fetch(`${this.adminUrl}/content/block_dict/options`, 'GET');
    }

}