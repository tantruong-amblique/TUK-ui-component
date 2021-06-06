import React from 'react'
import DataDisplay from './components/Premium/application-ui/data-display/DataDisplay'
import Navigation from './components/Premium/application-ui/navigation/Navigation'
import ApplicationShell from './components/Premium/application-ui/application-shells/ApplicationShell'
import Elements from './components/Premium/application-ui/elements/Elements'
import FeedBack from './components/Premium/application-ui/feedback/alerts/FeedBack'
import Form from './components/Premium/application-ui/forms/Form'

const App = () => {
  return (
    <main className="bg-pink-50">
      <ApplicationShell />
      <Elements />
      <FeedBack />
      <DataDisplay />
      <Navigation />
      <Form />
    </main>
  )
}

export default App
