<template>
    <div>
        <!--        <VList></VList>-->

    </div>
</template>

<script>
    import VList from "views/Category/VList/VList"
    // import Scroll from "components/common/scroll/Scroll";

    export default {
        data() {
            return {
                imageList: [
                    require("assets/braces-img/indoor1.jpg"),
                    require("assets/braces-img/indoor1.jpg"),
                    require("assets/braces-img/indoor1.jpg"),
                    require("assets/braces-img/indoor1.jpg"),
                    require("assets/braces-img/indoor1.jpg"),

                ]
            }
        },

        components: {
            VList,
            // Scroll
        }
    }
</script>

<style scoped>
    /*.wrapper {*/
    /*    background-color: red;*/
    /*    height: 200px;*/
    /*    overflow: hidden;*/
    /*}*/
</style>