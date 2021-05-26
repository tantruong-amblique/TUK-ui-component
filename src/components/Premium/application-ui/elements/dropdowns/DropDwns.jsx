import React from 'react'
import DropDownsOne from './simple'
import DropDownsTwo from './with_dividers'
import DropDownsThree from './with_icons'
import DropDownsFour from './with_minimal_menu_icon'
import DropDownsFive from './with_simple_header'

const DropDwns = () => {
    return (
        <div>
            <DropDownsOne />
            <DropDownsTwo />
            <DropDownsThree />
            <DropDownsFour />
            <DropDownsFive />
        </div>
    )
}

export default DropDwns
