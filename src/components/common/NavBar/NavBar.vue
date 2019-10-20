<template>
    <van-sticky>
        <van-cell>
            <van-row type="flex" justify="space-between">

                <!--                Logo-->
                <van-col span="4">
                    <van-image
                            height="30"
                            width="100"
                            :src="this.$store.state.logo_addr"
                    />
                </van-col>


                <van-col span="3" offset="14">
                    <van-icon size="24" name="search" />
                </van-col>
                <!--                头像-->
                <van-col span="3">
                    <van-image
                            radius="6"
                            height="32"
                            width="32"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                </van-col>


            </van-row>

        </van-cell>

    </van-sticky>

</template>

<script>
    export default {
        name: "NavBar"
        , data() {
            return {}
        },
        methods: {
            onClickLeft() {
                console.log(this.$route.path);
            },
            onClickRight() {
                Toast('按钮');
            }
        }
    }
</script>

<style scoped>

</style>