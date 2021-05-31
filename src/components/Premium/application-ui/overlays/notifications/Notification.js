import React from 'react'
import Condensed from './condensed'
import SimpleNotif from './simple'
import NWaction from './with_actions_below'
import NWavtar from './with_avatar'
import NWbutton from './with_buttons_below'
import NWSButton from './with_split_buttons'

const Notification = () => {
  return (
    <>
      <SimpleNotif />
      <br />
      <Condensed />
      <br />
      <NWaction />
      <br />
      <NWavtar />
      <br />
      <NWbutton />
      <br />
      <NWSButton />
    </>
  )
}

export default Notification
