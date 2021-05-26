import React from 'react'
import ButtonOne from './basic'
import ButtonTwo from './icon_only'
import ButtonThree from './with_checkbox_and_dropdown'
import ButtonFour from './with_dropdown'
import ButtonFive from './with_stat'

const ButtonGroupsIcon = () => {
    return (
        <div>
            <ButtonOne />
            <ButtonTwo />
            <ButtonThree />
            <ButtonFour />
            <ButtonFive />
        </div>
    )
}

export default ButtonGroupsIcon
