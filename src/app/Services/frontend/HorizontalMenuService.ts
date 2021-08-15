import BackendRepository from "@/app/Repositories/frontend/HomePage/HomePageRepository"

export default class HorizontalMenuService {
    public async getHorizontalMenu(pageType: string, id: number | null = null) {
        const repository = new BackendRepository();
        return await repository.getHomePageBlocksContent('horizontal_menu', pageType, id);

    }

}