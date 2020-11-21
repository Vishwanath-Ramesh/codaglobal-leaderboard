const isProd = String(process.env.NODE_ENV).toLowerCase() === 'production'

function getServerConfiguration() {
  if (isProd)
    return {
      baseURL: 'http://localhost:5000',
    }

  return {
    baseURL: 'http://localhost:5000',
  }
}
const serverConfig = getServerConfiguration()

export default { serverConfig }
