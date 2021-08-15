

export default interface HomePageRepositoryInterface {
    
    getHeaderData();

    getHomePageBlocksContent(blockName: 'horizontal_menu' | 'first_block' | 'second_block' | 'third_block', pageType: string, id: number | null)
}