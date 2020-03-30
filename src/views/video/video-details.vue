<template>
    <div>
        <van-card
        >

            <video_cover slot="thumb" :src="this.DetailsPageList.cover"></video_cover>

            <div slot="desc">
                <p>分类：{{this.DetailsPageList.type | typefilter}}</p>
                <p>主演：</p>
                <p>导演：</p>
                <p>状态：</p>
                <p>更新：</p>
            </div>
            <div slot="title">
                <h2>{{this.DetailsPageList.title}}</h2>
            </div>

        </van-card>

        <van-collapse v-model="activeNames">
            <van-collapse-item title="剧情介绍" name="1">{{this.DetailsPageList.brief}}</van-collapse-item>
        </van-collapse>

        <van-collapse v-model="activeNames">
            <van-collapse-item title="在线观看" name="2">
                <!--剧集格子-->
                <grid :EpisodesList="EpisodesList"></grid>

            </van-collapse-item>
        </van-collapse>


    </div>
</template>

<script>
    import {Cinema} from "../../network/video_api";
    import video_cover from '../../components/common/video/video-cover'
    import grid from './video-grid'

    export default {
        name: "video-details",
        filters: {
            typefilter(list) {
                var ret = list.join(' | ')
                return ret
            }
        },
        data() {
            return {
                activeNames: ['1', '2'],

                // 该视频的id
                id: this.$route.params.id,
                DetailsPageList: {},    //Details 卡片
                EpisodesList: [],
            }
        },
        mounted() {
            // console.log(this.id);
            this.GetVideoCardInfo()
            this.GetEpisodesList()
        },
        components: {
            video_cover, grid
        },
        methods: {

            // 获取视频详细数据
            GetVideoCardInfo() {
                Cinema.GetVideoDetail(this.id).then(r => {
                    console.log(r);
                    this.DetailsPageList = r.data;
                })
            },

            // 获取剧集信息 填充格子
            GetEpisodesList() {
                Cinema.EpisodesList(this.id).then(r => {
                    console.log(r);
                    this.EpisodesList = r.data;
                })
            }
        },
        computed: {}
    }
</script>

<style scoped>

</style>