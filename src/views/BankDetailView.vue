<template>
  <el-form :model="state.data" label-width="120px">
    <el-form-item :label="t('entity.bank.name')">
      <el-input v-model="state.data.name" />
    </el-form-item>
    <el-form-item :label="t('entity.bank.recommandTag')">
      <el-switch v-model="state.data.recommand" />
    </el-form-item>
    <el-form-item :label="t('entity.bank.settlementMethod')">
      <fbe-radio-group
        :selected="state.data.settlementMethod"
        :options="settlementMethods"
      />
    </el-form-item>
    <el-form-item :label="t('entity.bank.orderType')">
      <fbe-radio-group :selected="state.data.orderType" :options="orderTypes" />
    </el-form-item>
    <el-form-item :label="t('entity.bank.logo')">
      <el-image :src="state.data.logo" />
    </el-form-item>
    <el-form-item :label="t('entity.bank.min')">
      <el-input-number v-model="state.data.min" :min="1" :max="10000000" />
    </el-form-item>
    <el-form-item :label="t('entity.bank.serviceNumber')">
      <el-input v-model="state.data.serviceNumber" />
    </el-form-item>
    <el-form-item :label="t('entity.bank.allowApplyOrder')">
      <el-input-number v-model="state.data.allowApplyOrder" :min="1" :max="10000000" />
    </el-form-item>
    <el-form-item :label="t('entity.bank.queryMethod')">
      <el-input v-model="state.data.queryMethod" type="textarea" />
    </el-form-item>
    <el-form-item :label="t('entity.bank.memo')">
      <editor
        api-key="skr19tufh817119zwpebraqg5z7eop3m2gn4tp81cervkst4"
        :init="{
          height: 500,
          width: '100%',
          menubar: false,
          language: 'zh_CN',
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | image | removeformat | help',
        }"
        v-model="state.data.memo"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import Editor from "@tinymce/tinymce-vue";
import { useRoute } from "vue-router";
import { detail } from "../api/bank.api";
import { settlementMethods, orderTypes } from "../constants/settings";
const { locale, t } = useI18n({
  inheritLocale: true,
  useScope: "global",
});

console.log("locale:", locale.value);

const [state, load] = detail;
// do not use same name with ref

const router = useRoute();
console.log("router: ", router);
console.log("router params: ", router.params.id);

load({
  params: {
    id: router.params.id,
  },
});

const formater = (val: string) => {
  console.log(val);
  //   val.data = val.data?.replaceAll(/\D/gi, "");
  //   return val;
};

const onSubmit = () => {
  console.log(state.data);
};
</script>
