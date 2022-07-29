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
        v-model:selected="state.data.settlementMethod"
        :options="settlementMethods"
      />
    </el-form-item>
    <el-form-item :label="t('entity.bank.orderType')">
      <fbe-radio-group v-model:selected="state.data.orderType" :options="orderTypes" />
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
          images_upload_handler: imageUploadHandler,
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
import { settlementMethods, orderTypes, uploadSettings } from "../constants/settings";
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

const imageUploadHandler = (blobInfo: any, progress: any) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("POST", "http://127.0.0.1:8083/api/v1/upload/chunks");

    xhr.setRequestHeader(
      "x-fbe-token",
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJpZFwiOlwiYWNjZmRlN2EtNTdlOC00ZjQxLTg5MjMtNzJmY2U4MmJiZjRlXCIsXCJ1c2VybmFtZVwiOlwidGVzdFwiLFwiZW1haWxcIjpcInRlc3RAcXEuY29tXCIsXCJtb2JpbGVcIjpcIjE4MTAxODQ1NTM4XCIsXCJjcmVhdGVkQXRcIjpudWxsLFwidG9rZW5UeXBlXCI6XCJBQ0NFU1NcIn0iLCJuYmYiOjE2NTg5ODE3OTMsImV4cCI6MTY1OTI0MDk5MywiaWF0IjoxNjU4OTgxNzkzLCJqdGkiOiIxMjEwODcyMC05ZmVmLTQ4OTAtOTExNS03MDU1MzJjNzFhYWEifQ.b6f-eqHptCfo4C4u6v2dik6It0nh3JFJZZY7yZiWO4Y"
    );

    xhr.upload.onprogress = (e) => {
      progress((e.loaded / e.total) * 100);
    };

    xhr.onload = () => {
      if (xhr.status === 403) {
        reject({ message: "HTTP Error: " + xhr.status, remove: true });
        return;
      }

      if (xhr.status < 200 || xhr.status >= 300) {
        reject("HTTP Error: " + xhr.status);
        return;
      }

      console.log("responseText: ", xhr.responseText);

      try {
        const json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != "string") {
          // reject("Invalid JSON: " + xhr.responseText);
          resolve(uploadSettings.default_img_url);
          return;
        }

        console.log("respone json object: ", json);
        console.log("respone json location: ", json.location);
        resolve(json.location);
        return;
      } catch (e) {
        console.log("upload error:", e);
      }

      console.log("upload complete: {}", uploadSettings.default_img_url);
      resolve(uploadSettings.default_img_url);
    };

    xhr.onerror = () => {
      reject("Image upload failed due to a XHR Transport error. Code: " + xhr.status);
    };

    const formData = new FormData();
    formData.append("file", blobInfo.blob(), blobInfo.filename());
    formData.append("name", blobInfo.filename());
    formData.append("chunks", "1");
    formData.append("chunk", "1");

    console.log("upload form data: ", formData);

    xhr.send(formData);
  });
</script>
