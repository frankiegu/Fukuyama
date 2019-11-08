<template>
    <div id="app">
        <NavBar  v-if="this.$route.path !== '/account'"></NavBar>
        <!--        这里封装了 页面和 底边 tabbar-->
        <!--        封装了四个大 View-->
        <router-view style="padding-bottom: 50px;"></router-view>

        <!--        tabbar-->
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

</style>