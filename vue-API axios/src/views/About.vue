<template>
  <div class="about">
    <h1 @click="handleClick">这里是about页</h1>
    <h1>{{name}}</h1>
  </div>
</template>

<script>
import { toRefs } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'Home',
  setup() {
    const store = useStore();
    const { name } = toRefs(store.state);
    const handleClick = () => {
      store.commit('changeName','hello world')
    }
    return { name,handleClick }
  }

}
</script>