import React from 'react'

import Stacked1 from './with_truncated_content_preview'
import Stacked2 from './content_links_with_action'
import Stacked3 from './narrow_with_avatar_group'
import Stacked4 from './two_column_with_avatar'
import Stacked5 from './with_right_justified_avatar_group'
import Stacked6 from './with_right_justified_second_column'
import Stacked7 from './with_sticky_headings'
import Stacked8 from './with_truncated_content_preview'

const StackedsList = () => {
    return (
        <div>
            
    <div className="text-4xl animate-pulse m-3 font-semibold">Stacked List</div>
    <div className="text-xl animate-bounce  m-3 font-semibold">avatar_groups_with_actions</div>
            <Stacked1 />
            <div className="text-xl animate-bounce  m-3 font-semibold">narrow_with_avatar_group </div>
           <Stacked3 /> 
           <div className="text-xl animate-bounce  m-3 font-semibold"> two_column_with_avatar</div>
           <Stacked4 /> 
           <div className="text-xl animate-bounce  m-3 font-semibold">with_right_justified_avatar_group </div>
           <Stacked5 /> 
           <div className="text-xl animate-bounce  m-3 font-semibold">with_right_justified_second_column </div>
           <Stacked6 /> 
           <div className="text-xl animate-bounce  m-3 font-semibold">with_sticky_headings </div>
           <Stacked7 /> 
           <div className="text-xl animate-bounce  m-3 font-semibold">with_truncated_content_preview</div>
           <Stacked8 /> 
           <div className="text-xl animate-bounce  m-3 font-semibold">content_links_with_action </div>
           <Stacked2 /> 
        </div>
    )
}

export default StackedsList
