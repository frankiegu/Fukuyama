<template>
    <van-sticky>
        <van-cell>
            <!--            <van-row type="flex" justify="space-between">-->

            <!--                Logo-->
            <!--                <van-col span="4">-->
            <van-image
                    height="32"
                    width="100"
                    :src="this.$store.state.logo_addr"
            />
            <!--                </van-col>-->


            <!--                <van-col span="6" offset="12">-->
            <!--                <div>-->
            <van-image
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                    width="35"
                    height="35"
                    radius="5px"
                    style="float: right;"

            />
            <van-icon name="user-circle-o" size="28"/>
            <van-icon name="search" size="28"/>

            <!--                </div>-->
            <!--                </van-col>-->

            <!--            </van-row>-->

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
    i {
        float: right;
        /*font-size: 100px;*/
        padding-left: 10px;
        padding-right: 10px;
    }
</style>