<template>
  <div class="page-content">
    <mo-table
      v-bind="contentTableConfig"
      :list-count="listCount ?? listData.length"
      :listData="listData"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button v-if="isCreate" :icon="Plus">新建</el-button>
      </template>
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
          <el-button v-if="isUpdate" :icon="Edit" size="small" link
            >编辑</el-button
          >
          <el-button v-if="isDelete" :icon="Delete" size="small" link
            >删除</el-button
          >
        </div>
      </template>
      <!--插入剩余插槽-->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
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
import useStore from '@/hooks/useStore'
import { IPropItem } from '../types'
import { usePermission } from '@/hooks/use-permission'
const props = withDefaults(
  defineProps<{
    contentTableConfig: {
      propList: IPropItem[]
      showSelectColumn?: boolean
      showIndexColumn?: boolean
      title: string
      childrenProps?: object
      showFooter?: boolean
    }
    pageName: string
    storeName: string
  }>(),
  {
    contentTableConfig: () => ({
      showSelectColumn: false,
      propList: [],
      showIndexColumn: false,
      title: '',
      childrenProps: () => ({}),
      showFooter: true
    })
  }
)
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isDelete = usePermission(props.pageName, 'delete')
const isQuery = usePermission(props.pageName, 'query')
const store = useStore(props.storeName)
//双向绑定pageInfo
const pageInfo = ref({ pageSize: 10, currentPage: 1 })
//发送网络请求
const getPageData = (searchInfo?: any) => {
  if (!isQuery) return
  store!.getPageListAction({
    pageName: props.pageName,
    queryInfo: {
      offset:
        pageInfo.value.currentPage * pageInfo.value.pageSize -
        pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...searchInfo
    }
  })
}
//监听pageInfo信息的改变发送请求
watch(pageInfo, () => getPageData())

getPageData()
defineExpose({ getPageData })
// 从pinia获取数据
const listData = computed(() => store![`${props.pageName}List`])
const listCount = computed(() => store![`${props.pageName}Count`])
// 4.获取其他的动态插槽名称
const otherPropSlots: any[] = props.contentTableConfig?.propList.filter(
  (item: any) => {
    if (item.slotName === 'status') return false
    if (item.slotName === 'createAt') return false
    if (item.slotName === 'updateAt') return false
    if (item.slotName === 'handler') return false
    if (!item.slotName) return false
    return true
  }
)
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
