import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// store 是 vuex创建的数据库
createApp(App).use(store).use(router).mount('#app')
