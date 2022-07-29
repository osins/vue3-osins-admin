<template>
  <el-radio-group v-model="selected">
    <el-radio
      v-for="(v, i) in options"
      :key="i"
      :label="i"
      name="settlementMethods"
      @click="chagne(i)"
    >
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

const emit = defineEmits<{
  (e: "change", id: any): void;
  (e: "update:selected", value: any): void;
}>();

const chagne = (val: any) => {
  console.log("val: ", val);
  emit("update:selected", val);
};
</script>
