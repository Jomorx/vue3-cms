<template>
  <div class="nav-header">
    <el-icon style="cursor: pointer">
      <IEpExpand v-if="isFold" @click="handleFoldClick" />
      <IEpFold v-else @click="handleFoldClick" />
    </el-icon>
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
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
