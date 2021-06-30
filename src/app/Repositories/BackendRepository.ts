import BackendRepositoryInterfase from "./BackendRepositoryInterfase";

export default class BackendRepository implements BackendRepositoryInterfase {
    public getHeaderData() {
        const logoSrc = "https://via.placeholder.com/130x40";
        const saleImgSrc = "https://via.placeholder.com/130x40";
        const menuItems =`` 

        return {
            logoSrc,
            saleImgSrc,
            menuItems
        }
    }
}