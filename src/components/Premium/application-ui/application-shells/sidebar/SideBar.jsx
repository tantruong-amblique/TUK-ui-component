import React from 'react'
import SiderBarTwo from './brand_sidebar'
import SiderBarOne from './brand_sidebar_with_light_header'
import SiderBarFour from './dark_sidebar'
import SiderBarThree from './dark_sidebar_with_light_header'
import SiderBarEight from './light_sidebar'
import SiderBarFive from './light_sidebar_with_constrained_content_area'
import SiderBarSix from './light_sidebar_with_light_background'
import SiderBarSeven from './light_sidebar_with_light_header'

const SideBar = () => {
  return (
    <div>
      <div className="text-4xl animate-pulse m-3 font-semibold">Sidebar</div>
      <div className="text-xl animate-bounce  m-3 font-semibold">
        brand_sidebar_with_light_header
      </div>
      <SiderBarOne />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        brand_sidebar
      </div>
      <SiderBarTwo />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        dark_sidebar_with_light_header
      </div>
      <SiderBarThree />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        dark_sidebar
      </div>
      <SiderBarFour />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        light_sidebar_with_constrained_content_area
      </div>
      <SiderBarFive />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        light_sidebar_with_light_background
      </div>
      <SiderBarSix />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        light_sidebar_with_light_header
      </div>
      <SiderBarSeven />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        light_sidebar
      </div>
      <SiderBarEight />
    </div>
  )
}

export default SideBar
