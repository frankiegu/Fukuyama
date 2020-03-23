<template>
    <div>

        <!--        如果state.token 有 token值就是用户头像 反之就是默认头像和未登录提示-->
        <van-collapse v-model="activeNames" :border="false">
            <van-collapse-item v-if="this.$store.state.user.token" :border="false" size="large" title="Bwijn"
                               label="779805126@qq.com" name="1">
                <van-image
                        @click="GotoInfo()"

                        round
                        slot="icon"
                        width="50"
                        height="50"
                        fit="cover"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </van-collapse-item>

            <van-collapse-item v-else :border="false" size="large" title="请登录"
                               name="2">


                <van-image
                        @click="GotoLogin"
                        round
                        slot="icon"
                        width="50"
                        height="50"
                        fit="cover"
                        src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584937690&di=dc3698a2f2b7ad72354d02f6fe31a6af&src=http://hbimg.b0.upaiyun.com/1e2e62e6f57458ca32394a10211a9616498d25bd5459-K2uzdk_fw658"
                />
            </van-collapse-item>

        </van-collapse>


        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "account",
        data() {
            return {
                activeNames: ['1']
            };
        },
        methods: {
            GotoLogin() {
                this.$router.push('/login')
                // console.log("asdf");
            },
            GotoInfo() {
                this.$router.push("/account/info")
            }
        }
    }
</script>

<style scoped>

</style>