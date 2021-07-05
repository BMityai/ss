export default class Repository{

    baseUrl: string;

    constructor() {
        this.baseUrl = process.env.VUE_APP_BACKEND_URL;
    }

    public async fetch(path: string, method: string): Promise<JSON> {
        const response = await fetch(`${this.baseUrl}/${path}`, { method: method })
        return await response.json();
    }
}