import { defineStore } from 'pinia'

export const useLoginStore = defineStore('counter', {
  state: () => ({
    token: '',
    userInfo: {},
    userMenus: []
  }),
  getters: {},
  actions: {
    async accountLoginAction() {},
    loadLocalLogin() {}
  }
})
