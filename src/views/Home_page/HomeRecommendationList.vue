<template>
    <div>
        <van-cell title="热门推荐" value="今日更新 33 条数据"/>


        <category_anime></category_anime>

        <van-cell title="日漫" value="今日更新 33 条数据"/>
        <category_anime></category_anime>

    </div>
</template>

<script>
    import video_cover from '../../components/common/video/video-cover'
    import category_anime from '../../components/category-anime'

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
            video_cover,
            category_anime
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
            // 拼接完整前端videoID -- URL
            video_url(id) {
                return "/video/" + id
            }


        },


    }
</script>

<style scoped>


</style>