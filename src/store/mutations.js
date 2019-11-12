export default {
    toggle_login(state, status) {   // 使登录函数 status 是登录状态 布尔值 登陆成功传过来的是true

        // 切换登录状态
        state.user.isLogin = status
        localStorage.setItem("isLogin", status)

        //  将头像替换为本地存储里的头像地址
        state.user.avatar =localStorage.getItem("avatar")
    },

    search_trigger(state) {  //显示搜索框
        state.user.search_show = !state.user.search_show
    }
}