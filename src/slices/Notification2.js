/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Slice from './Slice'
import Text from '../components/Text'
import Icon from '../components/Icon'
import { textColor } from '../theme/utils'

export default function Notification({
  title,
  actions,
  color,
  onClose,
  children
}) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      backgroundColor: theme.colors[color] || color,
      color: textColor(theme.colors[color] || color, theme)
    },
    close: {
      color: textColor(theme.colors[color] || color, theme),
      position: 'absolute',
      top: 0,
      right: 10,
      cursor: 'pointer'
    }
  }

  return (
    <div css={styles.wrapper}>
      <Slice actions={actions}>
        {title && (
          <Text.h2 mb={15} size="typo3">
            {title}
          </Text.h2>
        )}
        {children}
        {onClose && (
          <Icon css={styles.close} onClick={onClose} name="close" size={20} />
        )}
      </Slice>
    </div>
  )
}

Notification.propTypes = {
  title: PropTypes.string,
  actions: Slice.propTypes.actions,
  color: PropTypes.string,
  onClose: PropTypes.func
}

Notification.defaultProps = {
  color: '#fff'
}
