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
    <div className="text-4xl animate-pulse m-3 font-semibold">
    Select Menus
       </div>
   <div className="text-xl animate-bounce  m-3 font-semibold">
   branded_with_supported_text
   </div>
      <SelectOne />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      custom_with_avatar
      </div>
      <SelectTwo />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      custom_with_check_on_left
      </div>
      <SelectThree />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      custom_with_status_indicator
      </div>
      <SelectFour />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      simple_custom
      </div>
      <SelectFive />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      simple_native
      </div>
      <SelectSix />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_secondary_text
      </div>
      <SelectSeven />
    </>
  )
}

export default SelectMenus
