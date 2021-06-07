import React from 'react'
import Table2 from './simple'
import Table1 from './simple_striped'
import Table3 from './with_avatars_and_multi_line_content'

const Tables = () => {
    return (
        <div>
            
    <div className="text-4xl animate-pulse m-3 font-semibold">Table</div>
    <div className="text-xl animate-bounce  m-3 font-semibold">simple_striped</div>
            <Table1 />
            <div className="text-xl animate-bounce  m-3 font-semibold">simple</div>
                    <Table2 />
                    <div className="text-xl animate-bounce  m-3 font-semibold">with_avatars_and_multi_line_content</div>
                            <Table3 />
        </div>
    )
}

export default Tables
