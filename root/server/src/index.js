const express = require('express')
const path = require('path')
const cors = require('cors')

const { mongoClient } = require('./service/database')
const TeamsRoute = require('./routes/Teams')
const LeaderboardRoute = require('./routes/Leaderboard')
const MatchesRoute = require('./routes/Match')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors({ origin: true }))

app.use('/', express.static(path.join(__dirname, '../public')))

app.use('/api/', TeamsRoute)
app.use('/api/', LeaderboardRoute)
app.use('/api/', MatchesRoute)

app.listen(port, () => {
  mongoClient.connect()
})
