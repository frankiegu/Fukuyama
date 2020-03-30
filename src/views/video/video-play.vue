<template>

    <div>

        <Player></Player>

        <!--        视频标题 + 订阅栏 + 视频简介 -->
        <info></info>

    </div>

</template>

<script>
    import Player from 'components/common/vedioPlugin/Vedio_player'
    import info from "./video-play-playinfo";
    import {Cinema} from "../../network/video_api";

    export default {
        name: "cart",
        components: {
            Player,
            info,
        },

        computed: {},
        data() {
            return {
                VideoInfo: null,

            }
        },
        mounted() {
            //把当前观看的的视频详细信息都放在store统一管理

            // this.$store.commit("SET_videohall",)

        }

    }
</script>

<style scoped>

</style>