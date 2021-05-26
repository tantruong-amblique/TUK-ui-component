import React from 'react'
import DataDisplay from './components/Premium/application-ui/data-display/DataDisplay'
import Description from './components/Premium/application-ui/data-display/description-lists/Description'
import Navigation from './components/Premium/application-ui/navigation/Navigation'

const App = () => {
  return (
    <main className="bg-pink-50">
      <DataDisplay />
      <Navigation />
    </main>
  )
}

export default App
