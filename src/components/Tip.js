/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'
import { textColor } from '../theme/utils'

export default function Tip({ title, children, color }) {
  const theme = React.useContext(ThemeContext)

  const background = theme.colors[color] || color

  const styles = {
    wrapper: {
      backgroundColor: background,
      color: textColor(background, theme),
      padding: 20
    }
  }

  return (
    <div css={styles.wrapper}>
      {title && (
        <Text mb={10} size="typo4" tag="div">
          {title}
        </Text>
      )}
      {children}
    </div>
  )
}

Tip.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
}

Tip.defaultProps = {
  color: 'smallLightGray'
}
