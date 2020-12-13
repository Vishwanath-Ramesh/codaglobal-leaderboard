const { mongoClient } = require('../service/database')

class MatchController {
  static async getMatchHisory(req, res) {
    const matchHistories = await mongoClient
      .db('leaderboard')
      .collection('match_history')
      .find()
      .toArray()
    res.status(200).json({ status: 'success', matchHistories })
  }

  static async createMatch(req, res) {
    const { body } = req
    let pointsScored = 0

    const result = body.result.toLowerCase()
    const playedMatch = await mongoClient
      .db('leaderboard')
      .collection('match_history')
      .insertOne(body)

    if (result === 'win') pointsScored = 3
    else if (result === 'tie') pointsScored = 1
    await mongoClient
      .db('leaderboard')
      .collection('team_leaderboard')
      .updateMany(
        { team_name: body.selectedTeam },
        {
          $inc: {
            score: pointsScored,
            wins: result === 'win' ? 1 : 0,
            losses: result === 'loss' ? 1 : 0,
            ties: result === 'tie' ? 1 : 0,
          },
        }
      )

    res.status(201).json({ status: 'success', id: playedMatch.insertedId })
  }
}

module.exports = MatchController
