import Vue from 'vue'
import Vuex from 'vuex'
import videolist from "./modules/videolist";
import state from "./state";
import mutations from "./mutations";
import action from './action'

Vue.use(Vuex)

export default new Vuex.Store({
    state: state,

    mutations: mutations,

    actions: action,

    modules: {
        popular: videolist
    }
})
