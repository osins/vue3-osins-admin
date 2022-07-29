<template>
  <el-radio-group v-model="selected">
    <el-radio v-for="(v, i) in options" :key="i" :label="i" name="settlementMethods">
      {{ v }}
    </el-radio>
  </el-radio-group>
</template>
<script lang="ts" setup>
interface Props {
  selected: any;
  options: any[];
}
const { selected, options } = defineProps<Props>();
</script>
