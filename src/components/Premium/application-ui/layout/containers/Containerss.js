import React from 'react'
import C1 from './constrained_with_padded_content'
import C2 from './full_width_on_mobile__constrained_to_breakpoint_with_padded_content_above_mobile'
import C3 from './full_width_on_mobile__constrained_with_padded_content_above'
import C4 from './narrow_constrained_with_padded_content'


export const Container = () => {
    return (
        <div>
    <div className="text-4xl animate-pulse m-3 font-semibold">Containers</div>
            <div className="text-xl animate-bounce  m-3 font-semibold">constrained_with_padded_content</div>
            <C1 />
            <div className="text-xl animate-bounce  m-3 font-semibold">constrained_with_padded_content</div>
            <C2 />
            <div className="text-xl animate-bounce  m-3 font-semibold">constrained_with_padded_content</div>
            <C3 />
            <div className="text-xl animate-bounce  m-3 font-semibold">constrained_with_padded_content</div>
            <C4 />
                        
        </div>
    )
}
