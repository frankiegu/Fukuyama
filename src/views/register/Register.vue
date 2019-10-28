<template>
    <div>
        <van-cell-group>
            <van-field
                    label="用户名"
                    left-icon="contact"
                    v-model="username"
            />
            <van-field
                    v-model="pwd"
                    type="password"
                    label="密码"
                    left-icon="eye-o"
            />
            <van-field
                    left-icon="phone-o"
                    v-model="phone"
                    label="手机号"
                    placeholder=""
                    :error-message="phone_err"
                    @blur="err_tip"
            />
            <van-field
                    left-icon="envelop-o"
                    v-model="email"
                    label="邮箱"
                    placeholder=""
                    :error-message="phone_err"
                    @blur="err_tip"
            />
        </van-cell-group>
        <br>
        <van-row type="flex" justify="center">
            <van-col span="20">
                <van-button size="large" color="#B22222" @click="">注册</van-button>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import {request} from "../../network/request";

    export default {
        name: "Register",
        data() {
            return {
                username: '',
                pwd: '',
                phone: '',
                phone_err: '手机号格式错误'
            }
        },
        methods: {
            Verify_phone() {
                request({
                    url: ""
                })
            },
            err_tip() {
                this.phone_err = ""
            },
            register_post() {
                request({
                    url: '/login',
                    methods: 'post',
                    data: {
                        username: this.username,
                        password: this.pwd,
                        mobile: this.phone,
                    }
                }).then(res => {

                })
            }
        }
    }
</script>

<style scoped>

</style>