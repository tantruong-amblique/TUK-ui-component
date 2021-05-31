import React from 'react'
import ButtonOne from './basic'
import ButtonTwo from './icon_only'
import ButtonThree from './with_checkbox_and_dropdown'
import ButtonFour from './with_dropdown'
import ButtonFive from './with_stat'

const ButtonGroupsIcon = () => {
  return (
    <div>
      <div className="text-4xl animate-pulse m-3 font-semibold">
        Button Group
      </div>
      <div className="text-xl animate-bounce  m-3 font-semibold">basic</div>
      <ButtonOne />
      <div className="text-xl animate-bounce  m-3 font-semibold">icon_only</div>
      <ButtonTwo />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_checkbox_and_dropdown
      </div>
      <ButtonThree />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_dropdown
      </div>
      <ButtonFour />
      <div className="text-xl animate-bounce  m-3 font-semibold">with_stat</div>
      <ButtonFive />
    </div>
  )
}

export default ButtonGroupsIcon
