const express = require('express')
const cors = require('cors')
const mongoClient = require('./service/database')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors({ origin: true }))

mongoClient.connect()

app.get('/', (req, res) => {
  res.status(200).send({ result: 'SUCCESS' })
})

app.listen(port)
