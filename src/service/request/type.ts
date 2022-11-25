import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface MORequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface MORequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MORequestInterceptors<T>
  showLoading?: boolean
}
