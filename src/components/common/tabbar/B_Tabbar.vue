<template>

    <van-tabbar
            active-color="hotpink"
            :fixed="true" :border="true"
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
                to="/popular"
                icon="fire"
        >
            时下流行
        </van-tabbar-item>

        <van-tabbar-item
                replace
                to="/account"
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
</template>

<script>
    import {Tabbar, TabbarItem} from 'vant';

    export default {
        name: "B_Tabbar",
        data() {
            return {
                active: 0,
            }
        },
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
        }
    }
</script>

<style scoped>

</style>