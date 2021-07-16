import BackendRepository from "../../Repositories/HomePage/HomePageRepository";

export default class BlockService {

    backendRepository: BackendRepository;

    constructor() {
        this.backendRepository = new BackendRepository();
    }

    /**
     * Get first block content
     */
    public async getFirstBlockContent() {
        return await this.backendRepository.getHomePageBlocksContent('first_block');
    }

    /**
     * Get second block content
     */
    public async getSecondBlockContent() {
        return await this.backendRepository.getHomePageBlocksContent('second_block');
    }

    /**
     * Get third block content
     */
    public async getThirdBlockContent() {
        return await this.backendRepository.getHomePageBlocksContent('third_block');
    }
}