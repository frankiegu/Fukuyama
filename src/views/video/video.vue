<template>

    <div>
        <Player></Player>

        <!--        视频标题 + 订阅栏 + 视频简介 -->
        <actionbar></actionbar>

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
        data() {
            return {
            }
        },

    }
</script>

<style scoped>

</style>