export default class BackendRepositoryClient {

    baseUrl: string;
    version = 'v1';

    constructor() {
        this.baseUrl = process.env.VUE_APP_BACKEND_URL + this.version;
    }

    public async fetch(path: string, method: string): Promise<JSON> {
        const response = await fetch(`${this.baseUrl}/${path}`, { method: method })
        return await response.json();
    }
}