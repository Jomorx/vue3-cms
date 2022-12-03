<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <PageContent :contentTableConfig="contentConfig" pageName="users" />
  </div>
</template>

<script lang="ts" setup>
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { ref, computed } from 'vue'
import { searchFormConfig } from './config/search.config'
import contentConfig from './config/content.config'

const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>

<style scoped></style>
