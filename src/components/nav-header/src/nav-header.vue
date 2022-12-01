<template>
  <div class="nav-header">
    <el-icon style="cursor: pointer" class="fold-menu">
      <Expand v-if="isFold" @click="handleFoldClick" />
      <Fold v-else @click="handleFoldClick" />
    </el-icon>
    <div class="content">
      <mo-breadcrumb :breadcrumbs="breadcrumbs" />

      <user-info />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref, computed } from 'vue'
import { useLoginStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils'
import moBreadcrumb from '@/base-ui/breadcrumb'

const emit = defineEmits(['foldChange'])
const isFold = ref<boolean>(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

//面包屑
const store = useLoginStore()
const breadcrumbs = computed(() => {
  const userMenus = store.userMenus
  const route = useRoute()
  const currentPath = route.path
  return pathMapBreadcrumbs(userMenus, currentPath)
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
