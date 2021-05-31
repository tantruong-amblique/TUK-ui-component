import React from 'react'
import FeedBackOne from './with_accent_border'
import FeedBackTwo from './with_actions'
import FeedBackThree from './with_description'
import FeedBackFour from './with_dismiss_button'
import FeedBackFive from './with_link_on_right'
import FeedBackSix from './with_list'

const FeedBack = () => {
  return (
    <div>
      <div className="text-4xl animate-pulse m-3 font-semibold">
        FeedBack Alerts
      </div>
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_accent_border
      </div>
      <FeedBackOne />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_actions
      </div>
      <FeedBackTwo />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_description
      </div>
      <FeedBackThree />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_dismiss_button
      </div>
      <FeedBackFour />
      <div className="text-xl animate-bounce  m-3 font-semibold">
        with_link_on_right
      </div>
      <FeedBackFive />
      <div className="text-xl animate-bounce  m-3 font-semibold">with_list</div>
      <FeedBackSix />
    </div>
  )
}

export default FeedBack
