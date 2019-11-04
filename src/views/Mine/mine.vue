<template>
    <div>
<!--        登录后的单元条-->
<!--        <TableCell></TableCell>-->

        <router-view></router-view>
    </div>
</template>

<script>
    import TableCell from 'views/Mine/mine_components/tableCell/TableCell'

    export default {
        name: "mine",
        components: {
            TableCell,
        }
    }
</script>

<style scoped>

</style>