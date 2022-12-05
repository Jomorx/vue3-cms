import useStore from '@/hooks/useStore'

export function usePermission(pageName: string, hanldeName: string) {
  const store = useStore('login')
  const permissions = store?.permissions
  const verifyPermission = `system:${pageName}:${hanldeName}`

  return !!permissions.find((item: string) => item === verifyPermission)
}
