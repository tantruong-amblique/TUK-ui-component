import React from 'react'
import SignOne from './simple_card'
import SignTwo from './simple_no_labels'
import SignThree from './split_screen'

const SignInForms = () => {
  return (
    <>
    <div className="text-4xl animate-pulse m-3 font-semibold">
    Sign in Forms
       </div>
   <div className="text-xl animate-bounce  m-3 font-semibold">
   simple_card
   </div>
      <SignOne />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      simple_no_labels
   </div>
      <SignTwo />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      split_screen
      </div>
      <SignThree />
    </>
  )
}

export default SignInForms
