<!--
 * @Author: your name
 * @Date: 2021-04-17 13:20:03
 * @LastEditTime: 2021-04-17 19:03:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\App.vue
-->
<template>
    <div id="app">
        <!-- <img src="@/assets/img/tabbar/category.svg" /> -->
        <router-view />
        <tab-bar>
            <tab-bar-item
                v-for="(item, index) in tabBarItems"
                :key="index"
                :defaultImg="item.defaultImg"
                :activeImg="item.activeImg"
                :name="item.name"
                :path="item.path"
                activeColor="red"
            ></tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar.vue";
import TabBarItem from "./components/tabbar/TabBarItem.vue";
import home from "@/assets/img/tabbar/home.svg";
import homeActive from "@/assets/img/tabbar/home_active.svg";
import category from "@/assets/img/tabbar/category.svg";
import categoryActive from "@/assets/img/tabbar/category_active.svg";
import shopcart from "@/assets/img/tabbar/shopcart.svg";
import shopcartActive from "@/assets/img/tabbar/shopcart_active.svg";
import profile from "@/assets/img/tabbar/profile.svg";
import profileActive from "@/assets/img/tabbar/profile_active.svg";
export default {
    name: "App",
    components: {
        TabBar,
        TabBarItem
    },
    data() {
        return {
            tabBarItems: [
                {
                    name: "首页",
                    defaultImg: home,
                    activeImg: homeActive,
                    path: "/home"
                },
                {
                    name: "分类",
                    defaultImg: category,
                    activeImg: categoryActive,
                    path: "/category"
                },
                {
                    name: "购物车",
                    defaultImg: shopcart,
                    activeImg: shopcartActive,
                    path: "/cart"
                },
                {
                    name: "我的",
                    defaultImg: profile,
                    activeImg: profileActive,
                    path: "/profile"
                }
            ]
        };
    }
};
TabBar;
</script>

<style lang="less">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
@import "./assets/css/base.css";
</style>
