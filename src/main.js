import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import App from './App.vue'
import AppLoader from './components/AppLoader.vue';
import router from './assets/router/index.js';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App)
    .component('AppLoader', AppLoader)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
