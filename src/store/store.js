import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        logo_addr: require("assets/youtobe.jpg"),
        avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
        login_state: false
    },
    mutations: {
        toggle_login(state) {
            state.login_state = true
        }
    },
    actions: {}
})
