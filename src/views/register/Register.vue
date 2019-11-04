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
<!--            <van-field-->
<!--                    left-icon="phone-o"-->
<!--                    v-model="phone"-->
<!--                    label="手机号"-->
<!--                    placeholder=""-->

<!--                    @blur="err_tip"-->
<!--            />-->
<!--            <van-field-->
<!--                    v-model="sms"-->
<!--                    center-->
<!--                    clearable-->
<!--                    label="短信验证码"-->
<!--                    placeholder="请输入短信验证码"-->
<!--            >-->
<!--                <van-button slot="button" size="small" color="red">发送验证码</van-button>-->
<!--            </van-field>-->
            <van-field
                    left-icon="envelop-o"
                    v-model="email"
                    label="邮箱"
                    placeholder=""
            @blur="err_tip"
            />
        </van-cell-group>
        <br>
        <van-row type="flex" justify="center">
            <van-col span="20">
                <van-button size="large" color="#B22222" @click="register_post">注册</van-button>
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
            // 验证手机号
            Verify_phone() {
                request({
                    url: ""
                })
            },

            // 错误提示
            err_tip() {
                this.phone_err = ""
            },

            // 提交表单
            register_post() {
                request({
                    url: '/register',
                    method: 'post',
                    data: {
                        username: this.username,
                        password: this.pwd,
                        mobile: this.phone,
                    }
                }).then(res => {
                    console.log(res.data);
                }).catch(res => {

                })
            }


        }
    }
</script>

<style scoped>

</style>