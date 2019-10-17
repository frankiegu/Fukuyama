<template>
    <div>
        <Scroll>
            <swipe></swipe>
            <recommendbar></recommendbar>
            <statusbar></statusbar>
            <h1>11</h1>
        </Scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/NavBar/NavBar";
    import swipe from 'views/Home_page/homeComponents/Swipe'
    import recommendbar from 'views/Home_page/homeComponents/Recommendbar'
    import statusbar from 'views/Home_page/homeComponents/latest_status'
    import Scroll from "components/common/scroll/Scroll";

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
            , statusbar,
            Scroll
        }
    }
</script>

<style scoped>
    /*div{*/
    /*    height: 300px;*/
    /*    background-color: red;*/
    /*}*/
</style>