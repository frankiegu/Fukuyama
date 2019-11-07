<template>
    <div>
        <van-row type="flex" justify="center">
            <van-col>
                <van-tag round type="primary">最新动态</van-tag>
            </van-col>
        </van-row>

        <van-grid :column-num="1">
            <van-grid-item
                    v-for="(item, index) in images" :key="index"
            >
                <van-image fit="contain" :src="item"/>
            </van-grid-item>
        </van-grid>
        <h1>你好你好你好</h1>
    </div>
</template>

<script>
    export default {
        name: "latest_status",
        props: [],
        data() {
            return {
                images: [

                    require("../../../assets/braces-img/indoor3.jpg"),
                    require("../../../assets/braces-img/indoor1.jpg"),
                ],
            }
        }

    }
</script>

<style scoped>

</style>