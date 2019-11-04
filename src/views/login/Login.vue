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
                username: '',
                pwd: '',
                toast: this.$toast
            }
        },
        methods: {
            click_login() {
                request({
                    method: 'post',
                    url: 'login',
                    data: {
                        'username': this.username,
                        'password': this.pwd,
                    },

                })
                    .then(res => {
                        console.log(res.data);
                        this.$store.commit('toggle_login');
                        this.merge()    // 登陆成功跳转
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },

            merge() {
                this.toast({
                    message: '登陆成功',
                    duration: 1500,
                });

                setTimeout(fun => {
                    this.$router.push("/home");
                }, 1500)
            }

        },

    }
</script>

<style scoped>

</style>