<template>
    <div>
        <van-row type="flex" justify="center">
            <van-col>
                <van-tag round type="primary">照片墙</van-tag>
            </van-col>
        </van-row>

        <van-grid :border="false" icon-size="50">
            <van-grid-item v-for="(item, index) in images" :key="index" :icon="item" text="braces">
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
                    require("../../../assets/braces-img/out-smile.jpg"),
                    require("../../../assets/braces-img/out-sitting.jpg"),
                    require("../../../assets/braces-img/indoor3.jpg"),
                    require("../../../assets/braces-img/indoor1.jpg"),
                ],
                images2: [
                    require("../../../assets/braces-img/out-sitting.jpg")

                ]
            }
        }
    }
</script>

<style scoped>

</style>