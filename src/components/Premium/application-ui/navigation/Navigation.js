import React from 'react'
import BreadScrumbs from './breadcrumbs/BreadScrumbs'
import Navbars from './navbars/Navbars'
import Pagination from './pagination/Pagination'
import SideNav from './sidebar-navigation/SideNav'

const Navigation = () => {
  return (
    <div>
      <BreadScrumbs />
      <Navbars />
      <Pagination />
      <SideNav />
    </div>
  )
}

export default Navigation
