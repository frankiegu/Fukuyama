<template>
    <div>
        <van-card
        >

            <video_cover slot="thumb" :src="this.DetailsPageList.cover"></video_cover>

            <div slot="desc">
                <p>分类：日本动漫 2013</p>
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

                <!--                剧集格子-->
                <van-grid
                        :border="false" :column-num="3">
                    <van-grid-item
                            v-for="value in EpisodesList"
                            :key="value.id"
                            :to="SplicingUrl(value.episode_num)"
                    >
                        <van-button size="small" slot="default" color="hotpink" type="primary">{{value.name}}
                        </van-button>
                    </van-grid-item>
                </van-grid>


            </van-collapse-item>
        </van-collapse>


    </div>
</template>

<script>
    import {Cinema} from "../../network/video_api";
    import video_cover from '../../components/common/video/video-cover'

    export default {
        name: "video-details",
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
            video_cover
        },
        methods: {
            // 给格子拼接url
            SplicingUrl(id) {
                return '/video' + '/' + this.id + '/' + id
            },

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