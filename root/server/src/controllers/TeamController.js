const { mongoClient } = require('../service/database')

class TeamController {
  static async getTeams(req, res) {
    const teams = await mongoClient
      .db('leaderboard')
      .collection('team_leaderboard')
      .find()
      .project({ team_name: 1 })
      .toArray()
    res.status(200).json({ teams, result: 'success' })
  }

  static async insertTeam(req, res) {
    const { body } = req
    const teams = await mongoClient
      .db('leaderboard')
      .collection('team_leaderboard')
      .insertOne({
        team_name: body.team_name,
        wins: 0,
        losses: 0,
        ties: 0,
        score: 0,
      })

    res.status(201).json({ id: teams.insertedId })
  }
}

module.exports = TeamController
