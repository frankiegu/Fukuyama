<!--总的一个Cell-->
<template>
    <div>
<!--        <van-panel title="最近" status="">-->
<!--            <van-grid :border="false" :column-num="1" gutter="30">-->
<!--                <van-grid-item>-->
<!--                    <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" height="80%" width="80%"/>-->
<!--                </van-grid-item>-->
<!--                <van-grid-item>-->
<!--                    <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg"/>-->
<!--                </van-grid-item>-->
<!--                <van-grid-item>-->
<!--                    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg"/>-->
<!--                </van-grid-item>-->
<!--            </van-grid>-->
<!--        </van-panel>-->

        <van-cell title="历史观看" icon="clock"/>
        <van-cell title="收藏视频" icon="star"/>
        <!--        <van-cell title="单元格" icon="location-o" />-->
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