import moRequest from '@/service'
import { IDataType } from '@/service/types'
import { IUserList } from './types'
export const getPageListDataApi = (pageUrl: string, queryInfo: object) =>
  moRequest.post<IDataType<IUserList>>(pageUrl, { data: queryInfo })

export const deletePageData = (url: string) => moRequest.delete<IDataType>(url)

export const createPageData = (url: string, newData: any) =>
  moRequest.post<IDataType>(url, {
    data: newData
  })

export const editPageData = (url: string, editData: any) =>
  moRequest.patch<IDataType>(url, {
    data: editData
  })
