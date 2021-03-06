import React from 'react'
import DataDisplay from './components/Premium/application-ui/data-display/DataDisplay'
import Navigation from './components/Premium/application-ui/navigation/Navigation'
import ApplicationShell from './components/Premium/application-ui/application-shells/ApplicationShell'
import Elements from './components/Premium/application-ui/elements/Elements'
import FeedBack from './components/Premium/application-ui/feedback/alerts/FeedBack'
import Form from './components/Premium/application-ui/forms/Form'
import Headings from './components/Premium/application-ui/headings/Headings'
import { Layout } from './components/Premium/application-ui/layout/Layout'
import Lists from './components/Premium/application-ui/lists/Lists'

const App = () => {
  return (
   
    <main className="bg-pink-50">
      <ApplicationShell />
      <Elements />
      <FeedBack />
      <DataDisplay />
      <Navigation />
      <Form />
      <Headings />
      <Layout />
      <Lists />
    </main>
  )
}

export default App
