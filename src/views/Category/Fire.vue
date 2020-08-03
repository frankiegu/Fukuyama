<template>
    <div>
        <van-tabs style="margin-top: .3em;" color="black" v-model="active" type="card">
            <van-tab title="日剧">

                <van-dropdown-menu>
                    <van-dropdown-item v-model="value1" :options="option2">

                    </van-dropdown-item>
                </van-dropdown-menu>
                <category_anime :content="'JapaneseTV'" :sort="value1"></category_anime>

            </van-tab>

            <van-tab title="动漫">

                <van-dropdown-menu>
                    <van-dropdown-item v-model="value2" :options="option2">

                    </van-dropdown-item>
                </van-dropdown-menu>

                <category_anime :content="'anime'" :sort="value2"></category_anime>


            </van-tab>


            <van-tab title="电影">

                <van-dropdown-menu>
                    <van-dropdown-item v-model="value3" :options="option2">

                    </van-dropdown-item>
                </van-dropdown-menu>

            </van-tab>
        </van-tabs>


    </div>

</template>

<script>
    import category_anime from '../../components/category-anime'
    import video_cover from "../../components/common/video/video-cover";

    export default {

        data() {
            return {
                active: 0,
                value1: 'hot',
                value2: 'hot',
                value3: 'hot',

                option2: [
                    {text: '按热度排序', value: 'hot'},
                    {text: '按时间排序', value: 'time'},
                ],

            }
        },
        components: {
            category_anime
        },
        methods: {}
    }
</script>

<style scoped>
</style>