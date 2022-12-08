import moRequest from '../../index'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return moRequest.get(DashboardAPI.categoryGoodsCount)
}

export function getCategoryGoodsSale() {
  return moRequest.get(DashboardAPI.categoryGoodsSale)
}

export function getCategoryGoodsFavor() {
  return moRequest.get(DashboardAPI.categoryGoodsFavor)
}

export function getAddressGoodsSale() {
  return moRequest.get(DashboardAPI.addressGoodsSale)
}
