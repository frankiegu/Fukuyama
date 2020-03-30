import {request} from "../../network/request";


const app = {
    state: {

        theme: "hotpink",
        logo: 'http://cdn.wuzhongyin.com/Logo_YouTuba-100-480x250px.png',


        // 当前观看的视频的详细信息
        videohall: null,

    },
    mutations: {
        // 更新当前观看的视频的信息 INFO
        SET_HALL(state, payload) {
            state.videohall = payload
        },


        // 更新列表状态
        UPDATE_NEXT_URL(state, payload) {
            state.next = payload
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