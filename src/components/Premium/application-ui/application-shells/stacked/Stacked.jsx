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
            <StackNavBarOne />
            <StackNavBarTwo />
            <StackNavBarThree />
            <StackNavBarFour />
            <StackNavBarFive />
            <StackNavBarSix />
            <StackNavBarSeven />
            <StackNavBarEight />
            <StackNavBarNine />
            
        </div>
    )
}

export default Stacked
