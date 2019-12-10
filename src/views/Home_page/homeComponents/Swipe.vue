<template>
    <van-swipe :autoplay="1000" :loop="true">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <van-image
                    lazy-load
                    height="200"
                    fit="contain"
                    :src="image"
            />
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    export default {
        name: "Swipe",
        components: {},
        data() {
            return {
                images: [
                    require("@/assets/braces-img/indoor1.jpg"),
                    require("@/assets/braces-img/indoor-special1.jpg"),
                    require("@/assets/braces-img/indoor2.jpg"),
                    require("@/assets/braces-img/indoor3.jpg"),
                ]
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    img {
    }
</style>