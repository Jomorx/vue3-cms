import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login'
import { defineStore } from 'pinia'
import { IAccountLoginPayload, ILoginAction, ILoginState } from './types'
import localCache, { loadCache } from '@/utils/cache'
import router from '@/router'
import { mapMenusToPermissions, pushMenu } from '@/utils/map-menus'
export const useLoginStore = defineStore<
  string,
  ILoginState,
  any,
  ILoginAction
>('login', {
  state: () => ({
    token: '',
    userInfo: null,
    userMenus: [],
    permissions: []
  }),
  getters: {},
  actions: {
    async accountLoginAction(payload: IAccountLoginPayload) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      // commit('changeToken', token)
      this.token = token
      localCache.setCache('token', token)

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      this.userMenus = userMenus

      localCache.setCache('userMenus', userMenus)
      pushMenu(this.userMenus)
      const permissions = mapMenusToPermissions(userMenus)
      this.permissions = permissions
      // 4.跳到首页
      router.push('/main')
    },
    loadLocalLogin() {
      loadCache.call(this, 'token', 'userInfo', 'userMenus')
      if (localCache.getCache('userMenus')) {
        pushMenu(this.userMenus)
        //获取权限
        this.permissions = mapMenusToPermissions(this.userMenus)
      }
    }
  }
})
