<template>
  <div class="page-content">
    <mo-table
      :propList="contentTableConfig.propList"
      :show-index-column="contentTableConfig.showIndexColumn!"
      :show-select-column="contentTableConfig.showSelectColumn!"
      :title="contentTableConfig.title"
      :list-count="listCount"
      :listData="listData"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button :icon="Plus">新建</el-button>
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
import { Edit, Delete, Plus } from '@element-plus/icons-vue'
import {
  defineProps,
  withDefaults,
  computed,
  defineExpose,
  ref,
  watch
} from 'vue'
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
//
const pageInfo = ref({ pageSize: 10, currentPage: 0 })
const getPageData = (searchInfo?: any) => {
  systemStore.getPageListAction({
    pageName: props.pageName,
    queryInfo: {
      offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...searchInfo
    }
  })
}
//监听pageInfo信息的改变发送请求
watch(pageInfo, () => getPageData())

getPageData()
defineExpose({ getPageData })
const listData = computed(() => systemStore[`${props.pageName}List`])
const listCount = computed(() => systemStore[`${props.pageName}Count`])
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
