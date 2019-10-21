<template>
    <van-tabs sticky>
        <van-tab v-for="index in title_list" :key="index" :title="index">
            {{ index }}
        </van-tab>
    </van-tabs>
</template>

<script>
    export default {
        name: "Tab",
        data(){
            return{
                title_list: ["最近", "aa", 'bb'],
                active: 2
            }
        }
    }
</script>

<style scoped>

</style>