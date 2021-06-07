import React from 'react'
import S1 from './simple'
import S2 from './with_action'
import S4 from './with_actions'
import S3 from './with_actions_and_tabs'
import S5 from './with_badge_and_dropdown'
import S6 from './with_description'
import S7 from './with_inline_tabs'
import S8 from './with_input_group'
import S9 from './with_label'
import S10 from './with_tabs'

const SectionHeadings = () => {
  return (
    <div>
    <div className="text-4xl animate-pulse m-3 font-semibold">Section Heading</div>
   <div className="text-xl animate-bounce  m-3 font-semibold">simple</div>
      <S1 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_action
    </div>
      <S2 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_actions_and_tabs    </div>
      <S3 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_actions
    </div>
      <S4 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_badge_and_dropdown
    </div>

      <S5 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_description
    </div>
      
      <S6 />
     <div className="text-xl animate-bounce  m-3 font-semibold">
     with_inline_tabs
    </div>
      
      <S7 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_input_group
     </div>
      <S8 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_label
     </div>
      <S9 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_tabs
     </div>
      <S10 />
    </div>
  )
}

export default SectionHeadings
