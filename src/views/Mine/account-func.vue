<template>
    <div>


        <van-cell title="您的频道" :border="false" :center="true"
                  title-style="margin-left: 10px " clickable>
            <van-icon size="20" name="contact" slot="icon"
                      style="margin-right: 10px; margin-left: 10px;"
                      color="#8f8f8f"/>
        </van-cell>
        <van-cell clickable title="观看时长" :border="false" :center="true"
                  title-style="margin-left: 10px ">
            <van-icon size="20" name="todo-list" slot="icon"
                      style="margin-right: 10px; margin-left: 10px;"
                      color="#8f8f8f"/>
        </van-cell>

        <van-cell clickable title="订阅Youtuba Premium" :border="false" :center="true"
                  title-style="margin-left: 10px ">
            <van-icon size="20" name="gem" slot="icon"
                      style="margin-right: 10px; margin-left: 10px;"
                      color="#8f8f8f"/>
        </van-cell>

        <van-cell clickable title="付费会员" :border="false" :center="true"
                  title-style="margin-left: 10px ">
            <van-icon size="20" name="gold-coin" slot="icon"
                      style="margin-right: 10px; margin-left: 10px;"
                      color="#8f8f8f"/>
        </van-cell>

        <van-cell clickable title="切换账号" :border="false" :center="true"
                  title-style="margin-left: 10px ">
            <van-icon size="20" name="exchange" slot="icon"
                      style="margin-right: 10px; margin-left: 10px;"
                      color="#8f8f8f"/>
        </van-cell>

        <van-cell clickable title="开启无痕模式" :border="false" :center="true"
                  title-style="margin-left: 10px ">
            <van-icon size="20" name="browsing-history" slot="icon"
                      style="margin-right: 10px; margin-left: 10px;"
                      color="#8f8f8f"/>
        </van-cell>

        <van-divider :style="{ color: '#9b9c9d', borderColor: '#9b9c9d', padding: '0' }">
        </van-divider>

        <van-cell clickable title="设置" :border="false" :center="true"
                  title-style="margin-left: 10px ">
            <van-icon size="20" name="setting" slot="icon"
                      style="margin-right: 10px; margin-left: 10px;"
                      color="#8f8f8f"/>
        </van-cell>

        <van-cell @click="QuitLogin" clickable title="退出登录" :border="false" :center="true"
                  title-style="margin-left: 10px ">
            <van-icon size="20" name="question" slot="icon"
                      style="margin-right: 10px; margin-left: 10px;"
                      color="#8f8f8f"/>
        </van-cell>
        <van-row type="flex" justify="center">
            <van-col span="6">
                <!--                todo 这里被盖住了-->
                <div style="margin: 0 auto;font-size: 12px;position: absolute;bottom: 0;color: pink ">隐私权政策·服务条款</div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: "account-func",
        methods: {
            QuitLogin() {
                this.$store.dispatch("QuitLogin").then(() => {
                    this.$router.go(0);
                })
            }
        }
    }
</script>

<style scoped>

</style>