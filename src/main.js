/*
 * @Author: your name
 * @Date: 2021-04-17 13:20:04
 * @LastEditTime: 2021-04-17 18:55:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router
}).$mount("#app");
