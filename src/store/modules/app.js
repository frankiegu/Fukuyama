const app = {
    state: {
        SearchBar: true
    },
    mutations: {
        SEARCHBAR_TRIGGER(state) {
            // 变更状态
            state.SearchBar = !state.SearchBar
        }
    },
    action: {}
}
export default app