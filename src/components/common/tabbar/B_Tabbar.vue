<template>
    <div style="padding-top: 10rem;">
        <van-tabbar
                active-color="hotpink"
                :border="true"
                :fixed="true"
                route>

            <van-tabbar-item
                    replace
                    to="/home"
                    icon="wap-home"
            >
                首页
            </van-tabbar-item>
            <van-tabbar-item
                    replace
                    to="/popular/TV"
                    icon="fire"
            >
                时下流行
            </van-tabbar-item>

            <van-tabbar-item
                    replace
                    to="/account/func"
                    icon="envelop-o"
            >
                收件箱
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