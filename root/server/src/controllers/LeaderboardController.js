const { mongoClient } = require('../service/database')

class LeaderboardController {
  static async getLeaderboardData(req, res) {
    const leaderboardData = await mongoClient
      .db('leaderboard')
      .collection('team_leaderboard')
      .find()
      .sort({ score: -1 })
      .toArray()

    res.status(200).json(leaderboardData)
  }

  static async createMatch(req, res) {
    const { body } = req

    const playedMatch = await mongoClient
      .db('team_leaderboard')
      .collection('match_history')
      .insertOne(body)
    res.status(201).json({ status: 'success', id: playedMatch.insertedId })
  }
}

module.exports = LeaderboardController
