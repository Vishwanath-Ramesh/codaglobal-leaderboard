const { MongoClient } = require('mongodb')

const { configs } = require('../configs/configs')

const mongoClient = new MongoClient(configs.databaseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoClient
