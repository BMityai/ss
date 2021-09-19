import { ref, watch } from "vue";

export function validate(form, rules) {
    const validatorResponse = ref({});
    const formIsValid = ref(true);
    // first init
    init();

    watch(form, () => {
        init();
    })
    
    

    return { validatorResponse, formIsValid };
    

    function init() {
        for (const [formField, formFieldValue] of Object.entries(form)) {

            formIsValid.value = false;
            if (rules[formField] === undefined) {
                validatorResponse[formField] = { isValid: true };
                continue;
            }
    
            const perFieldValidateResponse = checkIsValid(rules[formField], formField, formFieldValue, validatorResponse, formIsValid)
    
            validatorResponse.value = perFieldValidateResponse.validatorResponse.value;
            formIsValid.value = perFieldValidateResponse.formIsValid.value;
        }
    }

    /**
     * Per field check
     */
    function checkIsValid(formFieldRules, formField, formFieldValue, validatorResponse, formIsValid) {
        for (const [rule, value] of Object.entries(formFieldRules)) {

            const fieldValue = formFieldValue as any;

            // require validate
            if (rule === 'required' && value && !fieldValue.length) {

                validatorResponse.value[formField] = {
                    isValid: false,
                    message: `Field ${formField} is required`
                };
                formIsValid.value = false
                return { validatorResponse, formIsValid };
            }

            // min length validate
            if (rule === 'minLength' && fieldValue.length < (value as number)) {
                validatorResponse.value[formField] = {
                    isValid: false,
                    message: `Minimum length of the "${formField}" field is ${value} characters`
                };
                formIsValid.value = false
                return { validatorResponse, formIsValid };
            }

            // add additional checks here 
        }
        validatorResponse.value[formField] = {
            isValid: true,
        };
        return { validatorResponse, formIsValid };
    }
}

