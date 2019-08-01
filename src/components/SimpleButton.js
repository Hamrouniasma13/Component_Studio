/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'
import Icon from './Icon'
import { darken } from '../theme/utils'

export default function SimpleButton({
  icon,
  iconPosition,
  children,
  color,
  ...props
}) {
  const theme = React.useContext(ThemeContext)
  const mainColor = theme.colors[color]

  const styles = {
    icon: {
      marginLeft: iconPosition !== 'left' && children ? 10 : 0,
      marginRight: iconPosition === 'left' && children ? 10 : 0,
      verticalAlign: 'middle'
    },
    button: {
      cursor: 'pointer',
      outline: 'none',
      textDecoration: 'underline',
      color: mainColor,
      fontFamily: 'Source Sans Pro, Arial, Helvetica, sans-serif',
      padding: 0,
      border: 0,
      backgroundColor: 'transparent',
      fontSize: '14px',
      transition: 'color 0.3s',
      display: 'inline-block',

      '&:hover': {
        color: darken(mainColor, 50)
      }
    }
  }

  const content = [
    icon && iconPosition === 'left' ? (
      <Icon css={styles.icon} name={icon} size={14} key="left-icon" />
    ) : null,
    children ? (
      <span css={{ lineHeight: '20px' }} key="label">
        {children}
      </span>
    ) : null,
    icon && iconPosition !== 'left' ? (
      <Icon css={styles.icon} name={icon} size={20} key="right-icon" />
    ) : null
  ]

  return (
    <Link css={styles.button} {...props}>
      {content}
    </Link>
  )
}

SimpleButton.propTypes = {
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right'])
}

SimpleButton.defaultProps = {
  color: 'primary'
}
