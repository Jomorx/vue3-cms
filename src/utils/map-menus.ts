import { IBreadcrumb } from '@/base-ui/breadcrumb'
import router from '@/router'
import { ISubMenuItem, IMenuItem } from '@/store/login/types'
import { RouteRecordRaw } from 'vue-router'
// 第一个菜单
export let firstMenu: undefined | ISubMenuItem = undefined
// 动态生成菜单
export function mapMenusToRoutes(userMenus: IMenuItem[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: IMenuItem[] | ISubMenuItem[]) => {
    for (const menu of menus!) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu as ISubMenuItem
        }
      } else {
        _recurseGetRoute(menu.children as ISubMenuItem[])
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}
// 添加菜单
export const pushMenu = (menus: IMenuItem[]) => {
  const routes = mapMenusToRoutes(menus)
  routes.forEach((route) => {
    router.addRoute('main', route)
  })
  return routes
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permissions
}
