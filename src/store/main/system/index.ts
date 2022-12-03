import { IPayload, ISystemState } from './types'

import { defineStore } from 'pinia'
import { getPageListDataApi } from '@/service/main/system'

const useSystemStore = defineStore<
  string,
  ISystemState,
  any,
  { getPageListAction: (payload: IPayload) => void }
>('system', {
  state: () => ({
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0
  }),
  actions: {
    async getPageListAction({ pageName, queryInfo }: IPayload) {
      const pageUrl = `/${pageName}/list`

      const pageResult = await getPageListDataApi(pageUrl, queryInfo)
      const { totalCount, list } = pageResult.data
      ;(this as any)[`${pageName}List`] = list
      ;(this as any)[`${pageName}Count`] = totalCount
      // switch (pageName) {
      //   case 'users': {
      //     this.usersList = list
      //     this.usersCount = totalCount
      //     break
      //   }
      //   case 'role': {
      //     this.roleList = list
      //     this.roleCount = totalCount
      //     break
      //   }
      // }
    }
  }
})

export default useSystemStore
