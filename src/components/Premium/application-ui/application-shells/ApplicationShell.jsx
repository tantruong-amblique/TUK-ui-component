import React from 'react'
import Avatars from '../elements/avatars/Avatars'
import BadGes from '../elements/badges/BadGes'
import ButtonGroupsIcon from '../elements/button-groups/ButtonGroupsIcon'
import DropDwns from '../elements/dropdowns/DropDwns'
import FeedBack from '../feedback/alerts/FeedBack'
import Multi_Column from './multi-column/MultiColumn'
import SideBar from './sidebar/SideBar'
import Stacked from './stacked/Stacked'

const ApplicationShell = () => {
    return (
        <div>
            {/** <Multi_Column />
             */}
            <SideBar />
            <Stacked />
            <Avatars />
            <BadGes />
            <ButtonGroupsIcon />
            <DropDwns />
            <FeedBack />
        </div>
    )
}

export default ApplicationShell
