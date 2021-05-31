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
      <div className="text-4xl animate-pulse m-3 font-semibold">
        Sidebar Navigation
      </div>
      <div className="text-xl animate-bounce  m-3 font-semibold">
        brand_with_icons__badges__and_profile_section
      </div>
      <BrandWIB />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        dark_with_icons__badges__and_profile_section
      </div>
      <DarkWIB />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        simple_with_icons_and_badges
      </div>
      <SimpleWIC />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        simple_with_icons_and_brand_color
      </div>
      <SimpleWIB />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        simple_with_icons_and_brand_color
      </div>
      <SimpleWIBC />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_expandable_sections
      </div>
      <WithES />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_icons_and_expandable_sections
      </div>
      <WithIES />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_secondary_navigation
      </div>
      <WithSNC />
    </>
  )
}

export default SideNav
