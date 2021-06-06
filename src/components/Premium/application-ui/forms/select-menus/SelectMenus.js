import React from 'react'
import SelectOne from './branded_with_supported_text'
import SelectTwo from './custom_with_avatar'
import SelectThree from './custom_with_check_on_left'
import SelectFour from './custom_with_status_indicator'
import SelectFive from './simple_custom'
import SelectSix from './simple_native'
import SelectSeven from './with_secondary_text'

const SelectMenus = () => {
  return (
    <>
      <SelectOne />
      <SelectTwo />
      <SelectThree />
      <SelectFour />
      <SelectFive />
      <SelectSix />
      <SelectSeven />
    </>
  )
}

export default SelectMenus
