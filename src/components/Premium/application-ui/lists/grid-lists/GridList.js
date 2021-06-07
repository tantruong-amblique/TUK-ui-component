import React from 'react'
import Grid1 from './actions_with_shared_borders'
import Grid2 from './contact_cards'
import Grid3 from './contact_cards_with_small_portraits'
import Grid4 from './horizontal_link_cards'
import Grid5 from './images_with_details'
import Grid6 from './simple_cards'

const GridList = () => {
    return (
        <div>
            
    <div className="text-4xl animate-pulse m-3 font-semibold">Containers</div>
    <div className="text-xl animate-bounce  m-3 font-semibold">actions_with_shared_borders</div>
            <Grid1 />
            <div className="text-xl animate-bounce  m-3 font-semibold">contact_cards</div>
            <Grid2 />
            <div className="text-xl animate-bounce  m-3 font-semibold">contact_cards_with_small_portraits</div>
            <Grid3 />
            <div className="text-xl animate-bounce  m-3 font-semibold">horizontal_link_cards</div>
            <Grid4 />
            <div className="text-xl animate-bounce  m-3 font-semibold">images_with_details</div>
            <Grid5 />
            <div className="text-xl animate-bounce  m-3 font-semibold">simple_cards</div>
            <Grid6 />
    
        </div>
    )
}

export default GridList
