<template>
    <transition>
        <keep-alive>
            <slot></slot>
        </keep-alive>
    </transition>
</template>

<script>
    export default {
        name: "transition"
    }
</script>

<style scoped>

</style>