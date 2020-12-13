const { Router } = require('express')

const MatchController = require('../controllers/MatchController')

const router = new Router()

router
  .route('/matches')
  .get(MatchController.getMatchHisory)
  .post(MatchController.createMatch)

module.exports = router
