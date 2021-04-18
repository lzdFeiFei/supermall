/*
 * @Author: your name
 * @Date: 2021-04-17 16:30:04
 * @LastEditTime: 2021-04-17 16:31:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\vue.config.js
 */
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set("@", resolve("src"));
    }
};
