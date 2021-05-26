import React from 'react'
import DataDisplay from './components/Premium/application-ui/data-display/DataDisplay'
import Navigation from './components/Premium/application-ui/navigation/Navigation'
import ApplicationUi from './components/Premium/application-ui/ApplicationUi'

const App = () => {
  return (
    <main className="bg-pink-50">
      <ApplicationUi />
      <DataDisplay />
      <Navigation />
    </main>
  )
}

export default App
