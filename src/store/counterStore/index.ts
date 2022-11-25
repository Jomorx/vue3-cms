import { defineStore } from 'pinia'
type counterStoreType = {
  counter: number
}
export const useCounterStore = defineStore('count', {
  state: (): counterStoreType => {
    return {
      counter: 0
    }
  },
  getters: {
    doubleCount(state) {
      return state.counter * 2
    }
  },
  actions: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
    async add(payload: number) {
      this.counter += payload
    }
  }
})
