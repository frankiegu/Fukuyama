<template>
    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="loadvideo()"
    >
        <van-grid :column-num="1">

            <!--            这里 to 到拼接后的地址-->
            <van-grid-item
                    v-for="item in list2"
                    :key="item.index"
                    :to="fullurl(item.id)"
            >

                <van-image :src="item.cover" radius="2" fit="cover" height="33vh" width="100vm"/>

                <van-cell :border="false" :center="true" :title="item.title"
                          :label="videoinfo(item.author_name, item.view_count, item.days_since_joined)">
                    <author_avatar :src="item.author" slot="icon"></author_avatar>
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
                current_page: 1,
                // 测试用的list接口 没后端接口时展示用
                list2: [
                    {cover: require("@/assets/Bing黄毛果蝠.jpg")},
                    {cover: require("@/assets/logo.png")},
                    {cover: require("@/assets/icon1.png")},
                    {cover: require("@/assets/dzs.jpg")},
                ]
            }
        },
        methods: {},
        components: {
            author_avatar,
        },
        computed: {}
    }
</script>

<style scoped>

</style>