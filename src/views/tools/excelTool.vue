<template>
  <el-input v-model="inputValue" placeholder="Please input" />
  <el-button @click="submit">确认</el-button>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column v-for="(item, index) in column" :key="index" :prop="index + 1" :label="index + 1" width="100" />
  </el-table>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

onMounted(() => {
  submit();
});
const inputValue = ref<string>(''); // 输入值
const column = ref<string[]>([]); // 数组
const tableData = ref<object[]>([]);

const str = ref(
  'A相输入电压，B相输入电压，C相输入电压，输入电压，A相输出电压，B相输出电压，C相输出电压，输出电压，A相输入电流，B相输入电流，C相输入电流，输入电流，A相输出电流，B相输出电流，C相输出电流，输出电流，A相输入功率，B相输入功率，C相输入功率，输入功率，A相输出功率，B相输出功率，C相输出功率，输出功率，A相输出无功功率，B相输出无功功率，C相输出无功功率，输出无功功率，A相输出视在功率，B相输出视在功率，C相输出视在功率，输出视在功率，A相输出功率负载百分比，B相输出功率负载百分比，C相输出功率负载百分比，输出功率负载百分比，A相输入频率，B相输入频率，C相输入频率，输入频率，A相输出频率，B相输出频率，C相输出频率，输出频率，旁路A相电流，旁路B相电流，旁路C相电流，旁路电流，旁路A相电压，旁路B相电压，旁路C相电压，旁路电压，旁路A相频率，旁路B相频率，旁路C相频率，旁路频率，开关状态，运行模式，市电状态，电能，环境温度，正电池电压，负电池电压，电池温度，电池剩余电量，电池剩余时间，电池充放电状态，电池电压状态，供电方式，逆变器不同步，逆变器电压过高，旁路情况异常，电池低电压，电池高电压，电池熔丝断，主路频率异常，主路熔丝断，整流器过温，逆变器过温，风扇故障，逆变器过流，旁路过流，逆变器故障，电池接地故障，环境温度过高，电池需维护，电池温度过高',
);

const setTableData = () => {
  tableData.value.length = 0;
  const test: any = {};
  column.value.forEach((item: string, index: number) => {
    test[index + 1] = item;
  });
  tableData.value.push(test);
};
// 提交
const submit = () => {
  // inputValue.value = str.value;
  column.value = inputValue.value.split('，');
  setTableData();
  // console.log(column.value);
  // console.log(tableData.value);
  // console.log({ ...column.value });
};
</script>
