import React from 'react'
import CardLWS from './card_layout_with_sidebar'
import ConGridLayout from './constrained_grid_layout'
import ConsMulCol from './constrained_multi_column'
import FullWS from './full_width_with_sidebar'
import WithSNT from './with_secondary_nav_and_tertiary_column'

const HomeScreen = () => {
  return (
    <>
      <CardLWS />
      <ConGridLayout />
      {/* <ConsMulCol /> */}
      {/* <FullWS /> */}
      {/* <WithSNT />*/}
    </>
  )
}

export default HomeScreen
