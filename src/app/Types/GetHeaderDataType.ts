
interface ContentType {
    block: string;
    blockId: number;
    id: number
    image: string
    pageType: string
    text: string | null
    url: string | null
}

interface CategoryInTreeType {
    id: number;
    level: number;
    parentId: number;
    position: number;
    children: CategoryInTreeType[] | [];
    attributes: {
        name?: string;
        thumbnail?: string;
        url?: string;
    }
}



export default interface HeaderDataType {
    logo: ContentType;
    menu: CategoryInTreeType[];
}
