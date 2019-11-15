<template>
    <div id="playercontainer">
        <div id="dplayer"></div>
    </div>
</template>

<script>
    import 'dplayer/dist/DPlayer.min.css';
    import DPlayer from 'dplayer';
    import flvjs from 'flv.js';
    import {request} from "../../../network/request";

    export default {
        data() {
            return {
                id: this.$route.params.id,  // url ID值
            }
        },
        methods: {
            // 返回一个播放器实例
            flvdp() {
                return new DPlayer({
                    container: document.getElementById('dplayer'),
                    theme: "#ff0000",   // 主题色
                    screenshot: true,   // 截屏
                    method: 'get',
                    video: {
                        url: this.$store.state.video.url,
                        // url: require("/static/周杰伦 - 东风破.flac"),
                        pic: this.$store.state.video.pic,           // 封面
                        thumbnails: this.$store.state.video.pic,   // 缩略图
                        type: "customFlv",  // 自定义 MSE 扩展 多媒体文件扩展 如 Flv HLS MPEG DASH 等不同格式的媒体文件 H5默认只支持 MP4
                        customType:
                            {
                                customFlv: function (video, player) {
                                    const flvPlayer = flvjs.createPlayer({
                                        type: 'flv',
                                        url: video.src,
                                    });
                                    flvPlayer.attachMediaElement(video);
                                    flvPlayer.load();
                                },
                            }

                    },
                })

            },
            mp4dp() {
                return new DPlayer({
                    container: document.getElementById('dplayer'),
                    theme: "#ff0000",   // 主题色
                    screenshot: true,   // 截屏
                    method: 'get',
                    video: {
                        url: this.$store.state.video.url,
                        // url: require("/static/周杰伦 - 东风破.flac"),
                        pic: this.$store.state.video.pic,           // 封面
                        thumbnails: this.$store.state.video.pic,   // 缩略图
                    },
                })
            }
        },
        mounted() {
            console.log("视频ID:" + this.id);

            request({       // axios异步加载数据
                method: 'get',
                url: '/api/video/' + this.id,
            }).then(res => {
                    let url = res.data.url;
                    let pic = res.data.cover;
                    // 调用Vuex方法将video数据全局保存在state里
                    this.$store.commit('loadvideodetail', {url, pic});

                    let dp = this.mp4dp()
                }
            )

        },


    }
</script>
<style scoped>
    /*播放器大小设置*/
    #dplayer {
        height: 35vh;

    }
</style>

