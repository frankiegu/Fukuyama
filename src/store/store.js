import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        logo_addr: require("assets/youtobe.jpg"),   // logo地址 // Nginx -_-
        avatar: "https://img.yzcdn.cn/vant/cat.jpeg",   // 用户头像地址 Nginx
        login_state: false      // 登录状态
    },
    mutations: {
        toggle_login(state) {   // 使登录
            state.login_state = true
        }
    },
    actions: {}
})
