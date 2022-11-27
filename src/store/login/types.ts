export interface IAccountLoginPayload {
  name: string
  password: string
}

export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}
