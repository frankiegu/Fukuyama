<template>
    <div>
        <!--        轮播图-->
        <swipe></swipe>
        <!--        推荐宫格-->
        <!--        <recommendbar></recommendbar>-->
        <!--        贴照片-->
        <statusbar></statusbar>
    </div>
</template>

<script>
    import swipe from 'views/Home_page/homeComponents/Swipe'
    import recommendbar from 'views/Home_page/homeComponents/Recommendbar'
    import statusbar from 'views/Home_page/homeComponents/latest_status'

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
            swipe
            , recommendbar
            , statusbar
        }
    }
</script>

<style scoped>
    /*div{*/
    /*    height: 300px;*/
    /*    background-color: red;*/
    /*}*/
</style>