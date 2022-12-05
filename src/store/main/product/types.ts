import { IUserItem } from '@/service/main/system/types'

export interface IProductState {
  goodsList: any[]
  goodsCount: number
}
export interface IPayload {
  pageName: string
  queryInfo: IQueryInfo
}
export interface IQueryInfo {
  offset: number
  size: number
}
