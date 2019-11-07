<!--总的一个Cell-->
<template>
    <div>
        <van-cell title="历史观看" icon="clock-o" :border="false"/>
        <van-cell title="我的视频" icon="video-o" :border="false"/>
        <van-cell title="稍后观看"  label="8个视频" icon="underway" :border="false"/>
    </div>
</template>

<script>
    export default {
        name: "TableCell",
        data() {
            return {
                imageList: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ]
            };
        }
    }
</script>

<style scoped>

</style>