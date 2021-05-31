import React from 'react'
import DropDownsOne from './simple'
import DropDownsTwo from './with_dividers'
import DropDownsThree from './with_icons'
import DropDownsFour from './with_minimal_menu_icon'
import DropDownsFive from './with_simple_header'

const DropDwns = () => {
  return (
    <div>
      <div className="text-4xl animate-pulse m-3 font-semibold">Dropdowns</div>
      <div className="text-xl animate-bounce  m-3 font-semibold">simple</div>
      <DropDownsOne />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_icons
      </div>
      <DropDownsTwo />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_icons
      </div>
      <DropDownsThree />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_minimal_menu_icon
      </div>
      <DropDownsFour />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_simple_header
      </div>
      <DropDownsFive />
    </div>
  )
}

export default DropDwns
