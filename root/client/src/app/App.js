import React from 'react'
import ErrorBoundary from '../views/pages/ErrorBoundary/ErrorBoundary'

import Routes from '../views/Routes/Routes'
import './App.css'

const App = () => {
  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  )
}

export default App
