<template>
    <div>
        <div v-if="this.$route.path === '/home'">
            <van-nav-bar
                    title="主页"
                    left-text="返回"
                    right-text="按钮"
                    left-arrow
                    @click-left="onClickLeft"
                    @click-right="onClickRight"
            />
        </div>

        <div v-if="this.$route.path === '/category'">
            <van-nav-bar
                    title="分类"
                    left-text="返回"
                    right-text="按钮"
                    left-arrow
                    @click-left="onClickLeft"
                    @click-right="onClickRight"
            />
        </div>
    </div>

</template>

<script>
    export default {
        name: "NavBar"
        , data() {
            return {}
        },
        methods: {
            onClickLeft() {
                console.log(this.$route.path);
            },
            onClickRight() {
                Toast('按钮');
            }
        }
    }
</script>

<style scoped>

</style>