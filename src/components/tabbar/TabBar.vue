<!--
 * @Author: your name
 * @Date: 2021-04-17 15:36:17
 * @LastEditTime: 2021-04-17 16:20:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\tabbar\TabBar.vue
-->
<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "TabBar"
};
</script>

<style scoped>
#tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
