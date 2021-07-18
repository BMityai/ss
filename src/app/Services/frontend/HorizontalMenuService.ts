import BackendRepository from "@/app/Repositories/HomePage/HomePageRepository"

export default class HorizontalMenuService {
    public async getHorizontalMenu(area: string, id: number | null = null) {
        const repository = new BackendRepository();
        return await repository.getHomePageBlocksContent('horizontal_menu', area, id);

    }

}