/**
 * Stores the state of the user (administrator).
 * 
 */
import { reactive, ref } from "vue";
import AdminUserAuthService from '@/app/Services/adminhtml/AdminUserService'
import { useCookie } from "@vue-composable/cookie";
const { cookie, removeCookie } = useCookie("aToken");

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
    if (!cookie.value || cookie.value === null) {
        isAuth.value = false;
        user.data = null;
        return;
    }
    // Get user state
    try {
        const response = await service.getUserByJwt(cookie.value as string);
        isAuth.value = response.auth;
        user.data = response.user;
    } catch (e) {
        removeCookie();
        return;
    }
}

async function logout() {
    if(isAuth.value == false) {
        return;
    }
    removeCookie();
    isAuth.value = false;
    user.data = null;
}


function authAdminUser(userData: any) {
    isAuth.value = true;
    user.data = userData.user;
    cookie.value = userData.token
}

export {
    isAuth,
    user,
    getUser,
    authAdminUser,
    logout
}

