<template>
    <div>
        <van-grid :column-num="3">
            <van-grid-item
                    v-for="value in anime_video_list"
                    :key="value.id"
                    :text="value.title"
                    :to="video_url(value.id)"
            >

                <video_cover slot="icon" :src="value.cover"></video_cover>
            </van-grid-item>
        </van-grid>
        <!--        分页组件-->
        <van-pagination
                v-model="currentPage"
                :total-items="24"
                :items-per-page="5"
        />
    </div>
</template>

<script>
    import {Cinema} from "../../network/video_api";
    import video_cover from '../../components/common/video/video-cover'


    export default {
        name: "category-anime",

        data() {
            return {
                anime_video_list: [1, 34, 1241, 'o', 412, 41, 21412],
                currentPage: 1,

            }
        },

        mounted() {
            // 动漫按热度
            Cinema.GetAnimeListByHot().then(res => {
                console.log(res);
                this.anime_video_list = res.data;
            })
        },
        methods: {
            // 拼接完整前端videoID -- URL
            video_url(id) {
                return "/video/" + id
            },

        },
        components: {video_cover},

    }
</script>

<style scoped>

</style>