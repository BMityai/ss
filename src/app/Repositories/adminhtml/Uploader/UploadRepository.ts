
import BackendRepositoryClient from "../../BackendRepositoryClient";
import UploadRepositoryInterface from "./UploadRepositoryInterface";

export default class UploadRepository implements UploadRepositoryInterface {

    private adminUrl: string;
    private uploadUrl: string;
    private client: BackendRepositoryClient;

    constructor() {
        this.client = new BackendRepositoryClient();
        this.adminUrl = 'admin';
        this.uploadUrl = '/upload';
    }

    /**
     * Upload image
     */
    public async uploadFile(file) {

        const fd = new FormData();
        fd.append('file', file);
        const headers = {
            'Content-Type':'multipart/form-data' 
        }
        return await this.client.fetch(`${this.adminUrl}${this.uploadUrl}`, 'POST', null, file.value);
    }
}