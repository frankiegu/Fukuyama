<template>
    <transition
            name="slide-fade"
            mode="out-in"
            appear>

        <van-image
                v-if="this.$store.state.login_state === true"
                @click="to_login()"
                :src="this.$store.state.avatar"
                width="35"
                height="35"
                radius="5px"
                style="float: right;"

        />

        <!--            图标空白头像 未登录-->
        <van-icon
                v-else
                name="user-circle-o"
                size="28"
                @click="to_login()"
        />
    </transition>
</template>

<script>
    export default {
        name: "avatar",
        data() {
            return {
                show: true
            }
        },
        methods: {
            to_login() {
                this.$store.commit('toggle_login');
            }
        }
    }
</script>

<style scoped>
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all 1s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>