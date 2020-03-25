<template>
    <div>
        <van-cell title="热门推荐" value="今日更新 33 条数据"/>
        <!--        [热门推荐]-->
        <van-grid :border="false" :column-num="3">
            <van-grid-item
                    v-for="value in VList1"
                    :key="value.id"
                    :text="value.title"
            >
                <video_cover slot="icon" :src="value.cover"></video_cover>

            </van-grid-item>
        </van-grid>


        <van-cell title="日漫" value="今日更新 33 条数据"/>
        <!--        日漫-->
        <van-grid :column-num="3">
            <van-grid-item
                    v-for="value in VList2"
                    :key="value"
                    text="视频名"
            >

                <!--通用视频封面-->
                <video_cover slot="icon"
                             :src="value.cover"></video_cover>
            </van-grid-item>
        </van-grid>


    </div>
</template>

<script>
    import video_cover from '../../../components/common/video/video-cover'

    export default {
        name: "HomePageHotRank",
        data() {
            return {
                loading: false,
                finished: false,
                VList1: [],  // [热门推荐] 视频列表
                VList2: [1, 2, 3, 4, 5, 6],  // [日漫] 视频列表
                error: false,
            }
        },


        mounted() {
            // 加载推荐列表
            // console.log(this.Request);
            this.Request()
        },
        components: {
            video_cover
        },

        methods: {

            // 请求推荐列表 -- [热门推荐]
            Request() {
                this.$store.dispatch("Ranking").then(m => {
                    this.VList1 = m.data;
                    console.log(m.data);
                }).catch(e => {
                    console.log(e);
                });

            },


        },


    }
</script>

<style scoped>


</style>