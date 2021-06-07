import React from 'react'
import T1 from './short_toggle'
import T2 from './simple_toggle'

import T3 from './toggle_with_icon'

import T4 from './with_left_label_and_description'


import T5 from './with_right_label'



export const Toggles = () => {
    return (
        <>
        <div className="text-4xl animate-pulse m-3 font-semibold">
        Toggle
            </div>
       <div className="text-xl animate-bounce  m-3 font-semibold">
            short_toggle    
            </div>
            <T1 />
            
       <div className="text-xl animate-bounce  m-3 font-semibold">
       simple_toggle    
       </div>
            <T2 />
            
       <div className="text-xl animate-bounce  m-3 font-semibold">
       toggle_with_icon    
       </div>
            <T3 />
            
       <div className="text-xl animate-bounce  m-3 font-semibold">
       with_left_label_and_description    
       </div>
            <T4 />
            
       <div className="text-xl animate-bounce  m-3 font-semibold">
       with_right_label    
       </div>
            <T5 />

        </>
    )
}
