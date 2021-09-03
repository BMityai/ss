import AdminAuthRepository from '@/app/Repositories/adminhtml/Auth/AuthRepository'
export default class AdminUserService {
    
    protected backendRepository: AdminAuthRepository

    constructor() {
        this.backendRepository = new AdminAuthRepository();
    }

    public async getUserByJwt(jwt: string): Promise<any> {
        return await this.backendRepository.getAdminUserByJwt(jwt);
    }
}