import React from 'react'

import Feeds from './feeds/Feeds'
import GridList from './grid-lists/GridList'
import StackedsList from './stacked-lists/StackedsList'
import Tables from './tables/Tables'

const Lists = () => {

    return (
        <div>
            <Feeds />
            <GridList />
            <StackedsList />
            <Tables />
        </div>
    )
}

export default Lists
