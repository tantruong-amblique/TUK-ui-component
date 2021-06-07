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
    <div className="text-4xl animate-pulse m-3 font-semibold">
    Card Heading
        </div>
   <div className="text-xl animate-bounce  m-3 font-semibold">
        simple    
        </div>
      <CardOne />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_action    
        </div>
      <CardTwo />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_avatar__meta__and_dropdown    
        </div>
      <CardThree />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_avatar_and_actions    
        </div>
      <CardFour />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_description_and_action    
        </div>
      <CardFive />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_description    
        </div>
      <CardSix />
    </>
  )
}

export default CardHeading
