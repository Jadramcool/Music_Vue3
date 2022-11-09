<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="240px"><Aside class="aside"></Aside></el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Aside from './components/aside.vue';
</script>
<style lang="scss" scoped>
.aside {
  height: 100vh;
}
</style>
