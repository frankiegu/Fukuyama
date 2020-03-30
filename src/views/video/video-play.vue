<template>

    <div>
        <van-notice-bar :scrollable="false" background="black">
            {{this.VideoInfo.title+' - '+this.VideoInfo.episode_num}}
        </van-notice-bar>
        <player></player>

        <!--        视频标题 + 订阅栏 + 视频简介 -->
        <info :video-info="VideoInfo"></info>

    </div>

</template>

<script>
    import player from "./player";
    import info from "./video-play-playinfo";
    import {Cinema} from "../../network/video_api";

    export default {
        components: {
            player,
            info,
        },
        watch: {
            // 解决同一路由下参数不同不刷新问题
            '$route': function (to, from) {
                // 拿到目标参数 to.query.id 去再次请求数据接口
                this.$router.go(0)
            }
        },

        computed: {},
        data() {
            return {
                VideoInfo: null,
                id: this.$route.params.id,
                episode: this.$route.params.episode,
            }
        },
        mounted() {
            // 当前观看视频标题等信息
            Cinema.CurrentEpisodeInfo(this.episode).then(r => {
                console.log(r);
                this.VideoInfo = r.data
            })
        }

    }
</script>

<style scoped>

</style>