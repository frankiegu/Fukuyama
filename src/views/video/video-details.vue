<template>
    <div>
        <van-card
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
            <div slot="desc">
                <p>分类：日本动漫 2013</p>
                <p>主演：</p>
                <p>导演：</p>
                <p>状态：</p>
                <p>更新：</p>
            </div>
            <div slot="title">
                <h2>进击的巨人</h2>
            </div>

        </van-card>

        <van-collapse v-model="activeNames">
            <van-collapse-item title="剧情介绍" name="1">内容</van-collapse-item>
        </van-collapse>

        <van-collapse v-model="activeNames">
            <van-collapse-item title="在线观看" name="2">

                <van-grid
                            :border="false" :column-num="7">
                    <van-grid-item
                            v-for="value in 20"
                            :key="value"
                    >
                        <van-button slot="default" type="default">11</van-button>
                    </van-grid-item>
                </van-grid>
            </van-collapse-item>
        </van-collapse>


    </div>
</template>

<script>
    export default {
        name: "video-details",
        data() {
            return {
                activeNames: ['1']
            }
        }
    }
</script>

<style scoped>

</style>