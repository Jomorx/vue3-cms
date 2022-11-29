<template>
  <div class="nav-header">
    <el-icon style="cursor: pointer" class="fold-menu">
      <Expand v-if="isFold" @click="handleFoldClick" />
      <Fold v-else @click="handleFoldClick" />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['foldChange'])
const isFold = ref<boolean>(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
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
