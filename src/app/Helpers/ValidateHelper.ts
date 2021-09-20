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
                validatorResponse.value[formField] = { isValid: true };
                continue;
            }

            const perFieldValidateResponse = checkIsValid(rules[formField], formField, formFieldValue, validatorResponse)
            validatorResponse.value = perFieldValidateResponse.value;
        }

        for (const [field, response] of Object.entries(validatorResponse.value)) {
            const result = response as any;
            if (result.isValid) {
                formIsValid.value = true;
            }
            if (!result.isValid) {
                formIsValid.value = false;
                break;
            }

        }
    }

    /**
     * Per field check
     */
    function checkIsValid(formFieldRules, formField, formFieldValue, validatorResponse) {
        for (const [rule, value] of Object.entries(formFieldRules)) {

            const fieldValue = formFieldValue as any;

            // require validate
            if (rule === 'required' && value && !fieldValue) {

                validatorResponse.value[formField] = {
                    isValid: false,
                    message: `Required field`
                };
                return validatorResponse;
            }

            // min length validate
            if (rule === 'minLength' && fieldValue.length < (value as number)) {
                validatorResponse.value[formField] = {
                    isValid: false,
                    message: `Minimum length of this field is ${value} characters`
                };
                return validatorResponse;
            }

            // min length validate
            if (rule === 'notEmpty' && !fieldValue.length) {
                validatorResponse.value[formField] = {
                    isValid: false,
                    message: `Required field`
                };
                return validatorResponse;
            }

            // add additional checks here 
        }
        validatorResponse.value[formField] = {
            isValid: true,
        };
        return validatorResponse;
    }
}

