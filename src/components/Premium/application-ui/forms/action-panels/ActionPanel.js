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
      <ExampleSimpleOne />
      <SimpleWell />
      <ExampleWBA />
      <ExampleWI />
      <ExampleWL />
      <ExampleWT />
      <ExampleWW />
    </div>
  )
}

export default ActionPanel
