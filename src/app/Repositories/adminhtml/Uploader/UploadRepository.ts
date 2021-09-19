
import BackendRepositoryClient from "../../BackendRepositoryClient";
import UploadRepositoryInterface from "./UploadRepositoryInterface";
import FormData from 'form-data'
import axios from "axios";
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
    public uploadFile(file) {
        const formData = new FormData();
        formData.append('file', file);
        return this.client.fetch(`${this.adminUrl}${this.uploadUrl}`, 'POST', null, formData);
    }
}