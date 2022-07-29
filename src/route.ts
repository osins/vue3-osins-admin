import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./views/HomeView.vue"),
        },
        {
            path: "/bank/list",
            name: "bank-list",
            component: () => import("./views/BankListView.vue"),
        },
        {
            path: "/bank/detail/:id(\\d+)",
            name: "bank-detail",
            component: () => import("./views/BankDetailView.vue"),
        }
    ],
})

export default router
