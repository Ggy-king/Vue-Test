<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <h1>compositionAPI中使用vuex</h1>
  <h1>axios请求</h1>
</template>

<script>
import axios from 'axios';
import { toRefs } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'Home',
  setup() {
    axios.get('https://www.fastmock.site/mock/c28efefafcecfed2eb8bd2750d144cea/weixin/api/getDate')
      .then(res => {
      console.log(res);
    })
    const store = useStore();
    const { name } = toRefs(store.state)
    return { name }
  }
  
}
</script>
