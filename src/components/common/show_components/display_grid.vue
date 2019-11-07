<template>
    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"

    >
        <van-grid :column-num="1">
            <van-grid-item
                    v-for="item in list"
                    :key="item.index"
                    @click="pathto">

                <van-image :src="item.cover" radius="4" fit="cover" height="33vh" width="100vm"/>

                <van-cell :border="false" :center="true" title="我是标题" value="内容" label="作者·观看次数·时间">
                    <author_avatar style="margin-right: 10px;" slot="icon"></author_avatar>
                </van-cell>

            </van-grid-item>


        </van-grid>

    </van-list>
</template>

<script>
    import author_avatar from "./author_avatar";

    export default {
        data() {
            return {
                // List动态加载组件的 数据
                list: [],
                loading: false,
                finished: false,
                list2: [
                    {cover: require("@/assets/Bing黄毛果蝠.jpg")},
                    {cover: require("@/assets/logo.png")},
                    {cover: require("@/assets/icon1.png")},
                    {cover: require("@/assets/dzs.jpg")},
                ]
            }
        },
        methods: {
            pathto() {
                this.$router.push("/cart")
            },
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 1; i++) {
                        this.list.push({cover: require("@/assets/Bing黄毛果蝠.jpg")});

                    }
                    // 加载状态结束
                    this.loading = false;

                }, 2000);
            }
        },
        components: {
            author_avatar
        },

    }
</script>

<style scoped>

</style>