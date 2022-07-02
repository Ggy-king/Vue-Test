<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <h1>{{this.$store.state.name}}</h1>
  <h2>dispatch和actions做关联</h2>
  <h2>commit和mutation做关联</h2>
</template>

<script>
export default {
  name: 'Home',
  
}
</script>
