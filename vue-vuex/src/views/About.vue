<template>
  <div class="about">
    <h1>dispatch可以传多参数</h1>
    <h1 @click="handleClick">这里是about页</h1>
    <h1>{{myName}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // 计算属性
  computed: {
    myName() {
      return this.$store.state.name;
    }
  },
  methods: {
    handleClick() {
      // 想要改变数据 vuex要求第一步 先派发一个 action  即你想做什么
      // 1 调用一个dispatch方法 派发一个action  名字是change(可变)
      // 2 感知到change这个action,执行store中actions下面的change方法
      this.$store.dispatch('change');
      



    // 如果你想同步改变数据 可以省略一二步骤   即不进行时间的要求 mutations要求只进行同步的操作 而actions却支持
    // 所以一般vuex 中mutations中放同步的代码 而actions中放异步的代码
      // this.$store.commit('change');
    }
  }
  
}
</script>