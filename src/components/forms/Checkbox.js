import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { darken } from '../../theme/utils'

const Wrapper = styled('div')(({ check, color, theme }) => ({
  display: 'inline-block',
  borderRadius: 4,
  border: `1px solid ${theme.colors.lightGray}`,
  position: 'relative',
  backgroundColor: 'white',
  color: theme.colors.text,
  userSelect: 'none',
  transition: 'background-color 0.2s, color 0.2s',
  borderStyle: 'solid',
  marginRight: '10px',
  ...(check
    ? {
        backgroundColor: color
          ? theme.colors[color] || color
          : theme.colors.primary,
        color: 'white',
        borderColor: 'transparent',
        '&:hover': {
          backgroundColor: darken(
            color ? theme.colors[color] || color : theme.colors.primary,
            15
          )
        }
      }
    : {
        borderColor: theme.colors.lightGray,
        '&:hover': {
          backgroundColor: darken('white', 5),
          color: theme.colors.text
        }
      })
}))

const Input = styled('input')({
  visibility: 'hidden',
  display: 'none',
  zIndex: -1,
  opacity: 0
})

const Label = styled('label')(({ big }) => ({
  display: 'block',
  paddingTop: big ? 15 : 8,
  paddingBottom: big ? 15 : 8,
  paddingRight: big ? 20 : 15,
  paddingLeft: big ? 20 : 15,
  textTransform: 'uppercase',
  fontWeight: 600,
  lineHeight: 1,
  letterSpacing: '1.1px',
  fontSize: '15px',
  cursor: 'pointer'
}))

function Checkbox({ id, color, checked, onChange, name, label, big }) {
  const [check, setCheck] = useState(checked)

  useEffect(() => setCheck(checked), [checked])

  return (
    <Wrapper check={check} color={color}>
      <Label htmlFor={id + name} big={big}>
        {label}
      </Label>
      <Input
        id={id + name}
        name={name}
        defaultChecked={check}
        type="checkbox"
        onChange={() => {
          setCheck(!check)
          onChange({ name, checked: !check })
        }}
      />
    </Wrapper>
  )
}

Checkbox.propTypes = {
  /**
   * Change the display of the button, actif or  not
   */
  checked: PropTypes.bool,

  /**
   * Function called when the button is clicked
   */
  onChange: PropTypes.func,

  /**
   * Input name
   */
  name: PropTypes.string.isRequired
}

Checkbox.defaultProps = {
  id: '',
  checked: false,
  onChange: () => {}
}

export default Checkbox
