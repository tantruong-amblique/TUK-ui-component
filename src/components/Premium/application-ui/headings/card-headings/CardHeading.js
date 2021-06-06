import React from 'react'
import CardOne from './simple'
import CardTwo from './with_action'
import CardFour from './with_avatar_and_actions'
import CardThree from './with_avatar__meta__and_dropdown'
import CardSix from './with_description'
import CardFive from './with_description_and_action'

const CardHeading = () => {
  return (
    <>
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
      <CardSix />
    </>
  )
}

export default CardHeading
