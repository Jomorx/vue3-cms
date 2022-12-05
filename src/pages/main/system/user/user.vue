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
    />
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import contentConfig from './config/content.config'
import usePageSearch from '@/hooks/usePageSearch'
const { pageContentRef, handleResetClick, handleSearchClick } = usePageSearch()
const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>

<style scoped></style>
