<template>
    <div>

        <!--        轮播图-->
        <Swipe style="margin-bottom: 1em;margin-top: 1em;"></Swipe>

        <HomeRecommendationList></HomeRecommendationList>

    </div>
</template>

<script>
    import Swipe from "./Swipe";
    import HomeRecommendationList from "./homepage-category";

    export default {
        name: "Home_page",
        methods: {},

        components: {
            // 注册组件 组件标签名: => 组件名
            Swipe
            , statusbar, HomeRecommendationList
        }
    }
</script>

<style scoped>

</style>