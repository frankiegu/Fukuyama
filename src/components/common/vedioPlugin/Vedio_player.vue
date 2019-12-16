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
                VideoId: ""
            }
        },
        methods: {
            // 返回一个播放器实例
        },

        mounted() {
            console.log(this.VideoId = this.$route.params.id);
            new DPlayer({
                container: document.getElementById('dplayer'),
                theme: "hotpink",   // 主题色
                method: 'get',
                video: {
                    url: "http://61.151.170.87/vmtt.tc.qq.com/1098_fba38434c444d4abcfd1ea7ca7435704.f0.mp4?vkey=03985C6295747F0D798ED478058F621DB49B37561FA64962DE1F33A4B41F4B20B304E6796B8A7FCBA471B1268CAC2E97AB399F4BD27230FC0FB73F22DDA03585B022125A4C81FE65015B112A9097F7399585CBF4EBD87E83",
                    pic: require("assets/Logo_YouTuba-100-480x250px.png")// 封面
                    // thumbnails: this.$store.state.video.pic,   // 缩略图
                },
            })


        }

    }
</script>
<style scoped>
    /*播放器大小设置*/
    #dplayer {
        height: 35vh;

    }
</style>

