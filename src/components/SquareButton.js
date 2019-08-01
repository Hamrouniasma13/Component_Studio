/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import Icon from './Icon'
import Link from './Link'
import { textColor, darken } from '../theme/utils'

export default function SquareButton({ icon, children, ...props }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    button: {
      // Box borders
      border: 'solid 1px #cfcfcf',
      borderRadius: 4,
      boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.15)',
      padding: 12,

      // Flex
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      // Size
      width: 120,
      height: 120,
      overflow: 'hidden',
      verticalAlign: 'middle',

      cursor: 'pointer',
      outline: 'none',
      textAlign: 'center',

      transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
      backgroundColor: '#fff',
      color: '#000',

      '&:hover': {
        backgroundColor: theme.colors.secondary,
        borderColor: theme.colors.secondary,
        color: textColor(darken(theme.colors.secondary, 30), theme),
      },
    },
    label: {
      fontFamily: 'Source Sans Pro, Arial, Helvetica, sans-serif',
      textDecoration: 'none',
      textRendering: 'optimizeLegibility',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      lineHeight: '20px',
      letterSpacing: '0.7px',
      fontSize: 14,
      marginTop: icon ? 7 : 0,
    },
  }

  return (
    <Link css={styles.button} {...props}>
      {icon && <Icon name={icon} size={26} />}
      {children && <span css={styles.label}>{children}</span>}
    </Link>
  )
}

SquareButton.propTypes = {
  icon: Icon.propTypes.name,
}
