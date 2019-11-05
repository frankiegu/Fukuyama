export default {
    login(state) {
        console.log("改变了状态");
        this.state.isLogin = true;
        state.isLogin = !state.isLogin
    }
}