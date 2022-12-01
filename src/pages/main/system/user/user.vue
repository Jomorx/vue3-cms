<template>
  <div class="user">
    <hy-form v-bind="searchFormConfig" v-model="formData" />
    <button @click="handleClick">submit</button>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import HyForm from '@/base-ui/form'
import { ref } from 'vue'
import { searchFormConfig } from './config/search.config'
const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
const handleClick = () => {
  console.log(formData.value)
}
</script>

<style scoped></style>
