<template>
    <div>
        <div id="dplayer"></div>
    </div>
</template>

<script>
    import 'dplayer/dist/DPlayer.min.css';
    import DPlayer from 'dplayer';

    export default {
        data() {
            return {}
        },
        mounted() {
            const dp = new DPlayer({
                container: document.getElementById('dplayer'),
                screenshot: true,
                method: 'get',
                video: {
                    // url: "http://localhost:8080/static/ttt.avi",
                    // url: require("/static/周杰伦 - 东风破.flac"),
                    pic: require("assets/logo.png"),
                    thumbnails: require("assets/logo.png"),
                },
                subtitle: {
                    url: 'webvtt.vtt',
                },
                danmaku: {
                    id: 'demo',
                    api: 'https://api.prprpr.me/dplayer/',
                },
            });
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>

<style scoped>

</style>