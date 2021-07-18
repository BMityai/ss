import BackendRepository from "../../Repositories/HomePage/HomePageRepository";

export default class BlockService {

    backendRepository: BackendRepository;

    constructor() {
        this.backendRepository = new BackendRepository();
    }

    /**
     * Get first block content
     */
    public async getFirstBlockContent(area: string, id: number | null) {
        return await this.backendRepository.getHomePageBlocksContent('first_block', area, id);
    }

    /**
     * Get second block content
     */
    public async getSecondBlockContent(area: string, id: number | null) {
        return await this.backendRepository.getHomePageBlocksContent('second_block', area, id);
    }

    /**
     * Get third block content
     */
    public async getThirdBlockContent(area: string, id: number | null) {
        return await this.backendRepository.getHomePageBlocksContent('third_block', area, id);
    }
}