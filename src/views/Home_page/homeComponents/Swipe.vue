<template>
    <van-swipe :autoplay="3000" :loop="true" indicator-color="white">
        <van-swipe-item v-for="item in images" :key="item.index">
            <div style="position:relative;">
                <van-image
                        radius="5px"
                        lazy-load
                        fit="contain"
                        :src="item.url"
                        height="33vh"
                />

            </div>

        </van-swipe-item>
    </van-swipe>
</template>

<script>
    export default {
        name: "Swipe",
        components: {},
        data() {
            return {
                current: 0,
                images: [
                    {
                        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576430557029&di=9e35ce015d3150d07ecf74e0dc8abfc3&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1307%2F03%2Fc3%2F22874868_1372820245014_1024x1024it.png",
                        title: "进击的巨人第一季(2013)"
                    },
                    {
                        url: "http://cdn.wuzhongyin.com/doctor-x.webp",
                        title: "【日剧】Doctor-X~外科医·大门未知子"
                    },
                    {
                        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576433732256&di=9bfc7d7d7c9aa4ce7dcf72398452cae0&imgtype=0&src=http%3A%2F%2Fqimg.hxnews.com%2F2017%2F1212%2F1513069123818.png",
                        title: "一拳超人第一季"
                    },
                    {
                        url: "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=430f53b9d239b60059c307e588395e4f/71cf3bc79f3df8dc87c1dfcbca11728b461028ef.jpg",
                        title: "【日剧】LEGAL HIGH"
                    }
                    // require("@/assets/swipe-image/巨人.jpeg"),
                    // require("@/assets/swipe-image/JOJO.jpg"),
                    // require("@/assets/swipe-image/一拳.jpg"),
                ]
            }
        }, methods: {},
        created() {
            // console.log(typeof this.images[1]);
        }
    }
</script>

<style scoped>
    #font {
        color: white;
        font-weight: 900;
    }
</style>