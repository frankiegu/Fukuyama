<template>
    <van-grid square :border="false" icon-size="30" gutter="60" :column-num="3" style="height: 50px">
        <van-grid-item
                v-for="value in rewardslist"
                :key="value"
                text="123"
        >
            <van-icon size="22" color="#8f8f8f" :name="value" slot="icon"/>
        </van-grid-item>
    </van-grid>

</template>

<script>

    export default {
        name: "rewards",
        components: {
        },
        data() {
            return {
                rewardslist: [
                    "good-job",
                    "share",
                    "add-square",
                ]
            }
        }
    }
</script>

<style scoped>

</style>