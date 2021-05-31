import React from 'react'
import ConstrainedWS from './constrained_with_sidebar'
import FileGallery from './file_gallery'
import MultiCD from './multi_column_directory'
import MultiCI from './multi_column_inbox'
import StackedCARD from './stacked_card_layout'
import WPHSL from './with_page_heading_and_stacked_list'

const DetailScreen = () => {
  return (
    <>
      <div className="text-4xl animate-pulse m-3 font-semibold">
        Detail Screen
      </div>
      <div className="text-xl animate-bounce  m-3 font-semibold">
        constrained_with_sidebar
      </div>
      <ConstrainedWS />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        file_gallery
      </div>
      <FileGallery />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        multi_column_directory
      </div>
      <MultiCD />.
      <div className="text-xl animate-bounce  m-3 font-semibold">
        multi_column_inbox
      </div>
      <MultiCI />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        stacked_card_layout
      </div>
      <StackedCARD />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_page_heading_and_stacked_list
      </div>
      <WPHSL />
    </>
  )
}

export default DetailScreen
