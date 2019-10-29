<!--总的一个Cell-->
<template>
    <div>
        <van-cell title="历史观看" icon="clock"/>
        <van-cell title="收藏视频" icon="star"/>
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