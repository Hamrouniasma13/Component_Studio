/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Slice from './Slice'
import Button from '../components/Button'
import Text from '../components/Text'

export default function Notification({ content, color, action }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      backgroundColor: color,
      padding: 20,

      [theme.media.desktop]: {
        padding: '35px 40px',
        display: 'flex',
        alignItems: 'center'
      }
    },
    content: {
      flex: 1
    },
    action: {
      marginTop: 20,

      [theme.media.desktop]: {
        marginTop: 0,
        marginLeft: 30
      }
    }
  }

  return (
    <Slice>
      <div css={styles.wrapper}>
        <Text css={styles.content}>{content}</Text>
        {action && action.url && (
          <div css={styles.action}>
            <Button href={action.url}>{action.label}</Button>
          </div>
        )}
      </div>
    </Slice>
  )
}

Notification.propTypes = {
  content: PropTypes.any,
  backgroundColor: PropTypes.string,
  action: PropTypes.shape({
    url: PropTypes.string,
    label: PropTypes.string
  })
}
