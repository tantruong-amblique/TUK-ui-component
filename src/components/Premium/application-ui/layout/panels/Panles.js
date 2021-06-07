import React from 'react'
import Panle1 from './basic_card'
import Panle2 from './card__edge_to_edge_on_mobile'
import Panle3 from './card_with_footer'
import Panle4 from './card_with_gray_body'
import Panle5 from './card_with_gray_footer'
import Panle6 from './card_with_header'
import Panle7 from './card_with_header_and_footer'
import Panle8 from './well'
import Panle9 from './well__edge_to_edge_on_mobile'
import Panle10 from './well_on_gray'

const Panles = () => {
    return (
        <div>
        <div className="text-4xl animate-pulse m-3 font-semibold">Panles</div>
        <div className="text-xl animate-bounce  m-3 font-semibold">basic_card</div>
            <Panle1 />
        <div className="text-xl animate-bounce  m-3 font-semibold">card__edge_to_edge_on_mobile</div>
            <Panle2 />
            <div className="text-xl animate-bounce  m-3 font-semibold">card_with_footer</div>
            <Panle3 />
            <div className="text-xl animate-bounce  m-3 font-semibold">card_with_gray_body</div>
            <Panle4 />
            <div className="text-xl animate-bounce  m-3 font-semibold">card_with_gray_footer</div>
            <Panle5 />
            <div className="text-xl animate-bounce  m-3 font-semibold">card_with_header</div>
            <Panle6 />
            <div className="text-xl animate-bounce  m-3 font-semibold">card_with_header_and_footer</div>
            <Panle7 />
            <div className="text-xl animate-bounce  m-3 font-semibold">well</div>
            <Panle8 />
            <div className="text-xl animate-bounce  m-3 font-semibold">well__edge_to_edge_on_mobile</div>
            <Panle9 />
            <div className="text-xl animate-bounce  m-3 font-semibold">well_on_gray</div>
        <Panle10 />
        </div>
    )
}

export default Panles
