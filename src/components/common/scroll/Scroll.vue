<template>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="layer">
        <slot></slot>
    </van-pull-refresh>
</template>

<script>
    export default {
        name: "Scroll",
        data() {
            return {
                count: 0,
                isLoading: false
            }
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .wrapper {
        height: 300px;
    }

    .layer {
        padding-bottom: 50px;
        padding-top: 46px   ;
    }
</style>