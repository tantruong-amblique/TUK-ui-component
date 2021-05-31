import React from 'react'
import Bullets from './bullets'
import BulletText from './bullets_and_text'
import CircleWT from './circles_with_text'
import SimPanel from './panels'
import PanelWB from './panels_with_border'
import SimpleStep from './simple'

const Steps = () => {
  return (
    <>
      <div className="text-4xl animate-pulse m-3 font-semibold">
        Description Lits
      </div>
      <div className="text-xl animate-bounce  m-3 font-semibold">
        bullets_and_text
      </div>
      <BulletText />
      <div className="text-xl animate-bounce  m-3 font-semibold">bullets</div>
      <Bullets />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        circles_with_text
      </div>
      <CircleWT />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        panels_with_border
      </div>
      <PanelWB />
      <div className="text-xl animate-bounce  m-3 font-semibold">panels</div>
      <SimPanel />
      <div className="text-xl animate-bounce  m-3 font-semibold">simple</div>
      <SimpleStep />
    </>
  )
}

export default Steps
