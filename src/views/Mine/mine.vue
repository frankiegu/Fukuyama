<template>
    <div>
        <!--        登录后的单元条-->
        <TableCell></TableCell>

<!--        播放列表-->
        <van-divider :hairline="false"/>
        <PlayList></PlayList>
    </div>
</template>

<script>
    import TableCell from 'views/Mine/mine_components/tableCell/TableCell'
    import PlayList from "./mine_components/tableCell/PlayList";
    import {Divider} from 'vant'
    export default {
        name: "mine",
        components: {
            [Divider.name]:Divider,
            TableCell,
            PlayList
        }
    }
</script>

<style scoped>

</style>