import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'
import { defineStore } from 'pinia'

import { IDashboardState } from './types'
const useDashboardStore = defineStore<string, IDashboardState, any, any>(
  'dashboard',
  {
    state: () => ({
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }),

    actions: {
      async getDashboardDataAction() {
        const categoryCountResult = await getCategoryGoodsCount()
        // commit('changeCategoryGoodsCount', categoryCountResult.data)

        this.categoryGoodsCount = categoryCountResult.data
        const categorySaleResult = await getCategoryGoodsSale()
        // commit('changeCategoryGoodsSale', categorySaleResult.data)
        this.categoryGoodsSale = categorySaleResult.data
        const categoryFavorResult = await getCategoryGoodsFavor()
        // commit('changeCategoryGoodsFavor', categoryFavorResult.data)
        this.categoryGoodsFavor = categoryFavorResult.data
        const addressGoodsResult = await getAddressGoodsSale()
        // commit('changeAddressGoodsSale', addressGoodsResult.data)
        this.addressGoodsSale = addressGoodsResult.data
      }
    }
  }
)

export default useDashboardStore
