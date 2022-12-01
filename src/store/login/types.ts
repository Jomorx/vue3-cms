export interface IAccountLoginPayload {
  name: string
  password: string
}

export interface ILoginState {
  token: string
  userInfo: UserInfo | null
  userMenus: MenuItem[]
}
//菜单
export interface MenuItem {
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  children: Children[]
}
//二级菜单
export interface Children {
  id: number
  url: string
  name: string
  sort: number
  type: number
  children?: Children2[]
  parentId: number
  icon: string
}

export interface Children2 {
  id: number
  url: string
  name: string
  sort: any
  type: number
  parentId: number
  permission: string
}
//用户信息
export interface UserInfo {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
  role: Role
  department: Department
}
//用户权限信息
export interface Role {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}
//用户职位信息
export interface Department {
  id: number
  name: string
  parentId?: number
  createAt: Date
  updateAt: Date
  leader: string
}
