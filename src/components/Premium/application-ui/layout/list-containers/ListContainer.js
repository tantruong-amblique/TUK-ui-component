import React from 'react'
import Cart1 from './card_with_dividers'
import Cart2 from './card_with_dividers__full_width_on_mobile'
import Cart3 from './flat_card_with_dividers'
import Cart4 from './separate_cards'
import Cart5 from './separate_cards__full_width_on_mobile'
import Cart6 from './simple_with_dividers'
import Cart7 from './simple_with_dividers__full_width_on_mobile'

const ListContainer = () => {
    return (
        <div>
        <div className="text-4xl animate-pulse m-3 font-semibold">List Container</div>
        <div className="text-xl animate-bounce  m-3 font-semibold">card_with_dividers</div>
        <Cart1 />
        <div className="text-xl animate-bounce  m-3 font-semibold">card_with_dividers__full_width_on_mobile</div>
        <Cart2 />

        <div className="text-xl animate-bounce  m-3 font-semibold">flat_card_with_dividers</div>
        <Cart3 />
        <div className="text-xl animate-bounce  m-3 font-semibold">separate_cards</div>
        <Cart4 />

        <div className="text-xl animate-bounce  m-3 font-semibold">separate_cards__full_width_on_mobile</div>
        <Cart5 />

        <div className="text-xl animate-bounce  m-3 font-semibold">simple_with_dividers</div>
        <Cart6 />

        <div className="text-xl animate-bounce  m-3 font-semibold">simple_with_dividers__full_width_on_mobile</div>
        <Cart7 />

        </div>
       
    )
}

export default ListContainer
