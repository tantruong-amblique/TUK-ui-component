import React from 'react'
import BrandWIB from './brand_with_icons__badges__and_profile_section'
import DarkWIB from './dark_with_icons__badges__and_profile_section'
import SimpleWIB from './simple_with_icons_and_badges'
import SimpleWIBC from './simple_with_icons_and_brand_color'
import SimpleWIC from './simple_with_icons__badges__and_profile_section'
import WithES from './with_expandable_sections'
import WithIES from './with_icons_and_expandable_sections'
import WithSNC from './with_secondary_navigation'

const SideNav = () => {
  return (
    <>
      <BrandWIB />
      <DarkWIB />
      <SimpleWIC />
      <SimpleWIB />
      <SimpleWIBC />
      <WithES />
      <WithIES />
      <WithSNC />
    </>
  )
}

export default SideNav
