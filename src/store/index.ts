import useStore from '@/hooks/useStore'
import { getPageListDataApi } from '@/service/main/system'
import { defineStore } from 'pinia'

export const useIndexStore = defineStore<
  string,
  { entireDepartment: any[]; entireRole: any[] },
  any,
  any
>('index', {
  state: () => ({
    name: 'coderwhy',
    age: 18,
    entireDepartment: [],
    entireRole: [],
    entireMenu: []
  }),
  actions: {
    async getInitialDataAction() {
      // 1.请求部门和角色数据
      const departmentResult = await getPageListDataApi('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListDataApi('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      const menuResult = await getPageListDataApi('/menu/list', {})
      const { list: menuList } = menuResult.data
      // 2.保存数据
      this.entireDepartment = departmentList
      this.entireRole = roleList
      this.entireMenu = menuList
    }
  }
})

export * from './login'
export * from './main/system'
export * from './main/product'

export function setUpStore() {
  const loginStore = useStore('login')
  loginStore?.loadLocalLogin()
  const indexStore = useIndexStore()
  indexStore.getInitialDataAction()
}
