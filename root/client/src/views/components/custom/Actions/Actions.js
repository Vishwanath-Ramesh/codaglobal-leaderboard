import React from 'react'
import { Fab } from '@material-ui/core'
import {
  Add as AddIcon,
  SportsEsports as SportsEsportsIcon,
} from '@material-ui/icons'
import PropTypes from 'prop-types'

import './Actions.css'

const Actions = ({ dispatch }) => {
  return (
    <div className="actions">
      <Fab
        className="actions__item"
        color="primary"
        aria-label="add"
        disableRipple
        onClick={() =>
          dispatch({ type: 'SHOW_TEAMMODAL', showTeamModal: true })
        }
      >
        <AddIcon />
      </Fab>
      <Fab
        className="actions__item"
        color="primary"
        aria-label="add"
        disableRipple
        onClick={() =>
          dispatch({ type: 'SHOW_MATCHMODAL', showMatchModal: true })
        }
      >
        <SportsEsportsIcon />
      </Fab>
    </div>
  )
}

Actions.defaultProps = {
  dispatch: () => null,
}

Actions.propTypes = {
  dispatch: PropTypes.func,
}

export default Actions
