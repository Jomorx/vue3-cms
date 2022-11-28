export interface IAccountLoginPayload {
  name: string
  password: string
}

export interface ILoginState {
  token: string
  userInfo: any
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
  url: any
  name: string
  sort: any
  type: number
  parentId: number
  permission: string
}
