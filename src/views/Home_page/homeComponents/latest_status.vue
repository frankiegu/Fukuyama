<template>
    <div>
        <van-row type="flex" justify="center">
            <van-col>
                <van-tag round type="primary">最新动态</van-tag>
            </van-col>
        </van-row>

        <van-grid :column-num="2">
            <van-grid-item
                    v-for="(item, index) in images" :key="index"
            >
                <van-image fit="contain" :src="item"/>
            </van-grid-item>
        </van-grid>
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
                    require("../../../assets/braces-img/out-smile.jpg"),
                    require("../../../assets/braces-img/out-sitting.jpg"),
                    require("../../../assets/braces-img/out-sitting.jpg"),
                    require("../../../assets/braces-img/out-sitting.jpg"),
                    require("../../../assets/braces-img/out-sitting.jpg"),
                    require("../../../assets/braces-img/out-sitting.jpg"),
                    require("../../../assets/braces-img/out-sitting.jpg"),
                    require("../../../assets/braces-img/out-sitting.jpg"),
                ],
            }
        }

    }
</script>

<style scoped>

</style>