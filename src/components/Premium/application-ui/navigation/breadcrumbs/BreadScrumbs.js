import React from 'react'
import Contained from './contained'
import FullWidthBar from './full_width_bar'
import SimpleWithChev from './simple_with_chevrons'
import SimpleWihSlash from './simple_with_slashes'

const BreadScrumbs = () => {
  return (
    <div>
      <div className="text-4xl animate-pulse m-3 font-semibold">
        breadcrumbs
      </div>
      <div className="text-xl animate-bounce  m-3 font-semibold">
        contained.jsx
      </div>
      <Contained />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        full_width_bar.jsx
      </div>
      <FullWidthBar />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        simple_with_chevrons.jsx
      </div>
      <SimpleWithChev />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        simple_with_slashes.jsx
      </div>
      <SimpleWihSlash />
    </div>
  )
}

export default BreadScrumbs
