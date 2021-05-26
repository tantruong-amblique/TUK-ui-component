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
            <SiderBarOne />
            <SiderBarTwo />
            <SiderBarThree />
            <SiderBarFour />
            <SiderBarFive />
            <SiderBarSix />
            <SiderBarSeven />
            <SiderBarEight />

        </div>
    )
}

export default SideBar
