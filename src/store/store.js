import Vue from 'vue'
import Vuex from 'vuex'
import user from "./modules/user";
import app from "./modules/app";

Vue.use(Vuex)

// todo mutations 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
export default new Vuex.Store({
    state: {
        logo: require("assets/logo.png")
    },
    modules: {
        user,
        app
    },
})
