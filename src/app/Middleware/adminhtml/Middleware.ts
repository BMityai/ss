import { isAuth, getUser } from '@/app/Repositories/states/AdminUserState'
import router from '@/router';
import { NavigationGuardNext, RouteLocationNormalized, RouteRecord } from 'vue-router';
import { activeSection } from "@/app/Repositories/states/AdminPanelFrontStates";


/**
 *  Get adminUserState when reload page or first initial 
 */
async function getAdminUserStateFromBackend(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): Promise<void> {
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
        router.push({ name: 'dashboard' });
    }
}

/**
 * Allow only authorized users
 */
function auth(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): void {
    if (!isAuth.value) {
        router.push({ name: 'adminAuth' });
    } else {
        next();
    }
}

/**
 * 
 */

function showAsActiveSectionInSidebar(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): void {
    activeSection.value = to.matched[2].name as string;
}

export { getAdminUserStateFromBackend, notAuth, auth, showAsActiveSectionInSidebar }