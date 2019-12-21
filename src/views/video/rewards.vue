<template>
    <van-grid icon-size="18" clickable center :border="false" :column-num="2">
        <van-grid-item
                icon="good-job"
                :text="VideoInfo.likenum"
                @click="ClickLike()"
        >
            <van-icon
                    slot="icon" :color="ButtonColor" size="18" name="good-job"/>
        </van-grid-item>

        <!--        示例-->
        <!--        <van-grid :column-num="2">-->
        <!--            <van-grid-item icon="home-o" text="文字" dot />-->
        <!--            <van-grid-item icon="search" text="文字" info="99+" />-->
        <!--        </van-grid>-->

        <van-grid-item
                text="保存"
                icon="add-square"
        >
        </van-grid-item>

    </van-grid>
</template>

<script>

    export default {
        name: "rewards",
        components: {},
        data() {
            return {
                // 拇指颜色
                // GoodJob: this.IsLiked === "liked" ? 'hotpink' : ''
            }
        },
        methods: {
            ClickLike() {
                // 状态为 0 时才能点赞
                if (!this.VideoInfo.is_liked) {     // 点赞异步请求
                    this.$store.dispatch("LikeAction", {video: this.VideoInfo.id})
                }

            }
        },
        computed: {
            /**
             * @return {null}
             * 返回视频详情
             */

            VideoInfo() {
                return this.$store.state.app.VideoData
            },

            /**
             * @return {string}
             */
            ButtonColor() {
                return this.VideoInfo.is_liked ? 'hotpink' : ''
            }
        }
    }
</script>

<style scoped>

</style>