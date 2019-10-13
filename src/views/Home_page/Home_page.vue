<template>
    <div>
        <!--    导航栏-->
        <NavBar></NavBar>
        <swipe></swipe>
        <recommendbar></recommendbar>
        <h1>我是首页</h1>
    </div>
</template>

<script>
    import NavBar from "components/common/NavBar/NavBar";
    import swipe from 'views/Home_page/homeComponents/Swipe'
    import recommendbar from 'views/Home_page/homeComponents/Recommendbar'

    export default {
        name: "Home_page",
        components: {
            NavBar,
            swipe
            , recommendbar
        }
    }
</script>

<style scoped>

</style>