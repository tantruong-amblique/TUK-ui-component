import React from 'react'
import ActionPanel from './action-panels/ActionPanel'
import FormLayout from './form-layouts/FormLayout'
import InputGroup from './input-groups/InputGroup'
import RadioGroup from './radio-groups/RadioGroup'

const Form = () => {
  return (
    <div>
      <ActionPanel />
      <FormLayout />
      <InputGroup />
      <RadioGroup />
    </div>
  )
}

export default Form
