import axios, { Method } from "axios";
export default class BackendRepositoryClient {
    

    baseUrl: string;
    version = 'v1';

    constructor() {
        this.baseUrl = process.env.VUE_APP_BACKEND_URL + this.version;
    }

    public async fetch(path: string, method: string, params: any | null = null, body: any | null = null, headers: any = null): Promise<JSON> {

        const response = await axios({
            url: `${this.baseUrl}/${path}`,
            method: method as Method,
            params: params,
            data: body,
            headers: headers
        });
        return await response.data;
    }
}