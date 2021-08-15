
export default interface AuthRepositoryInterface {
    
    sendAuthForm(action: string, method: 'POST' | 'PUT', params: any)

}