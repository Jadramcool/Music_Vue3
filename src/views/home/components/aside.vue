<template>
  <div class="asideHead">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      :default-active="nowIndex"
      text-color="#fff"
      :router="true"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="/homeIndex">首页</el-menu-item>
      <el-sub-menu v-for="subMenu in asideSchema" :key="subMenu.id" :index="subMenu.id">
        <template #title>
          <span>{{ subMenu.name }}</span>
        </template>
        <template v-for="item in subMenu.children" :key="item.id">
          <el-menu-item v-if="item.index" :index="item.index">{{ item.name }}</el-menu-item>
          <el-sub-menu v-else :index="item.id">
            <template #title>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="childrenItem in item.children" :key="childrenItem.id" :index="childrenItem.index">{{
              childrenItem.name
            }}</el-menu-item>
          </el-sub-menu>
        </template>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import asideSchema from './schema';

const route = useRoute();
// 刷新后定位该路由的导航
const nowIndex = ref<string>();
nowIndex.value = route.fullPath;
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.asideHead {
  background-color: #545c64;
  padding: 5px;
}
</style>
