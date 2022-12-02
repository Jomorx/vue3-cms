<template>
  <div class="page-search">
    <mo-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="Refresh">重置</el-button>
          <el-button type="primary" icon="Search">搜索</el-button>
        </div>
      </template>
    </mo-form>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import MoForm from '@/base-ui/form'

defineProps({
  searchFormConfig: {
    type: Object,
    reuqired: true
  }
})

const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
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
