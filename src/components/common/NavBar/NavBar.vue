<template>
    <van-sticky>
        <van-cell clickable v-show="SearchBar">
            <van-image
                    v-fb
                    height="32"
                    width="90"
                    :src="this.$store.state.logo"
            />
            <!--头像-->
            <van-icon v-fb slot="right-icon" @click="showPopup" name="search" size="28"/>

            <navbar_avatar slot="right-icon"></navbar_avatar>


        </van-cell>


        <van-popup
                v-model="show"
                position="top"
                :style="{ height: '100px' }"
        >
            <searchbar></searchbar>

        </van-popup>


        <!-- 图标位置 -->

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
                show: false,
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
                if (to.name === "VideoDetail") {
                    this.show_searchbar(false)
                }else {
                    this.show_searchbar(true)
                }
            },

        }
    }
</script>

<style scoped>
    i {
        float: right;
        padding-left: 10px;
        padding-right: 10px;
        /*background-color: chartreuse;*/
    }


</style>