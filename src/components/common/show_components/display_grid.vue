<template>
    <div>
        <van-grid :column-num="2">
            <van-grid-item v-for="value in imageList"
                           :key="value"
                           @click="pathto">
                <van-image :src="value"/>

                <van-row style="">
                    <van-col span="24" style="margin-top: 5px;font-weight:lighter; font-size: 14px; color: hotpink">
                        <van-icon name="video"/>
                        1.8W

                        <van-icon name="comment"/>
                        55
                    </van-col>

                    <van-col span="24" style="font-size: 14px">我是标题 - - -</van-col>

                </van-row>

            </van-grid-item>


        </van-grid>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                imageList: [
                    require("assets/braces-img/indoor1.jpg"),
                ],

            }
        },
        methods: {
            pathto() {
                this.$router.push("/cart")
            }
        },
        components: {},

    }
</script>

<style scoped>

</style>