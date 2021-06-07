import React from 'react'
import ExampleSimpleOne from './simple'
import SimpleWell from './simple_well'
import ExampleWBA from './with_button_at_top_right'
import ExampleWI from './with_input'
import ExampleWL from './with_link'
import ExampleWT from './with_toggle'
import ExampleWW from './with_well'

const ActionPanel = () => {
  return (
    <div>
    <div className="text-4xl animate-pulse m-3 font-semibold">
    Action Panle
  </div>
  <div className="text-xl animate-bounce  m-3 font-semibold">
  simple
  </div>
      <ExampleSimpleOne />
      <div className="text-xl animate-bounce  m-3 font-semibold">
  simple_well
  </div>
      <SimpleWell />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_button_at_top_right
  </div>
      <ExampleWBA />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_input
  </div>
      <ExampleWI />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_link
  </div>
      <ExampleWL />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_toggle
  </div>
      <ExampleWT />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_well
  </div>
      <ExampleWW />

    </div>
  )
}

export default ActionPanel
