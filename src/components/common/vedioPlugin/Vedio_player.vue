<template>
    <div id="playercontainer">
        <div id="dplayer"></div>
    </div>
</template>

<script>
    import 'dplayer/dist/DPlayer.min.css';
    import DPlayer from 'dplayer';
    import {Cinema} from "../../../network/video_api";

    export default {
        data() {
            return {
                VideoId: "",
                VideoInfo: null,
            }
        },
        methods: {
            // 返回一个播放器实例
        },

        mounted() {

            // api 请求视频详情
            Cinema.GetVideoDetail(this.$route.params.id).then(m => {

                // 将返回的数据分别存入本组件data 和 Vuex app.js module
                this.VideoInfo = m.data;
                this.$store.commit("SET_VIDEODATA", this.VideoInfo);


                new DPlayer({
                    container: document.getElementById('dplayer'),
                    theme: "hotpink",   // 主题色
                    method: 'get',
                    video: {
                        url: this.VideoInfo.url,
                        pic: this.VideoInfo.pic// 封面
                        // thumbnails: this.$store.state.video.pic,   // 缩略图
                    },
                })

            })


        },


    }
</script>
<style scoped>
    /*播放器大小设置*/
    #dplayer {
        height: 35vh;

    }
</style>

