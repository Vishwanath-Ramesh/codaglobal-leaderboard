import React from 'react'
import ErrorBoundary from '../views/pages/ErrorBoundary/ErrorBoundary'

import getAPIData from '../models/api/api'
import apiEndPoints from '../models/api/apiEndPoints'
import Routes from '../views/Routes/Routes'
import './App.css'

const App = () => {
  const [data, setData] = React.useState()

  React.useEffect(() => {
    async function fetchData() {
      const response = await getAPIData(
        apiEndPoints.getRoot.method,
        apiEndPoints.getRoot.url
      )
      setData(response.data)
    }
    fetchData()
  }, [])
  return (
    <div className="app">
      <ErrorBoundary>
        <Routes />
        <p>{data?.result}</p>
      </ErrorBoundary>
    </div>
  )
}

export default App
