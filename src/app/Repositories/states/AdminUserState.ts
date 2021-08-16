import { reactive, ref } from "vue";
import AdminUserAuthService from '@/app/Services/adminhtml/AdminUserService'

const isAuth = ref(false);
const user = reactive({
    data: null
});

/**
 * Admin user auth service
 */
const service = new AdminUserAuthService();


/**
 * Get admin user from backend and set to frontend state
 */
async function getUser(): Promise<void> {
    // Return if auth
    if(isAuth.value) {
        return;
    }

    // Return if not set token
    if (!sessionStorage.getItem('aToken') || sessionStorage.getItem('aToken') === null) {
        isAuth.value = false;
        user.data = null;
        return;
    }
    // Get user state
    try {
        const response = await service.getUserByJwt(sessionStorage.getItem('aToken') as string);
        isAuth.value = response.auth;
        user.data = response.user;
    } catch (e) {
        sessionStorage.removeItem('aToken');
        return;
    }
}


function authAdminUser(userData: any) {
    isAuth.value = true;
    user.data = userData.user;
    sessionStorage.setItem('aToken', userData.token);
}

export {
    isAuth,
    user,
    getUser,
    authAdminUser
}

