/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { textColor, darken } from '../theme/utils'

export default function Pill({ color, large, css, ...props }) {
  const theme = React.useContext(ThemeContext)
  const background = theme.colors[color] || color
  return (
    <span
      css={{
        label: 'pill',
        backgroundColor: background,
        borderRadius: '4px',
        color: textColor(darken(background, 50), theme),
        fontWeight: 'bold',
        fontSize: large ? '16px' : '14px',
        padding: large ? '4px 14px' : '3px 12px',
        ...css
      }}
      {...props}
    />
  )
}

Pill.propTypes = {
  color: PropTypes.string,
  large: PropTypes.bool
}

Pill.defaultProps = {
  color: 'primary'
}
