<template>
    <div>
        <van-cell-group>
            <van-field
                    v-model="email"
                    label="邮箱"
                    placeholder="请输入邮箱"

            ></van-field>
            <van-field
                    v-model="pwd"
                    label="密码"
                    placeholder="请输入密码"

            />
            <br>
            <van-row type="flex" justify="center">
                <van-col span="20">
                    <van-button size="large" color="#B22222">登录</van-button>
                </van-col>
            </van-row>
        </van-cell-group>

        <!--        测试展示数据-->
        <p>{{name}}</p>
        <p>{{email}}</p>
    </div>
</template>

<script>
    import {request} from "../../network/request";

    export default {
        name: "Login",
        data(){
            return{
                email: '',
                pwd:'',
                name: '11',

            }
        },
        created() {
            request({
                method: 'get',
                // url: 'https://unidemo.dcloud.net.cn/api/news',
                url: 'http://localhost:8000/login/yyy'
            }).then(res=>{
                console.log(res.data);
            }).catch(err=>{
                console.log(err);
            })
        }
    }
</script>

<style scoped>

</style>