<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @search-btn-click="handleSearchClick"
      @reset-btn-click="handleResetClick"
    />
    <PageContent
      :contentTableConfig="contentConfig"
      pageName="users"
      ref="pageContentRef"
      store-name="system"
      @new-btn-click="handleNewData"
      @editBtnClick="handleEditData"
    />
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigRef"
      store-name="system"
    ></page-modal>
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import contentConfig from './config/content.config'
import usePageSearch from '@/hooks/usePageSearch'
import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'
import useStore from '@/hooks/useStore'
import { computed } from 'vue'

const { pageContentRef, handleResetClick, handleSearchClick } = usePageSearch()
// 1.处理密码的逻辑
const newCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = false
}
const editCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = true
}

// 2.动态添加部门和角色列表
const store = useStore('index')
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find(
    (item) => item.field === 'departmentId'
  )
  departmentItem!.options = store?.entireDepartment.map((item: any) => {
    return { title: item.name, value: item.id }
  })
  const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
  roleItem!.options = store?.entireRole.map((item: any) => {
    return { title: item.name, value: item.id }
  })
  return modalConfig
})
// 3.调用hook获取公共变量和函数
const { pageModalRef, defaultInfo, handleNewData, handleEditData } =
  usePageModal(newCallback, editCallback)
</script>

<style scoped></style>
