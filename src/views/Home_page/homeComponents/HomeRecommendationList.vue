<template>
    <!--todo 加上列表加载-->
    <van-grid :border="false" :column-num="2">
        <van-grid-item
                v-for="value in ImageUrlList"
                :key="value"
                text="文字"
        >


            <div slot="icon" style="position:relative;">
                <van-image
                        height="7rem"

                        radius="7"
                        :src="value" slot="icon"
                />


                <div id="font">
                    <van-icon size=".9rem" name="play-circle-o"/>
                    <span style="margin-left: 5px;margin-right: 5px;">110.1万</span>
                    <!--                        <van-icon size=".9rem" name="coupon-o"/>-->
                    <!--                        <span style="margin-left: 5px;">进击的巨人</span>-->

                </div>

            </div>


            <div id="font-" slot="text">视频名视频名视频名视频名视频名</div>
        </van-grid-item>

    </van-grid>
</template>

<script>
    export default {
        name: "detail",
        data() {
            return {
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
        font-size: .7rem;
    }

    #font {
        display: flex;
        justify-content: center;
        position: absolute;
        z-indent: 2;
        bottom: 0;
        color: #fff1fd;
        height: 1.2rem;
        margin-left: 10px;
    }
</style>