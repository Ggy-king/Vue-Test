<template>
  <div>
    <input v-model="inputValue">
    <button class="but" @click="handleAddItem">提交</button>
  </div>
  <ul>
    <list-item
    v-for="(item,index) in list"
    :key="index"
    :msg="item"
    />
  </ul>
</template>

<script>
import {reactive,ref} from 'vue';
import ListItem from './components/List.vue'

export default {
  name: 'App',
  // 接收组件
  components:{ListItem},
  setup(){
    const inputValue = ref('')
    const list = reactive([]);

    const handleAddItem = () => {
      list.push(inputValue.value);
      inputValue.value = '';
    }
    return{list,inputValue,handleAddItem}
  }
  
}
</script>

<style>
/* 如果你在子组件中定义相同css名称 则也会起效果 */
.but{
  margin-left: 20px;
  color: rebeccapurple;
  font-weight: bold;
}
</style>
