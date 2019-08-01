import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Checkbox from './Checkbox'

const Radios = ({ name, color, big, options, value, onChange }) => {
  const [selected, setSelected] = useState(value || '')
  if (!options || options.length < 1) return null

  function onValueChange(result) {
    const value = result.checked === true ? result.name : ''
    setSelected(value)
    onChange({ name, value })
  }

  return options.map((opt, i) => {
    return (
      <Checkbox
        color={color}
        id={name}
        big={big}
        key={i + opt.value}
        name={opt.value}
        checked={selected === opt.value}
        label={opt.label}
        onChange={onValueChange}
      />
    )
  })
}

Radios.propTypes = {
  /**
   * Input name
   */
  name: PropTypes.string,

  /**
   * checkbox size
   */
  big: PropTypes.bool,

  /**
   * Array of value for each input
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
    })
  ),

  /**
   * Function called each time the value change
   */
  onChange: PropTypes.func,
}

Radios.defaultProps = {
  options: [],
  big: false,
  onChange: () => {},
}

export default Radios
