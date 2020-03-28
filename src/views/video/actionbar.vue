<template>
    <!--    添加骨架屏-->
    <van-skeleton
            title
            avatar
            :row="10"
            :loading="loading">

        <div>
            <!--        Title-->
            <van-cell :border="false" :center="true" :title="this.VideoTitle" :label="this.plays">
            </van-cell>
            <!--        按赞栏-->
            <rewards></rewards>
            <!--        Author栏-->
            <van-cell
                    :title="this.$store.state.app.VideoData.author.nickname"
                    :label="Subscriptions + ' 位订阅者'"
                    :center="true"
            >
                <author_avatar
                        :src="this.$store.state.app.VideoData.author.avatar"
                        style="margin-top: 5px;"
                        slot="icon">
                </author_avatar>
            </van-cell>

            <!--        视频简介栏-->
<!--            <brief></brief>-->

            <!--        视频推荐（接下来播放）-->
            <autovideo></autovideo>
        </div>
    </van-skeleton>

</template>

<script>
    import author_avatar from "../../components/common/video/author_avatar";
    import rewards from "./rewards";
    import brief from "./brief";
    import autovideo from "./autovideo";

    export default {
        name: "actionbar",
        data() {
            return {
                activeNames: ['2'],
                loading: true,
            };
        },
        components: {
            author_avatar,
            rewards,
            brief,
            autovideo
        },
        computed: {
            // 播放量
            plays: function () {
                return (this.$store.state.app.VideoData.view_count / 10000).toFixed(1) + "万" + " " + "播放"
            },

            // Title
            VideoTitle: function () {
                return this.$store.state.app.VideoData.title
            },

            // 订阅数
            Subscriptions() {
                return this.$store.state.app.VideoData.author.id
            }


        },
        mounted() {
            // 骨架屏
            setTimeout(() => {
                this.loading = false
            }, 1)


        },
        methods: {
            /**
             * @return {string}
             */
            VCount(val) {
                // return (val / 10000).toFixed(1) + "万"

            },


        }
    }
</script>

<style scoped>
</style>