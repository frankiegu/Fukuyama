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
        props: ['sort'],
        data() {
            return {
                anime_video_list: [1, 34, 1241, 'o', 412, 41, 21412],
                currentPage: 1,

            }
        },

        mounted() {
            // 获取动漫列表 by hot or time
            Cinema.GetAnimeList(this.sort).then(res => {
                console.log(res);
                this.anime_video_list = res.data;
            })
        },
        methods: {
            // 拼接完整前端videoID -- URL
            video_url(id) {
                return '/details/' + id
            },

        },
        watch: {
            // 监听根据什么排序
            sort: {
                handler(newValue, oldValue) {
                    Cinema.GetAnimeList(this.sort).then(res => {
                        console.log(res);
                        this.anime_video_list = res.data;
                    })
                }
            }
        },
        components: {video_cover},

    }
</script>

<style scoped>

</style>