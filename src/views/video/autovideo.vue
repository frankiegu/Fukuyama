<template>
    <div>
        <van-cell-group>

            <van-cell title="" label="Recommended"/>


            <!--            <van-row>-->
            <!--                <van-col -->
            <!--                        span="12">-->
            <!--                    <video_cover-->
            <!--                            style="margin: 10px 10px;"-->
            <!--                            height="14vh"-->
            <!--                            width="45vw"-->
            <!--                            src="http://122.51.25.188/images/Bing黄毛果蝠.jpg"-->
            <!--                    ></video_cover>-->
            <!--                </van-col>-->

            <!--                <van-col-->
            <!--                        span="12"-->
            <!--                        style="background-color: red;">-->
            <!--                    <van-cell>-->
            <!--                        <videotitle slot="title"></videotitle>-->
            <!--                        <detail slot="label"></detail>-->
            <!--                    </van-cell>-->
            <!--                </van-col>-->
            <!--            </van-row>-->


            <!--            <van-row>-->
            <!--                <van-col span="12">-->
            <!--                    <video_cover-->
            <!--                            style="margin-left: 10px;"-->
            <!--                            height="14vh"-->
            <!--                            width="45vw"-->
            <!--                            src="http://122.51.25.188/images/Bing黄毛果蝠.jpg"-->
            <!--                    ></video_cover>-->
            <!--                </van-col>-->

            <!--                <van-col-->
            <!--                        span="12"-->
            <!--                        style="background-color: red;">-->
            <!--                    <van-cell>-->
            <!--                        <videotitle slot="title"></videotitle>-->
            <!--                        <detail slot="label"></detail>-->
            <!--                    </van-cell>-->
            <!--                </van-col>-->
            <!--            </van-row>-->


        </van-cell-group>
    </div>
</template>

<script>
    import videotitle from "../../components/content/videotitle";
    import detail from "../Home_page/homeComponents/detail";
    import video_cover from "../../components/content/video_cover";
    import {CellGroup, Cell} from 'vant';

    export default {
        name: "autovideo",
        data() {
            return {}
        },
        components: {
            [CellGroup.name]: CellGroup,
            [Cell.name]: Cell,
            video_cover,
            videotitle,
            detail,
        }
    }
</script>

<style scoped>

</style>