type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: string
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  //表单列的layout
  colLayout?: {
    xl?: number // >1920px 4个
    lg?: number
    md?: number
    sm?: number
    xs?: number
    span?: number
  }
  itemLayout?: any
}
