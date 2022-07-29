<template>
  <el-aside :width="isCollapse ? '64px' : '200px'">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :router="true"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="collapse" @click="isCollapse = !isCollapse">
        <template #title>
          <el-icon>
            <Expand v-if="isCollapse" />
            <Fold v-if="!isCollapse" />
          </el-icon>
        </template>
      </el-sub-menu>
      <el-sub-menu index="bank">
        <template #title>
          <el-icon><location /></el-icon>
          <span>管理银行</span>
        </template>
        <el-menu-item index="/bank/list"> 银行管理 </el-menu-item>
        <el-menu-item index="1-1">产品管理</el-menu-item>
        <el-menu-item index="1-2">商品管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>渠道管理</span>
        </template>
        <el-menu-item index="1-1">产品管理</el-menu-item>
        <el-menu-item index="1-2">商品管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><location /></el-icon>
          <span>代理管理</span>
        </template>
        <el-menu-item index="1-1">产品管理</el-menu-item>
        <el-menu-item index="1-2">商品管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon><location /></el-icon>
          <span>订单管理</span>
        </template>
        <el-menu-item index="1-1">产品管理</el-menu-item>
        <el-menu-item index="1-2">商品管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <el-icon><location /></el-icon>
          <span>提现管理</span>
        </template>
        <el-menu-item index="1-1">产品管理</el-menu-item>
        <el-menu-item index="1-2">商品管理</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";

const isCollapse = ref(true);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
