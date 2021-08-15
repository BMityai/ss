import { reactive, ref } from "vue";
import AdminUserAuthService from '@/app/Services/adminhtml/AdminUserService'

const isAuth = ref(false);
const user = reactive({
    data: null
});

const service = new AdminUserAuthService();


/**
 * User setter
 */
async function getUser() {
    if (!sessionStorage.getItem('token') || sessionStorage.getItem('token') === null) {
        isAuth.value = false;
        user.data = null;
        return;
    }
    try {
        const response = await service.getUserByJwt(sessionStorage.getItem('token') as string);
        isAuth.value = response.auth;
        user.data = response.user;
        sessionStorage.setItem('user', JSON.stringify(response.user));
    } catch (e) {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        return;
    }
}

function setUser(userData: any) {
    isAuth.value = true;
    sessionStorage.setItem('user', JSON.stringify(userData.user));
    sessionStorage.setItem('token', userData.token);
}

export {
    isAuth,
    user,
    getUser,
    setUser
}

