<template>
    <div>
        <!--        Title-->
        <van-cell :border="false" :center="true" title="我是标题" label="111次观看">
        </van-cell>
        <!--        按赞栏-->
        <rewards></rewards>
        <!--        Author栏-->
        <van-cell
                title="作者名"
                label="111 位订阅者"
                :center="true"
                style="border: red"
        >
            <author_avatar
                    src="http://122.51.25.188/images/timg%20(2).jpg"
                    style="margin-top: 5px;"
                    slot="icon">

            </author_avatar>
        </van-cell>

        <!--        视频简介栏-->
        <brief></brief>

        <!--        视频推荐-->
        <autovideo></autovideo>
    </div>
</template>

<script>
    import author_avatar from "../../components/common/show_components/author_avatar";
    import rewards from "./rewards";
    import brief from "./brief";
    import autovideo from "./autovideo";

    export default {
        name: "actionbar",
        data() {
            return {
                activeNames: ['1']
            };
        },
        components: {
            author_avatar,
            rewards,
            brief,
            autovideo
        }
    }
</script>

<style scoped>
</style>