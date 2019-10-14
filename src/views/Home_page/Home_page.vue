<template>
    <div>
        <!--    导航栏-->
        <NavBar></NavBar>
        <swipe></swipe>
        <recommendbar></recommendbar>
        <statusbar></statusbar>
        <h1>11</h1>
    </div>
</template>

<script>
    import NavBar from "components/common/NavBar/NavBar";
    import swipe from 'views/Home_page/homeComponents/Swipe'
    import recommendbar from 'views/Home_page/homeComponents/Recommendbar'
    import statusbar from 'views/Home_page/homeComponents/latest_status'

    export default {
        name: "Home_page",
        components: {
            NavBar,
            swipe
            , recommendbar
            , statusbar
        }
    }
</script>

<style scoped>

</style>