import BackendRepositoryClient from "../../BackendRepositoryClient";
import AuthRepositoryInterface from "./AuthRepositoryInterface";

export default class AuthRepository implements AuthRepositoryInterface {

    private adminUrl: string;
    private authUrl: string;
    private client: BackendRepositoryClient;

    constructor() {
        this.client = new BackendRepositoryClient();
        this.adminUrl = 'admin';
        this.authUrl = '/auth';
    }

    /**
     * Auth user
     */
    public async authAdminUser(params: any) {
        return await this.client.fetch(`${this.adminUrl}${this.authUrl}`, 'POST', null, params);
    }

    /**
     * Get user by jwt
     */
    public async getUserByJwt(jwt: string) {
        return this.client.fetch(`${this.adminUrl}/user`, 'GET', {jwt})
    }

}