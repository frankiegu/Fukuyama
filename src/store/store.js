import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        logo_addr: "https://bwijn-1259543998.cos.ap-shanghai.myqcloud.com/LOGO/timg.jpg",   // logo地址 // Nginx -_-
        avatar: "https://img.yzcdn.cn/vant/cat.jpeg",   // 用户头像地址 Nginx
        login_state: false,      // 登录状态
        search_show: false,
    },
    mutations: {
        toggle_login(state) {   // 使登录
            state.login_state = !state.login_state
        },
        search_trigger(state){  //显示搜索框
            state.search_show = !state.search_show
        }
    },
    actions: {}
})
