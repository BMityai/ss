import { Ref } from 'vue'
export default interface GetFirstBlockImagesType {
    firstBlockImages: Ref<FirstBlockImages[]>;
    getFirstBlockImages: Function;
}

interface FirstBlockImages {
    id: string, 
    href: string, 
    src: string
}