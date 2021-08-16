import { useVuelidate, Validation, ValidationRuleWithoutParams, ValidationRuleWithParams } from "@vuelidate/core";
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
    public getValidator() {
        // Set submited value
        const submitted = ref(false);

        // Validate
        const v$ = useVuelidate(this.rules, this.state);

        // Init toast
        const toast = useToast();

        // Submit method
        const handleSubmit = () => {
            submitted.value = true;
            if (v$.value.$invalid && this.useToast) {
                toast.add({ severity: "error", summary: "Ошибка", detail: "Проверьте правильность запонения формы", life: 3000 });
            }
            return !v$.value.$invalid;
        };
        return { v$, handleSubmit, submitted, toast};
    }

    /**
     * Customize require validator
     */
    public required(): ValidationRuleWithParams {
        return helpers.withMessage(
            "Введите Value",
            required
        );
    }

    /**
     * Customize minLength validator
     */
    public minLength(length: number): ValidationRuleWithParams {
        return helpers.withMessage(
            ({ $params }) =>
                `Минимальное количество символов: ${$params["min"]}`,
            minLength(length)
        )
    }
}