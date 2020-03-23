import {User} from "../../network/user_api";


const user = {
    state: {
        user: '',
        status: '',
        code: '',
        token: localStorage.getItem('token'),
        name: '',
        username: localStorage.getItem('username'),
        id: localStorage.getItem('user_id'),
        avatar: localStorage.getItem('avatar'),
        introduction: '',
        roles: [],
        urls: [],
        setting: {
            articlePlatform: []
        }
    },

    mutations: {
        // 等完成后立即刷新avatar里的值立即渲染出头像
        SET_AVATAR(state, payload) {
            state.avatar = payload
        },

        // 立即更新token
        SET_TOKEN(state, payload) {
            state.token = payload
        },
        SET_ID(state, payload) {
            state.id = payload
        }
    },

    actions: {
        // 用户名登录
        Get_Token({commit, state}, payload) {
            // 在api文件里调用请求接口
            // console.log('*********************');
            return User.login(payload).then(res => {
                console.log("GetToken -- from user actions ", res);
                // 设置token值 存储在localstorage里面
                localStorage.setItem("token", res.data.token)
                // 设置头像地址
                localStorage.setItem('avatar', res.data.avatar)
                localStorage.setItem('user_id', res.data.user_id)
                localStorage.setItem('username', res.data.username)

                // 立即更新头像 token
                commit("SET_AVATAR", res.data.avatar)
                commit("SET_TOKEN", res.data.token)
                commit("SET_ID", res.data.user_id)

            })
        },

        RegisterUser({commit}, userInfo) {
            return User.register(userInfo)
        },

        QuitLogin() {
            localStorage.clear();
        }
    }
};

export default user