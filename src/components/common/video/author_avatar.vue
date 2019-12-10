<template>
    <van-image
            round
            style="margin-right: 10px;"
            width="35"

            fit="cover"
            :src="src"
    />
</template>

<script>
    import {Image} from 'vant'

    export default {
        name: "author_avatar",
        components:{
            [Image.name]:Image,
        },
        props: ["src", "height"]

    }
</script>

<style scoped>

</style>