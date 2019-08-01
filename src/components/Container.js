/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'

export default function Container({ article, ...props }) {
  const theme = React.useContext(ThemeContext)
  return (
    <div
      css={{
        margin: '0px auto',
        maxWidth: '100%',
        paddingLeft: '15px',
        paddingRight: '15px',
        position: 'relative',

        // in case of float children
        '&:after': {
          display: 'block',
          content: '""',
          clear: 'both'
        },

        [theme.media.tablet]: {
          width: '720px'
        },

        [theme.media.laptop]: {
          width: article ? '798px' : '960px'
        },

        [theme.media.desktop]: {
          width: article ? '798px' : '1140px'
        }
      }}
      {...props}
    />
  )
}
