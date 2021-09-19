<template>
    <div class="admin-auth page-wrapper">
        <Toast />
        <div class="container">
            <form class="auth-form" @submit.prevent="handleSubmit()">
                <div class="header">
                    <img
                        src="@/assets/frontend/images/service/icons/shit.png"
                        alt=""
                    />
                    <h3>Авторизация</h3>
                </div>
                <div class="body">
                    <div class="p-fluid">
                        <span class="p-float-label">
                            <InputText
                                v-model="v$.login.$model"
                                :class="{
                                    'p-invalid': v$.login.$invalid && submitted,
                                }"
                                name="login"
                                id="login"
                                type="text"
                            />
                            <label for="login">Логин или email</label>
                        </span>

                        <small
                            v-if="
                                (v$.login.required.$invalid && submitted) ||
                                v$.login.required.$pending.$response
                            "
                            class="p-error"
                        >
                            {{
                                v$.login.required.$message.replace(
                                    "Value",
                                    "логин или email"
                                )
                            }}
                        </small>
                        <small
                            v-if="
                                (v$.login.minLength.$invalid && submitted) ||
                                v$.login.minLength.$pending.$response
                            "
                            class="p-error"
                            >{{ v$.login.minLength.$message }}
                        </small>

                        <span class="p-float-label">
                            <InputText
                                v-model="v$.password.$model"
                                name="password"
                                id="password"
                                type="password"
                                :class="{
                                    'p-invalid':
                                        v$.password.$invalid && submitted,
                                }"
                            />
                            <label for="password">Пароль</label>
                        </span>
                        <small
                            v-if="
                                (v$.password.required.$invalid && submitted) ||
                                v$.password.required.$pending.$response
                            "
                            class="p-error"
                        >
                            {{
                                v$.password.required.$message.replace(
                                    "Value",
                                    "пароль"
                                )
                            }}
                        </small>
                        <small
                            v-if="
                                (v$.password.minLength.$invalid && submitted) ||
                                v$.password.minLength.$pending.$response
                            "
                            class="p-error"
                        >
                            {{ v$.password.minLength.$message }}
                        </small>
                    </div>
                </div>
                <div class="restore-password">
                    <router-link class="link" :to="{ name: 'Home' }"
                        >Забыли пароль?</router-link
                    >
                </div>

                <Button label="Войти" type="submit" class="p-button-raised" />
            </form>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import AuthRepository from "@/app/Repositories/adminhtml/Auth/AuthRepository";
import BackendExceptionsHandleHelper from "@/app/Helpers/BackendExceptionsHadleHelper";
import router from "@/router";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import { authAdminUser } from "@/app/Repositories/states/AdminUserState";
import { useToast } from "primevue/usetoast";

export default defineComponent({
    components: {
        InputText,
        Button,
        Toast,
    },
    async setup() {

        // Prepare fields
        const state = reactive({
            login: "",
            password: "",
        });

        // Prepare rules for fields
        const rules = {
            login: {
                required: required,
                minLength: minLength(4),
            },
            password: {
                required: required,
                minLength: minLength(6),
            },
        };

        // Set submited value
        const submitted = ref(false);

        // Validate
        const v$ = useVuelidate(rules, state);

        // Init toast
        const toast = useToast();

        const handleSubmit = async () => {
            const repository = new AuthRepository();
            // Submit method
            submitted.value = true;
            if (v$.value.$invalid && useToast) {
                toast.add({
                    severity: "error",
                    summary: "Ошибка",
                    detail: "Проверьте правильность запонения формы",
                    life: 3000,
                });
            }
            const isValid = !v$.value.$invalid;
            if (!isValid) {
                return;
            }
            try {
                const response = await repository.authAdminUser(state);
                authAdminUser(response);
                router.push({ name: "dashboard" });
            } catch (e) {
                const handler = new BackendExceptionsHandleHelper();
                handler.adminAuthExceptionsHandle(e, toast);
            }
        };

        return {
            v$,
            handleSubmit,
            submitted
        };
    },
});
</script>
