<template>
  <h1>{{ counter }}</h1>
  <button @click="increment()">increment</button>
  <button @click="decrement()">decrement</button>
  <button @click="add(5)">add</button>

  <h1>Double:{{ doubleCount }}</h1>
  <h2>{{ nameStore.name }}</h2>
  <button @click="changeName">changeName</button>
  <router-view> </router-view>
</template>

<script lang="ts" setup>
import { useCounterStore, useNameStore } from '@/store'
import { toRefs } from 'vue'
const { counter, increment, decrement, add, doubleCount } = toRefs(
  useCounterStore()
)
const nameStore = useNameStore()
const changeName = () => (nameStore.name = 'mo')
</script>

<style lang="less"></style>
