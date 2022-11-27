<template>
  <h1>{{ counter }}</h1>
  <button @click="increment()">increment</button>
  <button @click="decrement()">decrement</button>
  <button @click="add(5)">add</button>

  <h1>Double:{{ doubleCount }}</h1>
  <h2>{{ nameStore.name }}</h2>
  <button @click="changeName">changeName</button>
  <el-button @click="sendRequest()">send request</el-button>
  <h1>{{ Math.random }}</h1>
</template>

<script lang="ts" setup>
import { useCounterStore, useNameStore } from '@/store'
import { toRefs } from 'vue'
import moRequest from '@/service'
const { counter, increment, decrement, add, doubleCount } = toRefs(
  useCounterStore()
)
const nameStore = useNameStore()
const changeName = () => (nameStore.name = 'mo')
const sendRequest = () => {
  moRequest.get('http://101.43.180.21:3000/article/getArticleList', {
    params: {
      currentPage: 1,
      pageSize: 10,
      searchText: ''
    }
  })
}
</script>

<style lang="less"></style>
