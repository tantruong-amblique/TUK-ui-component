import React from 'react'
import BadgeOne from './badge_with_dot'
import BadgeTwo from './badge_with_remove_button'
import BadgeThree from './basic_badges'
import BadgeFour from './large_badges'
import BadgeFive from './large_rounded_badges'
import BadgeSeven from './rounded_badges'
import BadgeSix from './rounded_badges_with_dot'

const BadGes = () => {
  return (
    <div>
      <div className="text-4xl animate-pulse m-3 font-semibold">Badges</div>
      <div className="text-xl animate-bounce  m-3 font-semibold">
        badge_with_dot
      </div>
      <BadgeOne />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        badge_with_remove_button
      </div>
      <BadgeTwo />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        basic_badges
      </div>
      <BadgeThree />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        large_badges
      </div>
      <BadgeFour />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        large_rounded_badges
      </div>
      <BadgeFive />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        rounded_badges_with_dot
      </div>
      <BadgeSix />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        rounded_badges
      </div>
      <BadgeSeven />
    </div>
  )
}

export default BadGes
