<template>
    <skeleton>
        <!--        轮播图-->
        <swipe></swipe>
        <!--        推荐宫格-->
        <recommendbar></recommendbar>
        <!--        贴照片-->
        <statusbar></statusbar>
    </skeleton>
</template>

<script>
    import swipe from 'views/Home_page/homeComponents/Swipe'
    import recommendbar from 'views/Home_page/homeComponents/Recommendbar'
    import statusbar from 'views/Home_page/homeComponents/latest_status'
    import skeleton from "../../components/common/skeleton/skeleton";

    export default {
        name: "Home_page",
        data() {
            return {
                list: [],
                loading: false,
                finished: false
            };
        },
        methods: {
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            }
        },
        components: {
            swipe
            , recommendbar
            , statusbar
            , skeleton
        }
    }
</script>

<style scoped>
    /*div{*/
    /*    height: 300px;*/
    /*    background-color: red;*/
    /*}*/
</style>