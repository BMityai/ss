import { useVuelidate, Validation } from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";

import { useToast } from "primevue/usetoast";
import { Ref, ref } from "vue";

export default class FormValidateHelper {
    useToast = false;
    rules: any;
    state: any;

    /**
     * Init and set configs
     */
    public init(state: any, rules: any, useToast = false) {
        this.useToast = useToast;
        this.state = state;
        this.rules = rules;
    }

    /**
     * Validate and submit form
     */
    public async getValidator() {
        // Set submited value
        const submitted = ref(false);

        // Validate
        const v$ = useVuelidate(this.rules, this.state);

        // Init toast
        const toast = useToast();

        // Submit method
        const handleSubmit = async () => {
            submitted.value = true;
            if (v$.value.$invalid && this.useToast) {
                toast.add({ severity: "error", summary: "Ошибка", detail: "Проверьте правильность запонения формы", life: 3000 });
                return;
            }
        };
        return { v$, handleSubmit, submitted, toast};
    }

    /**
     * Customize require validator
     */
    public required() {
        return helpers.withMessage(
            "Введите Value",
            required
        );
    }

    /**
     * Customize minLength validator
     */
    public minLength(length: number) {
        return helpers.withMessage(
            ({ $params }) =>
                `Минимальное количество символов: ${$params["min"]}`,
            minLength(length)
        )
    }
    /**
     * Handle exception from backend
     */
    private handleExceptions(error: any, toast: any) {
        if (error.response.status == 422) { // validation exception
            for (const [field, messages] of Object.entries(error.response.data.data)) {
                const messageText = messages as any;
                toast.add({ severity: "error", summary: `Ошибка ${field} [${error.response.status}]`, detail: messageText[0], life: 3000 });
            }
            return;
        } else if (error.response.status == 404) { // user not found
            toast.add({ severity: "error", summary: `Ошибка авторизации`, detail: 'Вы ввели неправильный логин или пароль', life: 3000 });
            return;
        } else if (error.response.status == 401) { // password is not valid
            toast.add({ severity: "error", summary: `Ошибка авторизации`, detail: 'Вы ввели неправильный логин или пароль', life: 3000 });
            return;
        }
        toast.add({ severity: "error", summary: `Ошибка [${error.response.status}]`, detail: "Произошла ошибка, попробуйте позже", life: 3000 });
    }
}