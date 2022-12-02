import { ComponentCustomProperties } from '@vue/runtime-core'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: {
      formatTime: (value: string) => string
    }
  }
}
export default ComponentCustomProperties
