<template>
    <div>
        <van-image
                v-show="this.$store.state.user.token"
                :src="avatar"
                width="28"
                height="28"
                round
                style="float: right;"></van-image>

        <!--            图标空白头像 未登录-->
        <van-icon
                v-show="!this.$store.state.user.token"
                name="user-circle-o"
                size="28"
                @click="to_login()"
        />
    </div>

</template>

<script>
    import {Image, Icon} from 'vant';

    export default {
        name: "avatar",
        components: {
            // [Image.name]: Image,
            // [Icon.name]: Icon,
        },
        data() {
            return {
                show: true,
            }
        },
        watch: {},
        computed: {
            isLogin: function () {  // 返回Vuex中的登录状态
                // console.log('token::::::::::::' + this.$store.state.user.token);
                // console.log(this.$route.router);
                return this.$store.state.user.token
            },

            // todo 登录完成后立刻变化头像不用刷新
            avatar: function () {
                return localStorage.getItem('avatar')
            }
        },
        methods: {
            // 如果未登录跳转到引导登录注册页面
            to_login() {
                // 如果未在登录状态和不在登录页面
                if (!this.isLogin && this.$route.path !== '/login') {
                    // console.log(this.$route.path);
                    this.$dialog.confirm({
                        title: '提示',
                        message: '还未登录，去登录?'
                    }).then(() => {
                        this.$router.push("/login");
                        // on confirm
                    }).catch(() => {
                        // on cancel
                    });
                }

            }
        }
    }
</script>

<style scoped>
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>