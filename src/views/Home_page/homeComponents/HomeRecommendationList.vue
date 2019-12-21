<template>
    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :error.sync="error"
            error-text="请求失败，点击重新加载"
    >


        <van-grid :border="false" :column-num="2">
            <van-grid-item
                    v-for="value in ListVuex"
                    :key="value.id"
                    text="文字"
                    :to="UUU(value.id)"
            >

                <!--视频封面 + 视频播放量-->
                <div slot="icon" style="position:relative;">
                    <van-image
                            height="7rem"
                            radius="7"
                            :src="value.cover" slot="icon"
                    />
                    <div id="font">
                        <van-icon size=".9rem" name="play-circle-o"/>
                        <span style="margin-left: 5px;margin-right: 5px;">{{VCount(value.view_count) }}</span>
                    </div>
                </div>

                <!--            视频标题-->
                <div id="font-" slot="text">{{value.title}}</div>
            </van-grid-item>
        </van-grid>


    </van-list>
</template>

<script>
    export default {
        name: "HomePageHotRank",
        data() {
            return {
                loading: false,
                finished: false,
                VList: [],
                error: false,
            }
        },


        mounted() {

        },


        computed: {

            // 从Vuex获取的列表
            /**
             * @return {number}
             */
            ListVuex() {
                // console.log(this.$store.state.app.VList);
                return this.$store.state.app.VList;
            },

        },

        methods: {

            // 请求推荐列表
            Request() {
                this.$store.dispatch("Ranking").then(m => {

                    // 关闭加载状态
                    this.loading = false;

                    // 两个就不加载了
                    if (this.ListVuex.length >= 3) {
                        this.finished = true;
                    }

                }).catch(e => {
                    // 失败修改状态
                    this.loading = false;
                    this.error = true;
                });

            },

            // 加载列表函数
            onLoad() {
                // 异步更新数据
                this.Request();

            },

            // 前端视频地址
            /**
             * @return {string}
             */
            UUU(val) {
                return "video/" + val
            },

            // 返回观看次数
            /**
             * @return {string}
             */
            VCount(val) {
                return (val / 10000).toFixed(1) + "万"
            },


            // 设置全部视频总数 方便视频ranking请求标记
            VListCount() {
                return this.$store.state.app.VListCount;
            }

        },


    }
</script>

<style scoped>
    div {
        font-size: 8px;
    }

    #font- {
        font-family: "Franklin Gothic Medium", serif;
        font-size: .75rem;
        font-weight: 600;
    }

    #font {
        display: flex;
        justify-content: center;
        position: absolute;
        z-indent: 2;
        bottom: 0;
        color: hotpink;
        height: 1.2rem;
        margin-left: 10px;
    }
</style>