import {HomePage} from "../../network/homepage_api";

const app = {
    state: {
        SearchBar: false,
        theme: "hotpink",
        logo: require("assets/Logo_YouTuba-100-480x250px.png")
    },
    mutations: {
        SEARCHBAR_TRIGGER(state, payload) {
            // 变更状态
            state.SearchBar = payload
        }
    },
    action: {
        // 获取首页热门推荐List
        GetHotRecommendation() {
            return
        }
    }
}
export default app