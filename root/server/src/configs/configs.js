const configs = {
  databaseURI: `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster-vedas-mumbai.rfemj.mongodb.net?retryWrites=true&w=majority`,
}

module.exports = {
  configs,
}
