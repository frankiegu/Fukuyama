<template>

    <van-tabbar active-color="#FF0000" :fixed="true" :border="true" :route="true">

        <van-tabbar-item
                replace
                to="/home"
                icon="wap-home"
        >
            首页
        </van-tabbar-item>
        <van-tabbar-item
                replace
                to="/popular"
                icon="fire"
        >
            时下流行
        </van-tabbar-item>
        <van-tabbar-item
                push
                to="/mine"
                icon="video"
        >
            媒体库
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        name: "B_Tabbar",
        data() {
            return {
                active: 0,
            }
        },
    }
</script>

<style scoped>

</style>