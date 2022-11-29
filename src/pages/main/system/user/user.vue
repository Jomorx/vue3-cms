<template>
  <div class="user">
    <hy-form v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import HyForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
</script>

<style scoped></style>
