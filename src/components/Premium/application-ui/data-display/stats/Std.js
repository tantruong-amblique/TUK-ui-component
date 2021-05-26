import React from 'react'
import ExampleOne from './simple'
import ExampleTwo from './with_brand_icon'
import ExampleThree from './with_shared_borders'

const Std = () => {
  return (
    <div>
      <div className="text-4xl m-3 animate-pulse font-semibold">Stats</div>
      <div className="text-xl  animate-bounce  m-3 font-semibold">simple</div>
      <ExampleOne />
      <div className="text-xl  animate-bounce  m-3 font-semibold">
        with_brand_icon.jsx
      </div>
      <ExampleTwo />
      <div className="text-xl  animate-bounce  m-3 font-semibold">
        with_shared_borders.jsx
      </div>
      <ExampleThree />
    </div>
  )
}

export default Std
