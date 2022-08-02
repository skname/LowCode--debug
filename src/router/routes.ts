import { RouteRecordRaw } from 'vue-router'
export const routes: RouteRecordRaw[] = [
    {
        name: "home",
        path: "/",
        component: () => import('@views/index.vue')
    }
]