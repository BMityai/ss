export default class BackendExceptionsHadleHelper {
    
    public adminAuthExceptionsHandle(error, toast) {
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