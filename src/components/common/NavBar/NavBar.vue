<template>
    <van-sticky>
        <van-search
                v-model="value"
                shape="round"
                background="hotpink"
                placeholder="请输入搜索关键词"
        />
    </van-sticky>
</template>

<script>
    import navbar_avatar from "./avatar";

    export default {
        name: "NavBar",
        data() {
            return {
                show: false,

                value: ''
            }
        },
        created() {
        },
        computed: {
            SearchBar() {
                return this.$store.state.app.SearchBar
            }
        },
        components: {navbar_avatar},
        methods: {
            show_searchbar(payload) {      // 搜索框是否展示 状态标志存在Vuex中
                this.$store.commit("SEARCHBAR_TRIGGER", payload)
            },
            showPopup() {
                this.show = !this.show;
            }
        },
        watch: {
            // 到看视频的时候关闭顶部导航
            $route(to, from) {
                if (to.name === "VideoDetail" || to.path === "/register") {
                    this.show_searchbar(false)
                } else {
                    this.show_searchbar(true)
                }
            },

        }
    }
</script>

<style scoped>


</style>