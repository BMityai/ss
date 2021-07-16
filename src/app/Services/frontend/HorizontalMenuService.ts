import BackendRepository from "@/app/Repositories/HomePage/HomePageRepository"

export default class HorizontalMenuService {
    public async getHorizontalMenu() {
        const repository = new BackendRepository();
        return await repository.getHomePageBlocksContent('horizontal_menu');

    }

}