import React from 'react'
import FormOne from './labels_on_left'
import FormTwo from './simple_stacked'
import FormThree from './two_column_cards_with_separate_submit_actions'
import FormFour from './two_column_cards_with_sidebar'
import FormFive from './two_column_in_full_width_cards'

const FormLayout = () => {
  return (
    <>
      <FormOne />
      <FormTwo />
      <FormThree />
      <FormFour />
      <FormFive />
    </>
  )
}

export default FormLayout
