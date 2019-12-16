import {User} from "../../network/user_api";


const user = {
    state: {
        user: '',
        status: '',
        code: '',
        token: localStorage.getItem('token'),
        name: '',
        username: '',
        id: '',
        avatar: localStorage.getItem('avatar'),
        introduction: '',
        roles: [],
        urls: [],
        setting: {
            articlePlatform: []
        }
    },

    mutations: {},

    actions: {
        // 用户名登录
        Get_Token({commit, state}, payload) {
            // 在api文件里调用请求接口
            // console.log('*********************');
            return User.login(payload).then(res => {
                console.log(res);
                // 设置token值 存储在localstorage里面
                localStorage.setItem("token", res.data.token)
                // 设置头像地址
                localStorage.setItem('avatar', res.data.avatar)
            })
        },

        RegisterUser({commit}, userInfo) {
            return User.register(userInfo)

        }
    }
};

export default user