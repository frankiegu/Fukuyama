<template>
        <form action="/">
            <van-search
                    v-fb
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    show-action
                    @search="onSearch"
                    @cancel="onCancel"
            />
        </form>
</template>

<script>
    export default {
        name: "searchbar",
        data() {
            return {
                value: "",
            }
        },
        computed: {
        },
        methods: {
            onSearch() {
            },
            onCancel() {
                this.$store.commit("SEARCHBAR_TRIGGER")
            },
        }
    }
</script>

