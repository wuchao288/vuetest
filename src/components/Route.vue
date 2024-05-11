<template>
    <div class="nav">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
    </div>
    <div class="show">
      <RouterView></RouterView>
    </div>
</template>
<script setup lang="ts" name="Route">
   import { RouterView } from 'vue-router';

</script>
<style scoped>
  .nav,.show {
    border: 1px solid red;
    width: 400px;
    margin-bottom: 10px;
   }
   .nav a {
    display: inline-block;
    width:100px;
   }
   .show {
    height: 400px;
    width: 400px;
   }
</style>