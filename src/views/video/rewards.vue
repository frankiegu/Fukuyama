<template>
    <van-grid icon-size="18" clickable center :border="false" :column-num="2">
        <van-grid-item
                icon="good-job"
                :text="VideoInfo.like"
                @click="ClickLike()"
        >
            <van-icon slot="icon" :color="GoodJob" size="18" name="good-job"/>
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
                GoodJob: ""
            }
        },
        methods: {
            ClickLike() {
                if (!this.GoodJob) {
                    this.GoodJob = "hotpink"
                } else {
                    this.GoodJob = ""
                }
            }
        },
        computed: {
            /**
             * @return {null}
             */
            VideoInfo() {
                return this.$store.state.app.VideoData
            }
        }
    }
</script>

<style scoped>

</style>