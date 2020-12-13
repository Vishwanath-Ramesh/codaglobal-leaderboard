import React from 'react'
import {
  RadioGroup,
  Button,
  FormControlLabel,
  Radio,
  TextField,
  Switch,
} from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import { AgGridReact } from 'ag-grid-react'

import getAPIData from '../../../models/api/api'
import apiEndPoints from '../../../models/api/apiEndPoints'
import 'ag-grid-community/dist/styles/ag-grid.css'
import Actions from '../../components/custom/Actions/Actions'
import Modal from '../../components/custom/Modal/Modal'
import Dropdown from '../../components/base/Dropdown/Dropdown'
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css'
import './Leaderboard.css'

function leaderboardreducer(state, action) {
  switch (action.type) {
    case 'SHOW_TEAMMODAL':
      return { ...state, showTeamModal: action.showTeamModal }
    case 'SHOW_MATCHMODAL':
      return { ...state, showMatchModal: action.showMatchModal }
    case 'RESULTTYPE_CHANGE':
      return { ...state, resultType: action.resultType }
    case 'SET_TEAM1':
      return { ...state, team1: action.team1 }
    case 'SET_TEAM2':
      return { ...state, team2: action.team2 }
    case 'SET_SELECTEDTEAM':
      return { ...state, selectedTeam: action.selectedTeam }
    case 'SET_TEAMNAME':
      return { ...state, teamName: action.teamName }
    case 'ON_TEAMADD':
      return { ...state, showTeamModal: false, teamName: '' }
    case 'ON_TEAMPAIRED':
      return {
        ...state,
        showMatchModal: false,
        team1: '',
        team2: '',
        selectedTeam: '',
        resultType: 'WIN',
      }
    case 'SET_LEADERBOARDDATA':
      return {
        ...state,
        leaderboardData: {
          ...state.leaderboardData,
          rowData: action.rowData,
        },
      }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const Leaderboard = () => {
  const initialState = {
    showTeamModal: false,
    showMatchModal: false,
    resultType: 'WIN',
    teamName: '',
    team1: '0',
    team2: '0',
    selectedTeam: '',
    leaderboardData: {
      columnDefs: [
        {
          headerName: 'Leaderboard',
          children: [
            {
              field: 'team_name',
              headerName: 'Team Name',
              filter: 'agTextColumnFilter',
            },
            {
              field: 'wins',
              headerName: 'Wins',
              filter: 'agNumberColumnFilter',
            },
            {
              field: 'losses',
              headerName: 'Losses',
              filter: 'agNumberColumnFilter',
            },
            {
              field: 'ties',
              headerName: 'Ties',
              filter: 'agNumberColumnFilter',
            },
            {
              field: 'score',
              headerName: 'Score',
              filter: 'agNumberColumnFilter',
            },
          ],
        },
      ],
      rowData: [],
    },
  }
  const [state, dispatch] = React.useReducer(leaderboardreducer, initialState)

  function onTeamAddHandler() {
    if (!state.teamName) return alert("Team name can't be empty")

    const postData = {
      team_name: state.teamName,
    }
    return getAPIData(
      apiEndPoints.addTeam.method,
      apiEndPoints.addTeam.url,
      postData
    )
      .then(() => {
        dispatch({ type: 'ON_TEAMADD' })
        alert('Team added successfully')
      })
      .catch(() => alert('Something went wrong!'))
  }

  function onTeamPairHandler() {
    const { team1, team2, selectedTeam, resultType } = state
    let validationMsg = ''

    if (team1 === '0') validationMsg += '\n \t Team 1 should be selected'
    if (team2 === '0') validationMsg += '\n \t Team 2 should be selected'

    if (validationMsg)
      return alert(`Please select the following fields${validationMsg}`)

    const postData = {
      team1,
      team2,
      selectedTeam: selectedTeam || team1,
      result: resultType,
    }

    return getAPIData(
      apiEndPoints.createMatch.method,
      apiEndPoints.createMatch.url,
      postData
    )
      .then((response) => {
        dispatch({
          type: 'ON_TEAMPAIRED',
          rowData: response.data.leaderboardData,
        })
        alert('Team added successfully')
      })
      .catch(() => alert('Something went wrong!'))
  }

  React.useEffect(() => {
    async function fetchData() {
      getAPIData(
        apiEndPoints.getLeaderboardData.method,
        apiEndPoints.getLeaderboardData.url
      ).then((response) => {
        dispatch({ type: 'SET_LEADERBOARDDATA', rowData: response.data })
      })
    }
    fetchData()
  }, [state])

  const {
    leaderboardData,
    showTeamModal,
    showMatchModal,
    resultType,
    team1,
    team2,
    teamName,
  } = state
  const defaultColDef = {
    flex: 1,
    resizable: true,
    floatingFilter: true,
    sortable: true,
    enableRowGroup: true,
  }

  return (
    <div className="leaderboard">
      <div className="ag-theme-alpine-dark leaderboard__table">
        <AgGridReact
          defaultColDef={defaultColDef}
          groupHeaderHeight={75}
          rowData={leaderboardData.rowData}
          columnDefs={leaderboardData.columnDefs}
          pagination
          paginationAutoPageSize
        />
      </div>
      <Modal open={showMatchModal}>
        <Modal.Header>
          <Modal.Title>Match</Modal.Title>
          <Modal.Close
            onClick={() =>
              dispatch({ type: 'SHOW_MATCHMODAL', showMatchModal: false })
            }
          >
            <CloseIcon />
          </Modal.Close>
        </Modal.Header>
        <Modal.Content>
          <Dropdown
            Field={{
              FieldID: 'Team1',
              DefaultValue: '0',
              FieldLabel: 'Team 1',
              Datasource: leaderboardData.rowData,
              TextField: 'team_name',
              ValueField: 'team_name',
            }}
            value={team1}
            onChangeHandler={(event, properties) =>
              dispatch({ type: 'SET_TEAM1', team1: properties.value })
            }
          />
          <Dropdown
            Field={{
              FieldID: 'Team2',
              DefaultValue: '0',
              FieldLabel: 'Team 2',
              Datasource: leaderboardData.rowData,
              TextField: 'team_name',
              ValueField: 'team_name',
            }}
            value={team2}
            onChangeHandler={(event, properties) =>
              dispatch({ type: 'SET_TEAM2', team2: properties.value })
            }
          />
          <div className="leaderboard__selectedteam">
            <div className="leaderboard__selectedteam_label1">{team1}</div>
            <Switch
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
              onChange={({ target }) =>
                dispatch({
                  type: 'SET_SELECTEDTEAM',
                  selectedTeam: target.checked ? team2 : team1,
                })
              }
            />
            <div className="leaderboard__selectedteam_label2">{team2}</div>
          </div>
          <RadioGroup
            row
            className="leaderboard__resulttype"
            aria-label="gender"
            name="gender1"
            value={resultType}
            onChange={({ target }) =>
              dispatch({
                type: 'RESULTTYPE_CHANGE',
                resultType: target.value,
              })
            }
          >
            <FormControlLabel
              value="WIN"
              control={<Radio disableRipple />}
              label="Winner"
            />
            <FormControlLabel
              value="LOSE"
              control={<Radio disableRipple />}
              label="Loser"
            />
            <FormControlLabel
              value="TIE"
              control={<Radio disableRipple />}
              label="Tie"
            />
          </RadioGroup>
        </Modal.Content>
        <Modal.Footer>
          <Button
            variant="contained"
            color="primary"
            disableRipple
            disableElevation
            className="modal__success"
            onClick={onTeamPairHandler}
          >
            Continue
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disableRipple
            disableElevation
            className="modal__cancel"
            onClick={() =>
              dispatch({ type: 'SHOW_MATCHMODAL', showMatchModal: false })
            }
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal open={showTeamModal}>
        <Modal.Header>
          <Modal.Title>Add Team</Modal.Title>
          <Modal.Close
            onClick={() =>
              dispatch({ type: 'SHOW_TEAMMODAL', showTeamModal: false })
            }
          >
            <CloseIcon />
          </Modal.Close>
        </Modal.Header>
        <Modal.Content>
          <TextField
            id="team-name"
            label="Team Name"
            variant="outlined"
            value={teamName}
            onChange={({ target }) =>
              dispatch({ type: 'SET_TEAMNAME', teamName: target.value })
            }
          />
        </Modal.Content>
        <Modal.Footer>
          <Button
            variant="contained"
            disableRipple
            disableElevation
            className="modal__success"
            onClick={onTeamAddHandler}
          >
            Continue
          </Button>
          <Button
            variant="contained"
            disableRipple
            disableElevation
            className="modal__cancel"
            onClick={() =>
              dispatch({ type: 'SHOW_TEAMMODAL', showTeamModal: false })
            }
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Actions dispatch={dispatch} />
    </div>
  )
}

export default Leaderboard
