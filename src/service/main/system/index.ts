import moRequest from '@/service'
import { IDataType } from '@/service/types'
import { IUserList } from './types'
export const getPageListDataApi = (pageUrl: string, queryInfo: object) =>
  moRequest.post<IDataType<IUserList>>(pageUrl, { data: queryInfo })
