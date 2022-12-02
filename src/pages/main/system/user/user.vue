<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <mo-table :propList="propList" :listData="userList">
        <template #status="scope">
          <el-button
            size="mini"
            :type="scope.row.enable ? 'success' : 'danger'"
            >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
          >
        </template>
        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
        </template>
      </mo-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import { ref, computed } from 'vue'
import { searchFormConfig } from './config/search.config'
import useSystemStore from '@/store/main/system'
import MoTable from '@/base-ui/table'
import { propList } from './config/table.config'
const systemStore = useSystemStore()
systemStore.getPageListAction({
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})
const userList = computed(() => systemStore.userList)
const userCount = computed(() => systemStore.userCount)

const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
