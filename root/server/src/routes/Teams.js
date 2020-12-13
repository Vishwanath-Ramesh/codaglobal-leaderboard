const { Router } = require('express')
const TeamController = require('../controllers/TeamController')

const router = new Router()

router
  .route('/teams')
  .get(TeamController.getTeams)
  .post(TeamController.insertTeam)

module.exports = router
