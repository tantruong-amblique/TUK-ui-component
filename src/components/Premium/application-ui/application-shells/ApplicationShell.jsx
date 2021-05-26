import React from 'react'
import Multi_Column from './multi-column/MultiColumn'
import SideBar from './sidebar/SideBar'
import Stacked from './stacked/Stacked'

const ApplicationShell = () => {
  return (
    <div>
      {/** <Multi_Column />
       */}
      <SideBar />
      <Stacked />
    </div>
  )
}

export default ApplicationShell
