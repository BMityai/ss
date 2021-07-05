import BackendRepository from "@/app/Repositories/BackendRepository"

export default class HorizontalMenuService {
    public async getHorizontalMenu() {
        const repository = new BackendRepository();
        const { horizontalMenu, getHorizontalMenu } = repository.getHorizontalMenu();
        await getHorizontalMenu();
        return horizontalMenu;
    }

}