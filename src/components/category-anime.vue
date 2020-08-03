<template>
    <div>
        <van-grid :border="false" :column-num="3">
            <van-grid-item
                    v-for="value in anime_video_list"
                    :key="value.id"
                    :text="value.title"
                    :to="video_url(value.id)"
            >
                <video_cover slot="icon" :src="value.cover"></video_cover>
            </van-grid-item>
        </van-grid>

    </div>
</template>

<script>
    import {Cinema} from "../network/video_api";
    import video_cover from './common/video/video-cover'


    export default {
        name: "category-anime",
        props: ['content', 'sort'],
        data() {
            return {
                anime_video_list: [],
                currentPage: 1,

                ahot: 'api/ranking?category=日本动漫&sort=hot',
                atime: 'api/ranking?category=日本动漫&sort=time',
                cc: 'api/ranking?category=日剧',
                hot: 'api/recommend'    //首页热门推荐

            }
        },

        mounted() {

            switch (this.content) {
                // 日剧
                case 'JapaneseTV':
                    console.log(this.content);
                    Cinema.GetAnimeList(this.cc).then(r => {
                        this.anime_video_list = r.data
                    })
                    break;
                // 动漫
                case'anime':
                    console.log(this.content);
                    Cinema.GetAnimeList(this.ahot).then(r => {
                        this.anime_video_list = r.data
                    })
                    break;

                // 热门推荐
                case'hot':
                    console.log(this.content);
                    Cinema.GetAnimeList(this.hot).then(r => {
                        this.anime_video_list = r.data
                    })
                    break;
            }

        },
        methods: {
            // 拼接完整前端videoID -- URL
            video_url(id) {
                return '/details/' + id
            },

        },
        watch: {
            // 监听根据什么排序
            sort: function (val, oldVal) {
                console.log(val, oldVal, this.sort)
                this.anime_video_list.reverse()
                if (val === 'time') {


                }
            }
        },
        components: {video_cover},

    }
</script>

<style scoped>

</style>