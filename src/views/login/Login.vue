<template>
    <!--    todo 改一下ivew的皮肤-->
    <div style="width: 90%">
        <Form
                ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
            <FormItem label="用户名/邮箱" prop="username">
                <Input v-model="formValidate.username" placeholder="输入用户名/邮箱"></Input>
            </FormItem>
            <FormItem label="密码" prop="password">
                <Input v-model="formValidate.password" placeholder="输入密码"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">登入</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">清除</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    import {Form, FormItem, Input} from 'view-design';

    export default {
        components: {
            "Form": Form,
            "FormItem": FormItem,
            "Input": Input,

        },
        data() {
            return {
                formValidate: {
                    username: '',
                    password: '',

                },
                ruleValidate: {
                    username: [
                        {required: true, message: '用户名不能为空~', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                    ],
                    city: [
                        {required: true, message: 'Please select the city', trigger: 'change'}
                    ],
                    gender: [
                        {required: true, message: 'Please select gender', trigger: 'change'}
                    ],
                    interest: [
                        {
                            required: true,
                            type: 'array',
                            min: 1,
                            message: 'Choose at least one hobby',
                            trigger: 'change'
                        },
                        {type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change'}
                    ],
                    date: [
                        {required: true, type: 'date', message: 'Please select the date', trigger: 'change'}
                    ],
                    time: [
                        {required: true, type: 'string', message: 'Please select time', trigger: 'change'}
                    ],
                    desc: [
                        {required: true, message: 'Please enter a personal introduction', trigger: 'blur'},
                        {type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        // todo this.$Message.success('成功');
                        this.$store.dispatch("Get_Token", this.formValidate).then(m => {
                            const _this = this;
                            // 登录成功信息
                            this.$Message.success(
                                {
                                    duration: 2.2,
                                    content: "登陆成功 跳转",
                                    onClose: function () {
                                        _this.$router.push('/');
                                    }
                                }
                            );
                        })

                    } else {
                        this.$Message.error('请填写完整');
                    }
                })
            },
            handleReset(name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
