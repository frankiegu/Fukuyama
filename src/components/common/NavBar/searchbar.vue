<template>
    <transition appear name="bounce">
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
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>