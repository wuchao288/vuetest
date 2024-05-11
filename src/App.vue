<template>
    <div class="nav">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
    </div>
    <div class="show">
      <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup>

import { RouterView,RouterLink } from 'vue-router';
</script>

<style scoped>
.eeee{
    background-color: aqua;
}
</style>