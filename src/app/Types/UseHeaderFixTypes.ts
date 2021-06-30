import { Ref } from "vue";

export default interface UseHeaderFixType {
    header: Ref<HTMLElement>;
    canFixHeader: Ref<boolean>;
}