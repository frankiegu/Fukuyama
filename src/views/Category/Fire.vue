<template>
    <div>
        <van-tabs type="card">
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="动漫">

                <van-dropdown-menu>
                    <van-dropdown-item v-model="value2" :options="option2"/>
                </van-dropdown-menu>

                <van-grid :column-num="3">
                    <van-grid-item
                            v-for="value in video_list"
                            :key="value"
                            text="视频名"
                    >
                        <van-image
                                slot="icon"
                                width="7em"
                                height="10em"
                                src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                    </van-grid-item>
                </van-grid>

            </van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
        </van-tabs>


        <!--        分页组件-->
        <van-pagination
                v-model="currentPage"
                :total-items="24"
                :items-per-page="5"
        />
    </div>

</template>

<script>
    export default {
        data() {
            return {
                currentPage: 1,

                value1: 0,
                value2: 'a',
                option1: [
                    {text: '全部商品', value: 0},
                    {text: '新款商品', value: 1},
                    {text: '活动商品', value: 2}
                ],
                option2: [
                    {text: '默认排序', value: 'a'},
                    {text: '好评排序', value: 'b'},
                    {text: '销量排序', value: 'c'},
                ],

                video_list: [1, 34, 1241, 'o', 412, 41, 21412]
            }
        },
        components: {},
    }
</script>

<style scoped>
</style>