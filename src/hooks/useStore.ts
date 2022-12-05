import { useSystemStore, useProductStore, useLoginStore } from '@/store'

export default (name: string) => {
  let store = null
  const systemStore = useSystemStore()
  const productStore = useProductStore()
  const loginStore = useLoginStore()
  switch (name) {
    case 'system':
      store = systemStore
      break
    case 'product': {
      store = productStore
      break
    }
    case 'login': {
      store = loginStore
      break
    }
  }
  return store
}
