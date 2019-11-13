<template>

    <div id="app">
        <!--        顶部导航栏-->
        <NavBar v-if="this.$route.path !== '/account'"></NavBar>

        <!--        大View 主要有3个视图 home fire mine -->
        <!--        另还有 account login register-->
        <transition name="fade" mode="out-in">
            <!--            这里使用了过渡路由 使路由效果过渡自然-->
            <router-view style="padding-bottom: 50px;"></router-view>
        </transition>

        <!--        tabbar 底部导航栏-->
        <tabbar v-if="this.$route.path !== '/account'"></tabbar>
    </div>
</template>

<script>
    import tabbar from 'components/common/tabbar/B_Tabbar'
    import NavBar from "components/common/NavBar/NavBar";

    export default {
        name: "app",
        components: {
            tabbar,
            NavBar
        },
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>