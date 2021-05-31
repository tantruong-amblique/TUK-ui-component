import React from 'react'
import Overlays from '../overlays/Overlays'
import PageExample from '../page-examples/PageExample'
import BreadScrumbs from './breadcrumbs/BreadScrumbs'
import Navbars from './navbars/Navbars'
import Pagination from './pagination/Pagination'
import SideNav from './sidebar-navigation/SideNav'
import Steps from './steps/Steps'
import Tabs from './tabs/Tabs'
import VerticalNavigation from './vertical-navigation/VerticalNavigation'

const Navigation = () => {
  return (
    <div>
      <BreadScrumbs />
      <Navbars />
      <Pagination />
      {/** <SideNav /> */}
      <Steps />
      <Tabs />
      <VerticalNavigation />
      <Overlays />
      <PageExample />
    </div>
  )
}

export default Navigation
