import React from 'react'
import BtnWicon from './button_with_leading_icon'
import BtnWTI from './button_with_trailing_icons'
import BTNCir from './circular_buttons'
import BTNPri from './primary_buttons'
import BTNR from './round_buttons'
import BTNS from './secondary_buttons'
import BTNW from './white_buttons'

const Buttons = () => {
  return (
    <>
      <div className="text-4xl animate-pulse m-3 font-semibold">Buttons</div>
      <div className="text-xl animate-bounce  m-3 font-semibold">
        button_with_leading_icon
      </div>
      <BtnWicon />
      <br />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        button_with_trailing_icons
      </div>
      <BtnWTI />
      <br />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        circular_buttons
      </div>
      <BTNCir />
      <br />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        primary_buttons
      </div>
      <BTNPri />
      <br />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        round_buttons
      </div>
      <BTNR />
      <br />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        secondary_buttons
      </div>
      <BTNS />
      <br />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        white_buttons
      </div>
      <BTNW />
    </>
  )
}

export default Buttons
