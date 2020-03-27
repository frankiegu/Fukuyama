<template>
    <div>
        <van-tabs color="hotpink" v-model="active" type="card">
            <van-tab title="日剧" to="/popular/TV"></van-tab>

            <van-tab title="动漫" to="/popular/anime/hot">

                <van-dropdown-menu>
                    <van-dropdown-item @change="sortChange" v-model="value2" :options="option2">

                    </van-dropdown-item>
                </van-dropdown-menu>

            </van-tab>


            <van-tab title="电影" to="/popular/film">内容 3</van-tab>
        </van-tabs>


        <keep-alive>
            <router-view :sort="value2"></router-view>
        </keep-alive>

    </div>

</template>

<script>
    export default {

        data() {
            return {
                active: 0,
                value2: 'hot',

                option2: [
                    {text: '按热度排序', value: 'hot'},
                    {text: '按时间排序', value: 'time'},
                ],

            }
        },
        methods: {

            sortChange(value) {
                if (value === 'hot') {
                    this.$router.push('/popular/anime/hot')
                } else {
                    this.$router.push('/popular/anime/time')

                }
            },


        }
    }
</script>

<style scoped>
</style>