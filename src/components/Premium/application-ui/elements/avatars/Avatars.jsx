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
      <div className="text-4xl animate-pulse m-3 font-semibold">Avatar</div>
      <div className="text-xl animate-bounce  m-3 font-semibold">
        avatar_group_stacked_bottom_to_top
      </div>
      <AvatrasGroupOne />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        avatar_group_stacked_top_to_bottom
      </div>
      <AvatrasGroupTwo />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        circular_avatars_with_bottom_notification
      </div>
      <AvatrasGroupThree />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        circular_avatars_with_placeholder_icon
      </div>
      <AvatrasGroupFour />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        circular_avatars_with_placeholder_initials
      </div>
      <AvatrasGroupFive />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        circular_avatars_with_top_notification
      </div>
      <AvatrasGroupSix />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        circular_avatars
      </div>
      <AvatrasGroupSeven />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        rounded_avatars_with_bottom_notification
      </div>
      <AvatrasGroupEight />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        rounded_avatars_with_top_notification
      </div>
      <AvatrasGroupNine />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        rounded_avatars
      </div>
      <AvatrasGroupTen />
      <div className="text-xl animate-bounce  m-3 font-semibold">with_text</div>
      <AvatrasGroupEleven />
    </div>
  )
}

export default Avatars
