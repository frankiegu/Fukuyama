<template>
    <!--    <div>-->
    <!--        <van-row type="flex" justify="center">-->
    <!--            <van-col>-->
    <!--                <van-tag round type="primary">照片墙</van-tag>-->
    <!--            </van-col>-->
    <!--        </van-row>-->
    <!---->
    <van-grid clickable :border="false">
        <van-grid-item text="Cover">
            <div id="ic" slot="icon">
                <van-icon size=".95rem" color="#fff" name="service"/>
            </div>
        </van-grid-item>
        <van-grid-item text="日剧">
            <div id="ic2" slot="icon">
                <van-icon size=".95rem" color="#fff" name='play-circle-o'/>
            </div>
        </van-grid-item>
        <van-grid-item text="电影">
            <div id="ic3" slot="icon">
                <van-icon size=".95rem" color="#fff" name='video-o'/>
            </div>
        </van-grid-item>
        <van-grid-item text="动漫">
            <div id="ic4" slot="icon">
                <van-icon size=".95rem" color="#fff" name='live' />
            </div>
        </van-grid-item>
    </van-grid>


    <!--        <van-row type="flex" justify="space-between">-->
    <!--            <van-col span="6" v-for="(item, index) in 4" :key="index">-->
    <!--                <p style="text-align: center; margin: 0;">111</p>-->
    <!--            </van-col>-->
    <!--        </van-row>-->
    <!--    </div>-->
</template>

<script>
    export default {
        name: "Recommendbar",
        data() {
            return {
                images: [
                    "",

                ],
                images2: [
                    require("../../assets/braces-img/out-sitting.jpg")

                ]
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    i {
        border-radius: 5px;
        margin: auto;
    }

    #ic {
        border-radius: 50%;
        background-color: #5aa8ff;
        display: flex;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
    }

    #ic2 {
        border-radius: 50%;
        background-color: #a888ff;
        display: flex;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
    }

    #ic3 {
        border-radius: 50%;
        background-color: #ff3253;
        display: flex;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
    }
    #ic4{
        border-radius: 50%;
        background-color: #ffa81f;
        display: flex;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
    }

</style>