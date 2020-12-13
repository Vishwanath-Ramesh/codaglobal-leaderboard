import React from 'react'
import { Backdrop, CircularProgress } from '@material-ui/core'

import './Spinner.css'

const Spinner = () => {
  return (
    <Backdrop className="backdrop" open>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Spinner
