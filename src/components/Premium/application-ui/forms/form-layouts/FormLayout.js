import React from 'react'
import FormOne from './labels_on_left'
import FormTwo from './simple_stacked'
import FormThree from './two_column_cards_with_separate_submit_actions'
import FormFour from './two_column_cards_with_sidebar'
import FormFive from './two_column_in_full_width_cards'

const FormLayout = () => {
  return (
    <>
    <div className="text-4xl animate-pulse m-3 font-semibold">
   Form Layout
      </div>
  <div className="text-xl animate-bounce  m-3 font-semibold">
  labels_on_left
  </div>
      <FormOne />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      simple_stacked
      </div>
      <FormTwo />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      two_column_cards_with_separate_submit_actions
      </div>
      <FormThree />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      two_column_cards_with_sidebar
      </div>
      <FormFour />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      two_column_in_full_width_cards
      </div>
      <FormFive />
    </>
  )
}

export default FormLayout
