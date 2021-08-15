import { isAuth, getUser } from '@/app/Repositories/states/AdminUserState'
import router from '@/router';
import { NavigationGuardNext, RouteLocationNormalized, RouteRecord } from 'vue-router';

/**
 *  Get and update adminUser from backend every request
 */
async function getAdminUser(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    if (to.path.includes('/admin')) {
        await getUser();
        next();
    }
}

function onlyNotAuth(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    if (!isAuth.value) {
        next();
    } else {
        router.push({name: 'dashboard'})
    }
}

export { getAdminUser, onlyNotAuth }