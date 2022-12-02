export interface IUserItem {
  id: number
  name: string
  realname: string
  cellphone: any
  enable: number
  departmentId: number
  roleId: number
  createAt: Date
  updateAt: Date
}

export interface IUserList {
  list: IUserItem[]
  totalCount: number
}
