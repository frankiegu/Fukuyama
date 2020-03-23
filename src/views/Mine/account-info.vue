<template>
    <div>
        <van-cell :border="false" title="头像"  />
        <van-row type="flex" justify="center">
            <van-col span="6">
                <van-uploader :after-read="afterRead"/>
            </van-col>
            <van-col span="6"></van-col>
            <van-col span="6"></van-col>
        </van-row>
    </div>

</template>

<script>
    export default {
        name: "account-info",
        methods: {
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
            }
        }
    }
</script>

<style scoped>

</style>