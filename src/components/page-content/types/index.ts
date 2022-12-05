export interface IPropItem {
  prop?: string
  label: string
  minWidth: string
  slotName?: string
}
export interface IOtherSlotProps extends IPropItem {
  slotName: string
}
