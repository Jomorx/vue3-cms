import { ILoginState } from '@/store/login/types'

class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    // obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

const localCache = new LocalCache()
export function loadCache(
  this: ILoginState,
  ...args: Array<keyof ILoginState>
) {
  for (const key of args) {
    this[key] = localCache.getCache(key) ?? null
  }
}
export default localCache
