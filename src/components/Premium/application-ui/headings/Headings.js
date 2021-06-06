import React from 'react'
import CardHeading from './card-headings/CardHeading'
import PageHeading from './page-headings/PageHeading'

const Headings = () => {
  return (
    <div>
      <div className="text-4xl animate-bounce">Hello Workflow</div>

      <CardHeading />
      <PageHeading />
    </div>
  )
}

export default Headings
