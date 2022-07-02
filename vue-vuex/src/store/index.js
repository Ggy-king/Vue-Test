import { createStore } from 'vuex'

// VueX数据管理框架    当数据很多的时候
// VueX创建了一个全局唯一的仓库 用来存放全局的数据  注意是全局的
export default createStore({
  state: {
    name:'dell'
  },
  mutations: {
    // 第四步 mutations感知到change改变 执行改变
    change() {
      // 第五步 改变数据
      this.state.name = 'lee'
    }

  },
  actions: {
    // 第二步 store感知你派发了一个叫做change的action 执行change方法
    change() {
      // 第三步 提交一个commit 来触发一个mutation 即数据改变的请求
      this.commit('change')
    }

  },
  modules: {
    // modules是对store更复杂的拆分
  }
})
