<template>
  <el-row class="data-list">
    <el-col
      ><el-table :data="state.data" stripe border style="width: 100%">
        <el-table-column fixed prop="id" label="编号" width="60" align="center" />
        <el-table-column prop="name" label="银行名称" width="180" align="left" />
        <el-table-column prop="recommandTag" label="推荐" width="80" align="center">
          <template #default="scope" align="center">
            <div style="display: flex; align-items: center" align="center">
              <el-icon><timer /></el-icon>
              <span style="margin-left: 10px">
                {{ scope.row.recommandTag }}
              </span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="settlementMethod"
          label="结算方式"
          width="120"
          align="center"
        />
        <el-table-column prop="orderType" label="报单方式" width="120" align="center" />
        <el-table-column prop="logo" label="Logo" width="120" align="center">
          <template #default="scope" align="center">
            <el-image
              style="width: 20px; height: 20px"
              :src="scope.row.logo"
              :preview-src-list="[scope.row.logo]"
              :initial-index="4"
              fit="cover"
            />
          </template>
        </el-table-column>
        <el-table-column prop="min" label="起兑积分" width="120" align="center" />
        <el-table-column
          prop="serviceNumber"
          label="微信服务号"
          width="120"
          align="center"
        />
        <el-table-column
          prop="allowApplyOrder"
          label="起兑次数"
          width="120"
          align="center"
        />
        <el-table-column
          prop="queryMethod"
          label="积分查询方法"
          width="600"
          align="center"
        />
        <el-table-column fixed="right" label="操作" width="120" align="center">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="handleClick(scope.row)"
              >详情</el-button
            >
            <el-button link type="primary" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table></el-col
    >
  </el-row>
  <el-row class="data-pag">
    <el-col>
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="50"
        class="mt-4"
      />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import BankEntity from "../entity/BankEntity";
import { list } from "../api/bank.api";
const router = useRouter();
const [state, load] = list;

load();

const handleClick = (d: BankEntity) => {
  router.push(`/bank/detail/${d.id}`);
  console.log("click");
};

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
  },
];
</script>
<style lang="scss" scoped>
.data-pag {
  margin-top: 10px;
}
</style>
