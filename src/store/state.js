export default {
    logo_addr: require("assets/youtobe.jpg"),   // logo地址 // Nginx -_-

    user: { // 用户状态对象
        //  初始化时获取浏览器里面存储的东西就可以实现刷新后丢失数据
        avatar: localStorage.getItem("avatar"),       //  头像数据
        isLogin: localStorage.getItem("isLogin"),      // 登录状态

        search_show: false,
    }
}