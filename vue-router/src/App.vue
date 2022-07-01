<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link>
  </div>
  <router-view/>
  <!-- 对应的改变在router index中 -->
</template>

<style>
</style>
