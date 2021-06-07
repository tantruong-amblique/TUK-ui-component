import React from 'react'
import Dividers1 from './with_button'

import Dividers2 from './with_icon'

import Dividers3 from './with_label'

import Dividers4 from './with_label_on_left'

import Dividers5 from './with_title'

import Dividers6 from './with_title_and_button'

import Dividers7 from './with_title_on_left'
import Dividers8 from './with_toolbar'


export const Dividers = () => {
    return (
        <div>
        <div className="text-4xl animate-pulse m-3 font-semibold">Divider</div>
        <div className="text-xl animate-bounce  m-3 font-semibold">with_button</div>
            <Dividers1 />        
            <div className="text-xl animate-bounce  m-3 font-semibold">with_icon</div>
            <Dividers2 />        
             <div className="text-xl animate-bounce  m-3 font-semibold">with_label</div>
            <Dividers3 />        
            <div className="text-xl animate-bounce  m-3 font-semibold">with_label_on_left</div>
            <Dividers4 />        
            <div className="text-xl animate-bounce  m-3 font-semibold">with_title</div>
            <Dividers5 />        
            <div className="text-xl animate-bounce  m-3 font-semibold">with_title_and_button</div>
            <Dividers6 />        
            <div className="text-xl animate-bounce  m-3 font-semibold">with_title_on_left</div>
            <Dividers7 />        
            <div className="text-xl animate-bounce  m-3 font-semibold">with_toolbar</div>
            <Dividers8 />        
           
       
       
       
        </div>
    )
}
