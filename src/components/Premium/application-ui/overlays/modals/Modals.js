import React from 'react'
import CenteredWSA from './centered_with_single_action'
import CenteredWB from './centered_with_wide_buttons'
import SimpleAlert from './simple_alert'
import SimpleAlertWb from './simple_alert_with_left_aligned_buttons'
import SimpleWDB from './simple_with_dismiss_button'
import SimpleWGF from './simple_with_gray_footer'

const Modals = () => {
  return (
    <>
      <CenteredWSA />
      <CenteredWB />
      <SimpleAlertWb />
      <SimpleAlert />
      <SimpleWDB />
      <SimpleWGF />
    </>
  )
}

export default Modals
