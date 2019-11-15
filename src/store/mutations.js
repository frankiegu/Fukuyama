export default {
    // 切换登录状态
    toggle_login(state, status) {   // 使登录函数 status 是登录状态 布尔值 登陆成功传过来的是true
        state.user.isLogin = status
        localStorage.setItem("isLogin", status)

        //  将头像替换为本地存储里的头像地址
        state.user.avatar = localStorage.getItem("avatar")
    },

    //显示搜索框
    search_trigger(state) {
        state.user.search_show = !state.user.search_show
    },

    // 视频页面加载数据 Dplayer ==> video.url -_-!
    loadvideodetail(state, payload) {
        state.video.url = payload.url;
        state.video.pic = payload.pic;
    }
}