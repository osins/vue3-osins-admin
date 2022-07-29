<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">拉新吧LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="2">
      <template #title>我的</template>
      <el-menu-item index="2-1">基本信息</el-menu-item>
      <el-menu-item index="2-2">修改密码</el-menu-item>
      <el-menu-item index="2-3">系统设置</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
.el-menu--popup {
  min-width: 80px;
}
</style>
