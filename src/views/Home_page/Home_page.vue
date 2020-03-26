<template>
    <div>

        <!--        轮播图-->
        <Swipe></Swipe>
        <!--        推荐宫格-->
        <Recommendbar></Recommendbar>

        <HomeRecommendationList></HomeRecommendationList>

    </div>
</template>

<script>
    import Swipe from "./homeComponents/Swipe";
    import Recommendbar from "./homeComponents/Recommendbar";
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