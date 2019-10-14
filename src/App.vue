<template>
    <div id="app">
        <!--        这里封装了 页面和 底边 tabbar-->
<!--        封装了四个大 View-->
        <router-view></router-view>
<!--        tabbar-->
        <tabbar></tabbar>
    </div>
</template>

<script>
    import tabbar from 'components/common/tabbar/B_Tabbar'

    export default {
        name: "app",
        components: {
            tabbar,
        },
    }
</script>

<style scoped>
</style>