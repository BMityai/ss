import { isAuth, getUser } from '@/app/Repositories/states/AdminUserState'
import router from '@/router';
import { NavigationGuardNext, RouteLocationNormalized, RouteRecord } from 'vue-router';

/**
 *  Get adminUserState when reload page or first initial 
 */
async function getAdminUserStateFromBackend(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): Promise <void> {
    if (to.path.includes('/admin')) {
        await getUser();
        next();
    }
}

/**
 * Allow only not authorized users
 */
function notAuth(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): void {
    if (!isAuth.value) {
        next();
    } else {
        router.push({name: 'dashboard'});
    }
}

/**
 * Allow only authorized users
 */
function auth(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): void {
    if (!isAuth.value) {
        router.push({name: 'adminAuth'});
    } else {
        next();
    }
}

export { getAdminUserStateFromBackend, notAuth, auth }