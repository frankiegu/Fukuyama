<template>
    <van-collapse v-model="activeNames">
        <van-collapse-item
                title=""
                label="2019年11月9日发布"
                name="1"
                :border="false"
        >
           {{ this.$store.state.app.VideoData.brief }}
        </van-collapse-item>
    </van-collapse>
</template>

<script>
    import {Collapse, CollapseItem} from 'vant';

    export default {
        name: "brief",
        components: {
            [CollapseItem.name]: CollapseItem,
            [Collapse.name]: Collapse,
        },
        data() {
            return {
                activeNames: ['1']
            };
        }
    }
</script>

<style scoped>
    span {
        background-color: red;
    }
</style>