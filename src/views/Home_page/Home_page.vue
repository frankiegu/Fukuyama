<template>
    <div>
        <!--        轮播图-->
        <!--        <swipe></swipe>-->
        <!--        推荐宫格-->
        <!--        <recommendbar></recommendbar>-->
        <!--        贴照片-->
        <!--        <statusbar></statusbar>-->
        <van-notice-bar
                color="#1989fa"
                background="#ecf9ff"
                left-icon="info-o"
        >
            第一版 很多内容没有填充 更多新内容敬请期待 :-) By - Bwijn
        </van-notice-bar>
    </div>
</template>

<script>
    import swipe from 'views/Home_page/homeComponents/Swipe'
    import recommendbar from 'views/Home_page/homeComponents/Recommendbar'
    import statusbar from 'views/Home_page/homeComponents/latest_status'
    import {NoticeBar} from 'vant';

    export default {
        name: "Home_page",
        data() {
            return {
                list: [],
                loading: false,
                finished: false
            };
        },
        methods: {},
        components: {
            // 注册组件 组件标签名: => 组件名
            [NoticeBar.name]: NoticeBar

            , swipe
            , recommendbar
            , statusbar,
        }
    }
</script>

<style scoped>
    /*div{*/
    /*    height: 300px;*/
    /*    background-color: red;*/
    /*}*/
</style>