import { IUserItem } from '@/service/main/system/types'

export interface ISystemState {
  usersList: IUserItem[]
  usersCount: number
  roleList: any[]
  roleCount: number
}
export interface IPayload {
  pageName: string
  queryInfo: IQueryInfo
}
export interface IQueryInfo {
  offset: number
  size: number
}
