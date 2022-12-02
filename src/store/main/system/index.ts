import { IPayload, ISystemState } from './types'

import { defineStore } from 'pinia'
import { getPageListDataApi } from '@/service/main/system'

const useSystemStore = defineStore<
  string,
  ISystemState,
  any,
  { getPageListAction: (payload: any) => void }
>('system', {
  state: () => ({
    userList: [],
    userCount: 0
  }),
  actions: {
    async getPageListAction({ pageUrl, pageInfo }: IPayload) {
      const pageResult = await getPageListDataApi(pageUrl, pageInfo)
      const { totalCount, list } = pageResult.data
      this.userList = list
      this.userCount = totalCount
    }
  }
})

export default useSystemStore
