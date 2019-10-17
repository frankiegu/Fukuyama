<template>
    <div id="vlist">
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <van-cell
                    v-for="item in list"
                    :key="item"
                    :title="item"
            />
        </van-list>
    </div>
</template>

<script>
    export default {
        name: "VList",
        data() {
            return {
                list: [],
                loading: false,
                finished: false
            };
        },

        methods: {
            onLoad() {
                console.log(this.loading);

                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 15; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    // console.log(this.loading);
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 30) {
                        this.finished = true;
                    }
                }, 1000);
                // console.log("IIIIIIIIIIIIII");
            }
        },
    }
</script>

<style scoped>
    #vlist {
        padding-bottom: 50px;
        padding-top: 46px;
    }
</style>