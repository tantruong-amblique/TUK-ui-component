import React from 'react'
import BrandNWSF from './brand_nav_with_overlap_and_sidebar_form'
import BrandBread from './with_breadcrumbs_and_centered_form'
import BrandNCA from './with_sidebar_navigation_and_constrained_content_area'
import BrandSNTC from './with_sidebar_navigation_and_two_column_form'
import BrandSNTJ from './with_tiered_sidebar_navigation'

const SettingScreen = () => {
  return (
    <>
      <p>Hello World !</p>
      <div className="text-4xl animate-pulse m-3 font-semibold">
        Settings Screen
      </div>
      <div className="text-xl animate-bounce  m-3 font-semibold">
        brand_nav_with_overlap_and_sidebar_form
      </div>
      <BrandNWSF />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_breadcrumbs_and_centered_form
      </div>
      <BrandBread />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_sidebar_navigation_and_constrained_content_area
      </div>
      <BrandNCA />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_sidebar_navigation_and_two_column_form
      </div>
      <BrandSNTC />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_tiered_sidebar_navigation
      </div>
      <BrandSNTJ />
    </>
  )
}

export default SettingScreen
