import {
  useSystemStore,
  useProductStore,
  useLoginStore,
  useIndexStore
} from '@/store'
import useDashboardStore from '@/store/main/analysis/dashboard'

export default (name: string) => {
  let store = null
  const systemStore = useSystemStore()
  const productStore = useProductStore()
  const loginStore = useLoginStore()
  const indexStore = useIndexStore()
  const dashboardStore = useDashboardStore()
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
    case 'dashboard': {
      store = dashboardStore
      break
    }
  }
  return store
}
