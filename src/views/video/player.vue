<template>
    <div id="playercontainer">
        <div id="dplayer"></div>
    </div>
</template>

<script>
    import 'dplayer/dist/DPlayer.min.css';
    import DPlayer from 'dplayer';
    import {Cinema} from "../../network/video_api";

    export default {
        data() {
            return {
                VideoId: "",
                PlayerData: null,
            }
        },
        props:[],
        methods: {
            // 返回一个播放器实例
        },

        mounted() {
            // api 请求视频详情
            Cinema.PlayerInitialize(this.$route.params).then(m => {
                // 将返回的数据存入变量
                this.PlayerData = m.data;

                new DPlayer({
                    container: document.getElementById('dplayer'),
                    theme: "hotpink",   // 主题色
                    method: 'get',
                    video: {
                        url: this.PlayerData.url,
                        pic: this.PlayerData.cover// 封面
                        // thumbnails: this.$store.state.video.pic,   // 缩略图
                    },
                })

            })


        },


    }
</script>
<style scoped>
    /*播放器大小设置*/
    #playercontainer {
        /*margin-top: 1em;*/
        /*height: 35vh;*/
    }
</style>

