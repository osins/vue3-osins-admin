<template>
  <div class="common-layout">
    <el-container>
      <el-header><fbe-header /></el-header>
      <el-container>
        <fbe-left />
        <el-container>
          <el-main><router-view></router-view></el-main>
          <el-footer><fbe-footer /></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup></script>
