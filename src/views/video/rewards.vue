<template>
    <van-grid square :border="false" icon-size="22" gutter="30" :column-num="5" style="height: 40px">
        <van-grid-item
                v-for="value in rewardslist"
                :key="value"
                text="123"
        >
            <van-icon size="22" color="#8f8f8f" :name="value"  slot="icon"/>
        </van-grid-item>
    </van-grid>

</template>

<script>
    export default {
        name: "rewards",
        data() {
            return {
                rewardslist: [
                    "good-job",
                    "circle",
                    "share",
                    "down",
                    "add-square",
                ]
            }
        }
    }
</script>

<style scoped>

</style>