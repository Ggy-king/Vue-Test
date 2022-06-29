<!-- vue中app文件即主文件 -->

<!-- 称为单文件组件 即模板样式逻辑都在一个文件中 -->

<!-- 可分为三部分 -->

<!-- 模板部分 -->
<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<!-- js vue部分 -->
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>


<!-- css修饰部分 -->
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>