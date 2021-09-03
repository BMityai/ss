<script lang='ts'>
import { defineComponent } from 'vue'
import router from '@/router';
import { logout } from "@/app/Repositories/states/AdminUserState";


export default defineComponent({
    setup() {
        logout();
        router.push({ name: "adminAuth"})
    },
})
</script>
