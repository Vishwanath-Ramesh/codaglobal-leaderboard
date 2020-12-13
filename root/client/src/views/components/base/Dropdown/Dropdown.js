import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, Select, InputLabel } from '@material-ui/core'

const Dropdown = ({ className, Field, value, onChangeHandler }) => {
  function onChange(event) {
    if (onChangeHandler)
      onChangeHandler(event, {
        id: Field?.FieldValue,
        value: event.target.value,
      })
  }

  return (
    <FormControl variant="outlined">
      <InputLabel>{Field?.FieldLabel}</InputLabel>
      <Select
        id={Field?.FieldValue}
        className={`dropdown ${className || ''}`}
        variant="outlined"
        native
        onChange={onChange}
        label={Field?.FieldLabel}
        disabled={Field?.disabled}
        defaultValue={Field?.DefaultValue}
        value={value}
      >
        <option aria-label="None" value="0">
          --Select--
        </option>
        {Field.Datasource &&
          Field.Datasource.map((option) => {
            return (
              <option
                key={option[Field.TextField]}
                value={option[Field.ValueField]}
              >
                {option[Field.TextField]}
              </option>
            )
          })}
      </Select>
    </FormControl>
  )
}

Dropdown.defaultProps = {
  className: '',
  value: '',
  onChangeHandler: () => {},
}

Dropdown.propTypes = {
  Field: PropTypes.shape({
    FieldValue: PropTypes.string.isRequired,
    DefaultValue: PropTypes.string,
    FieldLabel: PropTypes.string,
    TextField: PropTypes.string,
    ValueField: PropTypes.string,
    Datasource: PropTypes.arrayOf(PropTypes.object),
    disabled: PropTypes.bool,
  }).isRequired,
  value: PropTypes.string,
  onChangeHandler: PropTypes.func,
  className: PropTypes.string,
}

export default Dropdown
