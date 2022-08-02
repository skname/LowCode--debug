import { createApp } from "vue";
import App from './app.vue'
import VueRouter from './router/index'
import Vuex from './store/index'
createApp(App)
    .use(VueRouter)
    .use(Vuex)
    .mount('#app')