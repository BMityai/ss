import BackendRepository from "../../Repositories/HomePage/HomePageRepository";

export default class BlockService {
    
    /**
     * Get first block images
     */
    public async getFirstBlockContent() {
        const repository = new BackendRepository();
        
        const { firstBlockImages, getFirstBlockImages } = repository.getFirstBlockImages();

        await getFirstBlockImages()

        return firstBlockImages;
    }

    /**
     * Get first block images
     */
    public async getSecondBlockContent() {
        const repository = new BackendRepository();
        
        const { secondBlockImages, getSeconfBlockImages } = repository.getSecondBlockContent();

        await getSeconfBlockImages()

        return secondBlockImages;
    }
}