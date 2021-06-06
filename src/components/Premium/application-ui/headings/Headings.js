import React from 'react'
import CardHeading from './card-headings/CardHeading'
import PageHeading from './page-headings/PageHeading'
import SectionHeadings from './section-headings/SectionHeadings'

const Headings = () => {
  return (
    <div>
      <div className="text-4xl animate-bounce">Hello Workflow</div>

      <CardHeading />
      <PageHeading />
      <SectionHeadings />
    </div>
  )
}

export default Headings
