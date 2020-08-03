<template>
    <div>
        <van-cell title="热门推荐" />


        <category_anime :content="'hot'"></category_anime>

        <van-cell title="动漫" />
        <category_anime :content="'anime'"></category_anime>
        <van-cell title="日剧" />
        <category_anime :content="'JapaneseTV'"></category_anime>

    </div>
</template>

<script>
    import video_cover from '../../components/common/video/video-cover'
    import category_anime from '../../components/category-anime'

    export default {
        name: "HomePageHotRank",
        data() {
            return {}
        },
        mounted() {

        },
        components: {
            video_cover,
            category_anime
        },

        methods: {
        },


    }
</script>

<style scoped>


</style>