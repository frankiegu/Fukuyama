import {request} from "../../network/request";


const app = {
    state: {
        SearchBar: false,
        theme: "hotpink",
        logo: 'http://cdn.wuzhongyin.com/Logo_YouTuba-100-480x250px.png',


        // 当前观看的视频的详细信息
        VideoData: null,

        // 当前首页推荐状态
        next: '/api/homerecommend/?page=1',
        previous: "",
        VList: [],
        VListCount: 0,


    },
    mutations: {
        // 变更状态
        SEARCHBAR_TRIGGER(state, payload) {
            state.SearchBar = payload
        },

        // 更新当前观看的视频的信息 INFO
        SET_VIDEODATA(state, payload) {
            state.VideoData = payload
        },


        // 更新列表状态
        UPDATE_NEXT_URL(state, payload) {
            state.next = payload
        },
        ADD_LIST(state, payload) {
            // console.log(payload);
            state.VList.push(payload[0])
            if (payload[1]) {
                state.VList.push(payload[1])
            }

        },


        // 点赞
        PLUS_ONE_GOOD_JOG(state) {
            state.VideoData.likenum++;
        },
        // 取消点赞
        MINUS_ONE(state) {
            state.VideoData.likenum--;

        },

        // 设置全部视频总数 方便视频ranking请求标记
        SET_COUNT(state, payload) {
            state.VListCount = payload;
        },

        // 设置点赞状态 liked & unlike
        SET_LIKESTATE(state) {
            state.VideoData.is_liked = 1 // 1是代表已点赞
        }


    },

    getters: {
        url: state => {
            return state.next
        }
    },

    actions: {
        // 获取首页热门推荐List
        GetHotRecommendation() {
            return
        },


        // 请求首页List
        Ranking({commit, state, getters}, payload) {
            return request({
                url: state.next,
                method: 'get',
            }).then(m => {
                // 添加渲染列表
                commit("ADD_LIST", m.data.results)

                // 设置全部视频总数 方便视频ranking请求标记
                commit("SET_COUNT", m.data.count)

                // 成功后设置下一页
                commit("UPDATE_NEXT_URL", m.data.next)

                // 将值返回 然后组件调用
                return m
            })
        },


        // 点赞操作api请求
        LikeAction({commit, state, getters}, payload) {
            return request({
                url: '/api/video/' + payload.video + '/likeaction/',
                method: 'post',
                data: payload
            }).then(m => {
                commit("SET_LIKESTATE");
                commit("PLUS_ONE_GOOD_JOG")
                console.log(m);
                return m
            })
        }
    }
}
export default app