import React from 'react'
import InputOne from './input_with_add_on'
import InputTwo from './input_with_corner_hint'
import InputThree from './input_with_hidden_label'
import InputFour from './input_with_inline_add_on'
import InputFive from './input_with_inline_leading_add_on_and_trailing_dropdown'
import InputSix from './input_with_inline_leading_and_trailing_add_ons'
import InputSeven from './input_with_inline_leading_dropdown'
import InputNine from './input_with_label'
import InputEight from './input_with_label_and_help_text'
import InputEleven from './input_with_leading_icon'
import InputTen from './input_with_leading_icon_and_trailing_button'
import InputTwelve from './input_with_trailing_icon'

const InputGroup = () => {
  return (
    <>
    <div className="text-4xl animate-pulse m-3 font-semibold">
    Input Groups
       </div>
   <div className="text-xl animate-bounce  m-3 font-semibold">
   input_with_add_on
   </div>
      <InputOne />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      input_with_corner_hint
      </div>
      <InputTwo />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      input_with_hidden_label
      </div>
      <InputThree />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      input_with_inline_add_on
      </div>
      <InputFour />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      input_with_inline_leading_add_on_and_trailing_dropdown
      </div>
      <InputFive />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      input_with_inline_leading_and_trailing_add_ons
      </div>
      <InputSix />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      input_with_inline_leading_dropdown
   </div>
      <InputSeven />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      input_with_label_and_help_text
   </div>
      <InputEight />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      input_with_label
      </div>
      <InputNine />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      input_with_leading_icon_and_trailing_button
      </div>
      <InputTen />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      input_with_leading_icon
      </div>
      <InputEleven />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      input_with_trailing_icon
      </div>
      <InputTwelve />
    </>
  )
}

export default InputGroup
