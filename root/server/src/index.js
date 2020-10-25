const express = require('express')
const cors = require('cors')

const app = express()
const port = 5000

app.use(express.json())
app.use(cors({ origin: true }))

app.get('/', (req, res) => {
  res.status(200).send({ result: 'SUCCESS' })
})

app.listen(port)
