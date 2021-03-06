
export default interface AuthRepositoryInterface {

    /**
     * Auth user
     */
    authAdminUser(action: string, method: 'POST' | 'PUT', params: any): any

    /**
     * Get user by jwt
     */
    getAdminUserByJwt(jwt: string): any

}