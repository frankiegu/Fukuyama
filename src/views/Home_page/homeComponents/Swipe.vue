<template>
    <van-swipe :autoplay="1000" :loop="true">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <van-image
                    lazy-load
                    width="100%"
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
                    require("../../../assets/logo.png"),
                    require("../../../assets/icon1.png"),
                    // 'https://img.yzcdn.cn/vant/apple-1.jpg',
                    // 'https://img.yzcdn.cn/vant/apple-2.jpg'
                ]
            }
        },
        created() {
            console.log(require("assets/logo.png"));
            console.log(this.images);
        }
    }
</script>

<style scoped>
    img {
    }
</style>