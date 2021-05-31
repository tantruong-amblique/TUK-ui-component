import React from 'react'
import OnGrayVer from './on_gray'
import SimpNavVer from './simple'
import NavWB from './with_badges'
import NavIC from './with_icons'
import NavWIB from './with_icons_and_badges'
import NavSB from './with_secondary_navigation'

const VerticalNavigation = () => {
  return (
    <>
      <div className="text-4xl animate-pulse m-3 font-semibold">
        Vertical Navigation
      </div>
      <div className="text-xl animate-bounce  m-3 font-semibold">on_gray</div>
      <OnGrayVer />
      <div className="text-xl animate-bounce  m-3 font-semibold">simple</div>
      <SimpNavVer />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_badges
      </div>
      <NavWB />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_icons_and_badges
      </div>
      <NavWIB />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_icons
      </div>
      <NavIC />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_secondary_navigation
      </div>
      <NavSB />
    </>
  )
}

export default VerticalNavigation
