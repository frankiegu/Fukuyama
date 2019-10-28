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
            <!--            :src="this.$store.state.avatar"-->

            <van-image v-if="this.$store.state.login_state == true"
                       :src="this.$store.state.avatar"
                       width="35"
                       height="35"
                       radius="5px"
                       style="float: right;"

            />
            <van-icon name="user-circle-o" size="28" @click="to_login()"
                      v-if="this.$store.state.login_state ==false"/>
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
            return {
                // avatar: this.$store.state.avatar
            }
        },
        methods: {
            to_login() {
                this.$router.push("/login")
            }
        },
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