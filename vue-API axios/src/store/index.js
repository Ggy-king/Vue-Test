import { createStore } from 'vuex'
// import axios from 'axios';

export default createStore({
  state: {
    name:'dell'
  },
  mutations: {
    
    changeName(state,str) {
      state.name = str;
    }

  },
  // actions: {
  //   change() {
  //     this.commit('change')
  //   }

  // },
  modules: {
    // modules是对store更复杂的拆分
  }
})
