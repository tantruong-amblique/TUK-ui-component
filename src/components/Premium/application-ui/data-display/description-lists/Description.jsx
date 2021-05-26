import React from 'react'
import LeftAlignOne from './left_aligned'
import LeftAlignedCard from './left_aligned_in_card'
import LeftAlignedInCard from './left_aligned_striped_in_card'
import LeftAligInline from './left_aligned_with_inline_actions'
import TwoColumnCard from './two_column_in_card'

const Description = () => {
  return (
    <>
      <div className="text-4xl animate-pulse m-3 font-semibold">
        Description Lits
      </div>
      <div className="text-xl animate-bounce  m-3 font-semibold">
        left_aligned_in_card.jsx
      </div>
      <LeftAlignedCard />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        left_aligned_striped_in_card.jsx
      </div>
      <LeftAlignedInCard />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        left_aligned_with_inline_actions.jsx
      </div>
      <LeftAligInline />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        left_aligned.jsx
      </div>
      <LeftAlignOne />
      <div className="text-xl  animate-bounce  m-3 font-semibold">
        two_column_in_card.jsx
      </div>
      <TwoColumnCard />
    </>
  )
}

export default Description
