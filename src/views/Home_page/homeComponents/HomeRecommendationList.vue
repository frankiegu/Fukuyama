<template>
    <!--todo 加上列表加载-->
    <van-grid :border="false" :column-num="2">
        <van-grid-item
                v-for="value in List"
                :key="value.id"
                text="文字"
                :to="VideoUrl(value.id)"
        >


            <div slot="icon" style="position:relative;">
                <van-image
                        height="7rem"
                        radius="7"
                        :src="value.cover" slot="icon"
                />


                <div id="font">
                    <van-icon size=".9rem" name="play-circle-o"/>
                    <span style="margin-left: 5px;margin-right: 5px;">{{value.view_count}}</span>
                    <!--                        <van-icon size=".9rem" name="coupon-o"/>-->
                    <!--                        <span style="margin-left: 5px;">进击的巨人</span>-->

                </div>

            </div>
            <div id="font-" slot="text">{{value.title}}</div>
        </van-grid-item>

    </van-grid>
</template>

<script>
    import {HomePage} from "../../../network/homepage_api";

    export default {
        name: "detail",
        mounted() {
            HomePage.Ranking().then(m => {
                console.log(m.data);
                this.List = m.data;
            })
        },
        computed: {},
        methods: {
            VideoUrl: function (id) {
                // `this` 指向 vm 实例
                return "video/" + id
            }
        },
        data() {
            return {
                List: [],
                ImageUrlList: [
                    require("@/assets/swipe-image/JOJO.jpg"),
                    require("@/assets/swipe-image/一拳.jpg"),
                    require("@/assets/swipe-image/doctor-x.webp"),
                    require("@/assets/swipe-image/一拳.jpg"),
                    require("@/assets/swipe-image/一拳.jpg"),
                    require("@/assets/swipe-image/一拳.jpg"),
                    require("@/assets/swipe-image/一拳.jpg"),
                    require("@/assets/swipe-image/一拳.jpg"),
                ]
            }
        }
    }
</script>

<style scoped>
    div {
        font-size: 8px;
    }

    #font- {
        font-family: "Franklin Gothic Medium", serif;
        font-size: .75rem;
        font-weight: 600;
    }

    #font {
        display: flex;
        justify-content: center;
        position: absolute;
        z-indent: 2;
        bottom: 0;
        color: hotpink;
        height: 1.2rem;
        margin-left: 10px;
    }
</style>