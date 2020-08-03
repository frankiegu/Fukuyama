<template>
    <van-sticky>
        <van-search
                v-model="value"
                shape="round"
                background="hotpink"
                placeholder="请输入搜索关键词"
                @search="onSearch"
        />
    </van-sticky>
</template>

<script>
    import navbar_avatar from "./avatar";
    import { Toast } from 'vant';
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
            onSearch(val) {
                Toast("就这几个片儿 还搜啥呢");
            },
        },
        watch: {
            // 到看视频的时候关闭顶部导航
            $route(to, from) {
                if (to.name === "VideoDetail" || to.path === "/register") {

                } else {

                }
            },

        }
    }
</script>

<style scoped>


</style>