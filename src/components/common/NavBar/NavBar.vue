<template>
    <van-sticky>
        <van-cell>
            <van-image
                    height="32"
                    width="90"
                    :src="this.$store.state.logo_addr"
            />
            <!--头像-->
            <navbar_avatar></navbar_avatar>

            <van-icon @click="show_searchbar" name="search" size="28"/>

            <searchbar></searchbar>

        </van-cell>
    </van-sticky>

</template>

<script>
    import navbar_avatar from "./avatar";
    import searchbar from "./searchbar";
    import {Sticky, Cell, Image, Icon} from 'vant';

    export default {
        name: "NavBar",
        data() {
            return {
                isLogin: this.$store.state.isLogin
            }
        },
        created() {
        },

        components: {
            [Sticky.name]: Sticky,
            [Cell.name]: Cell,
            [Icon.name]: Icon,
            [Image.name]:Image,
            navbar_avatar,
            searchbar,

        },
        methods: {
            show_searchbar() {      // 搜索框是否展示 状态标志存在Vuex中
                this.$store.commit('search_trigger');

            }
        },
    }
</script>

<style scoped>
    i {
        float: right;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>