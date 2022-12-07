<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @search-btn-click="handleSearchClick"
      @reset-btn-click="handleResetClick"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      store-name="system"
      ref="pageContentRef"
      @new-btn-click="handleNewData"
      @edit-btn-click="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :default-info="defaultInfo"
      :modal-config="modalConfig"
      page-name="role"
      store-name="system"
      :other-info="otherInfo"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import usePageSearch from '@/hooks/usePageSearch'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '../../../../hooks/use-page-modal'
import useStore from '@/hooks/useStore'
import { computed, nextTick, ref } from 'vue'
import { ElTree } from 'element-plus'
import { menuMapLeafKeys } from '@/utils'
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const editCallback = (item: any) => {
  const leafKeys = menuMapLeafKeys(item.menuList)
  nextTick(() => {
    console.log(elTreeRef.value)
    elTreeRef.value?.setCheckedKeys(leafKeys, false)
  })
}
const { pageContentRef, handleResetClick, handleSearchClick } = usePageSearch()
const { pageModalRef, defaultInfo, handleNewData, handleEditData } =
  usePageModal(undefined, editCallback)

const store = useStore('index')
const menus = computed(() => store?.entireMenu)
const otherInfo = ref({})
const handleCheckChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList }
}
</script>

<style scoped>
.menu-tree {
  margin-left: 25px;
}
</style>
