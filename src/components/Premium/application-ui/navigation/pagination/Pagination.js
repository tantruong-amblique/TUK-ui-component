import React from 'react'
import CardFWPB from './card_footer_with_page_buttons'
import CenPaNum from './centered_page_numbers'
import ScF from './simple_card_footer'

const Pagination = () => {
  return (
    <>
      <div className="text-4xl animate-pulse m-3 font-semibold">Pagination</div>
      <div className="text-xl animate-bounce  m-3 font-semibold">
        card_footer_with_page_buttons
      </div>
      <CardFWPB />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        centered_page_numbers
      </div>
      <CenPaNum />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        simple_card_footer
      </div>
      <ScF />
    </>
  )
}

export default Pagination
