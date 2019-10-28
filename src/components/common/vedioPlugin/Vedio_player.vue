<template>
    <div id="dplayer"></div>
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
                    url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
                    // url: "http://localhost:8000/api/auth/video",
                    pic: require("../../../assets/logo.png"),
                    thumbnails: require("../../../assets/logo.png"),
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