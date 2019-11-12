<template>
    <div id="playercontainer">
        <div id="dplayer"></div>
    </div>
</template>

<script>
    import 'dplayer/dist/DPlayer.min.css';
    import DPlayer from 'dplayer';
    import {request} from "../../../network/request";

    export default {
        data() {
            return {
                id: this.$route.params.id,
                video_obj: null,
            }
        },
        mounted() {

            console.log("视频ID:" + this.id);
            request({
                method: 'get',
                url: '/api/video/' + this.id,
            }).then(res => {
                // 将数据赋值到↓
                this.video_obj = res.data

                // 获取视频地址和封面后实例化视频播放器
                const dp = new DPlayer({
                    container: document.getElementById('dplayer'),
                    theme: "#ff0000",
                    screenshot: true,
                    method: 'get',
                    video: {
                        url: this.video_obj.url,
                        // url: require("/static/周杰伦 - 东风破.flac"),
                        pic: this.video_obj.cover,
                        thumbnails: this.video_obj.cover
                    },
                });
            })

        },
        computed: {},
        components: {},
        methods: {}
    }
</script>
<style scoped>
    /*播放器大小设置*/
    #dplayer {
        height: 35vh;

    }
</style>
