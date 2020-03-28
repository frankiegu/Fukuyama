<template>
    <van-swipe :autoplay="3000" :loop="true" indicator-color="white">
        <van-swipe-item v-for="item in images" :key="item.index">
            <div style="position:relative;">
                <van-image
                        lazy-load
                        :src="item.url"

                        height="10em"
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
                        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585223320931&di=57bb03359503b24afd25aaefedb3603e&imgtype=0&src=http%3A%2F%2Fimage.game.uc.cn%2F2014%2F2%2F8%2F9623950.jpg",
                        title: "进击的巨人第一季(2013)"
                    },
                    {
                        url: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=26519325,697600277&fm=11&gp=0.jpg",
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