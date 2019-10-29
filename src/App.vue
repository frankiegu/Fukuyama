<template>
    <div id="app">
        <NavBar></NavBar>
        <!--        这里封装了 页面和 底边 tabbar-->
        <!--        封装了四个大 View-->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <!--        tabbar-->
        <tabbar></tabbar>
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
    /*#app{*/
    /*    background-image: url("assets/Bing黄毛果蝠.jpg");*/
    /*}*/
</style>