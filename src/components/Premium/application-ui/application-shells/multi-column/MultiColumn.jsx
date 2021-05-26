import React from 'react'
import MultiColumOne from './Constrained_three_column'
import MultiColumTwo from './constrained_with_sticky_columns'
import MultiColumThree from './full_width_secondary_column_on_right'
import MultiColumFour from './full_width_three_column'
import MultiColumFive from './full_width_with_narrow_branded_sidebar'
import MultiColumSeven from './full_width_with_narrow_sidebar'
import MultiColumSix from './full_width_with_narrow_sidebar_and_secondary_column_on_right'

const Multi_Column = () => {
  return (
    <div>
      <MultiColumOne />
      <MultiColumTwo />
      <MultiColumThree />
      <MultiColumFour />
      <MultiColumFive />
      <MultiColumSix />
      <MultiColumSeven />
    </div>
  )
}

export default Multi_Column
