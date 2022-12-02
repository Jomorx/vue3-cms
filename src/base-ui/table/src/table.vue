<template>
  <div class="hy-table">
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { IUserItem } from '@/service/main/system/types'
import { defineProps, defineEmits } from 'vue'
defineProps<{
  listData: Array<IUserItem>
  propList: any
  showIndexColumn: boolean
  showSelectColumn: boolean
}>()
const emit = defineEmits(['selectionChange'])
const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
}
</script>

<style scoped></style>
