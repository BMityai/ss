import BackendRepository from "../../Repositories/HomePage/HomePageRepository";

export default class BlockService {

    backendRepository: BackendRepository;

    constructor() {
        this.backendRepository = new BackendRepository();
    }

    /**
     * Get first block content
     */
    public async getFirstBlockContent(pageType: string, id: number | null) {
        return await this.backendRepository.getHomePageBlocksContent('first_block', pageType, id);
    }

    /**
     * Get second block content
     */
    public async getSecondBlockContent(pageType: string, id: number | null) {
        return await this.backendRepository.getHomePageBlocksContent('second_block', pageType, id);
    }

    /**
     * Get third block content
     */
    public async getThirdBlockContent(pageType: string, id: number | null) {
        return await this.backendRepository.getHomePageBlocksContent('third_block', pageType, id);
    }
}