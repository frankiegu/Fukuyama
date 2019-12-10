<template>
    <van-sticky v-show="this.show">

        <transition translate name="fade" mode="out-in">
            <van-cell clickable v-if="!SearchBar">
                <van-image
                        v-fb
                        height="32"
                        width="90"
                        :src="this.$store.state.logo"
                />
                <!--头像-->
                <van-icon v-fb slot="right-icon" @click="show_searchbar" name="search" size="28"/>

                <navbar_avatar slot="right-icon"></navbar_avatar>


            </van-cell>

            <searchbar v-else
            ></searchbar>
        </transition>

    </van-sticky>
</template>

<script>
    // todo 打开搜索栏后隐藏改单元格其他元素
    import navbar_avatar from "./avatar";
    import searchbar from "./searchbar";

    export default {
        name: "NavBar",
        data() {
            return {
                show: true
            }
        },
        created() {
        },
        computed: {
            SearchBar() {
                return this.$store.state.app.SearchBar
            }
        },
        components: {navbar_avatar, searchbar},
        methods: {
            show_searchbar() {      // 搜索框是否展示 状态标志存在Vuex中
                this.$store.commit("SEARCHBAR_TRIGGER")
            },

            sc() {
                return {scrollTop: 50, isFixed: false}
            }
        },
        watch: {
            // 到看视频的时候关闭顶部导航
            $route(to, from) {
                this.show = to.name !== "VideoDetail";
            },

        }
    }
</script>

<style scoped>
    i {
        float: right;
        padding-left: 10px;
        padding-right: 10px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>