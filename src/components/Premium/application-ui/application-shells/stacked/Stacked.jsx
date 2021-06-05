import React from 'react'
import StackNavBarTwo from './branded_nav_with_compact_white_page_header'
import StackNavBarThree from './branded_nav_with_white_page_header'
import StackNavBarOne from './brand_nav_with_overlap'
import StackNavBarFour from './dark_nav_with_compact_white_page_header'
import StackNavBarFive from './dark_nav_with_overlap'
import StackNavBarSix from './dark_nav_with_white_page_header'
import StackNavBarSeven from './light_nav_on_gray_background'
import StackNavBarEight from './light_nav_with_bottom_border'
import StackNavBarNine from './two_row_navigation_with_overlap'

const Stacked = () => {
  return (
    <div>
      <div className="text-4xl animate-pulse m-3 font-semibold">Stacked</div>
      <div className="text-xl animate-bounce  m-3 font-semibold">
        brand_nav_with_overlap
      </div>
      <StackNavBarOne />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        branded_nav_with_compact_white_page_header
      </div>
      <StackNavBarTwo />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        branded_nav_with_white_page_header
      </div>
      <StackNavBarThree />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        dark_nav_with_compact_white_page_header
      </div>
      <StackNavBarFour />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        dark_nav_with_overlap
      </div>
      <StackNavBarFive />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        dark_nav_with_white_page_header
      </div>
      <StackNavBarSix />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        light_nav_on_gray_background
      </div>
      <StackNavBarSeven />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        light_nav_with_bottom_border
      </div>
      <StackNavBarEight />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        two_row_navigation_with_overlap
      </div>
      <StackNavBarNine />
    </div>
  )
}

export default Stacked
