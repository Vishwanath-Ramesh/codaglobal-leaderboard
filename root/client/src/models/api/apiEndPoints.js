const apiEndPoints = {
  getLeaderboardData: {
    method: 'get',
    url: '/api/leaderboard',
  },
  getTeam: {
    method: 'get',
    url: '/api/teams',
  },
  addTeam: {
    method: 'post',
    url: '/api/teams',
  },
  createMatch: {
    method: 'post',
    url: '/api/matches',
  },
}

export default apiEndPoints
