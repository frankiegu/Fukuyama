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
        props: ['content'],
        data() {
            return {
                anime_video_list: [1, 2, 3],
                currentPage: 1,
                a: 'api/ranking?category=日本动漫&sort=hot',
                b: 'api/ranking?category=日本动漫&sort=time',
                cc: 'api/ranking?category=日剧',
                hot: 'api/recommend'    //首页热门推荐

            }
        },

        mounted() {
            // 在首页时
            var r = this.$route.name;
            var c = this.content;

            switch (r) {
                case 'hot':
                    console.log(c);
                    Cinema.GetAnimeList(this.a).then(r => {
                        this.anime_video_list = r.data
                    })
                    break;
                case 'time':
                    console.log(c);
                    Cinema.GetAnimeList(this.b).then(r => {
                        this.anime_video_list = r.data
                    })
                    break;
            }
            switch (c) {
                // 日剧
                case 'JapaneseTV':
                    console.log(c);
                    Cinema.GetAnimeList(this.cc).then(r => {
                        this.anime_video_list = r.data
                    })
                    break;
                // 日漫
                case'anime':
                    console.log(c);
                    Cinema.GetAnimeList(this.a).then(r => {
                        this.anime_video_list = r.data
                    })
                    break;

                // 热门推荐
                case'hot':
                    console.log(c);
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
            '$route': function (to, from) {
                if (to.name === 'hot') {
                    Cinema.GetAnimeList(this.a).then(r => {
                        this.anime_video_list = r.data
                    })
                } else if (to.name === 'time') {
                    Cinema.GetAnimeList(this.b).then(r => {
                        this.anime_video_list = r.data
                    })
                }

            }
        },
        components: {video_cover},

    }
</script>

<style scoped>

</style>