import React from 'react'
import { Container } from './containers/Containerss'
import { Dividers } from './dividers/Dividers'
import  ListContainer  from './list-containers/ListContainer'
import  MediaObject  from './media-objects/MediaObject'

import  Panles  from './panels/Panles'

export const Layout = () => {
    return (
        <div>
            <Container />
            <Dividers />
            <ListContainer />
            <MediaObject />
            <Panles />
        </div>
    )
}
