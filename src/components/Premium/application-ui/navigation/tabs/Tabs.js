import React from 'react'
import FullWidthBar from '../breadcrumbs/full_width_bar'
import BarWU from './bar_with_underline'
import TabsIP from './tabs_in_pills'
import TabsPOG from './tabs_in_pills_on_gray'
import TabsPBC from './tabs_in_pills_with_brand_color'
import TabsWUL from './tabs_with_underline'
import TabsWUB from './tabs_with_underline_and_badges'
import TabsWUAI from './tabs_with_underline_and_icons'

const Tabs = () => {
  return (
    <>
      <BarWU />
      <FullWidthBar />
      <TabsPOG />
      <TabsPBC />
      <TabsIP />
      <TabsWUB />
      <TabsWUAI />
      <TabsWUL />
    </>
  )
}

export default Tabs
