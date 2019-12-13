<template>
    <!--    todo 轮播图图片大小问题待解决 尺寸自适应问题-->
    <van-swipe :autoplay="3000" :loop="true" indicator-color="hotpink">
        <van-swipe-item v-for="item in images" :key="item.index">
            <div style="position:relative;">
                <van-image
                        style="margin-right: 3px; margin-left: 3px;"
                        radius="5px"
                        lazy-load
                        fit="cover"
                        :src="item"
                />
                <div id="font" style="position:absolute;z-indent:2;left:10%;top:85%;">
                    进击的巨人
                </div>
            </div>

        </van-swipe-item>
    </van-swipe>
</template>

<script>
    export default {
        name: "Swipe",
        components: {},
        data() {
            return {
                current: 0,
                images: [
                    require("@/assets/swipe-image/doctor-x.webp"),
                    require("@/assets/swipe-image/巨人.jpeg"),
                    require("@/assets/swipe-image/JOJO.jpg"),
                    require("@/assets/swipe-image/一拳.jpg"),
                ]
            }
        }, methods: {},
        created() {
            console.log(typeof this.images[1]);
        }
    }
</script>

<style scoped>
    #font {
        color: white;
        font-weight: 900;
    }
</style>