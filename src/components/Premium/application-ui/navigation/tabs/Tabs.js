import React from 'react'
import BarWU from './bar_with_underline'
import FullWTU from './full_width_tabs_with_underline'
import TabsIP from './tabs_in_pills'
import TabsPOG from './tabs_in_pills_on_gray'
import TabsPBC from './tabs_in_pills_with_brand_color'
import TabsWUL from './tabs_with_underline'
import TabsWUB from './tabs_with_underline_and_badges'
import TabsWUAI from './tabs_with_underline_and_icons'

const Tabs = () => {
  return (
    <>
      <div className="text-4xl animate-pulse m-3 font-semibold">Tabs</div>
      <div className="text-xl animate-bounce  m-3 font-semibold">
        bar_with_underline
      </div>
      <BarWU />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        full_width_tabs_with_underline
      </div>
      <FullWTU />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        tabs_in_pills_on_gray
      </div>
      <TabsPOG />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        tabs_in_pills_with_brand_color
      </div>
      <TabsPBC />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        tabs_in_pills
      </div>
      <TabsIP />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        tabs_with_underline_and_badges
      </div>
      <TabsWUB />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        tabs_with_underline_and_icons
      </div>
      <TabsWUAI />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        tabs_with_underline
      </div>
      <TabsWUL />
    </>
  )
}

export default Tabs
