import React from 'react'
import Feeds1 from './simple_with_icons'
import Feeds2 from './stacked_with_avatars'
import Feeds3 from './with_multiple_item_types'

const Feeds = () => {
    return (
        <div>
        <div className="text-4xl animate-pulse m-3 font-semibold">Feeds</div>
            <div className="text-xl animate-bounce  m-3 font-semibold">simple_with_icons</div>
            <Feeds1 />
            <div className="text-xl animate-bounce  m-3 font-semibold">stacked_with_avatars</div>
            <Feeds2 />
            <div className="text-xl animate-bounce  m-3 font-semibold">with_multiple_item_types</div>
            <Feeds3 />
            
        </div>
    )
}

export default Feeds
