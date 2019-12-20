<template>
    <div>
        <!--        轮播图-->
        <Swipe></Swipe>
        <!--        推荐宫格-->
        <Recommendbar></Recommendbar>
        <!--        贴照片-->
        <!--        <statusbar></statusbar>-->
        <!--        <van-notice-bar-->
        <!--                color="#1989fa"-->
        <!--                background="#ecf9ff"-->
        <!--                left-icon="info-o"-->
        <!--        >-->
        <!--            第一版 很多内容没有填充 更多新内容敬请期待 :-) By - Bwijn-->
        <!--        </van-notice-bar>-->
        <h3>热门推荐</h3>
        <HomeRecommendationList></HomeRecommendationList>
        <van-button type="primary">主要按钮</van-button>
    </div>
</template>

<script>
    import Swipe from "./homeComponents/Swipe";
    import Recommendbar from "./homeComponents/Recommendbar";
    import statusbar from 'views/Home_page/homeComponents/latest_status'
    import HomeRecommendationList from "./homeComponents/HomeRecommendationList";
    import Vedio_player from "../../components/common/vedioPlugin/Vedio_player";

    export default {
        name: "Home_page",
        methods: {},

        components: {
            // 注册组件 组件标签名: => 组件名
            Swipe
            , Recommendbar
            , statusbar, HomeRecommendationList, Vedio_player
        }
    }
</script>

<style scoped>
    h3 {
        margin-left: 5%;
    }

    /*div{*/
    /*    height: 300px;*/
    /*    background-color: red;*/
    /*}*/
</style>