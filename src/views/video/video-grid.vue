<template>
    <!--                剧集格子-->
    <van-grid
            :border="false" :column-num="3">
        <van-grid-item
                v-for="value in EpisodesList"
                :key="value.id"
                :to="{path:'/video/'+id+'/'+value.episode_num}"
        >
            <van-button size="small" slot="default" color="hotpink" type="primary">{{value.name}}
            </van-button>
        </van-grid-item>
    </van-grid>

</template>

<script>
    export default {
        name: "video-details-grid",
        data() {
            return {
                // 该视频的id
                id: this.$route.params.id,
                episode: this.EpisodesList
            }
        },
        props: ['EpisodesList'],
        methods: {
            // 给格子拼接url
            SplicingUrl(id) {
                return '/video/' + this.id + '/' + id
            },

        }
    }
</script>

<style scoped>

</style>