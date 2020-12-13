import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Spinner from '../components/base/Spinner/Spinner'

const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'))
const Leaderboard = lazy(() => import('../pages/Leaderboard/Leaderboard'))

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Leaderboard} />
          <Route path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
