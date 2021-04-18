<!--
 * @Author: your name
 * @Date: 2021-04-17 16:15:11
 * @LastEditTime: 2021-04-17 19:04:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\tabbar\TabBarItem.vue
-->
<template>
    <div class="tab-bar-item" @click="routeChange()">
        <img v-if="!isActive" :src="defaultImg" />
        <img v-else :src="activeImg" />
        <div :style="activeTextStyle">{{ name }}</div>
    </div>
</template>

<script>
export default {
    name: "TabBarItem",
    props: {
        defaultImg: {
            type: String
        },
        activeImg: {
            type: String
        },
        path: {
            type: String
        },
        name: {
            type: String
        },
        activeColor: {
            type: String
        }
    },
    data() {
        return {};
    },
    computed: {
        isActive() {
            console.log(this.$route.path, this.path);
            return this.$route.path === this.path;
        },
        activeTextStyle() {
            return this.isActive ? { color: this.activeColor } : {};
        }
    },
    methods: {
        routeChange() {
            this.$router.push(this.path);
        }
    }
};
</script>

<style>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}
.tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}
</style>
