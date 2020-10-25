import React, { useState, useEffect } from 'react'

import api from '../api/api'
import './App.css'

const App = () => {
  const [response, setResponse] = useState('')

  useEffect(() => {
    async function fetchData() {
      const response = await api('GET', 'http://localhost:5000')
      setResponse(response.data.result)
    }
    fetchData()
  }, [])

  return <div>{response}</div>
}

export default App
