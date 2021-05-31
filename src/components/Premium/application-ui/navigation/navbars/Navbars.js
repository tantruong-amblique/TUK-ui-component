import React from 'react'
import DWithQAction from './dark_with_quick_action'
import DwithS from './dark_with_search'
import SimpleOne from './simple'
import Sd from './simple_dark'
import SWithA from './simple_dark_with_menu_button_on_left'
import SwithMB from './simple_with_menu_button_on_left'
import WithCSL from './with_centered_search_and_secondary_links'
import WithCS from './with_centered_search_and_secondary_links_dark'
import WithQA from './with_quick_action'
import WithSearch from './with_search'
import WithSIC from './with_search_in_column_layout'

const Navbars = () => {
  return (
    <div>
      <div className="text-4xl animate-pulse m-3 font-semibold">Navbars</div>
      <div className="text-lg animate-bounce  m-3 font-semibold">
        dark_with_quick_action
      </div>
      <DWithQAction />
      <div className="text-lg animate-bounce  m-3 font-semibold">
        dark_with_search
      </div>
      <DwithS />
      <div className="text-lg animate-bounce  m-3 font-semibold">
        simple_dark_with_menu_button_on_left
      </div>
      <SWithA />
      <div className="text-lg animate-bounce  m-3 font-semibold">
        simple_dark
      </div>
      <Sd />
      <div className="text-lg animate-bounce  m-3 font-semibold">
        simple_with_menu_button_on_left
      </div>
      <SwithMB />
      <div className="text-lg animate-bounce  m-3 font-semibold">simple</div>
      <SimpleOne />
      <div className="text-lg animate-bounce  m-3 font-semibold">
        with_centered_search_and_secondary_links_dark
      </div>
      <WithCS />
      <div className="text-lg animate-bounce  m-3 font-semibold">
        with_centered_search_and_secondary_links
      </div>
      <WithCSL />
      <div className="text-lg animate-bounce  m-3 font-semibold">
        with_quick_action
      </div>
      <WithQA />
      <div className="text-lg animate-bounce  m-3 font-semibold">
        with_search_in_column_layout
      </div>
      <WithSIC />
      <div className="text-lg animate-bounce  m-3 font-semibold">
        with_search
      </div>
      <WithSearch />
    </div>
  )
}

export default Navbars
