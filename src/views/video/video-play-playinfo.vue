<template>
    <van-panel :title="this.Info.title" :desc="this.Info.type |typefilter" status="完结">
        <grid :EpisodesList="EpisodesList"></grid>

    </van-panel>


</template>

<script>
    import grid from './video-grid'
    import {Cinema} from "../../network/video_api";

    export default {
        name: "autovideo",
        filters: {
            typefilter(list) {
                var ret = list.join(' / ')
                return ret
            }
        },
        mounted() {
            // 获取剧集信息 填充格子
            Cinema.EpisodesList(this.id).then(r => {
                console.log(r);
                this.EpisodesList = r.data;
            })

            // 当前观看视频标题等信息
            Cinema.CurrentEpisodeInfo(this.episode).then(r => {
                console.log(r);
                this.Info = r.data
            })
        },
        methods: {},
        data() {
            return {
                activeNames: ['1'],
                id: this.$route.params.id,
                episode: this.$route.params.episode,
                EpisodesList: [],
                Info: null,
            }
        },
        components: {grid}
    }
</script>

<style scoped>

</style>