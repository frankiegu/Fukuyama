<template>
    <div>
        <van-tabbar route>
            <van-tabbar-item
                    replace
                    to="/home"
                    icon="wap-home"
            >
                首页
            </van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/category"
                    icon="bars"
            >
                分类
            </van-tabbar-item>
            <van-tabbar-item
                    push
                    to="/mine"
                    icon="video"
            >
                媒体库
            </van-tabbar-item>
        </van-tabbar>
    </div>
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