import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://localhost:5000/',
  headers: { 'content-type': 'application/json' },
})

const httpRequest = (method, url) =>
  instance({
    method: method,
    url: url,
  })

export default httpRequest
