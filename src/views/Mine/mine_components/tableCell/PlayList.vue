<template>
    <div>
        <van-cell title="播放列表" value="" :border="false"/>

        <van-cell-group :border="false">

            <van-cell title="新建播放列表" :border="false" :center="true"
                      title-style="color: #055ed3; margin-left: 10px ">
                <van-icon size="25" name="plus" slot="icon" style="margin-right: 10px; margin-left:10px ;"
                          color="#055ed3"/>
            </van-cell>

            <van-cell title="顶过的视频" :border="false" :center="true" label="8个视频"
                      title-style="margin-left: 10px ">
                <van-icon size="25" name="good-job" slot="icon" style="margin-right: 10px; margin-left: 10px;"
                          color="#8f8f8f"/>
            </van-cell>

            <van-cell title="我是视频列表标题" :border="false" :center="true" label="8个视频"
                      title-style="margin-left: 10px ">
                <van-image
                        style="margin-right: 5px;"
                        slot="icon"
                        width="40"
                        height="40"
                        fit="cover"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </van-cell>

        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "PlayList",
    }
</script>

<style scoped>

</style>