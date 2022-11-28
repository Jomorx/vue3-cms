const transformIcon = (name: string) => {
  const names = name.split('-')
  const iconName = names.slice(2)
  // const final = iconName[0].toUpperCase() + iconName.slice(1, iconName.length)item
  iconName.forEach((item, index, arr) => {
    arr[index] =
      arr[index][0].toUpperCase() + arr[index].slice(1, arr[index].length)
  })

  return iconName.join('')
}
export default transformIcon
