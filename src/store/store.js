import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        logo_addr: require("assets/youtobe.jpg"),
        avatar: null,
    },
    mutations: {
        change_avatar(state) {
            state.avatar = require("assets/dzs.jpg")
        }
    },
    actions: {}
})
