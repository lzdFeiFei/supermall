/*
 * @Author: your name
 * @Date: 2021-04-17 18:43:26
 * @LastEditTime: 2021-04-17 18:56:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const home = () => import("@/views/home/home.vue");
const category = () => import("@/views/category/category.vue");
const cart = () => import("@/views/cart/cart.vue");
const profile = () => import("@/views/profile/profile.vue");

const routes = [
    {
        path: "",
        redirect: "/home"
    },
    {
        path: "/home",
        component: home
    },
    {
        path: "/category",
        component: category
    },
    {
        path: "/cart",
        component: cart
    },
    {
        path: "/profile",
        component: profile
    }
];

const router = new VueRouter({
    routes
});

export default router;
