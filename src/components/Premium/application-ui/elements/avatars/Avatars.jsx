import React from 'react'
import AvatrasGroupOne from './avatar_group_stacked_bottom_to_top'
import AvatrasGroupTwo from './avatar_group_stacked_top_to_bottom'
import AvatrasGroupSeven from './circular_avatars'
import AvatrasGroupThree from './circular_avatars_with_bottom_notification'
import AvatrasGroupFour from './circular_avatars_with_placeholder_icon'
import AvatrasGroupFive from './circular_avatars_with_placeholder_initials'
import AvatrasGroupSix from './circular_avatars_with_top_notification'
import AvatrasGroupTen from './rounded_avatars'
import AvatrasGroupEight from './rounded_avatars_with_bottom_notification'
import AvatrasGroupNine from './rounded_avatars_with_top_notification'
import AvatrasGroupEleven from './with_text'

const Avatars = () => {
    return (
        <div>
            <AvatrasGroupOne />
            <AvatrasGroupTwo />
            <AvatrasGroupThree />
            <AvatrasGroupFour />
            <AvatrasGroupFive />
            <AvatrasGroupSix />
            <AvatrasGroupSeven />
            <AvatrasGroupEight />
            <AvatrasGroupNine />
            <AvatrasGroupTen/>
            <AvatrasGroupEleven/>
           

        </div>
    )
}

export default Avatars
