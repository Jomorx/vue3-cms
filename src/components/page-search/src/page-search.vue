<template>
  <div class="page-search">
    <mo-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button :icon="Refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" :icon="Search" @click="handleSearchClick"
            >搜索</el-button
          >
        </div>
      </template>
    </mo-form>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, defineEmits } from 'vue'
import MoForm from '@/base-ui/form'
import { Search, Refresh } from '@element-plus/icons-vue'
const emits = defineEmits(['resetBtnClick', 'searchBtnClick'])
const props = defineProps({
  searchFormConfig: {
    type: Object,
    require: true
  }
})
const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData)
const handleResetClick = () => {
  for (const key in formOriginData) {
    formData.value[`${key}`] = formOriginData[key]
  }
  emits('resetBtnClick')
}
const handleSearchClick = () => {
  // console.log('search')
  emits('searchBtnClick', formData.value)
}
</script>

<style scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
