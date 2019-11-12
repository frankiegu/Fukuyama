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
    export default {
        name: "author_avatar",
        props: ["src","height"]

    }
</script>

<style scoped>

</style>