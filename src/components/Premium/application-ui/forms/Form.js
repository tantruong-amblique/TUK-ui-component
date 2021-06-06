import React from 'react'
import ActionPanel from './action-panels/ActionPanel'
import FormLayout from './form-layouts/FormLayout'
import InputGroup from './input-groups/InputGroup'
import RadioGroup from './radio-groups/RadioGroup'
import SelectMenus from './select-menus/SelectMenus'

const Form = () => {
  return (
    <div>
      <ActionPanel />
      <FormLayout />
      <InputGroup />
      <RadioGroup />
      <SelectMenus />
    </div>
  )
}

export default Form
