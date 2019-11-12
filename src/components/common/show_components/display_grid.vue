<template>
    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="loadvideo()"

    >
        <van-grid :column-num="1">
            <van-grid-item
                    v-for="item in list"
                    :key="item.index"
                    @click="openvideo()">

                <!--                todo 视频封面封装到一个组件中-->
                <van-image :src="item.cover" radius="2" fit="cover" height="33vh" width="100vm"/>

                <van-cell :border="false" :center="true" title="我是标题" value="内容" label="作者·观看次数·时间">
                    <author_avatar :src="item.author" slot="icon"></author_avatar>
                </van-cell>

            </van-grid-item>


        </van-grid>

    </van-list>
</template>

<script>
    import author_avatar from "./author_avatar";
    import {request} from "../../../network/request";

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
        methods: {
            openvideo() {
                this.$router.push("/video/1")
            },

            loadvideo() {//分页加载视频
                request({
                    method: 'get',
                    url: '/api/video?page=' + this.current_page// 填video接口 + "?page={{current_page}}"
                }).then(res => { // 获取成功
                    let data = res.data;
                    this.list.push(data[0]);// 向list里存放数据
                    this.list.push(data[1]);
                    this.current_page++;
                    this.loading = false;

                    console.log(data);
                }).catch(err => {   // 这代表着数据取完了 把状态设置成完成
                    this.finished = true;
                    this.loading = false;

                })
            }
        },
        components: {
            author_avatar
        },

    }
</script>

<style scoped>

</style>