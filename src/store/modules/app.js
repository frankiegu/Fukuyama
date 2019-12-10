const app = {
    state: {
        SearchBar: false,
        theme:"hotpink"
    },
    mutations: {
        SEARCHBAR_TRIGGER(state, payload) {
            // 变更状态
            state.SearchBar = payload
        }
    },
    action: {}
}
export default app