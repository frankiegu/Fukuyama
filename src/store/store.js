import Vue from 'vue'
import Vuex from 'vuex'
import action from "./action";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        logo_addr: "https://bwijn-1259543998.cos.ap-shanghai.myqcloud.com/LOGO/timg.jpg",   // logo地址 // Nginx -_-

        user: {
            //  初始化时获取浏览器里面存储的东西就可以实现刷新后丢失数据
            avatar: sessionStorage.getItem("avatar"),       //  头像数据
            isLogin: sessionStorage.getItem("isLogin"),      // 登录状态

            search_show: false,
        }
    },
    mutations: {
        toggle_login(state, status) {   // 使登录函数 status 是登录状态 布尔值 登陆成功传过来的是true

            // 切换登录状态
            state.user.isLogin = status
            sessionStorage.setItem("isLogin", status)

            //  将头像替换为本地存储里的头像地址
            state.user.avatar = sessionStorage.getItem("avatar")
        },

        search_trigger(state) {  //显示搜索框
            state.user.search_show = !state.user.search_show
        },
    },

    actions: action
})
