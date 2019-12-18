<template>

    <div>
        <van-sticky>
            <van-cell style="background-color: #222;" is-link to="/home">
                <p style="color: hotpink" slot="title">放映厅</p>
            </van-cell>
        </van-sticky>

        <!--        播放器-->
        <Player></Player>

        <!--        视频标题 + 订阅栏 + 视频简介 -->
        <actionbar v-if="AAA"></actionbar>

    </div>

</template>

<script>
    import Player from 'components/common/vedioPlugin/Vedio_player'
    import actionbar from "./actionbar";

    export default {
        name: "cart",
        components: {
            Player,
            actionbar
        },
        computed: {
            // 如果有数据才渲染
            AAA() {
                return this.$store.state.app.VideoData
            }
        },
        data() {
            return {
                VideoInfo: null,

            }
        },
        mounted() {

        }

    }
</script>

<style scoped>

</style>