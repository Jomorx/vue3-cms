import { IPayload, IProductState } from './types'

import { defineStore } from 'pinia'
import { getPageListDataApi } from '@/service/main/system'

export const useProductStore = defineStore<
  string,
  IProductState,
  any,
  { getPageListAction: (payload: IPayload) => void }
>('product', {
  state: () => ({
    goodsList: [],
    goodsCount: 0
  }),
  actions: {
    async getPageListAction({ pageName, queryInfo }: IPayload) {
      const pageUrl = `/${pageName}/list`

      const pageResult = await getPageListDataApi(pageUrl, queryInfo)
      const { totalCount, list } = pageResult.data
      ;(this as any)[`${pageName}List`] = list
      ;(this as any)[`${pageName}Count`] = totalCount
    }
  }
})
