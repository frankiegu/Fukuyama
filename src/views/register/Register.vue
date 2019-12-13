<template>
    <!--    todo 添加邮箱验证码-->
    <div style="width: 90%; margin:auto;">
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="用户名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>

            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>


            <FormItem prop="nickname">
                <Input v-model="formInline.nickname" placeholder="昵称">
                    <Icon slot="prepend" type="logo-snapchat"/>
                </Input>
            </FormItem>

            <!--            prop 对应的是验证规则里-->
            <FormItem prop="mail">
                <Input type="text" v-model="formInline.mail" placeholder="邮箱">
                    <!--                    <Icon type="ios-lock-outline" slot="mail"></Icon>-->
                    <Icon type="md-mail" slot="prepend"/>
                </Input>
            </FormItem>

            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    password: '',
                    mail: "",
                    nickname: ""
                },
                ruleInline: {
                    mail: [
                        {required: true, message: '请填写邮箱', trigger: 'blur'},
                        {type: 'email', message: '不正确的邮箱格式', trigger: 'blur'}
                    ],
                    user: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    nickname: [
                        {required: true, message: '请填写昵称', trigger: 'blur'}

                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {
                            type: 'string',
                            min: 6,
                            message: '密码要不少于6位',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>
