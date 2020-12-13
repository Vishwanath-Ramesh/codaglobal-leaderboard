const { Router } = require('express')
const LeaderboardController = require('../controllers/LeaderboardController')

const router = new Router()

router.route('/leaderboard').get(LeaderboardController.getLeaderboardData)

module.exports = router
