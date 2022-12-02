import { IUserItem } from '@/service/main/system/types'

export interface ISystemState {
  userList: IUserItem[]
  userCount: number
}
export interface IPayload {
  pageUrl: string
  pageInfo: IPageInfo
}
export interface IPageInfo {
  offset: number
  size: number
}
