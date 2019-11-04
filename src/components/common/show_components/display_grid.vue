<template>
    <div>
        <van-grid :column-num="1">
            <van-grid-item
                    v-for="value in imageList"
                    :key="value"
                    @click="pathto">
                <van-image :src="value" radius="5" fit="cover" height="33vh" width="100vm"/>

                <van-cell :border="false" title="我是标题" value="内容" label="作者·观看次数·时间">
                    <author_avatar style="margin-right: 10px;" slot="icon"></author_avatar>
                </van-cell>

            </van-grid-item>


        </van-grid>

    </div>
</template>

<script>
    import author_avatar from "./author_avatar";

    export default {
        data() {
            return {
                imageList: [
                    require("assets/braces-img/indoor1.jpg"),
                ],

            }
        },
        methods: {
            pathto() {
                this.$router.push("/cart")
            }
        },
        components: {
            author_avatar
        },

    }
</script>

<style scoped>

</style>