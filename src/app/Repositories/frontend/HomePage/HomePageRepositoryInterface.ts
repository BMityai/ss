import BlockType from "@/app/Types/BlockType";
import HeaderDataType from "@/app/Types/GetHeaderDataType";


export default interface HomePageRepositoryInterface {
    /**
     * Get header data (logo, menu, salesLogo)
     */
    getHeaderData(): Promise<HeaderDataType>;

    /**
     * Get home page blocks content 
     */
    getHomePageBlocksContent(blockName: 'horizontal_menu' | 'first_block' | 'second_block' | 'third_block', pageType: string, id: number | null): Promise <BlockType[]>
}