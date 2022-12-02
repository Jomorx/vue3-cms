<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <mo-table
        :propList="propList"
        :listData="userList"
        show-index-column
        show-select-column
      >
        <template #status="scope">
          <el-button
            plain
            size="small"
            :type="scope.row.enable ? 'success' : 'danger'"
            >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
          >
        </template>
        <template #createAt="scope">
          <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
        </template>
        <template #handler>
          <div class="handle-btns">
            <el-button :icon="Edit" size="mini" type="text">编辑</el-button>
            <el-button :icon="Delete" size="mini" type="text">删除</el-button>
          </div>
        </template>
      </mo-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Edit, Delete } from '@element-plus/icons-vue'
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
