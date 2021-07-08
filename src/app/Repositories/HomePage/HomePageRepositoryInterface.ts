import GetHeaderDataType from "../../Types/GetHederDataType";
import BackendRepository from "../BackendRepositoryClient";

export default interface HomePageRepositoryInterface {
    getHeaderData(): GetHeaderDataType
}