<template>
  <div class="page-content">
    <mo-table
      :propList="contentTableConfig.propList"
      :listData="listData"
      :show-index-column="contentTableConfig.showIndexColumn!"
      :show-select-column="contentTableConfig.showSelectColumn!"
      :title="contentTableConfig.title"
    >
      <template #headerHandler>
        <el-button>新建用户</el-button>
      </template>
      <template #enable="scope">
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
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            :icon="Edit"
            size="small"
            @click="handleEditClick(scope)"
            link
            >编辑</el-button
          >
          <el-button :icon="Delete" size="small" link>删除</el-button>
        </div>
      </template>
    </mo-table>
  </div>
</template>

<script lang="ts" setup>
import MoTable from '@/base-ui/table'
import { Edit, Delete } from '@element-plus/icons-vue'
import { defineProps, withDefaults, computed } from 'vue'
import useSystemStore from '@/store/main/system'

const props = withDefaults(
  defineProps<{
    contentTableConfig: {
      propList: object
      showSelectColumn?: boolean
      showIndexColumn?: boolean
      title: string
    }
    pageName: string
  }>(),
  {
    contentTableConfig: () => ({
      showSelectColumn: false,
      propList: {},
      showIndexColumn: false,
      title: ''
    })
  }
)

const systemStore = useSystemStore()
systemStore.getPageListAction({
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 10
  }
})
const listData = computed(() => systemStore[`${props.pageName}List`])
const handleEditClick = (scope: any) => {
  console.log(scope)
}
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
