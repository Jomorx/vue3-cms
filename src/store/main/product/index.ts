import { IPayload, IProductState } from './types'

import { defineStore } from 'pinia'
import {
  createPageData,
  deletePageData,
  editPageData,
  getPageListDataApi
} from '@/service/main/system'

export const useProductStore = defineStore<string, IProductState, any, any>(
  'product',
  {
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
      },
      async deletePageDataAction(payload: any) {
        // 1.获取pageName和id
        // pageName -> /users
        // id -> /users/id
        const { pageName, id } = payload
        const pageUrl = `/${pageName}/${id}`

        // 2.调用删除网络请求
        await deletePageData(pageUrl)

        // 3.重新请求最新的数据
        this.getPageListAction({
          pageName,
          queryInfo: {
            offset: 0,
            size: 10
          }
        })
      },

      async createPageDataAction(payload: any) {
        // 1.创建数据的请求
        const { pageName, newData } = payload
        const pageUrl = `/${pageName}`
        await createPageData(pageUrl, newData)

        // 2.请求最新的数据
        this.getPageListAction({
          pageName,
          queryInfo: {
            offset: 0,
            size: 10
          }
        })
      },

      async editPageDataAction(payload: any) {
        // 1.编辑数据的请求
        const { pageName, editData, id } = payload
        console.log(editData)
        const pageUrl = `/${pageName}/${id}`
        await editPageData(pageUrl, editData)

        // 2.请求最新的数据
        this.getPageListAction({
          pageName,
          queryInfo: {
            offset: 0,
            size: 10
          }
        })
      }
    }
  }
)
