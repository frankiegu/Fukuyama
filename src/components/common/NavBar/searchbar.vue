<template>
    <transition appear name="slide-fade">
        <form action="/" v-if="this.$store.state.search_show">
            <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    show-action
                    @search="onSearch"
                    @cancel="onCancel"
            />
        </form>
    </transition>

</template>

<script>
    export default {
        name: "searchbar",
        data() {
            return {
                value: "",
            }
        },
        methods: {
            onSearch() {
            },
            onCancel() {
            },
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
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>