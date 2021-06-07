import React from 'react'
import P1 from './card_with_avatar_and_stats'
import P5 from './with_actions'
import P3 from './with_actions_and_breadcrumbs'
import P2 from './with_actions_and_breadcrumbs_on_dark'
import P4 from './with_actions_on_dark'
import P6 from './with_avatar_and_actions'
import P7 from './with_banner_image'
import P11 from './with_meta_and_actions'
import P10 from './with_meta_and_actions_on_dark'
import P9 from './with_meta__actions__and_breadcrumbs'
import P8 from './with_meta__actions__and_breadcrumbs_on_dark'

const PageHeading = () => {
  return (
    <div>
    <div className="text-4xl animate-pulse m-3 font-semibold">
    Page Heading
        </div>
   <div className="text-xl animate-bounce  m-3 font-semibold">
   card_with_avatar_and_stats        </div>
      <P1 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_actions_and_breadcrumbs_on_dark        </div>
      <P2 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_actions_and_breadcrumbs        </div>
      <P3 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_actions_on_dark        </div>
      <P4 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_actions        </div>
      <P5 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_avatar_and_actions        </div>
      <P6 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_banner_image        </div>
      <P7 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_meta__actions__and_breadcrumbs_on_dark        </div>
      <P8 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_meta__actions__and_breadcrumbs        </div>
      <P9 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_meta_and_actions_on_dark        </div>
      <P10 />
      <div className="text-xl animate-bounce  m-3 font-semibold">
      with_meta_and_actions        </div>
      <P11 />
    </div>
  )
}

export default PageHeading
