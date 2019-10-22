<template>
    <div>
        <van-cell-group>
            <van-field
                    v-model="username"
                    label="用户名"
                    placeholder="请输入用户名"

            ></van-field>
            <van-field
                    v-model="pwd"
                    label="密码"
                    placeholder="请输入密码"

            />
            <br>
            <van-row type="flex" justify="center">
                <van-col span="20">
                    <van-button size="large" color="#B22222" @click="click_login()">登录</van-button>
                </van-col>
            </van-row>
        </van-cell-group>
    </div>
</template>

<script>
    import {request} from "../../network/request";


    export default {
        name: "Login",
        data() {
            return {
                email: '',
                username: 'yyy',
                pwd: 'ttt',
                toast: this.$toast
            }
        },
        methods: {
            click_login() {
                request({
                    method: 'post',
                    url: '/login/yyy',
                    data: {
                        'username': this.username,
                        'pwd': this.pwd,
                    },

                }).then(res => {

                    this.toast({
                        message: '登陆成功',
                        duration: 1500,
                    })

                    setTimeout(fun => {
                        this.$router.push("/home");
                    }, 1500)
                    console.log(res);

                }).catch(err => {
                    console.log(err);
                    // console.log(err.headers['set-cookie'])
                });
            }
        },
        created() {

        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>