/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'

import React from 'react'

function Input({
  name,
  disabled,
  error,
  big,
  css,
  iconName,
  iconPosition,
  textarea,
  ...rest
}) {
  const theme = React.useContext(ThemeContext)
  const styles = {
    width: '100%',
    height: textarea ? '200px' : '45px',
    border: `1px solid ${error ? theme.colors.error : theme.colors.lightGray}`,
    resize: 'none',
    borderRadius: '3px',
    padding: `${textarea ? '8px' : '0'} ${(() => {
      if (iconName && iconPosition === 'right') {
        if (big) return '60px'
        else return '45px'
      }
      return '15px'
    })()} 0 ${(() => {
      if (iconName && iconPosition === 'left') {
        if (big) return '60px'
        else return '45px'
      }
      return '15px'
    })()}`,
    fontSize: '16px',
    color: disabled ? theme.colors.darkGray : theme.colors.text,
    outline: 'none',
    '::placeholder': {
      color: theme.colors.darkGray,
    },
    [theme.media.tablet]: {
      height: textarea ? (big ? '200px' : '80px') : big ? '60px' : '45px',
    },
    '&[disabled]': {
      '::placeholder': {
        color: theme.colors.gray,
      },
      background: theme.colors.lighterGray,
    },
    ...css,
  }

  if (textarea) {
    return (
      <textarea
        css={styles}
        name={name}
        id={name}
        disabled={disabled}
        {...rest}
      />
    )
  }
  return (
    <input css={styles} name={name} id={name} disabled={disabled} {...rest} />
  )
}

export default Input

Input.defaultProps = {
  textarea: false,
}
