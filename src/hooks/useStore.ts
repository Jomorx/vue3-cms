import {
  useSystemStore,
  useProductStore,
  useLoginStore,
  useIndexStore
} from '@/store'

export default (name: string) => {
  let store = null
  const systemStore = useSystemStore()
  const productStore = useProductStore()
  const loginStore = useLoginStore()
  const indexStore = useIndexStore()
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
    case 'index': {
      store = indexStore
      break
    }
  }
  return store
}
