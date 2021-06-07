import React from 'react'
import RadioOne from './list_with_description'
import RadioTwo from './simple_table'
import RadioThree from './stacked_cards'

const RadioGroup = () => {
  return (
    <>
    <div className="text-4xl animate-pulse m-3 font-semibold">
    Radio Group
       </div>
   <div className="text-xl animate-bounce  m-3 font-semibold">
   list_with_description
   </div>
      <RadioOne />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      simple_table
      </div>
      <RadioTwo />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      stacked_cards
      </div>
      <RadioThree />
    </>
  )
}

export default RadioGroup
