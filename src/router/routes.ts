export const routes = [
    {
        name: "home",
        path: "/",
        component: () => import('@views/index.vue'),
        // redirect: '/about'
    },
    {
        name: "about",
        path: "/about",
        component: () => import('@views/about.vue'),

    }
]