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
      <OnGrayVer />
      <SimpNavVer />
      <NavWB />
      <NavWIB />
      <NavIC />
      <NavSB />
    </>
  )
}

export default VerticalNavigation
