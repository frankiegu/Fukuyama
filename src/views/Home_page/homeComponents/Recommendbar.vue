<template>
    <div>
        <van-grid :border="false" icon-size="50">
            <van-grid-item v-for="(item, index) in images" :key="index" :icon="item"  text="文字">
<!--                <van-image-->
<!--                        fit="contain"-->
<!--                        lazy-load-->
<!--                        text="文字"-->
<!--                        :src="item"/>-->
                <!--            <p>111</p>-->
            </van-grid-item>

        </van-grid>


<!--        <van-row type="flex" justify="space-between">-->
<!--            <van-col span="6" v-for="(item, index) in 4" :key="index">-->
<!--                <p style="text-align: center; margin: 0;">111</p>-->
<!--            </van-col>-->
<!--        </van-row>-->
    </div>
</template>

<script>
    export default {
        name: "Recommendbar",
        data() {
            return {
                images: [
                    require("../../../assets/icon1.png"),
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                    , require("../../../assets/logo.png"),
                ]
            }
        }
    }
</script>

<style scoped>

</style>