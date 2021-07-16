import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import $ from 'jquery'


import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeflex/primeflex.css';
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '@/assets/css/style.less'



createApp(App)
    .use(PrimeVue)
    .use($)
    .use(router)
    .mount('#gramarket')


