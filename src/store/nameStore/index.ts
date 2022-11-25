import { defineStore } from 'pinia'
type nameStoreType = {
  name: string
}
export const useNameStore = defineStore('name', {
  state: (): nameStoreType => {
    return {
      name: 'why'
    }
  }
})
