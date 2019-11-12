<template>
    <!--    通用 1. 大视频列表封面 2. 推荐列表封面-->
    <van-image :src="src" :height="height" :width="width" fit="cover"/>
    <!--    radius="4"-->

</template>

<script>
    export default {
        name: "author_name",
        props: ["src", "height", "width"],
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>